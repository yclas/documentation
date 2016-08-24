---
title:  2checkout Configuration
date:   2015-12-18 06:59:46
categories: General
tags: 
- General
- Settings
permalink: /2checkout-configuration/
---
This guide explains how to configure your 2checkout account so it works with your Open Classifieds website. 

At first, you need to create an account on [2checkout](https://www.2checkout.com/). Enter your personal/business details to activate your account, go to your dashboard and click **Account** -> **Site Management**.

Now, you have to follow these instructions:

+ Select the **Pricing Currency** you want to use.
+ Select **Refund Policy** and **Privacy Policy**.
+ Choose **Header Redirect (Your URL)**
+ Enter http://yourdomain.com/twocheckout/pay/null/ in **Approved URL** field.

Login to your website as admin, go to **Settings** -> **Payment**, **2checkout** and fill **Account Number** and **Secret Word** fields. You can find these values in your 2checkout dashboard (see the image below).

<a href="//docs.yclas.com/images/2co.jpg" class="thumbnail gallery-item" data-gallery>
![2co](//docs.yclas.com/images/2co.jpg)
</a>

<br>
**Related posts:**

+ [How to Setup Payment Gateways]({{ site.baseurl }}/setup-payment-gateways)
+ [Marketplace with Stripe Connect]({{ site.baseurl }}/stripe)

