---
title:  "Automatic daily backups"
date:   2015-02-11 19:53:00
categories: Techical
tags: [Techical]
permalink: /automatic-daily-backups/
keywords: backup, files, database, server, restore
---
_This guide is only for [Yclas Self Hosted](https://yclas.com/)!_

![Backups](//open-classifieds.com/wp-content/uploads/2015/02/800x524xlarge_ss_3-b5f35a82-e1423684533150.jpg.pagespeed.ic.LRNk8IVspN.jpg) 

<br>
From the many support tickets I have covered and issues that were reported by our users I noticed the huge importance of having automatic backups, as we have explained before, doing a backup before any update can save your ass more than once! 

I've done a guide about [how to do backups]({{ site.baseurl }}/backup-classifieds-site/) some time ago, but it's an ugly manual process, let's be honest. 

Not nice to deal with and best scenario you don't forget to do the backup and pray while restoring it works all good... 

I had done in my [personal time an script](http://garridodiaz.com/ftp-backup-for-mysql-and-files/) that automates this process, but that requires an external FTP to upload backups, good enough, but remember every few and then to download the backup, and really important to verify the backup! 

Since now 1 month ago I am using [CodeGuard](http://mbsy.co/CodeGuard/17761100) to backup [Yclas](https://yclas.com) servers from any problem may happen.

**Things I am loving so far**

  * Was really easy to setup
  * They do a daily backup
  * Notification every time there's a modification on the files (get an email)
  * MySQL backups for 1 DB
  * Restore your website from any point. WOW!
  * Great support

**Whats not so great**

  * If your website is huge will be a bit expensive, but if it's huge you are making money right?
  * You need to pay by card and in USD, with paypal a bit more complex
  * $5 for each extra site

  Luckily I have not tried the restore option, but looks awesome! 

  My recommendation is to take the [ninja plan for $5 month](http://mbsy.co/CodeGuard/17761100) and exclude the "media" files such as images or css from the backup if you already do monthly backups. Thinks you get 5GB, use them wisely! 

  ![Plans and Pricing Sign Up for Website Backup CodeGuard](//open-classifieds.com/wp-content/uploads/2015/02/Plans-and-Pricing-Sign-Up-for-Website-Backup-CodeGuard.png)

  <br>
  Honestly I sleep better having this working for us, if you try let me know what you think.


