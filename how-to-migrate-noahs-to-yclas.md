---
title:  How to migrate Noah's to Yclas
date:   2015-07-24 10:26:48
categories: Install
tags: Install
permalink: /how-to-migrate-noahs-to-yclas/
keywords: install, export, import, migration, noah
---
**[Noah's Classifieds is now part of Yclas!](http://open-classifieds.com/2015/07/27/open-classifieds-acquired-noahs-classifieds/)**

Therefore, we prepared a migration tool for you to go from Noah's to Yclas Self Hosted.

It's really simple, you just need to **follow these steps:**

+ **Download** file [https://gist.githubusercontent.com/neo22s/89599d010b405ab8d5d8/raw/f5ab08ef61e959c1760c52bb24da68124c96cc0f/export.php](https://gist.githubusercontent.com/neo22s/89599d010b405ab8d5d8/raw/f5ab08ef61e959c1760c52bb24da68124c96cc0f/export.php) and **save it as export.php**
+ **Upload** it to the root of your hosting.
+ Execute _http://yourdomain.com/export.php_, that may take a lot of time depending on how many ads you have.
+ You will get a CSV file called **export.csv**.
+ Make a **backup of your files and DB**.
+ Delete all the contents of your Noah's installation **except** folder /pictures/listings
+ **[Install Yclas Self Hosted.]({{ site.baseurl }}/install-self-hosted)**
+ Go to **Panel** -> **Tools** -> **Import Tools** -> **Import Ads**. Choose the export.csv file.
+ Click on **Proceed**.

Now you are ready to use Yclas Self Hosted!

Find [here]({{ site.baseurl }}) more guides about Yclas.
