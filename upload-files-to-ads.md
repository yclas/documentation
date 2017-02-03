---
title:  Upload files to ads
date:   2016-12-06 08:51:01
categories: Advertisement
tags: 
- Advertisement
- Settings
permalink: /upload-files-to-ads/
keywords: dropbox, file, upload, sell, digital, download, custom, fields, pdf, doc, image, google, picker
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This feature is available on all sites hosted at <a href="https://yclas.com/">Yclas.com</a> 
</div>

Now sellers can upload files to their ads from Dropbox or Google Picker and sell them. With this feature it's possible to sell digital goods in your website.

## How it works

+ Seller uploads a file from Dropbox or Google Picker while posting his ad
+ Buyer clicks the Buy Now button to buy the product 
+ The confirmation email is sent to the buyer, which includes the Order ID, Product ID and a link to download the uploaded file. 

## Create the File field

1. Create a Custom Field on **Classifieds -> Custom Fields -> New**
2. The custom field _Name_ must be **file_download** and _Type_ must be **File Dropbox** or **File Google Drive**
3. The custom field values are comma separated allowed file extensions
4. Now you need to configure one of the methods described below

<a href="{{ site.baseurl }}/images/dropbox-upload.png" class="thumbnail gallery-item" data-gallery>
![upload-dropbox]({{site.baseurl}}/images/dropbox-upload.png)
</a>

## Dropbox

1. Create a new app on the [Dropbox Platform](https://www.dropbox.com/developers/apps/create)
2. While you create the app, add your website URL to **Chooser/Saver domains**
3. Copy the **App key** from your app and paste it in your website panel, **Setting -> Advertisement -> Dropbox -> App key** 

If this feature is properly configured, the result should be this:

<a href="{{ site.baseurl }}/images/upload-dropbox1.png" class="thumbnail gallery-item" data-gallery>
![upload-dropbox]({{site.baseurl}}/images/upload-dropbox1.png)
</a>


## Google Picker

1\. Go to [Google Developers Console](https://console.developers.google.com)

2\. Press **My Projects** -> **Create Project**

<a href="{{ site.baseurl }}/images/google-picker-1.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-1.png)
</a>

3\. Choose **Credentials** on the left sidebar and click **Create Credentials** -> **API key**

<a href="{{ site.baseurl }}/images/google-picker-2.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-2.png)
</a>
<a href="{{ site.baseurl }}/images/google-picker-4.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-4.png)
</a>

4\. Copy your **API key** and paste it to your website admin panel -> **Settings** -> **Advertisement** -> **Google Picker** -> **Google Picker API Key**

<a href="{{ site.baseurl }}/images/google-picker-5.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-5.png)
</a>
<a href="{{ site.baseurl }}/images/google-picker-3.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-3.png)
</a>

5\. Choose **Credentials** on the left sidebar and click **Create Credentials** -> **OAuth Client ID**

6\. Click **Configure consent screen**

<a href="{{ site.baseurl }}/images/google-picker-7.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-7.png)
</a>

7\. Choose your Email address, enter the **Product name**, **Privacy Policy URL** and click **Save**

<a href="{{ site.baseurl }}/images/google-picker-8.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-8.png)
</a>

8\. The next step requires to create the client ID. Choose **Application Type - Web Application**, enter your website name into the **Name** field and press **Create**

<a href="{{ site.baseurl }}/images/google-picker-9.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-9.png)
</a>
<a href="{{ site.baseurl }}/images/google-picker-10.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-10.png)
</a>

9\. Copy the Client ID and paste it to your website admin panel -> **Settings** -> **Advertisement** -> **Google Picker** -> **Google Picker Client ID** and press **Save**

<a href="{{ site.baseurl }}/images/google-picker-11.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-11.png)
</a>

10\. Go to **Libary**, find and enable **Google Picker API** 

<a href="{{ site.baseurl }}/images/google-picker-12.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-12.png)
</a>
<a href="{{ site.baseurl }}/images/google-picker-13.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-13.png)
</a>

11\. Done! You can now go to the _Publish new_ page to see the result

<a href="{{ site.baseurl }}/images/google-picker-14.png" class="thumbnail gallery-item" data-gallery>
![google picker]({{site.baseurl}}/images/google-picker-14.png)
</a>

![]()


