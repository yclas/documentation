# Local preview: ruby script/serve.rb  ->  http://127.0.0.1:4010 (rebuilds on save)
Dir.chdir(File.expand_path("..", __dir__))
ENV["BUNDLE_GEMFILE"] = File.expand_path("../Gemfile", __dir__)
require "bundler/setup"
ARGV.replace(%w[serve --host 127.0.0.1 --port 4010 --watch])
load Gem.bin_path("jekyll", "jekyll")
