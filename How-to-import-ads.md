---
title:  How to Import Advertisements
date:   2015-05-08 10:26:48
categories: Tools
tags: [Tools]
permalink: /how-to-import-ads/
---
It's much easier to import advertisements instead of inserting them one by one. Import tool for ads is a new feature included in our [2.4.0 release](http://open-classifieds.com/2015/04/28/open-classifieds-2-4-0/) as well as many other features. 

## How to use it

Create a CSV file with header: 
user_name user_email title description date category location price address phone website image_1 image_2 image_3 image_4

**user_name:** Name for user if doesn't exists will get created<br>
**user_email:** Email address of user if doesn't exists will get created<br>
**title:** Title of the ad, will be used later for the url for SEO<br>
**description:** Ad description details. Allows bbcode<br>
**date:** Published date, in format YYYY-MM-DD (for example 2014-05-09)<br>
**category:** Name of the category will be created if doesnt exists<br>
**location:** Name of the location will be created if doesnt exists<br>
**price:** Price, numeric (optional)<br>
**address:** Address of the ad, (optional)<br>
**phone:** Phone number (optional)<br>
**website:** Website (optional)

**Images:**

We allow up to 4 images. Images allow remote images like [http://lorempixel.com/1200/800/technics/](http://lorempixel.com/1200/800/technics/s) or local, using as base your site root, for example /images/import/ad1_pic3.png. The images will be downloaded, resized, thumbed, and deleted on completion.<br>
image_1<br>
image_2<br>
image_3<br>
image_4


[**Sample CVS file**](https://docs.google.com/uc?id=0B60e9iwQucDwRzlOT2NCem5maFU&export=download)



You can use this easy import tool to add all of your ads with a press of a button. You simply need to follow those steps:

+ Log into your **Admin Panel** 
+ Go to **Tools** > **Import Tool**
+ Click **Browse** to select your CVS file and then press **Upload**

![import ads1](//docs.yclas.com/images/import-ads1.png)

+ Click **Process** on the right box.

![import ads2](//docs.yclas.com/images/import-ads2.png)

Now, you can see the imported ads on **Classifieds** -> **Advertisements**.

<br>
**Related posts:**

+ [How to use import tool for categories and locations?]({{ site.baseurl }}/use-import-tool-categories-locations)
+ [How to manage advertisements?]({{ site.baseurl }}/how-to-manage-advertisements)