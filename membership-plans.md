---
title:  Memberships plans to post
date:   2016-03-04 11:27:04
categories: Plugins
tags: 
- Plugins
- Settings
permalink: /membership-plans/
keywords: membership, plan, post, daily, weekly, monthly, yearly, subscription
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This feature is available with our 2.7.0 release and it's only available in our premium themes!!
</div>

With Subscriptions/Memberships you can charge daily, weekly, monthly or yearly subscription to your users to be able to post to your site.

### How to activate it

1. Go to your Panel, **Settings** -> **Plugins**.
2. Activate **Subscriptions / Memberships**.
3. Click **Save**.

<a href="{{ site.baseurl }}/images/membership.png" class="thumbnail gallery-item" data-gallery>
![Membership]({{ site.baseurl }}/images/membership.png)
</a>

### Create Plans

1. Go to **Classifieds** -> **Plans**.
2. Click **New**.
3. Fill the fields.
4. Click **Submit**.

<a href="{{ site.baseurl }}/images/membership-new.png" class="thumbnail gallery-item" data-gallery>
![Membership]({{ site.baseurl }}/images/membership-new.png)
</a>

<a href="{{ site.baseurl }}/images/membership-new-plan.png" class="thumbnail gallery-item" data-gallery>
![Membership]({{ site.baseurl }}/images/membership-new-plan.png)
</a>

+ **Name:** The name of the plan.
+ **Seoname:** Friendly name for url.
+ **Description:** Enter a description for the plan.
+ **Price:** The price that users will be charged to subscribe to the plan.
+ **Days:** The number of days that the plan renews.
+ **Amount Ads:** The amount of ads that users can publish before their plan expires.
+ **Marketplace Fee:** If [Marketplace feature]({{ site.baseurl }}/stripe/) is activated then seller is charged this fee instead of the one is configured.
+ **Status:** If is checked, the plan is activated. Uncheck if you want to deactivate the plan.

### Subscription Expire

With this option enabled, the user's ads will expire and the profile becomes disabled. The ads and the user's profile become available when the user renews or purchases their subscription plan.

To enable or disable this option, go to **Settings** -> **General** -> **Additional Features** -> **Subscription Expire**.  

### How it works

When users click to **Publish new ad**, they will be redirected to the pricing page where they can choose among the membership plans. Once they subscribe and pay, they will be able to post. 

<a href="{{ site.baseurl }}/images/membership-pricing.png" class="thumbnail gallery-item" data-gallery>
![membership pricing page]({{ site.baseurl }}/images/membership-pricing.png)
</a>

Users can find information about their subscription at the bottom of the **Edit profile** page.

Once the subscription expires, an email will be sent to the user with a link to pay and renew his plan. More information about this on **Content** -> **Email**, _plan-expired_.

You can find information about all the users subscriptions on Panel, **Classifieds** -> **Subscriptions**.

### Recurring Membership Plans

Membership plans that are paid via [Stripe payment gateway]({{ site.baseurl }}/stripe) and free plans are automatically renewed after the expiration date. Plans that are purchased with a different payment gateway need to be renewed by user after the expiration date.

### Cancel Subscriptions

Users have the option to cancel their subscription renewal. To cancel their subscription, they need to go to the user Edit Profile page and press the button called **Cancel Subscription**.

### Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/Lcu4RXQwe-c" frameborder="0" allowfullscreen></iframe>










