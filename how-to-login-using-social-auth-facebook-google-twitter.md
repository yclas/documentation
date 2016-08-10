---
title:  "How to login using Social Auth (Facebook, Google, Twitter ...)"
date:   2013-12-26 15:10:15
categories: Plugins
tags: [Plugins]
permalink: /how-to-login-using-social-auth-facebook-google-twitter/
---
Since version 2.1 it's really easy to login using your **social network account** like **Twitter, Facebook, Google + , LinkedIn etc.,** we use a 3rd party open source project called **[HybridAuth](http://hybridauth.sourceforge.net/)** (awesome project!). 

To activate any of these social logins you need first to purchase a premium theme from our **[market](http://open-classifieds.com/market/)**. 

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
  * Authorized Javascript origins: Your site URL here. ex: http://forums.open-classifieds.com/
  * Authorized redirect URI: ex: http://forums.open-classifieds.com/social/login/1?hauth.done=Google
    
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

1\. Create a facebook app [Here is a guide with instructions on how to do that]({{ site.baseurl }}/add-facebook-comments)

2\. Go to [facebook developers](https://developers.facebook.com/apps) section

3\. Go to **Settings** > **Basic**, fill fields **Display Name** and **Contact Email** 

4\. Press **Save Changes**

<a href="//docs.yclas.com/images/facebook1.png" class="thumbnail gallery-item" data-gallery>
![fb1](//docs.yclas.com/images/facebook1.png)
</a>

5\. Go to **Settings** > **Advanced**, fill field **Deauthorize Callback URL** with your website's URL (for example _http://example.com/_) and field **Valid OAuth redirect URIs** with your website's URL too (press enter after you type the URL). Make sure Social Discovery, Allow API Access to App Settings, Client OAuth Login and Web OAuth Login are ON.

<a href="//docs.yclas.com/images/facebook2.png" class="thumbnail gallery-item" data-gallery>
![fb1](//docs.yclas.com/images/facebook2.png)
</a>
<a href="//docs.yclas.com/images/facebook3.png" class="thumbnail gallery-item" data-gallery>
![fb1](//docs.yclas.com/images/facebook3.png)
</a>

6\. Click **Save Changes**<br>
7\. Go to **Status & Review**<br>
8\. Answer **”_Do you want to make this app and all its live features available to the general public?_”** with **YES**<br>

<a href="//docs.yclas.com/images/facebook4.png" class="thumbnail gallery-item" data-gallery>
![fb1](//docs.yclas.com/images/facebook4.png)
</a>

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

1. [Twitter](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Twitter.html)
2. [Yahoo](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Yahoo.html) (deep integration, but check better Open ID)
3. [MySpace](http://hybridauth.sourceforge.net/userguide/IDProvider_info_MySpace.html)
4. [Windows Live](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Live.html)
5. [LinkedIn](http://hybridauth.sourceforge.net/userguide/IDProvider_info_LinkedIn.html)
6. [Foursquare](http://hybridauth.sourceforge.net/userguide/IDProvider_info_Foursquare.html)

