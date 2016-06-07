---
title:  2 Step Authentication
date:   2016-03-31 09:13:09
categories: General
tags: [General]
permalink: /2-step-authentication/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This feature is available with our 2.8.0 release and on all sites hosted at <a href="https://yclas.com/">Yclas.com</a> 
</div>

This feature gives you and your users two-factor authentication. You can protect your account with both your password and your phone. 

## How to configure 2 step authentication

1. Login to your **admin panel**.
2. Go to **Settings -> General**.
3. Activate **2 Step Authentication**.
4. Press **Save**.

![2step admin]({{ site.baseurl }}/images/2step.png)

## Enable 2 Step Authentication on your profile

1. **Login** to your website.
2. Go to **[Edit Profile](http://docs.yclas.com/how-to-edit-your-profile/)**.
3. Click **Enable** under _2 Step Authentication_ section.

![2step admin]({{ site.baseurl }}/images/2step2.png)

4. Now you can see the QR code on the place where the Enable button was located.

![2step admin]({{ site.baseurl }}/images/2step3.png)

5. If you don't have **Google Authenticator** app installed on your mobile phone, you can choose **Android** or **iOS** below to get it.
6. Run the app on your mobile phone, click **Set up account** from the options and **scan the QR code**.
7. Once the QR code is scanned, you will see the account created with a verification code. (There's no need to write down or memorize the verification code because it changes every 30 seconds.)

![2step admin]({{ site.baseurl }}/images/2step4.png)

## How to use it

1. Go to your website and choose to log in.
2. Enter your **Email** and **Password** and click **Login**.
3. Now you are redirected to **enter the Verification Code**. (Run the Google Authenticator app to find the verification code.)
4. Click **Send**.
5. Now you are logged into your website!

![2step admin]({{ site.baseurl }}/images/2step5.png)






