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

![new coupon](//docs.yclas.com/images/coupons-new.png)

Fill the fields and press **Submit**.

![new coupon 1](//docs.yclas.com/images/coupons-new1.png)

+ **Name:** It must be unique, cannot be repeated.
+ **Id Product:** Any means will work for any product. If you choose a product, then the coupon will work only for that product.
+ **Discount Amount:** (If Fixed discount is selected) Fixed amount to be discounted, ex. 3 (will discount 3$ from the total).
+ **Discount Percentage:** (If Percentage discount is selected) Percentage of discount, ex. 50 (will remove 3$ from a $6 order).
+ **Number Coupons:** Number of times that unique coupon can be used.
+ **Valid until:** Until when you can use that coupon.

![new coupon 2](//docs.yclas.com/images/coupons-new2.png)

![new coupon 3](//docs.yclas.com/images/coupons-new3.png)

### Bulk creation

Login to your Panel, go on **Classifieds** -> **Coupons** and click **Bulk**. 

![bulk coupon](//docs.yclas.com/images/coupons-bulk0.png)

Fill the fields and press **Submit**.

![bulk coupon](//docs.yclas.com/images/coupons-bulk2.png)

Unique coupon names will be created automatically.

![bulk coupon](//docs.yclas.com/images/coupons-bulk3.png)

### Import coupons

Login to your Panel, go on **Classifieds** -> **Coupons**, click **Browse**, choose your CSV file and click **Upload**. 

![import coupon](//docs.yclas.com/images/coupon-import.png)

You can use this tool for example if your provider sends you the coupons. [Here's a sample CSV file](https://mega.nz/#!V1RSSIoS!QBD0IlfKqcAuswEv18SXQ1vkbp4eUeCxpIH5sXQVskY).

## Edit Coupons

If you made a mistake or you want to update a coupon, you can simply go on **Classifieds** -> **Coupons** and click to edit the coupon. 

![edit coupon](//docs.yclas.com/images/coupons-edit.png)

You can edit all the fields except from the name of the coupon.


## How to use coupons

At first, give the **coupon name** to the beneficiary. After that, there are three ways for the beneficiary to use the coupon:

### On the checkout page

Add the coupon name in the field on the right bottom of the checkout form.

![checkout](//docs.yclas.com/images/coupons-checkout.png)

![checkout1](//docs.yclas.com/images/coupons-checkout1.png)

### From widget coupons

Users can enter the name of the coupon, click add and if the coupon exists and it's valid, then it's automatically added on the checkout page. Before that, you need to create a coupon widget. If you don't know how to create a widget, please follow [this guide]({{site.baseurl}}/overview-of-widgets)

![widget](//docs.yclas.com/images/coupon-widget.png)

![widget1](//docs.yclas.com/images/coupon-widget1.png)

### Add Coupon Name in any URL

If the name of the coupon is "FEATURE20%", then users can add this in any URL of your website 

    ?coupon=FEATURE20%


## Export coupons

Last but not least, you can export coupons from your panel to CSV file. This will be useful for example to send those coupons to your provider.

![export coupons](//docs.yclas.com/images/coupon-export.png)