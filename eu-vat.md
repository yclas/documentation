---
title:  EU VAT
date:   2016-11-09 11:27:04
categories: Custom Fields
tags: 
- Custom Fields
- Classifieds
permalink: /eu-vat/
keywords: vat, checkout, eu, buy, sell, purchase, order, vat number, seller, custom fields, users, vat on email
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong>  This feature is available on our 3.0.0 release and on all sites hosted at <a href="https://yclas.com">Yclas.com</a>
</div>

Yclas allows you to include VAT to the orders. When users purchase Featured Ads, To Top, Pay to Post or Membership plans the VAT will be added at checkout. You can also configure your website in a way where users can enter their VAT number and the VAT will be added automatically at checkout when they are selling their products.

## Configure VAT for features

Follow the steps below if you want to add the VAT to the [features](https://docs.yclas.com/how-to-earn-money/) of your website, **Featured Ads**, **To Top**, **Pay to Post** and **Membership plans**.

1. Login to your panel.
2. Go to **Settings -> Payment -> General**.
3. Enter the **VAT country** and **VAT number**.
4. Click **Save**.

Once you click Save you should get a success message. If you get the following message it means that VAT country or number is wrong :

_Error: Invalid EU Vat Number, please verify number and country match_

<iframe width="800" height="450" src="https://www.youtube.com/embed/LrwSATYGVok" frameborder="0" allowfullscreen></iframe>


## Configure VAT for sellers

If you don't know how to enable the Buy Now button, [here's how](https://docs.yclas.com/pay-directly-from-ad/#how-to-activate-buy-now-button).

Sellers can enter their VAT number and include VAT at checkout when they are selling their products through your website. This can be done in two ways: using [Advertisement Custom Fields](https://docs.yclas.com/how-to-create-custom-fields/) or [User Custom Fields](https://docs.yclas.com/users-custom-fields/). 

At checkout, your website will try to calculate the VAT using the Advertisement VAT number, if it's missing it will use User VAT number and if that is missing too, then no VAT will be added on the amount.

### Advertisement VAT number

1. Login to your panel.
2. Go to **Classifieds -> Custom Fields**.
3. Click **New Field**.
4. Enter **vatcountry** into the field called Name. It's important to enter _vatcountry_ as name and choose Country as the field type in order to make the feature works. Choosing Country will automatically create dropdown menu with all the countries included. 
5. **Fill the fields** and **press Create**.
6. Click **New Field**.
7. Enter **vatnumber** into the field called Name. It's important to enter _vatnumber_ as name in order to make the feature works.

<a href="//docs.yclas.com/images/cfvatcountry.png" class="thumbnail gallery-item" data-gallery>
![vatcountry]({{ site.baseurl }}/images/cfvatcountry.png)
</a>

<a href="//docs.yclas.com/images/cfvatnumber.png" class="thumbnail gallery-item" data-gallery>
![vatnumber]({{ site.baseurl }}/images/cfvatnumber.png)
</a>

### User VAT number

1. Login to your panel.
2. Go to **Users -> User Custom Fields**.
3. Click **New Field**.
4. Enter **vatcountry** into the field called Name. It's important to enter _vatcountry_ as name and choose Country as the field type in order to make the feature works. Choosing Country will automatically create dropdown menu with all the countries included. 
5. **Fill the fields** and **press Create**.
6. Click **New Field**.
7. Enter **vatnumber** into the field called Name. It's important to enter _vatnumber_ as name in order to make the feature works.

<a href="//docs.yclas.com/images/ucf-vatcountry.png" class="thumbnail gallery-item" data-gallery>
![vatcountry]({{ site.baseurl }}/images/ucf-vatcountry.png)
</a>

<a href="//docs.yclas.com/images/private-site.png" class="thumbnail gallery-item" data-gallery>
![vatnumber]({{ site.baseurl }}/images/ucf-vatnumber.png)
</a>


## The checkout page

If the VAT country and the VAT number match, the checkout page will look like this.

<a href="//docs.yclas.com/images/checkout-VAT.png" class="thumbnail gallery-item" data-gallery>
![vatnumber]({{ site.baseurl }}/images/checkout-VAT.png)
</a>


## VAT on automatic emails

Once you configure VAT to be added at checkout, you will be able to include it to the [automatic emails]({{site.baseurl}}/automatic-emails-sent-to-users/) _ads-sold_ and _ads-purchased_.

The variables you can use are:

+ **[VAT.COUNTRY]**

Includes the two-letter country code.

+ **[VAT.NUMBER]**

Includes the VAT number.

+ **[VAT.PERCENTAGE]**

The VAT rate based on the seller VAT number.

