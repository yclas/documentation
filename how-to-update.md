---
title:  How to update
date:   2016-10-27 10:26:48
categories: Install
tags: 
- Install
- HowTo
permalink: /how-to-update/
---
## How to Update

**Please read these instructions carefully.** If you can’t update your site, we offer the [update service](https://market.open-classifieds.com/support/installation-or-update.html) for $55 if you have a version 2.x or latest. Please before get the update service, [contact us](http://yclas.com/contact/).

Since 2.8.0 we are requiring **PHP 5.6.x** as minimal version. We do this since we need to assure you have a decent updated version of PHP installed at your hosting. So before you update be sure you have PHP 5.6. You can ask your hosting provider for this.

**We can not be responsible for fail updates** during the update process and we won’t fix those issues for you. If you are not sure how to do it, please buy our professional update [here](https://market.open-classifieds.com/support/installation-or-update.html).

### Automatic Update

By following this way you will just need to follow the normal automatic update steps:

+ **Make a backup** of all your files and DB.
+ **Log in** to your OC admin panel.
+ Go to **Panel > Updates** and click **Update**.
+ Done! ;)

### Manual Update

**Please follow the instructions** to prevent from getting into any errors.


1\. **Make a backup** of all your files and DB.<br>

2\. **Log in** at your OC panel.<br>

3\. **Activate the default theme** if you had a premium theme.<br>

4\. **Download the latest version** and extract the files in its folder.<br>

5\. **Enable [maintenance mode](https://docs.yclas.com/how-to-activate-maintenance-mode/).**<br>

6\. **Open your FTP** or your website file manager<br>

7\. Delete all files in your website folder **except** from the following:<br>

  + robots.txt
  + /oc/config/auth.php
  + /oc/config/database.php
  + .htaccess
  + /images/
  + and /themes/ if you had a custom theme.
    
8\. **Now upload to your folder all the files** we extracted earlier, except for the files we mentioned in the previous step and the "/install" folder.<br>

9\. **Run in your browser** http://yourdomain.com/oc-panel/update/database?from_version=2.9.0 (here put your current version)<br>

10\. If you have premium theme, download it from the market and reupload it from there.<br>

11\. **CONGRATULATIONS!!!!**

