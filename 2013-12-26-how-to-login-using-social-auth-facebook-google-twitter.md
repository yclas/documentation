---
layout: page
title:  "How to login using Social Auth (Facebook, Google, Twitter ...)"
date:   2013-12-26 15:10:15
categories: HowTo
tags: HowTo
permalink: /how-to-login-using-social-auth-facebook-google-twitter/
---
# How to login using Social Auth (Facebook, Google, Twitter ...)

Since version 2.1 it's really easy to login using your **social network account** like **Twitter, Facebook, Google + , LinkedIn etc.,** we use a 3rd party open source project called **[HybridAuth](http://hybridauth.sourceforge.net/)** (awesome project!). 

To activate any of these social logins you need first to purchase a premium theme from our **[market](http://open-classifieds.com/market/)**. 

## How to enable Google login

1. Open in a new window the **[Google Developers Console](https://cloud.google.com/console#/project)**
2. Click **Create project**

  ![google1](http://open-classifieds.com/wp-content/uploads/2013/12/google1.png)

<br>
3\. Choose name and press **Create**<br>
4\. Then go to: **Api** > **Credentials** > **Create New Client ID**

![google2](http://open-classifieds.com/wp-content/uploads/2013/12/google2.png)

<br>
5\. Choose an application type: **Web Application**

  * Authorized Javascript origins: Your site URL here. ex: http://forums.open-classifieds.com/
  * Authorized redirect URI: ex: http://forums.open-classifieds.com/social/login/1?hauth.done=Google
    
6\. Click **Create Client ID** 

![google3](http://open-classifieds.com/wp-content/uploads/2013/12/google3.png)

<br>
7\. Go to http://yourdomain.com/oc-panel/social/index<br>
8\. Set **Google = TRUE**<br>
9\. Fill **ID = Client ID** as appears at Google page<br>
10\. Fill **Secret = Client secret** as in Google<br>
11\. Click **Update** in the bottom of the page<br>
12\. Logout<br>
13\. Go to login, Google should appear there<br>
14\. Test!<br>

<br>

## How to enable Facebook login

This social login **might change depending on Facebook** ! 

1\. Create a facebook app [Here is a guide with instructions on how to do that]({{ site.baseurl }}/add-facebook-comments/)
2\. Go to [facebook developers](https://developers.facebook.com/apps) section
3\. Go to **Settings** > **Basic**, fill fields **Display Name** and **Contact Email** 
4\. Press **Save Changes**

![fb1](http://docs.yclas.com/images/facebook1.png)

5\. Go to **Settings** > **Advanced**, fill field **Deauthorize Callback URL** with your website's URL (for example _http://example.com/_) and field **Valid OAuth redirect URIs** with your website's URL too (press enter after you type the URL). Make sure Social Discovery, Allow API Access to App Settings, Client OAuth Login and Web OAuth Login are ON.

![fb1](http://docs.yclas.com/images/facebook2.png)
![fb1](http://docs.yclas.com/images/facebook3.png)

6\. Click **Save Changes**<br>
7\. Go to **Status & Review**<br>
8\. Answer **”_Do you want to make this app and all its live features available to the general public?_”** with **YES**<br>

![fb1](http://docs.yclas.com/images/facebook4.png)

9\. Go to http://yourdomain.com/oc-panel/social/index<br>
10\. Set **Facebook =** **TRUE**<br>
11\. Fill **ID = App ID** as appears at FB page<br>
12\. Fill **Secret = App secret** as in FB<br>
13\. Click **Update** in the bottom of the page<br>
14\. Logout<br>
15\. Go to login, Facebook should appear there<br>
16\. Test!<br>

## How to enable AOL login

1. Go to http://yourdomain.com/oc-panel/social/index
2. Set **AOL = TRUE**
3. Click **Update** in the bottom of the page
4. Logout
5. Go to login, AOL should appear there
6. Test!

## How to enable Open ID (yahoo) login

With this option users will be able to login using an Open ID account. In Open Classifieds we use Yahoo as Open ID provider since it's really easy to implement. 

1. Go to http://yourdomain.com/oc-panel/social/index
2. Set **Open ID = TRUE**
3. Click **Update** in the bottom of the page
4. Logout
5. Go to login, Open ID should appear there
6. Test!

## Other social login

From documentation Hybrid Auth, follow similar procedure. 

1. [Twitter](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Twitter.html)
2. [Yahoo](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Yahoo.html) (deep integration, but check better Open ID)
3. [MySpace](http://hybridauth.sourceforge.net/userguide/IDProvider_info_MySpace.html)
4. [Windows Live](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Live.html)
5. [LinkedIn](http://hybridauth.sourceforge.net/userguide/IDProvider_info_LinkedIn.html)
6. [Foursquare](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Foursquare.html)


<!--title: How to login using Social Auth (Facebook, Google, Twitter ...)
link: http://open-classifieds.com/2013/12/26/how-to-login-using-social-auth-facebook-google-twitter/
author: admin
description: 
post_id: 10393
created: 2013/12/26 16:10:15
created_gmt: 2013/12/26 15:10:15
comment_status: open
post_name: how-to-login-using-social-auth-facebook-google-twitter
status: publish
post_type: post-->