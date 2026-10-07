# Run before opening a pull request:  bundle exec jekyll build && ruby script/check.rb
# 1. Every article's front matter parses and has the required keys (a stray "word: word" in a description
#    silently drops the article from the site).
# 2. Every internal link and #anchor in the built site points at a page that exists.
# 3. No two articles share a permalink.
require "yaml"
require "date"
require "cgi"

Dir.chdir(File.expand_path("..", __dir__))
problems = []
permalinks = {}

Dir.glob("*/*.md").reject { |f| f.start_with?("vendor", "_", "node_modules") }.each do |f|
  fm = File.read(f, encoding: "utf-8").split(/^---\s*$/)[1]
  begin
    d = YAML.safe_load(fm, permitted_classes: [Date])
  rescue => e
    problems << "#{f}: front matter doesn't parse (#{e.message[0, 80]})"
    next
  end
  next if f.end_with?("index.md")
  %w[title description section order permalink].each { |k| problems << "#{f}: no #{k}" unless d[k] }
  if (p = d["permalink"])
    problems << "#{f}: permalink #{p} is also used by #{permalinks[p]}" if permalinks[p]
    permalinks[p] = f
  end
end

if Dir.exist?("_site")
  ids = Hash.new { |h, file| h[file] = File.read(file, encoding: "utf-8").scan(/id="([^"]+)"/).flatten }
  Dir.glob("_site/**/*.html").each do |file|
    html = File.read(file, encoding: "utf-8").gsub(%r{<code[^>]*>.*?</code>}m, "").gsub(%r{<pre.*?</pre>}m, "")
    html.scan(%r{href="(/[^"/][^"]*)"}).flatten.uniq.each do |href|
      path, frag = CGI.unescapeHTML(href).split("#", 2)
      path = path.split("?").first.sub(%r{^/}, "")
      target = ["_site/#{path}", "_site/#{path}/index.html".sub("//", "/")].find { |c| File.file?(c) }
      if !target
        problems << "#{file.sub('_site/', '')}: broken link #{href}"
      elsif frag && !frag.empty? && !ids[target].include?(frag)
        problems << "#{file.sub('_site/', '')}: no ##{frag} on #{path}"
      end
    end
  end
else
  puts "No _site folder: run `bundle exec jekyll build` first to check links too."
end

if problems.empty?
  puts "All good: #{permalinks.size} articles."
else
  puts problems
  exit 1
end
