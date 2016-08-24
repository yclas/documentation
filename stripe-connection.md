---
title:  "Marketplace with Stripe Connect"
date:   2016-02-01 06:59:46
categories: Payment
tags: 
- Payment
- Settings
permalink: /stripe/
---
With [Stripe Connect](https://stripe.com/connect) we will allow you to easily create a marketplace where you earn commissions from products sold on your site.

# Marketplace with Stripe Connect

With [Stripe Connect](https://stripe.com/connect) you will be able to charge your customers an application fee (percentage) based on the sale they made using your platform. You (site owner) and your customer (the publisher), will need a Stripe account.

### Example

You (site owner) set your site to get 3% commission for each sale made via your website. Your customer (publisher) posts an advertisement selling his services for the value of $100. Once this customer sells his product to a customer (product buyer) , your customer (publisher) will receive $97 and you (site owner) will get immediately $3 on sale commission in your stripe account.

### Prerequisites

+ Configure your site to user Stripe Connect, see below
+ Your customer needs to have a different Stripe account to receive payments.

### Payment flow

1. Buyer pays for a product listed on your site
2. Stripe receives the money
3. Your customer (publisher) receives the amount in his Stripe account
4. You (site owner) will get from his stripe account the fee you set in your stripe account
5. 2 orders are created, 1 with the amount paid by the buyer and another with the fee paid by the publisher to you as application fee.
6. Buyer and seller get an email with the transaction details

### Site configuration

1. The site owner needs a **Stripe account** which is free.
2. **Create an application [here](https://dashboard.stripe.com/account/applications/settings)**
3. Set as redirect url **http://yourdomain.com/stripe/connect/now**
4. Go to your **panel -> Settings -> Payments**
5. **Activate Stripe Connect**
6. Set a **Stripe client ID** that you got here https://dashboard.stripe.com/account/applications/settings
7. Set the percentage fee if you want to charge your customers
8. Click **Save**, ready ;) 

<a href="//docs.yclas.com/images/stripe.png" class="thumbnail gallery-item" data-gallery>
![stripe dashboard]({{ site.baseurl }}/images/stripe.png)
</a>

<a href="//docs.yclas.com/images/stripe1.png" class="thumbnail gallery-item" data-gallery>
![stripe oc-panel]({{ site.baseurl }}/images/stripe1.png)
</a>

### User configuration

1. Your customers will need to have a Stripe account to receive the items
2. With stripe connect active it's mandatory to be registered before posting an ad, this is controlled by the application.
3. The publisher will be redirected to his profile to connect with Stripe.
4. Once connected he will be able to sell items on your site.

### Video

The video are prepared on [Yclas](https://yclas.com/) interface but it will be the same as you have on your OC panel, so you won’t notice any difference.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=Ufuxh306zsk
" target="_blank"><img src="http://img.youtube.com/vi/Ufuxh306zsk/0.jpg" 
alt="Create a marketplace with stripe connect" width="480" height="360" border="10" /></a>

<br>
**Related posts:**

+ [Buyer Instructions]({{ site.baseurl }}/buyer-instructions)
+ [How to Setup Payment Gateways]({{ site.baseurl }}/setup-payment-gateways)
+ [2checkout Configuration]({{ site.baseurl }}/2checkout-configuration)





