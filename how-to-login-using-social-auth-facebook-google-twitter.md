---
title:  "How to login using Social Auth (Facebook, Google, Twitter ...)"
date:   2013-12-26 15:10:15
categories: Plugins
tags: 
- Plugins
- Settings
permalink: /how-to-login-using-social-auth-facebook-google-twitter/
keywords: social media, socia login, login, register, facebook, google, twitter, linkedin, aol, open id, yahoo
---
Since version 2.1 it's really easy to login using your **social network account** like **Twitter, Facebook, Google + , LinkedIn etc.,** we use a 3rd party open source project called **[HybridAuth](https://hybridauth.github.io/hybridauth/)** (awesome project!). 

To activate any of these social logins you need first to purchase a premium theme from our **[market](https://selfhosted.yclas.com/)**. 

## How to enable Google login

1. Open in a new window the **[Google Developers Console](https://cloud.google.com/console#/project)**
2. Press **Project** on the top and choose **Create project**.

<a href="//docs.yclas.com/images/google1.png" class="thumbnail gallery-item" data-gallery>
![google1](//docs.yclas.com/images/google1.png)
</a>

<br>
3\. Choose Project name, Yes or No for the other options and press **Create**.<br>
4\. Once the project is created, choose **Use Google APIs** from the Dashboard.<br>
5\. Go to **Library**, find and enable **Contacts API** and **Google+ API**.<br>

<a href="//docs.yclas.com/images/google3.png" class="thumbnail gallery-item" data-gallery>
![google3](//docs.yclas.com/images/google3.png)
</a>

6\. Then choose **Credentials**, on the left menu.<br>
7\. Choose **Create Credentials** -> **OAuth client ID** and then click on **Configure consent screen**.<br>
8\. Now you need to enter a **Product name** and you can fill any of the other optional fields you want. Click **Save**.<br>
9\. After that you will be redirected to create client ID.

  * Application type: Web application
  * Authorized Javascript origins: Your site URL here. ex: https://yclas.com/
  * Authorized redirect URI: ex: https://yclas.com/social/login/1?hauth.done=Google
    
<a href="//docs.yclas.com/images/google2.png" class="thumbnail gallery-item" data-gallery>
![google2](//docs.yclas.com/images/google2.png)
</a>

10\. Click **Create**. <br>
11\. Now you have to verify (register) your domain name. Go to **Google Console Developers** -> **Credentials**, choose the last tab, **Domain verification** and follow the steps there.<br>
12\. Go to http://yourdomain.com/oc-panel/social/index<br>
13\. Set **Google = TRUE**<br>
14\. Fill **ID = Client ID** as appears at Google page<br>
15\. Fill **Secret = Client secret** as in Google<br>
16\. Click **Update** in the bottom of the page<br>
17\. Logout<br>
18\. Go to login, Google should appear there<br>
19\. Test!<br>

<br>

## How to enable Facebook login

This social login **might change depending on Facebook** ! 

1\. Go to [Facebook for developers](https://developers.facebook.com/apps/).

2\. Click **Add a New App**.

3\. Fill the fields **Display Name** and **Contact Email** and choose a category.

4\. Press **Create App ID**.

<a href="//docs.yclas.com/images/facebook1.png" class="thumbnail gallery-item" data-gallery>
![fb1](//docs.yclas.com/images/facebook1.png)
</a>

5\. Choose **Add Product** on the left menu and select **Facebook Login**.

6\. Enable **Client OAuth Login** and **Web OAuth Login** and fill the fields:<br>

**Valid OAuth redirect URIs**: <br>
_http://yourdomain.com/social/login/1?auth_done=Facebook, http://yourdomain.com_ <br>
or <br>
_https://yourdomain.com/social/login/1?auth_done=Facebook, _https://yourdomain.com_ <br>


**Deauthorize Callback URL**: _https://yourdomain.com_

7\. Click **Save Changes**.

8\. Choose **Settings -> Advanced** and enable **Social Discovery** and **Allow API Access to App Settings**.

9\. Go to **App Review** and switch **Make test public?** to **Yes**.

<a href="//docs.yclas.com/images/facebook4.png" class="thumbnail gallery-item" data-gallery>
![fb1](//docs.yclas.com/images/facebook4.png)
</a>

10\. Go to http://yourdomain.com/oc-panel/social/index<br>
11\. Set **Facebook =** **TRUE**<br>
12\. Fill **ID = App ID** as appears at FB page<br>
13\. Fill **Secret = App secret** as in FB<br>
14\. Click **Update** in the bottom of the page<br>
15\. Logout<br>
16\. Go to login, Facebook should appear there<br>
17\. Test!<br>

## How to enable AOL login

1. Go to http://yourdomain.com/oc-panel/social/index
2. Set **AOL = TRUE**
3. Click **Update** in the bottom of the page
4. Logout
5. Go to login, AOL should appear there
6. Test!

## How to enable Open ID (yahoo) login

With this option users will be able to login using an Open ID account. In Yclas we use Yahoo as Open ID provider since it's really easy to implement. 

1. Go to http://yourdomain.com/oc-panel/social/index
2. Set **Open ID = TRUE**
3. Click **Update** in the bottom of the page
4. Logout
5. Go to login, Open ID should appear there
6. Test!

## How to enable Yahoo login

1. Go to https://developer.apps.yahoo.com/dashboard/createKey.html and create a new application.
2. Fill out any required fields such as the **Application Name** and **Description**.
3. Put your website domain in the **Home Page URL** and **Callback Domain** fields.
4. Set **Application Type** to _Web Application_.
5. Choose **Contacts API**

<a href="//docs.yclas.com/images/yahoo.png" class="thumbnail gallery-item" data-gallery>
![yahoo contacts](//docs.yclas.com/images/yahoo.png)
</a>

6\. Go to your panel, **Settings -> Plugins**, enable **Social Auth**, click **Save** and then go to **Settings** -> **Social Auth** or http://yourdomain.com/oc-panel/social/index <br>
7\. Set **Yahoo = TRUE**<br>
8\. Fill **ID** = Client ID as appears at Yahoo<br>
9\. Fill **Secret** = Client secret as in Yahoo<br>
10\. Click **Update** in the bottom of the page<br>
11\. Logout<br>
12\. Go to login, Yahoo should appear there<br>
13\. Test!<br>

## Other social login

From documentation Hybrid Auth, follow similar procedure. 

1. [Twitter](https://hybridauth.github.io/hybridauth//userguide/IDProvider_info_Twitter.html)
2. [Yahoo](https://hybridauth.github.io/hybridauth//userguide/IDProvider_info_Yahoo.html) (deep integration, but check better Open ID)
3. [MySpace](https://hybridauth.github.io/hybridauth//userguide/IDProvider_info_MySpace.html)
4. [Windows Live](https://hybridauth.github.io/hybridauth//userguide/IDProvider_info_Live.html)
5. [LinkedIn](https://hybridauth.github.io/hybridauth//userguide/IDProvider_info_LinkedIn.html)
6. [Foursquare](https://hybridauth.github.io/hybridauth//userguide/IDProvider_info_Foursquare.html)

