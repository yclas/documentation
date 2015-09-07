---
layout: page
title:  "Automatic emails sent to users"
date:   2013-08-27 09:37:50
categories: HowTo
tags: HowTo
permalink: /automatic-emails-sent-to-users/
---
# Automatic emails sent to users

When user of your classifieds does certain actions, e.g. register, post an ad or request to change the password, he receives an **automatic email for confirmation**. To see and manage those emails go to **Panel** and choose **Content** > **Email** from the left sidebar. Email templates are already created and translated to multiple languages. You can **Edit** them according to your needs by clicking blue button next to the template.

![Automatic emails sent to users](http://docs.yclas.com/images/editemail.png)

<br>
Be sure to set **locale** that you are currently using for your site (see: [How to change language of the site?]({{ site.baseurl }}/how-to-change-language/)). You can edit **title** of the email, its **body** and the senders **email** displayed. For everything to work properly you need to remember to choose the **type: email** and click on **status** check box to make it **active**.

### Available templates of emails:

_Change Password (_**_auth-remember_**_):_ <br>
Sent to user for confirmation after request to change password 

<br>
_Welcome to [SITE.NAME]! (_**_auth-register_**_):_ <br>
Welcoming email sent to user after completing registration, reminding data for logging it 

<br> 
_Hello [USER.NAME]! (_**_user-contact_**_):_ <br>
Mail informing that user have been contacted regarding his advertisement, quoting the message 

<br>
_Hello [USER.NAME]!(_**_user-profile-contact_**_):_ <br>
Message sent to user to notify when another user is contacting them directly via their profile 

<br>
_[EMAIL.SENDER] wants to contact you! (_**_contact-admin_**_):_ <br>
Message sent to admin when a visitor uses a contact form 

<br>
_Your advertisement at [SITE.NAME], has been activated! (_**_ads-activated_**_):_ <br>
Message sent to user when his ad was activated after the moderation by the admin 

<br>
_Success! Your advertisement is created on [SITE.NAME]! (_**_ads-notify_**_):_ <br>
Message notifying that the message was created and informing how to edit it and that it still have to be validated by administrator 

<br>
_Advertisement is created on [SITE.NAME]! (_**_ads-user-check_**_):_ <br>
Message sent to registered user when the advertisement was created using their account to inform about creating the ad and confirm that they are responsible for posting it 

<br>
_Advertisement [AD.TITLE] is created on [SITE.NAME]!_ (**_ads-subscribers_**): <br>
Message sent to registered user to recommend the related ads 

<br>
_Advertisement [AD.TITLE] is created on [SITE.NAME]!_ (**_ads-to-admin_**): <br>
Message sent to admin with an included link which is worth to visit 

<br>
_Advertisement [AD.TITLE] is sold on [SITE.NAME]!_ (**_ads-sold_**): <br>
Message sent to user to confirm a sale of an advertisement and to provide the information concerning the ID of order and sold product 

<br>
_Advertisement [AD.TITLE] is out of stock on [SITE.NAME]!_ _(**out-of-stock**):_ <br>
Message sent to inform about an inactive and invisible advertisement for users and to provide a link which enable admin to activate and increase stocks 

<br>
_Advertisement [AD.TITLE] is purchased on [SITE.NAME]!_ _(**ads-purchased**):_ <br>
Message sent to user to confirm a purchase of an advertisement and to provide the confirmation of a purchase (Order ID / Product ID) 

<br>
_Receipt for [ORDER.DESC] #[ORDER.ID]_ _(**order-new**):_ <br>
Message sent to inform user about an order and to complete the payment (Checkout URL) 

<br>
_Success! Your advertisement is created on [SITE.NAME]! (_**_ads-confirm_**_)_: <br>
Message sent to users after creating advertisement with a confirmation link

<br>
_Your ad [AD.NAME] has expired (_**_ad-expired_**_)_: <br>
Message sent to inform user that his/her ad has expired. It sends that message one day after the expiration.

<br>
_Your ad [AD.NAME] is going to expire (_**_ad-to-expire_**_)_: <br>
Message sent to inform user that his/her ad is going to expire. It sends that message two days before the expiration.

<br>
_[FROM.NAME] sent you a direct message (_**_messaging-user-contact_**_)_: <br>
Message sent to inform user that he/she has a direct message. It includes the name of the sender, the content of the message and the link to this message.

<br>
_Hello [TO.NAME]! (_**_messaging-ad-contact_**_)_: <br>
Message sent to inform user that he/she has been contacted regarding an advertisement. It includes the name of the sender, the ad he/she is interested in, the content of the message and the link to this message.

<br>
_New review for [AD.TITLE] [RATE] (_**_ad-review_**_)_: <br>
Message sent to inform user about a new review on an ad.

<!--title: Automatic emails sent to users
link: http://open-classifieds.com/2013/08/27/automatic-emails-sent-to-users/
author: 
description: 
post_id: 9649
created: 2013/08/27 11:37:50
created_gmt: 2013/08/27 09:37:50
comment_status: open
post_name: automatic-emails-sent-to-users
status: publish
post_type: post-->