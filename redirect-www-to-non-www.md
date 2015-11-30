---
title:  How to redirect www to non www
date:   2015-07-03 16:23:51
categories: Technical
tags: [Technical]
permalink: /redirect-www-to-non-www/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Open-Classifieds!
</div>

If you are still wondering if you should use www on your site, here is a [useful article](http://open-classifieds.com/2014/03/11/use-www-site/) to read!

We have been asked by users many times how to redirect their website from www to non www. In order to redirect all of the requests for _www.example.com_ to _example.com_ you should set the appropriate rewrite rule.

You can do this by adding the following lines on the top of your .htaccesss file:

    RewriteEngine On
    RewriteBase /
    RewriteCond %{HTTP_HOST} ^www.(.)$ [NC]
    RewriteRule ^(.)$ http://%1/$1 [R=301,L]

Save your changes and check your site. Try different www and non-www combinations of your domain to see if the redirect is working as expected.
