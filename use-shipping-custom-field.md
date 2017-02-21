---
title:  How to use shipping custom field
date:   2015-06-02 16:23:51
categories: Custom Fields
tags: 
- Custom Fields
- Classifieds
permalink: /use-shipping-custom-field/
keywords: shipping cost, cost, price, amount, total
---
<!-- <div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This feature is available on our 2.5.0 release.
</div>
 -->
## Shipping

This feature allows users to specify the shipping cost for their products.  

If you don't know how, you can follow [this guide]({{ site.baseurl }}/how-to-create-custom-fields).

<a href="//docs.yclas.com/images/shipping-field.png" class="thumbnail gallery-item" data-gallery>
![shipping field](//docs.yclas.com/images/shipping-field.png)
</a>

After you create the field, when a seller posts his advertisement he will be able set the price for shipping by filling this field. Then, on checkout page, shipping price will be displayed after the price of the item. Finally, the amount of the order will be the price of shipping plus the price of the item.

Remember, it's very important to name this field **"shipping"**!


## Pick up

Now users can choose if their product is available for shipping, pick up or both. What you need to do is to create a custom checkbox field called **shipping_pickup**, as it's indicated below:

<a href="//docs.yclas.com/images/shipping_pickup_cf.png" class="thumbnail gallery-item" data-gallery>
![shipping field](//docs.yclas.com/images/shipping_pickup_cf.png)
</a>

This field will add an option in the "Publish new" form.

<a href="//docs.yclas.com/images/shipping-publish.png" class="thumbnail gallery-item" data-gallery>
![shipping field](//docs.yclas.com/images/shipping-publish.png)
</a>

If the option for pick up is checked, users will be able to choose the shipping method in the checkout page.

<a href="//docs.yclas.com/images/shipping-pickup-checkout.png" class="thumbnail gallery-item" data-gallery>
![shipping field](//docs.yclas.com/images/shipping-pickup-checkout.png)
</a>

<br>
**Related posts:**

+ [How to publish an ad with a different contact email?]({{ site.baseurl }}/how-to-publish-different-contact-email)