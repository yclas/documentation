---
title:  "How to Move a Classifieds Site From Http to Https"
date:   2015-01-14 18:48:30
categories: Technical
tags: Technical, SelfHosted
permalink: /move-classifieds-site-http-https/
keywords: ssl, https, redirect, certificate, startssl, cloudflare, htaccess
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

![https](//open-classifieds.com/wp-content/uploads/2015/01/1280x960xprivacy-policy-510728_1280.jpg.pagespeed.ic.r-dW5o7U5q.jpg) 

<br>
There have been a lot of talking about HTTPS lately and the overall trend is saying that HTTPS is the future, so in this guide I will show you how you can enable HTTPS on your classifieds site easily. 

## What is HTTPS and why should I use it?

HTTPS is the layering of HTTP on top of SSL/TLS. This basically means that the activities done on the website by users and owners are much more secure. So as a result, the HTTP traffic, including requested URLs, result pages, cookies, media and anything else sent over your HTTP connection, is encrypted when HTTPS is enabled. If an attacker is trying to interfere with your website's connections – they cannot listen in and intercept traffic, or change it. 

HTTPS is also useful for providing authentication to users of the website; it allows your visitors to identify your website and verify that it exists, is legitimate, secure and trusted. This level of security is compatible with search engines and their web crawlers, so adopting HTTPS indicates that you have a lot to gain. 

Follow this link to read more about how and why **[Google is also encouraging this movement](http://googleonlinesecurity.blogspot.com.es/2014/08/https-as-ranking-signal_6.html)**

## What tasks will you need to do?

1. Get an SSL certificate and install it on your server.
2. Go to your website's panel to make necessary system changes.
3. Follow this link http://yourdomain.com/oc-panel/config/update/base_url
4. Force a redirect from HTTP to **HTTPS.**
  
![https screenshot]({{site.baseurl}}/images/base-url.png)

<br>

### Get an SSL certificate and install it on your server

For this part, please note that seeking for assistance from a person with the technical experience/know-how OR contacting a hosting company for installation is advised. The use of CloudFlare is also another alternative. 

For a free certificate (to install on your server) you can go to: [www.startssl.com](http://www.startssl.com) and an example of a hosting company that offers paid certificates is Namecheap: [www.namecheap.com/security/ssl-certificates.aspx](http://www.namecheap.com/security/ssl-certificates.aspx) 

The CloudFlare alternative allows you to make use of SSL, without going through the complicated installation process; and it has also got a free option. 

For more information on this, you can visit: [www.cloudflare.com/ssl](http://www.cloudflare.com/ssl) and there is also this [tutorial for a free SSL CloudFlare certificate with Wordpress](https://wp-dreams.com/articles/2014/10/free-ssl-certificate-with-cloudflare-for-wordpress/). 

Once you have the SSL certificate and it is installed, proceed to the next task. 

### Go to your website's panel to make necessary system changes

1. Go to your website.
2. Login to the Admin Panel.
3. Follow this link http://yourdomain.com/oc-panel/config/update/base_url
4. Change the Config Value from http:// to https://
5. Click on Submit/Save.
6. Finally, go to Cache -> Delete All.

Once you have completed this, proceed to the next task. 

### Force a redirect from HTTP to HTTPS

* Log into your website's cPanel.
* Click on File Manager (and tick to show hidden files).
* Locate your .htaccess file in the public_html directory.
* Open the .htaccess file for editing and add the following code, replacing ‘…https://yourdomain.com/…' with your actual domain:
  
        # Force HTTPS
		RewriteCond %{HTTPS} off
		RewriteRule ^(.*)$ https://yourdomain.com/$1 [L]
		RewriteCond %{THE_REQUEST} ^.*/index\.php 
		RewriteRule ^(.*)index.php$ /$1 [R=301,L]

**Save the file and close it.** 

You have finished all the tasks and your site should have its https:// enabled. 

## Short Summary

If all tasks were completed successfully, your domain name should now be prefixed with https:// instead of http:// - whenever your website is visited. 

Depending on the type of SSL certificate you installed earlier, your website should also now benefit from all the other added advantages, of using SSL Encryption. 

If errors are being displayed by your website, make sure that you retrace your steps; so that the troubleshooting process is easier. 

We hope that you were able to follow the instructions without much difficulty. Thank you for reading this guide and make sure that you subscribe to our blog for more useful posts. 

Author: Tana

