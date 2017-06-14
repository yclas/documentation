---
title:  "How to Setup Payment Gateways"
date:   2014-08-21 17:01:02
categories: Payment
tags: 
- Payment
- Settings
permalink: /setup-payment-gateways/
keywords: payment currency, featured ads, featured plans, to top, stock, payment methods, alternative, stripe, paypal, 2checkout, authorize.net, paymill, alipay, bitpay, paysbuy, sandbox
---
<a href="//docs.yclas.com/images/payment-gateway.png" class="thumbnail gallery-item" data-gallery>
![payment gateways](//docs.yclas.com/images/payment-gateway.png)
</a>

<div class="alert alert-info">
<strong><i class="glyphicon glyphicon-info-sign"></i> Heads Up!</strong> Authorize, Stripe, Paymill, 2checkout, Paysbuy, SecurePay, Robokassa, Paguelofacil and Bitpay are only available with premium themes and on all sites hosted at <a href="https://yclas.com/">Yclas.com</a>!
</div>

<br>
Let's first go through the payment settings we have here, of course you can access payment settings by logging into your admin panel ![khod wo 3a6i](http://i0.wp.com/open-classifieds.com/wp-content/uploads/2013/08/khod-wo-3a6i.png?resize=42%2C38) then going to **Settings** > **Payment** :

+ **Payment Currency:** Pick the currency you want to get paid with. Make sure that your chosen Payment Gateway supports that currency!
+ **Featured ads:** Turn On or Off the option to feature ad.
+ **Featured Plans:** This feature allows you to give users the option to select between different length of the featured of their ad and pay according to your plans. Follow [this guide]({{ site.baseurl }}/how-to-create-featured-plan) for more.
+ **Bring to top Ad:** Turn On or Off the option to bring an ad to top of the list.
+ **To top price:** The amount you charge for bringing an ad to top.
+ **Stock control:** [When users limit their stock enable this option](http://docs.yclas.com/pay-directly-from-ad/).

## Payment methods:

### Alternative payment:

Here you can choose a page that you created to pop up when a client clicks on alternative payment, we added this in case you needed to charge clients in another way so you can create a page with the instructions and it will pop up.

<hr>

### Stripe

Follow [this guide]({{ site.baseurl }}/stripe) for more information. 

To get paid via credit card you can also use a Stripe account, It's also [free to register](https://stripe.com/) and they charge 2.95% on any transaction.

**Stripe private key** and **Stripe public key** can be obtained from your [Stripe account](https://dashboard.stripe.com/account/apikeys). Enter the value of _Secret_ into the "Stripe private key" and _Publishable_ into "Stripe public key".

**Requires address to pay for extra security:** Users will be asked for their address for more secure payments when using a credit card.

Since our 2.7.0 version it is possible to accept Bitcoin payments with Stripe too. All you have to do is to enable this option through your Stripe Account. Notice that it only works with USD payments and US accounts.  

<hr>

### Paypal

To accept Paypal payments you need to **set up a Paypal account**, **enable Instant payment notifications** in your PayPal account (Seller Preferences -> Instant payment notifications), enter your website URL (http://example.com) into the Notification URL field and then input the paypal e-mail in its designated box in your website admin panel:

**Paypal account:** Input here your Paypal email <br>
**Sandbox:** Enable testing mode <br>

<hr>

### 2checkout

**Sandbox:** Enable testing mode <br>
**Account Number** and **Secret Word** can be obtained from your account info at [2checkout](https://www.2checkout.com/) 

You can find more information about 2checkout configuration [here]({{ site.baseurl }}/2checkout-configuration)

<hr>

### Authorize.net:

To accept credit card payments you need to set up an account with authorize.net and you will also need an SSL certificate there are two different registration portals one for [US and Canada](http://reseller.authorize.net/application/signupnow/?id=AUAffiliate&rid=26776) and another one for [UK and Europe](http://reseller.authorize.net/application/?id=5561123)

**Sandbox:** Enable this for testing mode 
**Authorize API login** and **Authorize transaction key** can be obtained from your account info at authorize.net

<hr>

### Paymill

To get paid via credit card you need a Paymill account, it's [free to register](https://app.paymill.com/en-en/auth/register?referrer=openclassifieds) and they charge 2.95% on any transaction.

**Paymill private key** and **Paymill public key** can be obtained from your Paymill account after registration.

<hr>

### Alipay

**Accept Alipay payments:** Merchants using Stripe will be able to instantly enable Alipay acceptance.

<hr>

### Bitpay

Accept Bitcoins using Bitpay, you can [register for free](https://bitpay.com/) and start accepting Bitcoins.

**Bitpay api key:** Input your Bitpay api key here after you finished your registration.

<hr>

### Paysbuy

Register [here!](https://paysbuy.com/)

**Paysbuy account:** Enter your Paysbuy account email here.
**Sandbox:** Enable this for testing mode 

<hr>

### Paytabs

**Merchant email:** Your Paytabs account email.
**Secret Key:** Secret key available on the merchant dashboard, under the menu "Ecommerce Plugins and API". 

<hr>

### PayFast

In order to receive online payments with **PayFast**, you need to [go to their site and register](https://www.payfast.co.za/user/register/full). 

Your **Merchant ID** and **Merchant Key** can be found by logging into your PayFast account and clicking on the Settings page. They are listed under "Merchant Identifiers". 
Enable **Sandbox** for testing mode.

<hr>

### Mercadopago

To setup **Mercadopago** for your classifieds sites, please follow this steps:

1. Register in [Mercadopago](https://www.mercadopago.com/) (If you don't have account yet)
2. Get you **Client-id** and **Client-Secret**.
3. Go to your admin panel -> **Settings** -> **Payments** -> **MercadoPago** and paste: Client-id and Client-Secret.

<hr>

<br>

Of course you can enable any, some or all of them at the same time without a restriction, when they're enabled the user will be redirected to a checkout page to select his preferred payment method.

Note:  Authorize, Stripe, Paymill, 2checkout, Paysbuy, SecurePay, Robokassa, Paguelofacil, Mercadopago and Bitpay only available with [premium themes!](https://selfhosted.yclas.com/)
Upgrade your Yclas site to activate this feature. 


<br>
**Related posts:**

+ [2checkout Configuration]({{ site.baseurl }}/2checkout-configuration)
+ [Stripe Connect]({{ site.baseurl }}/stripe)