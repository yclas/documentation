---
title:  How to redirect www to non www
date:   2015-07-03 16:23:51
categories: Technical
tags: Technical, SelfHosted
permalink: /redirect-www-to-non-www/
keywords: htaccess, subdomain, www, redirect, rewrite
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self-Hosted!
</div>

We have been asked by users many times how to redirect their website from www to non www. In order to redirect all of the requests for _www.example.com_ to _example.com_ you should set the appropriate rewrite rule.

## Should I use WWW. in my site?

**Short answer:** There's no need.

Since the beginning of the Internet we were used to have websites with the famous WWW. in front of all the domain names.

<code>Ex: www.yclas.com</code>

That's something some companies still use, but almost all of the new websites are not using the WWW.

**What should I do?** Redirect all the request from www.yclas.com to yclas.com, that's easy ;). You can do this from almost all the hosting panels I have checked in a simple and timely manner.

**Why not the WWW?** The WWW. is actually another subdomain in your server and your clients need to type the WWW to enter your site. So always have a redirect, just in case, they don't type it.

**What happens if I am using the WWW?** Really it doesn't matter what you do, just stick to the domain you choose to avoid future problems and remember to have the correct redirects.

**A bit of more info about WWW.**

World Wide Web:<br>
n. Abbr. WWW

1) The complete set of documents residing on all Internet servers that use the HTTP protocol, accessible to users via a simple point-and-click system.

2) n : a collection of internet sites that offer text and graphics and sound and animation resources through the hypertext transfer protocol.

## How to do it

You can do this by adding the following lines on the top of your .htaccesss file:

    RewriteEngine On
    RewriteBase /
    RewriteCond %{HTTP_HOST} ^www.(.)$ [NC]
    RewriteRule ^(.)$ http://%1/$1 [R=301,L]

Save your changes and check your site. Try different www and non-www combinations of your domain to see if the redirect is working as expected.
