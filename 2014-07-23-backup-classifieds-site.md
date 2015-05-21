---
layout: page
title:  "How to Backup your Classifieds site?"
date:   2014-07-23 17:11:08
categories: HowTo
tags: HowTo
permalink: /backup-classifieds-site/
---
# How to Backup your Classifieds site?

_This guide is only for [Open-Classifieds](http://open-classifieds.com/)!_

![How to Backup your Classifieds site](http://open-classifieds.com/wp-content/uploads/2014/07/600x399x1367975019254de-600x399.jpg.pagespeed.ic.8YjTmTlrAP.jpg)

<br>
**UPDATE: [Automatic daily backups]({{ site.baseurl }}/automatic-daily-backups/) **

**This is a bit advanced How To.** 

Normally your hosting has their own backup tool. But if your hosting doesn't have it or you just want to create your own backup for your website built with Open Classifieds follow this guide ;) 

# How to Backup a Classifieds Site:

We need to backup 2 different things: 

+ **Files**, like your images, themes etc.
+ **Database**, where the actual data is stored, ads, users, categories etc.

### Manual Backup

#### 1\. Files

Access your FTP or file manager or the tool your hosting provides and go to your site root, in many cases is like public_html or www. 

Depending on the tool, you need to select all the files and compress them, or if it's via FTP download them to your computer and compress them. 

You don't need to download all, these are the unique files for your installation that you will need later for restoring: 

* robots.txt
* .htaccess
* images/
* oc/config/auth.php
* oc/config/database.php
* And /themes if you customized your themes

**NEVER LOSE THESE FILES!!**

#### 2\. Database

This is probably the most important part of the site...always have backups of your DB! 

**Using phpmyadmin:**

* Login to your phpmyadmin from your hosting panel.
* Select the database where open classifieds is installed.
* Go to export
* Export method Custom
* Select all the tables (normally they start with oc2_)
* Compression zip
* Go to the bottom of the page, click Go!

**Manually:** 

In the console of your hosting, replace your values with: 

    mysql -u USER -pPASSWORD DATABASENAME > file_name.sql 
 
### Restoring Backup

It really depends on the way you have backed up your data. If it was done from the panel of you hosting, check with them on how to restore. 

NOTE: Be sure you have a functional backup before restoring! 

#### 1\. Restoring Files

Unless there is an easier way at your hosting then I recommend the next to restore files: 

* Delete all the files except the /images/ folder
* Download [install-openclassifieds.php](http://open-classifieds.com/download/latest-file)
* Upload and execute at your browser: yourdomain/install-openclassifieds.php
* Download and you get redirected to the isntall, do not install
* Delete from the downloaded files the folder /install/
* Replace from your backup to the site these files 
    * robots.txt
    * .htaccess
    * oc/config/auth.php
    * oc/config/database.php
    * And if you have any custom theme
* Ready! now restore the DB ;)

#### 2\. Restoring Database

**Using phpmyadmin:**

* Login to your phpmyadmin from your hosting panel.
* Select the database where open classifieds is installed.
* If theres data select all the tables and delete them, since the data will be wrong if you are restoring...
* Go to import
* Select your zipped file
* Ready ;)

**Manually:** 

In the console of your hosting, replace with your values: 

    mysql -u USER -pPASSWORD DATABASENAME < file_name.sql 

## cPanel Backups

<a href="https://www.youtube.com/watch?v=Xxvn5D7QTFc" target="_blank"><img src="http://img.youtube.com/vi/Xxvn5D7QTFc/0.jpg" 
alt="How to backup your website in cPanel" width="480" height="360" border="10" /></a>

<br>

## Plesk Backups

<a href="https://www.youtube.com/watch?v=2FKQY1Lmyuk" target="_blank"><img src="http://img.youtube.com/vi/2FKQY1Lmyuk/0.jpg" 
alt="How Do I Backup my Website Using Plesk Control Panel?" width="480" height="360" border="10" /></a>

<br>
Hope that was useful for you, and if you have any concerns feel free to post at our forums or if you have any other useful way share it with us by placing a comment in the section below.


<!--title: How to Backup your Classifieds site?
link: http://open-classifieds.com/2014/07/23/backup-classifieds-site/
author: admin
description: 
post_id: 19339
created: 2014/07/23 19:11:08
created_gmt: 2014/07/23 17:11:08
comment_status: open
post_name: backup-classifieds-site
status: publish
post_type: post-->
