---
title: Publishing options
description: Decide who can post, how many listings a member may publish, how long listings stay up, and how lists of listings are shown and sorted.
section: listings
order: 40
permalink: /how-to-configure-publish-options/
redirect_from:
  - /force-registration-posting-new-ad/
  - /how-to-change-settings-for-ads/
keywords: listing settings, publish options, login to post, register before posting, only admin, listings per day, limit, expiration, reactivation, delete, parent category, captcha, bbcode, terms of service, thank you page, listings per page, sort, home page, related, rss, map
updated: 2026-10-07
---

**Listings › Settings** (the **Listing Settings** page) holds the rules for posting and for how listings are shown.
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
| **Listings per Page** | How many listings each page of results shows. |
| **Sort Listings** | The default order of listings: **Name (A-Z)**, **Name (Z-A)**, **Price (Low)**, **Price (High)**, **Featured**, **Rating**, **Favorited**, **Newest**, **Oldest**, **Distance** or **Event date**. Visitors can still choose another order. |
| **Listings on the Home Page** | Which listings the home page shows: **Latest Listings**, **Random Listings**, **Featured Listings**, **Features Listings Randomly**, **Popular Listings Last Month** or **None**. *Popular* is only offered while **Count Visits Listings** is on. |
| **Related Listings** | How many similar listings to show under each listing. Enter 0 to show none. |
| **Listings per Map** | How many listings the map page shows. |
| **Listings in RSS** | How many listings your RSS feed contains. |

**Distance** only works for visitors who have shared their location, and only for listings with map coordinates.
**Event date** only makes sense if you have an `eventdate` [custom field](/special-custom-fields/); with that order,
listings without an event date are left out.
{: .note}

## Posting

| Setting | What it does |
| --- | --- |
| **Require Login to Post** | Visitors must sign in or create an account before they see the posting form. When it is off, visitors can post by entering their name and email, and an account is created for them. |
| **Limit published listings per day** and **Listings per day limit** | Appear when **Require Login to Post** is on. Caps how many listings one member can publish per day. |
| **Only Administrators Can Publish** | Only administrators and moderators can post. Everyone else who opens the posting page is sent to the home page. Useful for a directory or a shop you fill yourself. |
| **Listing Expiration Date** | After how many days a listing expires. Enter 0 to never expire. See [Listing expiry and renewal](/ad-expiration/). |
| **Allow Listing Reactivation** | Lets sellers put an expired listing back online. |
| **Delete Listings** | Lets sellers permanently delete their own listings. When it is off, they can only deactivate them. |
| **Parent Category** | Lets sellers post in a top-level category (for example *Vehicles*) instead of having to pick a subcategory (*Cars*). |
| **Captcha** | Adds a captcha to the posting form. If you have set up [reCAPTCHA](/set-recaptcha-website/), that is used; otherwise a simple image captcha. |
| **BBCODE Editor on Description Field** | Gives the description a small formatting toolbar (bold, lists, links, YouTube videos). When it is off, descriptions are plain text. See [Add YouTube videos to listings](/how-to-create-custom-fields/#add-youtube-videos-to-listings). |
| **Leave Alert Before Submitting Form** | Warns sellers who try to leave the form before publishing. |
| **Terms of Service** | Pick one of your [pages](/how_to_add_pages/). Sellers must tick *I agree to the Terms of service* to post. **Deactivated** turns it off. |
| **Thank You Page** | Pick a page to show after someone posts. See [Thank-you page after posting](/thanks-page/). |

### Login is required anyway when…

Members always have to sign in before posting, whatever **Require Login to Post** says, when you use
[membership plans](/membership-plans/), [Stripe Connect](/stripe/) or [Escrow payments](/escrow-pay/). Those
features need to know who the seller is.

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

- [Listing page and form fields](/how-to-manage-advertisement-fields/) — the rest of the Listing Settings page.
- [Moderation](/how-ads-moderation-works/) — how new listings go live.
- [How members post a listing](/how-members-post-listings/) — the form your sellers fill in.
- [Listing expiry and renewal](/ad-expiration/) — expiry, reminders and renewing.
{: .cards}
