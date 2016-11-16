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

Ads moderation can be a very important feature in case you want to control the amount or the content of ads or to manually avoid spammers. To configure ads moderation you can go to your panel, Settings -> General -> Moderation.

### Post directly

Post directly is a way to allow user to post new advertisements without any validation later. Meaning, administrator of the page will not have obligation to activate incoming ads.

_EMAIL:_ After user has created advertisement, email is sent. This email contains two links. One is to do redirect to his newly created ad. And the second one, to report if misuse of his account.

### Moderation on

This option introduces limitation on publishing. Every new advertisement created is sent to moderation to be activated manually by administrator. This advertisement will be published with a date of activation. Until then it can be found in admin panel under moderation.

_EMAIL:_ One email is sent to user, notifying him of creation. But, in this case, he has a link that redirects him to advertisement edit. He can modify this ad, but it won’t be published. And one after admin activated it.  

### Payment on

When payment is active, user is redirected to payment gateway. But not in all cases… Only cases that have set fixed amount of money are considered to be valid. Other ones are dealt like in case of “Post directly”. Example: Category “Rent a cat” have fixed amount of 10 USD. After a user has set all necessary fields and clicked on button to post, he will be redirected to “Paypal”. Than he makes payment and after this payment has been validated by “Paypal” and our back-office his advertisement is published with current date and time. But if Category “Rent a car” doesn’t have amount (amount of money = 0 ), user advertisement will get published with a current date and time. And set on top of the list.

_EMAIL:_ One email is sent, that confirms that this advertisement is now active. Same as in “Post directly”.

### Email confirmation on

This advertisement is set to "UNCONFIRMED". With this option every advertisement needs to be confirmed by USER. It’s a standard way of confirming by email. User receives email, clicks on link that is provided and this advertisement is validated and published. It stays in moderation until then.

_EMAIL:_ Email is sent to user with a link that will activate his new advertisement. NOTE: In case that this user created advertisement while he was logged-out, after clicking the link, he will be signed up automatically.

### Email confirmation with moderation

This advertisement is set to "UNCONFIRMED". Here user needs to do email activation and then ad is sent to moderation to be validated by admin. This advertisement will be published with a date of activation. Until then it can be found in admin panel under moderation.

_EMAIL:_ One email is sent to user with a link that will activate his new advertisement. And be placed in moderation. And one after admin activated it.

### Payment with Moderation

As in the case of “payment on” user is redirected to payment gateway only if product has a fixed amount, else this advertisement is processed as “Moderation on” case is on. In other words, if the payment is successful advertisement is sent to moderation to be once again activated by admin. But if posting wasn’t handled with payment, this advertisement is set in moderation and is waiting for admin to activate it.

_EMAIL:_ One email is sent to user, notifying him of creation. But in this case he has a link that redirects him to advertisement edit. He can modify this ad, but it won’t be published. And one after admin activated it.

From **[github pages ](https://github.com/open-classifieds/openclassifieds2/wiki/_pages)**where we will publish more technical information.

