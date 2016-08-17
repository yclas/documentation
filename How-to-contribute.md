---
title:  "How to contribute?"
date:   2015-04-21 10:26:48
categories: HowTo
tags: [HowTo]
permalink: /how-to-contribute/
---
This guide explains how to contribute to our documentation!

## Get Started

First, install jekyll:

[Installation Guide](http://jekyllrb.com/docs/installation/)

Clone the repository and then check out the branch:

    cd your_repo_root/repo_name
    git fetch origin
    git checkout gh-pages

<br>
    
## Using Jekyll (Basic Usage)

### Add a page

Create a markdown file in the root of the project.

### Add a post

Create a markdown file in the *_posts* folder. Jekyll requires post files to be named according to the following format:

>YEAR-MONTH-DAY-title.MARKUP
    
### Change theme's design

You can change the design by modifying the css files in *_sass* or *css* folder. You can also add your css file inside *_sass* folder and include a reference to it on *_includes/head.html*.

### Liquid

Jekyll uses the standard Liquid templating language package. [Jekyll Variables](http://jekyllrb.com/docs/variables/)

### Configuration

Using *_config.yml*. Site's title, description, baseurl, twitter and github username as many other configurations are included here.

[Link](http://jekyllrb.com/docs/configuration/)

### Build locally

If you want to display the changes locally before pushing, use this command:

    jekyll build --increment
    
This command builds a static website according the contents of the project. The output is under the *_site* folder.

### Git Push

    git add
    git commit
    git push origin gh-pages
    
