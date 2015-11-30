---
title:  "Error troubleshooting - Wow this seems to be an error..."
date:   2014-03-02 08:50:26
categories: Technical
tags: [Technical]
permalink: /error-troubleshooting-wow-seems-error/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Open-Classifieds!
</div>

**Have you seen this page?**

![Internal server error occured](http://open-classifieds.com/wp-content/uploads/2014/03/Internal-server-error-occured.png) 

Don't worry, probably it is not that complicated as it may seem!

**How to see what's the error about?** 

You need to log in at your **Panel** > **Tools** > **Logs**, then you will see something like: 

![System logs eshop test](http://open-classifieds.com/wp-content/uploads/2014/03/System-logs-eshop-test.png) 

Here are the error logs that happened in the application and a bit of explanation of what's going on. 

* If you can't access your panel probably your MySQL server is gone. Contact your hosting provider.
* If you can't access your site contact your hosting provider as well.

<br>
**If you can't access your error log** follow those steps: 

* Open in your editor **/oc/bootstrap.php** (accessed from file manager or FTP)
* Search for **=== 'reoc.lo'** and replace it with **!== 'reoc.lo'**
* Now you should see the error with some debug information in the footer
* Revert the changes on the bootstrap.php file

**If you still don't see any error at your logs**, you can check the error log at your hosting. 

In your **cPanel** it's located at **Home** > **Logs** > **Error Log.** If you are the admin of your server you can type: 

<code>sudo tail -f /var/log/apache2/error.log</code> or similar to see all the errors 

If still you can't figure out what is happening, please [**check our forums and post**](http://forums.open-classifieds.com/)  there we will try to help as much as possible. If that doesn't work you can buy any of our **[premium themes](http://open-classifieds.com/market/)** includes support which will not fix your server, but we can take a closer look to help you communicate with your hosting provider or in case it's our fault (can happen) we will fix it ;)

