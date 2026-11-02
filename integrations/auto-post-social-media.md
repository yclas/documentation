---
title: Auto-post listings to social media
description: Post new or featured listings to your Facebook Page, Telegram channel, X account, Pinterest board and TikTok account automatically, and give visitors one-tap share buttons on Nova.
section: integrations
order: 70
permalink: /auto-post-social-media/
redirect_from:
  - /facebook-integration-for-classifieds/
keywords: social posting, auto post, autopost, social media, facebook, facebook page, telegram, telegram channel, telegram bot, botfather, twitter, x, tweet, pinterest, pin, pins, pinterest board, tiktok, tiktok photo, photo carousel, content posting api, tiktok audit, url prefix, verification file, instagram, share, share buttons, share kit, whatsapp, copy link, promote listings, post queue
updated: 2026-11-02
plans: Available on all plans
---

Social posting shares listings on your social media the moment they go live, so your followers see new items without
you copying them by hand. One page in the admin panel connects all the channels: a **Facebook Page**, a **Telegram**
channel or group, **X** (formerly Twitter), a **Pinterest** board and a **TikTok** account. On the Nova theme, visitors also get share buttons for WhatsApp,
Facebook, Telegram and X on every listing.

Social posting is on every plan, and only administrators can set it up. Each channel stays off until you connect
it; a site that already posted to X keeps doing so.

## Open the Social posting page

1. In the admin panel, go to **Add-ons**.
2. Search for *Social posting* (or open the **Social** tab) and click the **Social posting** card.
{: .steps}

The page has one section per channel, each with its own switch, and a **Save** button at the bottom. Keys and
secrets you have saved are never shown again: their fields stay empty with the hint *saved, leave empty to keep it*.
Leave them empty to keep the saved value, or paste a new one to replace it.

## Only featured listings

At the top of the page, **Only featured listings** posts a listing only when it becomes
[featured](/how-to-create-featured-plan/), instead of every new listing. It applies to every channel.

**Only featured listings** makes a good selling point: offer "shared with our followers" as part of your featured
listing packages.
{: .tip}

## Post to a Facebook Page

Yclas posts to a Facebook Page you manage, through a Facebook app of your own. You create the app once; after that,
connecting is a click.

1. Go to [developers.facebook.com](https://developers.facebook.com), sign in with the Facebook account that manages
   your Page, and create an app. Add the **Facebook Login** product to it.
2. In Facebook Login's settings, add this address under **Valid OAuth Redirect URIs**, with your site's own address
   in front: `https://yourdomain.com/oc-panel/integrations/social/callback_facebook`
3. Copy the app's **App ID** and **App Secret** (in the app's settings, under **Basic**).
4. On the **Social posting** page, in **Facebook Page**, paste them into **Facebook App ID** and **Facebook App
   Secret**, and click **Save**.
5. Click **Connect Facebook**. Facebook asks you to sign in and which Pages Yclas may post to: choose the Page you
   want your listings on.
6. Back on the page, it says *Connected to* and your Page's name, and the **Facebook Page** switch is on. New
   listings are posted from now on.
{: .steps}

Each post has the listing's title, price and location, with a link to the listing that Facebook shows as a preview.

Yclas connects the first Page Facebook gives it access to. If you manage several Pages, choose only the one you want
in step 5. To switch to another Page, click **Disconnect** and connect again.
{: .note}

## Post to a Telegram channel or group

Telegram posts go through a bot that you create and add to your channel.

1. In Telegram, message **@BotFather**, send `/newbot` and follow the steps. BotFather gives you the bot's token,
   which looks like `123456:ABC-DEF…`.
2. Add the bot to your channel or group as an **administrator**, with permission to post.
3. On the **Social posting** page, in **Telegram**, paste the token into **Bot Token**.
4. In **Channel or chat**, enter your channel's username with the @, for example `@yourchannel`. For a private group,
   enter its numeric chat id instead.
5. Switch **Telegram** on and click **Save**.
{: .steps}

Each post has the listing's title, price and location, and the link to the listing on the next line.

## Post to X (Twitter)

Each post contains the listing's title, category, location and price, a link to the listing, and hashtags made from
your site name, the category and the location, for example:

> Mountain bike 26", Bikes - Bristol, £150 - https://yourdomain.com/bikes/mountain-bike-26.html - #YourSite #Bikes #Bristol

Long titles and names are shortened to keep the post within X's length limit.

X doesn't let sites connect with a sign-in button, so you paste the keys of your own X developer app. X has changed
its API access and pricing several times, and the older API this integration uses isn't available on every X
developer plan. Check that your plan allows posting through the API before you set it up, and test it with a listing.
{: .important}

1. Sign in to the [X Developer Portal](https://developer.x.com) with the X account you want to post from, and create
   a project and an app.
2. In the app's **User authentication settings**, set the app permissions to **Read and write**.
3. Under **Keys and tokens**, copy the **API Key** and **API Key Secret** (also called consumer key and secret).
4. On the same page, generate an **Access Token and Secret** for your account. Generate them after setting **Read
   and write**, otherwise they can't post.
5. On the **Social posting** page, in **X**, paste the four values into **Consumer Key**, **Consumer Secret**,
   **Access Token** and **Access Token Secret**.
6. Switch **X** on and click **Save**. The section says *Ready to post* once everything is filled in.
{: .steps}

If your site already posted to X before the Social posting page existed, nothing changes: your keys are already on
this page and it keeps posting.

## Pin to Pinterest

Each new listing becomes a Pin on one of your Pinterest boards: its first photo, its title, a description with the
price, location and the start of the listing's text, and a link back to the listing. You connect through a Pinterest
app of your own, as for Facebook.

1. Go to [developers.pinterest.com](https://developers.pinterest.com), sign in with the Pinterest account you want to
   pin from, and create an app.
2. Add this address to the app's redirect URIs, with your site's own address in front:
   `https://yourdomain.com/oc-panel/integrations/social/callback_pinterest` (the **Pinterest** section of the Social
   posting page shows it ready to copy).
3. Copy the app's ID and secret.
4. On the **Social posting** page, in **Pinterest**, paste them into **Pinterest App ID** and **Pinterest App
   Secret**, and click **Save**.
5. Click **Connect Pinterest**. Pinterest asks you to sign in and allow access.
6. Back on the page, pick the **Board** to pin to and click **Save**. If your account has only one board, it is picked
   for you.
{: .steps}

The section then says *Connected, pinning to* and the board's name, and the **Pinterest** switch is on.

If the page says *No boards found on your Pinterest account*, create a board on Pinterest, then reload the page. To
pin to another account, click **Disconnect** and connect again.

A Pin needs a picture: listings without a photo aren't pinned, unless a share picture has already been made for them
with the Nova share buttons.
{: .note}

## Post to TikTok

Each new listing is posted to your TikTok account as a photo carousel: up to 35 of its photos, its title, and a
caption with the price, location, the listing's link and hashtags. TikTok shows links in captions as plain text, so
people can't tap them.

<div class="important" markdown="1">
**TikTok must approve your app before your posts are public.**

You post through a TikTok developer app of your own. Until TikTok has audited it for the Content Posting API, it can
only post privately: posts are visible to you alone, and your TikTok account must be set to private. Request the
audit in your app at developers.tiktok.com. TikTok decides whether to approve it.
</div>

### Create your TikTok app

1. Go to [developers.tiktok.com](https://developers.tiktok.com) and create an app with **Login Kit** and the **Content
   Posting API**, with Direct Post switched on.
2. Add this address to the app's redirect URIs, with your site's own address in front:
   `https://yourdomain.com/oc-panel/integrations/social/callback_tiktok`
3. Copy the app's client key and client secret.
{: .steps}

### Let TikTok fetch your photos

TikTok only takes photos from web addresses you have proved are yours. Your site serves the photos for TikTok under
one address, `https://yourdomain.com/social/tiktok/` (the page shows yours), and you verify that address in your app:

1. In your TikTok app's URL properties, add that address as a URL prefix. TikTok gives you a signature file to prove
   it's yours.
2. On the **Social posting** page, in **TikTok**, enter the file's name (it looks like `tiktokAbC123.txt`) under
   **Verification file name** and its text under **Verification file text**, and click **Save**. Your site now
   serves that file at that address.
3. Back in TikTok, click to verify the URL prefix.
{: .steps}

With your own domain, you can verify the whole domain in its DNS settings instead, as TikTok explains in your app.
{: .tip}

### Connect your TikTok account

1. On the **Social posting** page, in **TikTok**, paste the key and secret into **TikTok Client Key** and **TikTok
   Client Secret**, and click **Save**.
2. Click **Connect TikTok**. TikTok asks you to sign in and allow access.
3. Back on the page, the section says *Connected to* and your TikTok username, and the **TikTok** switch is on.
{: .steps}

If it also says *TikTok does not allow this app to post publicly yet*, your posts will be private until TikTok approves
your app. Each post uses the most public setting TikTok allows your account at that moment.

What to know:

- Listings without a photo aren't posted to TikTok.
- Photos are sent as JPEGs of at most 1080 by 1920 pixels. Your site only serves them while TikTok is connected, and
  only for published listings.
- While your site is in maintenance mode, TikTok can't fetch the photos. The post fails and is retried (see
  [Recent posts and retries](#recent-posts-and-retries)).
- A post shows as **Sent** once TikTok has accepted it. If TikTok rejects the photos afterwards, check your app's URL
  prefix.

## When a listing is posted

- **Every new listing** (the default): when it goes live, either straight after posting or when you approve it in
  [Moderation](/how-ads-moderation-works/).
- **Only featured listings**: when a listing becomes featured.

Each listing is posted once per channel. Editing it, approving it again or featuring it later doesn't post it again.
Listings brought in with an [import](/how-to-migrate-osclass-to-yclas/) or a business seller's bulk import are never
posted, so a big import doesn't flood your followers.

## Recent posts and retries

Once something has been posted, a **Recent posts** table appears at the bottom of the page with the last 30 posts:
the listing, the channel, the status and, for a problem, the message the network sent back.

| Status | What it means |
| --- | --- |
| **Sent** | The post is on the channel. |
| **Retrying** | The network refused or didn't answer. Yclas tries again after 5 minutes, then 15, 45 and 135. |
| **Failed** | It still didn't work after five tries. Check the message in **Detail**: usually a key has changed or the bot or app lost its permission. |

A post that fails never stops a listing from being published: it just doesn't appear on that channel. A listing
that is no longer published by the time of a retry isn't posted.
{: .note}

## Instagram

The **Instagram** section on the same page doesn't post your listings. It is an older feature that let sellers
connect their own Instagram account so their latest photos showed on their listings, and it relies on an Instagram
service Meta has shut down. Leave it switched off. See [Other integrations](/other-integrations/#instagram).

## Share buttons on Nova

On the **Nova** theme, the **Share** button on a listing opens one-tap buttons for **WhatsApp**, **Facebook**,
**Telegram** and **X**, plus **Copy link**, with a picture of the listing made from its photo, price and your logo.
Sellers also find the same buttons in the menu of each live listing on their **My Listings** page.

New sites have these share buttons on. On older sites they're off, and the Share button shows the classic ShareThis
buttons instead. To switch:

1. Go to **Settings › General**.
2. In **Sharing**, switch **Share buttons** on or off. (This section only shows while your site uses Nova.)
3. Click **Save changes** in the bar at the bottom.
{: .steps}

The Share button itself only appears while **Sharing buttons** is on under **Listings › Settings › Listing details**.
If **Share buttons** says *Set by Yclas support for your site*, ask us through **Support** to change it.

## Other ways to connect with Facebook

| You want | Use |
| --- | --- |
| Members to sign in with Facebook | [Social login](/how-to-login-using-social-auth-facebook-google-twitter/). |
| Comments on listings with Facebook accounts | Facebook comments. See [Comments on listings and posts](/how-to-activate-comments-with-disqus/). |
| To measure Facebook and Instagram ads | The Meta Pixel. See [Tracking codes and analytics pixels](/how-to-add-tracking-codes/). |
| Share buttons on themes other than Nova | The ShareThis buttons on listing pages, and the share widget. See [Widgets](/overview-of-widgets/). |

## Related guides

- [Promote your marketplace](/promote-classifieds-website-free/) — more ways to bring in visitors.
- [Featured listings and promotions](/how-to-create-featured-plan/) — what members pay for.
- [Push notifications](/push-notifications/) — tell members about new messages and matching listings.
- [Integrations](/integrations-overview/) — every service you can connect.
{: .cards}
