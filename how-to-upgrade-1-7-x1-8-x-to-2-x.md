---
title:  "How to Upgrade 1.7.x/1.8.x to 2.x"
date:   2013-12-09 06:01:51
categories: Install
tags: [Install]
permalink: /how-to-upgrade-1-7-x1-8-x-to-2-x/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

**Be aware that 2.0.x uses different URL structure and that themes are not compatible between these 2 versions. If you had bought a theme contact us.** 

Also please check your PHP time limit, if you have many ads you wont be able to migrate everything at once since it will be interrupted. 

  * Create a backup of your files and DB
  * [Download](http://open-classifieds.com/download/)
  * Delete all files except folder /images/
  * Decompress and upload files
  * Run the installation at http://yourdomain.com/
  * Follow the steps
  * Choose a different Database or use a different table prefix, we recommend using oc2_
  * Got to the admin for migration of data http://yourdomain.com/oc-panel/tools/migration
  * Put the details of your old DB connection
  * Please wait can take a while...
  * Enjoy ;)
  
  