---
title:  "How Ads Moderation works?"
date:   2013-06-16 08:04:45
categories: General
tags: 
- General
- Settings
permalink: /how-ads-moderation-works/
keywords: post, verify, moderate, email, pay, payment, confirm, confirmation, activate, paid category, publish, spam, control
---
## Ways to publish an Ad

Ads moderation can be a very important feature in case you want to control the amount of ads, their content or to manually avoid spammers. To configure ads moderation you can go to your panel, Settings -> General -> Moderation.

### Post directly

Post directly is a way to allow users to post new advertisements without any validation later. This means that the administrator of the page will not have obligation to activate incoming ads.

_EMAIL:_ After a user has created an advertisement, an email is sent to him. This email contains two links: one is to redirect him to his newly created ad; while the second one is to report if there's an issue with his account.

### Moderation on

This option introduces limitation on publishing. Every new advertisement created is sent to moderation to be activated manually by administrator. This advertisement will be published with a date of activation. Until then it can be found in admin panel under moderation.

_EMAIL:_ One email is sent to user, notifying him of creation. But, in this case, he has a link that redirects him to advertisement edit. He can modify this ad, but it won't be published until the admin activates it.  

### Payment on

When the payment is active, the user is redirected to a payment gateway. But not every case. This happens only in cases in which the user have set fixed an amount of money that's considered to be valid. Other ones are dealt like a case of "Post directly”. Example: the category "Rent a cat” have fixedan amount of 10 USD. After a user has set all the necessary fields and have clicked on button to post, he will be redirected to "Paypal”. Than he makes payment and, after this payment has been validated by "Paypal” and our back-office, his advertisement is published with the current date and time. But if the category "Rent a car” doesn't have an amount (amount of money = 0 ), the user's advertisement will get published with a current date and time and set on top of the list.

_EMAIL:_ One email is sent, that confirms that this advertisement is now active. Same as in "Post directly”.

### Email confirmation on

This advertisement is set to "UNCONFIRMED". With this option every advertisement needs to be confirmed by the USER. It's a standard way of confirming by email. The user receives an email, clicks on link that is provided and then this advertisement is validated and published. It will stay in moderation until then.

_EMAIL:_ An email is sent to the user with a link that will activate his new advertisement. NOTE: In case that this user has created advertisement while he was logged-out, after clicking the link, he will be signed up automatically.

### Email confirmation with moderation

This advertisement is set to "UNCONFIRMED". Here, the user needs to do the email activation and then the ad is sent to moderation to be validated by the admin. This advertisement will be published with a date of activation. Until then, it can be found in admin panel under moderation.

_EMAIL:_ One email is sent to the user with a link that will activate his new advertisement and then it will be placed in moderation until the admin activates it.

### Payment with Moderation

As in the case of "payment on”, the user is redirected to payment gateway only if the product has a fixed amount. Besides, this advertisement is also processed as a "Moderation on” case. In other words, if the payment is successful, the advertisement will be sent to moderation to be once again activated by the admin. But if the posting poroess wasn't handled with a payment, this advertisement will be set in moderation and will be waiting for the admin to activate it.

_EMAIL:_ One email is sent to user notifying him of the creation of a new ad. But, in this case, he has a link that redirects him to advertisement to edit it. He can modify this ad, but it won't be published until the admin activates it.

From **[github pages ](https://github.com/yclas/yclas/wiki/_pages)**where we will publish more technical information.


<iframe width="871" height="490" src="https://www.youtube.com/embed/Ag_LWF57czA?list=PLaW2GGHbsvD1Qc8Ds4kz5bArU98to-iWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



