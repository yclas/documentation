---
title: Auto-post listings to social media
description: Post new or featured listings to your X (Twitter) account automatically, and the other ways to connect your marketplace with Facebook and social networks.
section: integrations
order: 70
permalink: /auto-post-social-media/
redirect_from:
  - /facebook-integration-for-classifieds/
keywords: twitter, x, tweet, auto post, social media, facebook, pinterest, share, share buttons, facebook comments, facebook login, promote listings
updated: 2026-10-07
---

Auto-posting shares listings on your social media account the moment they go live, so your followers see new items
without you copying them by hand. Yclas can post to X (formerly Twitter). This guide also covers the other ways your
marketplace works with Facebook and social networks.

## Post listings to X (Twitter)

Each post contains the listing's title, category, location and price, a link to the listing, and hashtags made from
your site name, the category and the location, for example:

> Mountain bike 26", Bikes - Bristol, £150 - https://yourdomain.com/bikes/mountain-bike-26.html - #YourSite #Bikes #Bristol

Long titles and names are shortened to keep the post within X's length limit.

### Before you start

The integration posts through X's API with your own developer app. X has changed its API access and pricing several
times, and the older API this integration uses isn't available on every X developer plan. Check that your plan allows
posting through the API before you set it up, and test it with a listing.
{: .important}

### Set it up

1. Sign in to the [X Developer Portal](https://developer.x.com) with the X account you want to post from, and create
   a project and an app.
2. In the app's **User authentication settings**, set the app permissions to **Read and write**.
3. Under **Keys and tokens**, copy the **API Key** and **API Key Secret** (also called consumer key and secret).
4. On the same page, generate an **Access Token and Secret** for your account. Generate them after setting **Read
   and write**, otherwise they can't post.
5. In your admin panel, go to **Integrations** and open **Twitter**.
6. Tick **Enable Twitter** and paste the four values into **Consumer Key**, **Consumer Secret**, **Access Token** and
   **Access Token Secret**.
7. Optional: tick **Only Featured Ads**.
8. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Enable Twitter** | Turns auto-posting on or off. When it's ticked, all four keys are required. |
| **Consumer Key** and **Consumer Secret** | Identify your X app. |
| **Access Token** and **Access Token Secret** | Let the app post as your X account. |
| **Only Featured Ads** | Posts only listings that become [featured](/how-to-create-featured-plan/), when the purchase is complete, instead of every new listing. |

### When a listing is posted

- **Every new listing** (the default): when it goes live, either straight after posting or when you approve it in
  [Moderation](/how-ads-moderation-works/).
- **Only featured listings**: when a listing becomes featured.

Listings are posted once, when they go live. Editing a listing doesn't post it again.

If a post fails, for example because the keys are wrong or X refuses the request, the listing is still published
normally; it just doesn't appear on X.
{: .note}

**Only Featured Ads** makes a good selling point: offer "shared with our followers" as part of your featured listing
packages.
{: .tip}

## Facebook and other networks

Automatic posting to Facebook pages and Pinterest is no longer available: Facebook removed the permission it relied
on. These are the ways to connect your marketplace with Facebook today:

| You want | Use |
| --- | --- |
| Visitors to share listings on Facebook, WhatsApp, X and others | The share buttons on listing pages, and the share widget. See [Widgets](/overview-of-widgets/). |
| Members to sign in with Facebook | [Social login](/how-to-login-using-social-auth-facebook-google-twitter/). |
| Comments on listings with Facebook accounts | Facebook comments. See [Comments on listings and posts](/how-to-activate-comments-with-disqus/). |
| To measure Facebook and Instagram ads | The Meta Pixel. See [Tracking codes and analytics pixels](/how-to-add-tracking-codes/). |
| To post your listings on your Facebook page | Share them by hand, or use a scheduling tool that reads your site's RSS feed. |

## Related guides

- [Promote your marketplace](/promote-classifieds-website-free/) — more ways to bring in visitors.
- [Featured listings and promotions](/how-to-create-featured-plan/) — what members pay for.
- [Integrations](/integrations-overview/) — every service you can connect.
{: .cards}
