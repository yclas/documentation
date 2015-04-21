---
layout: page
title:  "How to Setup Payment Gateways"
date:   2014-08-21 17:01:02
categories: HowTo
tags: HowTo
permalink: /setup-payment-gateways/
---
# How to Setup Payment Gateways

![payment gateways](http://open-classifieds.com/wp-content/uploads/2014/08/1263x647xpayment-config.png.pagespeed.ic.Cx2Fa_ujmH.png)

<br>
Let's first go through the payment settings we have here, of course you can access payment settings by logging into your admin panel ![khod wo 3a6i](http://i0.wp.com/open-classifieds.com/wp-content/uploads/2013/08/khod-wo-3a6i.png?resize=42%2C38) then going to **Settings** > **Payment** :

+ **Site currency:** Pick the currency you want to get paid with
+ **Featured ads:** Turn On or Off the option to feature ads
+ **Price for featuring an ad:** The amount you charge for featuring an ad
+ **Days featured:** How many days you want the ad to remain featured
+ **Bring to top Ad:** Turn On of Off the option to bring an ad to top of the list
+ **To top price:** The amount you charge for bringing an ad to top

# Payment methods:

### 1- Alternative payment:

Here you can choose a page that you created to pop up when a client clicks on alternative payment, we added this in case you needed to charge clients in another way so you can create a page with the instructions and it will pop up.

### 2- Paypal

To accept Paypal payments You need to setup a Paypal account and then input the paypal e-mail in its designated box:

**Paypal account:** Input here your Paypal email <br>
**Sandbox:** Enable testing mode <br>
**User Paypal link:** Enable users to add their paypal accounts when posting items for sale <br>
**Paypal link stock control:** [When users limit their stock enable this option]({{ site.baseurl }}/pay-directly-from-ad/)

### 3- Authorize.net:

To accept credit card payments you need to setup an account with authorize.net and you will also need an SSL certificate there are two different registration portals one for [US and Canada](http://reseller.authorize.net/application/signupnow/?id=AUAffiliate&rid=26776) and another one for [UK and Europe](http://reseller.authorize.net/application/?id=5561123)

**Sandbox:** Enable this for testing mode 
**Authorize API login** and **Authorize transaction key** can be obtained from your account info at authorize.net

### 4- Paymill

To get paid via credit card you need a Paymill account, it's [free to register](https://app.paymill.com/en-en/auth/register?referrer=openclassifieds) and They charge 2.95% on any transaction.

**Paymill private key** and **Paymill public key** can be obtained from your Paymill account after registration.

### 5- Stripe

To get paid via credit card you can also use a Stripe account, It's also [free to register](https://stripe.com/) and they charge 2.95% on any transaction.

**Stripe private key** and **Stripe public key** can be obtained from your Stripe account after registration.

**Requires address to pay for extra security:** Users will be asked for their address for more secure payments when using a credit card.

### 6- Bitpay

Accept Bitcoins using Bitpay, you can [register for free](https://bitpay.com/) and start accepting Bitcoins.

**Bitpay api key:** Input your Bitpay api key here after you finished your registration.

<br>
Of course you can enable any, some or all of them at the same time without a restriction, when they're enabled the user will be redirected to a checkout page to select his preferred payment method.


<!--title: How to Setup Payment Gateways
link: http://open-classifieds.com/2014/08/21/setup-payment-gateways/
author: Kinan
description: 
post_id: 19883
created: 2014/08/21 19:01:02
created_gmt: 2014/08/21 17:01:02
comment_status: open
post_name: setup-payment-gateways
status: publish
post_type: post-->
