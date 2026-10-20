---
title: Publishing options
description: Decide who can post, how many listings a member may publish, how long listings stay up, and how lists of listings are shown and sorted.
section: listings
order: 40
permalink: /how-to-configure-publish-options/
redirect_from:
  - /force-registration-posting-new-ad/
  - /how-to-change-settings-for-ads/
keywords: listing settings, publish options, login to post, register before posting, only admin, listings per day, limit, expiration, reactivation, delete, parent category, captcha, bbcode, terms of service, thank you page, listings per page, sort, home page, related, rss, map, business only, only businesses can post, who can post
updated: 2026-10-20
---

**Listings › Settings** holds the rules for posting and for how listings are shown.
This guide covers the **Listing pages** and **Posting** sections. The **Form fields** and **Listing details** sections
have their own guide: [Listing page and form fields](/how-to-manage-advertisement-fields/).

To change any of these settings:

1. In the admin panel, go to **Listings › Settings**.
2. Change what you need. The section menu on the left jumps to each group.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

## Listing pages

| Setting | What it does |
| --- | --- |
| **Listings per page** | How many listings each page of results shows. |
| **Default sort order** | The default order of listings: **Name (A-Z)**, **Name (Z-A)**, **Price (Low)**, **Price (High)**, **Featured**, **Rating**, **Favorited**, **Newest**, **Oldest**, **Distance** or **Event date**. Visitors can still choose another order. |
| **Home page listings** | Which listings the home page shows: **Latest Listings**, **Random Listings**, **Featured Listings**, **Features Listings Randomly**, **Popular Listings Last Month** or **None**. *Popular* is only offered while **Count Visits Listings** is on. |
| **Related listings** | How many similar listings to show under each listing. Enter 0 to show none. |
| **Listings on the map** | How many listings the map page shows. |
| **Listings in the RSS feed** | How many listings your RSS feed contains. |

**Distance** only works for visitors who have shared their location, and only for listings with map coordinates.
**Event date** only makes sense if you have an `eventdate` [custom field](/special-custom-fields/); with that order,
listings without an event date are left out.
{: .note}

## Posting

| Setting | What it does |
| --- | --- |
| **Require login to post** | Visitors must sign in or create an account before they see the posting form. When it is off, visitors can post by entering their name and email, and an account is created for them. |
| **Daily posting limit** and **Listings per day** | Appear when **Require login to post** is on. Caps how many listings one member can publish per day. |
| **Only admins can post** | Only administrators and moderators can post. Other visitors can't open the posting form. Useful for a directory or a shop you fill yourself. |
| **Listings expire after** | After how many days a listing expires. Enter 0 to never expire. See [Listing expiry and renewal](/ad-expiration/). |
| **Allow reactivation** | Lets sellers put an expired listing back online. |
| **Let users delete listings** | Lets sellers permanently delete their own listings. When it is off, they can only deactivate them. |
| **Post in main categories** | Lets sellers post in a top-level category (for example *Vehicles*) instead of having to pick a subcategory (*Cars*). |
| **Captcha** | Adds a captcha to the posting, contact, sign-up and review forms: Cloudflare Turnstile, which most visitors never notice, when it is available, otherwise [reCAPTCHA](/set-recaptcha-website/) or a picture to type. |
| **Description editor** | Gives the description a small formatting toolbar (bold, lists, links, YouTube videos). When it is off, descriptions are plain text. See [Add YouTube videos to listings](/how-to-create-custom-fields/#add-youtube-videos-to-listings). |
| **Warn before leaving** | Warns sellers who try to leave the form before publishing. |
| **Terms of service** | Pick one of your [pages](/how_to_add_pages/). Sellers must tick *I agree to the Terms of service* to post. **Deactivated** turns it off. |
| **Privacy policy**, **Cookies policy** | Pick the pages with your policies. They stay readable even on a [private site](/private-site/). |
| **Thank-you page** | Pick a page to show after someone posts. See [Thank-you page after posting](/thanks-page/). |

### Login is required anyway when…

Members always have to sign in before posting, whatever **Require login to post** says, when you use
[membership plans](/membership-plans/), [Stripe Connect](/stripe/) or [Escrow payments](/escrow-pay/). Those
features need to know who the seller is.

### Only businesses, or only some members, can post

To let only business accounts post, or to keep some categories for businesses or for private sellers, use the
business seller options instead of **Only admins can post**: see
[Private and business accounts](/account-types/#choose-who-can-post). Everyone else can still browse and contact
sellers.

### How the daily limit counts

The limit counts the member's listings that were **published** today. Listings waiting in moderation don't count
until you approve them, and approving a listing counts towards the day you approve it. The limit applies to every
signed-in member, administrators included.

Requiring login doesn't make spam go away by itself, but combined with a daily limit, [email verification on
sign-up](/registration-and-login/) and [moderation](/how-ads-moderation-works/) it stops most bulk posting.
{: .tip}

## Banned words

The **Banned words** section at the bottom of the page blocks or replaces words in titles and descriptions. It is
explained, together with the black list, in [Black list and banned words](/activate-blacklist-works/).

## Limits from your Yclas plan

Your plan sets the most listings your marketplace can hold and the most photos per listing. You can lower the photo
limit, but not raise it above your plan. See [Plans and billing](/plans-and-billing/).

## Related guides

- [Listing page and form fields](/how-to-manage-advertisement-fields/) — the rest of **Listings › Settings**.
- [Moderation](/how-ads-moderation-works/) — how new listings go live.
- [How members post a listing](/how-members-post-listings/) — the form your sellers fill in.
- [Listing expiry and renewal](/ad-expiration/) — expiry, reminders and renewing.
{: .cards}
