---
title:  How to use Coupon System
date:   2015-07-08 10:26:48
categories: Classifieds
tags: [Classifieds]
permalink: /how-to-use-coupon-system/
---
Note that Coupon System is available only on Premium Themes. When you 're ready to have a Premium Theme, go to our [market](http://open-classifieds.com/market/).

<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This feature is available on our 2.5.0 release.
</div>

This new tool allows you to give special discounts to customers to post on paid categories, top up or upgrade their ads to feature. 

## How to create coupons

There are three ways to offer coupons: Create single coupon, bulk creation of unique coupons and import coupons by uploading a CSV file. 

### Create single coupon

Login to your Panel, go on **Classifieds** -> **Coupons** and click **New**. 

<a href="{{ site.baseurl }}/images/coupons-new.png" class="thumbnail gallery-item" data-gallery>
![new coupon](//docs.yclas.com/images/coupons-new.png)
</a>

Fill the fields and press **Submit**.

<a href="{{ site.baseurl }}/images/coupons-new1.png" class="thumbnail gallery-item" data-gallery>
![new coupon 1](//docs.yclas.com/images/coupons-new1.png)
</a>

+ **Name:** It must be unique, cannot be repeated.
+ **Id Product:** Any means will work for any product. If you choose a product, then the coupon will work only for that product.
+ **Discount Amount:** (If Fixed discount is selected) Fixed amount to be discounted, ex. 3 (will discount 3$ from the total).
+ **Discount Percentage:** (If Percentage discount is selected) Percentage of discount, ex. 50 (will remove 3$ from a $6 order).
+ **Number Coupons:** Number of times that unique coupon can be used.
+ **Valid until:** Until when you can use that coupon.

<a href="{{ site.baseurl }}/images/coupons-new2.png" class="thumbnail gallery-item" data-gallery>
![new coupon 2](//docs.yclas.com/images/coupons-new2.png)
</a>

<a href="{{ site.baseurl }}/images/coupons-new3.png" class="thumbnail gallery-item" data-gallery>
![new coupon 3](//docs.yclas.com/images/coupons-new3.png)
</a>

### Bulk creation

Login to your Panel, go on **Classifieds** -> **Coupons** and click **Bulk**. 

<a href="{{ site.baseurl }}/images/coupons-bulk0.png" class="thumbnail gallery-item" data-gallery>
![bulk coupon](//docs.yclas.com/images/coupons-bulk0.png)
</a>

Fill the fields and press **Submit**.

<a href="{{ site.baseurl }}/images/coupons-bulk2.png" class="thumbnail gallery-item" data-gallery>
![bulk coupon](//docs.yclas.com/images/coupons-bulk2.png)
</a>

Unique coupon names will be created automatically.

<a href="{{ site.baseurl }}/images/coupons-bulk3.png" class="thumbnail gallery-item" data-gallery>
![bulk coupon](//docs.yclas.com/images/coupons-bulk3.png)
</a>

### Import coupons

Login to your Panel, go on **Classifieds** -> **Coupons**, click **Import**, choose your CSV file and click **Upload**. 

<a href="{{ site.baseurl }}/images/coupon-import.png" class="thumbnail gallery-item" data-gallery>
![import coupon](//docs.yclas.com/images/coupon-import.png)
</a>

You can use this tool for example if your provider sends you the coupons. [Here's a sample CSV file](https://mega.nz/#!V1RSSIoS!QBD0IlfKqcAuswEv18SXQ1vkbp4eUeCxpIH5sXQVskY).

## Edit Coupons

If you made a mistake or you want to update a coupon, you can simply go on **Classifieds** -> **Coupons** and click to edit the coupon. 

<a href="{{ site.baseurl }}/images/coupons-edit.png" class="thumbnail gallery-item" data-gallery>
![edit coupon](//docs.yclas.com/images/coupons-edit.png)
</a>

You can edit all the fields except from the name of the coupon.


## How to use coupons

At first, give the **coupon name** to the beneficiary. After that, there are three ways for the beneficiary to use the coupon:

### On the checkout page

Add the coupon name in the field on the right bottom of the checkout form.

<a href="{{ site.baseurl }}/images/coupons-checkout.png" class="thumbnail gallery-item" data-gallery>
![checkout](//docs.yclas.com/images/coupons-checkout.png)
</a>

<a href="{{ site.baseurl }}/images/coupons-checkout1.png" class="thumbnail gallery-item" data-gallery>
![checkout1](//docs.yclas.com/images/coupons-checkout1.png)
</a>

### From widget coupons

Users can enter the name of the coupon, click add and if the coupon exists and it's valid, then it's automatically added on the checkout page. Before that, you need to create a coupon widget. If you don't know how to create a widget, please follow [this guide]({{site.baseurl}}/overview-of-widgets)

<a href="{{ site.baseurl }}/images/coupon-widget.png" class="thumbnail gallery-item" data-gallery>
![widget](//docs.yclas.com/images/coupon-widget.png)
</a>

<a href="{{ site.baseurl }}/images/coupon-widget1.png" class="thumbnail gallery-item" data-gallery>
![widget1](//docs.yclas.com/images/coupon-widget1.png)
</a>

### Add Coupon Name in any URL

If the name of the coupon is "FEATURE20%", then users can add this in any URL of your website 

    ?coupon=FEATURE20%


## Export coupons

Last but not least, you can export coupons from your panel to CSV file. This will be useful for example to send those coupons to your provider.

<a href="{{ site.baseurl }}/images/coupon-export.png" class="thumbnail gallery-item" data-gallery>
![export coupons](//docs.yclas.com/images/coupon-export.png)
</a>
