---
title:  How to Auto Post to Social Media
date:   2016-12-13 16:50:00
categories: Advertisement
tags: 
- Advertisement
- Settings
permalink: /auto-post-social-media/
keywords: post, publish, share, tweet, twitter, facebook
---
![auto tweet]({{site.baseurl}}/images/post-to-social-media.jpg)

This feature saves you a lot of time from the manual task of copying your website ads and publishing them to your social media accounts while increasing the traffic of your website. Follow the steps below to have the ads posted in your site automatically posted to your Twitter and Facebook account.

## Only Featured Ads

Enable this option to have only the Featured Ads automatically posted to your social media account right after the publisher completes the purchase the featured ad.


## Facebook

Facebook auto post allows you to configure your site to automatically post to a Facebook profile page or to a Facebook Page. Follow the steps described below to setup a Facebook app and connect it to your website:

1\. Go to [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)

2\. Click **Add a New App**

![auto fb]({{site.baseurl}}/images/fb-post-1.png)

3\. Fill the **Display Name** with your website name, choose the category that you website corresponds and press **Create App ID**.

4\. Choose **App Review** on the left sidevar and enable the option to make your App public.

![auto fb]({{site.baseurl}}/images/fb-post-2.png)

5\. Visit the [Facebook Graph API Explorer page](https://developers.facebook.com/tools/explorer/)

6\. Choose your created App in the **Application** field

![auto fb]({{site.baseurl}}/images/fb-post-3.png)

7\. Get your Access Token:

**If you want to post to your Facebook Page**

  - Click on **Get Token** and select **Get User Access Token**. "Get Token" button is changed to your page name.
  - Select the permissions as indicated below and press **Get Access Token**:

![auto fb]({{site.baseurl}}/images/fb-autopost-page.png)

  - Press **Get Token** again and select your Facebook page.
  - Click on your page name (the same button) and select **Request publish_pages**. 

**If you want to post to your personal Facebook page**

  - Click on **Get Token** and select **Get User Access Token**.
  - Check the fields as described in the image below, click the **Get Access Token** button again and select your Facebook page

![auto fb]({{site.baseurl}}/images/fb-post-4.png)

**If you want to post to your Facebook group**

  - Click on **Get Token** and select **Get User Access Token**.
  - Check the fields as described in the image below, click the **Get Access Token** button again and select your Facebook page

![auto fb]({{site.baseurl}}/images/fb-group.png)

8\. The created Access Token expires in an hour, so you need to create another one. On the same page click to the icon on the left of the Access Token and press **Open in Access Token Tool**.

![auto fb]({{site.baseurl}}/images/fb-post-5.png)

9\. Click **Extend Access Token**

![auto fb]({{site.baseurl}}/images/fb-post-6.png)

10\. The new long-lived access token will appear below. Copy, login to your website admin panel, go to **Settings -> Advertisement -> Social** and paste the key into the **Facebook Access Token** field. You won't have to renew the access token again.

11\. Go back to your [Facebook apps](https://developers.facebook.com/apps/) and choose the app you have created earlier.

12\. Get the **App ID** and **App Secret** and paste in your website admin panel, on **Settings -> Advertisement -> Social**, **Facebook App Id** and **Facebook App Secret**. 

![auto fb]({{site.baseurl}}/images/fb-post-7.png)

13\. Enable **Facebook -> Auto Post** and enter your **Facebook ID**. If you are posting on a Facebook page enter the ID of the page, if you are posting on a Facebook group or a user page enter the User ID. You can find the Facebook ID by using a website like http://findfacebookid.com/ and http://findmyfbid.com/

14\. Click **Save**

15\. Done!

<hr>

## Twitter

Here's how to connect your website to your Twitter account and automatically send tweets when new ads are published in your website or ads become featured:

1\. Go to [https://apps.twitter.com/](https://apps.twitter.com/)

2\. Click **Create New App**

![auto tweet]({{site.baseurl}}/images/auto-post-tw-1.png)

3\. Fill the fields and click **Create your Twitter application**

4\. Go to the **Permissions** tab, set _Application Type_ to **Read and Write** and Then press Update this Twitter application's settings

5\. Go to **Keys and Access Tokens** and press _Create my access token_

6\. On the same page, get the **Access Token** and **Access Token Secret**

7\. Login to your admin panel and go to **Settings -> Advertisement -> Social**

8\. Enable **Twitter -> Auto Post** and enter the **Consumer Key**, **Consumer Secret**, **Access Token** and **Access Token Secret**

9\. Click **Save**


<hr>

## Instagram

If you have an Instagram account and you want to post your website ads there, you only need to enter your Instragram username and password in your website admin panel: 

1\. Login to your admin panel and go to **Settings -> Advertisement -> Social**

2\. Enable **Instagram -> Auto Post** and enter your **Instagram Username** and **Instagram Password**

3\. Click **Save**



<hr>

## Pinterest

The following instructions explain how to pin your website ads automatically to your Pinterest account.

1\. Login to your Pinterest account.

2\. Create a new Board, if you don't already have the Board you want to pin the ads from your website.

3\. Create a new app [here](https://developers.pinterest.com/apps/). Enter the Name and Description of the app.

![pinterest-app.png]({{site.baseurl}}/images/pinterest-app.png)

4\. Once your app is created, click **Tools** on the top bar menu and choose **Token generator** on the left sidebar.

5\. Check that **read_public** and **write_public** fields are checked and press **Generate token**. On the popup window that will appear press OK to give permission to the app to access your profile.

![pinterest-app.png]({{site.baseurl}}/images/pinterest-token.png)

6\. Copy the generated token and paste it to your website admin panel, **Settings** -> **Advertisement** -> **Social** -> **Pinterest Access token**.

7\. Go back to your Pinterest app, copy the **App ID** and **App secret** and paste to your website admin panel, **Settings** -> **Advertisement** -> **Social** -> **App ID** and **App Secret**. Also enter the Pinterest Board that you want to pin the ads from your website.

![pinterest-app.png]({{site.baseurl}}/images/pinterest-id-secret.png)

![pinterest-app.png]({{site.baseurl}}/images/pinterest-oc-panel.png)

8\. Press **Save**.

9\. Done!!