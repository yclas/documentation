---
title:  2 Step SMS Authentication
date:   2017-07-28 09:13:09
categories: General
tags: 
- General
- Settings
permalink: /2-step-sms-authentication/
keywords: settings, general, authentication, login, profile, sms, mobile, password, register
---
Keep your users secure with two-step SMS authentication. Two-step authentication is a mechanism to double check that your identity is legitimate.

## How to enable and configure Two-step SMS Authentication

1. Register at [Clickatell](https://www.clickatell.com)
2. On Clickatell dasboard, choose **SMS integrations** on the left sidebar
3. Click **Activate Now** and setup Billing Details. You can calculate the pricing [here](https://www.clickatell.com/pricing-and-coverage/message-pricing/#step-1)
4. Now that the integration is activated, choose SMS integrations again and copy the **API key**
5. In your website admin panel, **Settings -> General**, enable **2 Step SMS Authentication** and paste the API key into the **Clickatell** field
6. Press **Save**

<a href="//docs.yclas.com/images/2-step-sms.png" class="thumbnail gallery-item" data-gallery>
![Two-step SMS Authentication](//docs.yclas.com/images/2-step-sms.png)
</a>

Now customers that set a phone number in the profile will have 2 step sms authentication.

## How it works

1. A user registers on your website or posts an ad
2. User account is created and the user goes to Edit Profile page and enters his phone number
3. After the update of the profile details, user will get a verification code in a message on his mobile phone which will need to enter in the next page
4. Now the user is authenticated and Two-step SMS authentication is enabled on his account

<a href="//docs.yclas.com/images/2-step-sms-2.png" class="thumbnail gallery-item" data-gallery>
![Two-step SMS Authentication](//docs.yclas.com/images/2-step-sms-2.png)
</a>

## Register and login with phone number

### Register

Users can choose to register with their email and password, or to choose to register with their phone number.

1. A user visits your site and choose to register.
2. We send him an SMS with a code.
3. He enters the code, if valid.
4. We ask for name and email.
5. User registered!

### Login

1. Registered user visits your site and wants to login.
2. He choose to login with phone number and enters his number.
3. If the number is valid and a profile account with that phone number is found, we send him a code.
4. User enters the code
5. If the code is valid, user is successfully logged in! 