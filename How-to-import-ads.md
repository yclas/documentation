---
title:  How to Import Advertisements
date:   2015-05-08 10:26:48
categories: Tools
tags: [Tools]
permalink: /how-to-import-ads/
keywords: multiple ads, insert, import tool, import feature, csv, sample file, upload, bulk, custom fields
---
It's much easier to import advertisements instead of inserting them one by one. Import tool for ads is a new feature included in our [2.4.0 release](http://open-classifieds.com/2015/04/28/open-classifieds-2-4-0/) as well as many other features. 

## How to use it

Create a CSV file in utf8 with header (lower case): 
user_name user_email title description date category location price address phone website locale* stock* image_1 image_2 image_3 image_4 .. (as many images as you have setup in the system)

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
**locale:** locale of the ad, ex fr_FR (* optional, only add in the header if you have multilingual enabled)
**stock:** number (* optional, only add in the header if you have stock control enabled)

**Images:**

We allow to upload as many images as you configured, so if you allow 4 images in the CSV you need to have 4 columns, even if they are empty add them. Images allow remote images like [http://lorempixel.com/1200/800/technics/](http://lorempixel.com/1200/800/technics/s) or local, using as base your site root, for example /images/import/ad1_pic3.png. The images will be downloaded, resized, thumbed, and deleted on completion.<br>
image_1<br>
image_2<br>
image_3<br>
image_4

**Custom Fields:**

Now it's possible to import ads with custom fields. All you need to do is to add the fields in the CSV file as headers, with the prefix **cf_**. For example, if you have a custom field called "currency" in your site, you need to include it in the CSV file headers as "cf_currency". 


[**Download Sample CSV file**](https://docs.yclas.com/samples/import_ads_example.csv) working for 4 images without locale or stock.


You can use this easy import tool to add all of your ads with a press of a button. You simply need to follow those steps:

+ Log into your **Admin Panel** 
+ Go to **Extras** > **Import**
+ Click **Browse** to select your CVS file and then press **Upload**

<a href="//docs.yclas.com/images/import-ads1.png" class="thumbnail gallery-item" data-gallery>
![import ads1](//docs.yclas.com/images/import-ads1.png)
</a>

+ Click **Process** on the right box.

<a href="//docs.yclas.com/images/import-ads2.png" class="thumbnail gallery-item" data-gallery>
![import ads2](//docs.yclas.com/images/import-ads2.png)
</a>

Now, you can see the imported ads on **Classifieds** -> **Advertisements**.

<iframe width="800" height="450" src="https://www.youtube.com/embed/BHMsDAV0WK0" frameborder="0" allowfullscreen></iframe>

<br>
**Related posts:**

+ [How to use import tool for categories and locations?]({{ site.baseurl }}/use-import-tool-categories-locations)
+ [How to manage advertisements?]({{ site.baseurl }}/how-to-manage-advertisements)