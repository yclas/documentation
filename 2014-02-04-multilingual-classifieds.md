---
layout: page
title:  "How to have a Multilingual Classifieds"
date:   2014-02-04 12:42:22
categories: HowTo
tags: HowTo
permalink: /multilingual-classifieds/
---
# How to have a Multilingual Classifieds

Open Classifieds allows you to have more than 1 language active at the same time. 

This means that you can **easily change the site translation** to any language you have in the site. Then simply add links in your sidebar or header using our widgets or the menu generator to link languages.

## 1\. Different languages - the same installation

As an example our demo in different languages: [English](http://demo2.open-classifieds.com/?language=en_EN), [Bengali](http://demo2.open-classifieds.com/?language=bn_BD), [Catalan](http://demo2.open-classifieds.com/?language=ca_ES). This has some benefits and some bad things...

**Pros**: 

* Easy to activate
* Share the same users and ads database
* The same domain
* The same theme license

**Cons:**

* Ads don't have language attribute, this means you can not filter by language
* Categories and locations are not by language either, so once you write a category name it would be the same for all languages.

**I don't like this option at all**....as better alternatives and also better for SEO we recommend the **3 other options**. How to configure: 

1. Go to http://yourdomain.com/oc-panel/config/update/allow_query_language
2. Set Config Value to 1
3. Save
4. Now to link to a language simply : http://domain.com/?language=ca_ES

<br>

## 2\. Domain per language

This is probably the best option, imagine you have: MyDomain.com, and you want to add Spanish and Italian translations, you will buy the domains MyDomain.es and MyDomain.it and you will have the separate sites per language. It's more expensive, but it allows you to use a local name in the domain name and for google to crawl it better.

**Pros**:

* Better SEO per domain language, THIS IS A HUGE difference
* Can use the same design
* User is not confused and not lost between languages
* If you want, you can add a localized server for the domain extension, so the domain is in the language of the country.

**Cons:**

* You need a license for each domain for your premium theme
* You need different domain names (which costs)
* Separate administration of the site, software updates and moderation
* Maybe more expenses on hosting

<br>

## 3\. Sub-Domain per language

If you don't want to have many domains and want to save some money then this would be a better option.  Imagine you have: MyDomain.com, and you also want to add Spanish and Italian translations, you will create sub domains like es.MyDomain.com and it.MyDomain.com and you will have separate sites per language.

**Pros**:

* Better SEO per domain language
* Can use the same design
* User is not confused and not lost between languages
* Same domain / hosting
* If you want you can add a localized server for the sub-domain, so the sub-domain is in the language of the country
* 1 license works on as many subdomains as you want!

**Cons:**

* Separate administration of the site, software updates and moderation

<br> 

## 4\. Folder per language

If you don't want to have many domains/sub domain and save some money maybe this is the option for you. I don't prefer this option, but will work better than the first one.  Example: MyDomain.com, and you also want to add Spanish and Italian translations, you will create folders like MyDomain.com/es and MyDomain.com/it and you will have different OC installations per language.

**Pros**:

* Can use same design, theme and license
* The same domain / hosting
* The same license

**Cons:**

* Separate administration of the site, software updates and moderation

**How to configure:**

* You simply do a [new installation](http://open-classifieds.com/documentation/install/) at a new folder within your website, follow the below screenshot to see how to it with Softaculous

![multilingual](http://i0.wp.com/open-classifieds.com/wp-content/uploads/2014/02/multilingual.png?fit=1024%2C1024)

<br>
Hope this helps you ;) feel free to post a comment below and share any thoughts or ideas you might have. 

Regards from Chema and Open Classifieds team


<!--title: How to have a Multilingual Classifieds
link: http://open-classifieds.com/2014/02/04/multilingual-classifieds/
author: admin
description: 
post_id: 11220
created: 2014/02/04 13:42:22
created_gmt: 2014/02/04 12:42:22
comment_status: open
post_name: multilingual-classifieds
status: publish
post_type: post-->