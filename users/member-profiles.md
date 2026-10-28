---
title: Member profiles and the members directory
nav_title: Member profiles
description: What visitors see on a member's public page, how members show their location on a map, and the searchable list of all members.
section: users
order: 35
permalink: /member-profiles/
redirect_from:
  - /location-for-user/
keywords: public profile, user profile, seller page, member page, members directory, users list, user search, location, address, map, about, member since, store, storefront, stores directory
updated: 2026-10-20
plans: Available on all plans
---

Every active member has a public profile page at `/user/their-name` on your site. Buyers land there when they click a
seller's name on a listing, so a complete profile helps sellers earn trust. Your site also has a members directory
at `/user` that lists everyone.

## What's on a profile

Depending on your theme and the features you use, a member's profile shows:

| Part | Comes from |
| --- | --- |
| Name, profile picture, **Member since** and **Last active** | The member's account. Members change their name and pictures on **Edit profile**. |
| Verified tick, and with earned badges the level (**Verified**, **ID verified** or **Verified business**) | [Verified members](/verified-user/#verification-levels). |
| **Send Message** button | Opens your [messaging system](/how-to-use-messaging-system/), or a contact form if messaging is off. |
| WhatsApp, Skype and Telegram buttons | The special [user custom fields](/users-custom-fields/#field-names-with-special-behaviour) `whatsapp`, `skype` and `telegram`. |
| **Send Money** button | The [eWallet](/ewallet/), if it's on. |
| Rating and **Reviews** tab | [Reviews and ratings](/review-system-works/), if they're on. |
| Their published listings, with a count | The member's live listings. |
| **About** | The description the member writes on **Edit profile**. |
| Extra details | User custom fields with **Show on profile** switched on. |
| A map of their address | See below. |

Only **Active** members have a public profile. Inactive, unconfirmed and spam accounts show a "page not found" page.

Profiles of members who have no live listings are hidden from search engines automatically. Spam sign-ups often fill
in a profile only to place links on your site; this takes away their reward.
{: .note}

## Profiles that become stores

On the Marketplace plan with the Nova theme, you can switch on [seller storefronts](/storefronts/). A seller who sets
up a store gets a store page at the same address instead of the profile: their store name, logo and banner, their
listings with a search of their own, and their shipping and returns policies. Sellers without a store keep the profile
described here. The [stores directory](/storefronts/#the-stores-directory) at `/stores` then lists every store, much
as the members directory below lists members.

## Show members' location on a map

Sellers can show where they are, which helps local buyers. The profile then shows a small map with a **Map View**
button that opens the full map.

1. Set up Google Maps with an API key: go to **Add-ons** and open **Google Maps**. See
   [Maps](/how-to-configure-Google-Map-Settings/).
2. On the same page, tick **Map in the posting form**, so members can find their address on a map when they
   edit their profile, and **Map on listings and profiles**, so the map is shown.
3. Click **Save**.
{: .steps}

Each member then types their address in **Address** on their **Edit profile** page and saves it. Members viewing
their own profile without an address see a reminder link: "Click here to enter your address."

The map only appears once a member's address has been placed on the map, so addresses saved before you switched on
**Map in the posting form** need saving again. Members who'd rather not show where they live can enter just their
town.
{: .tip}

## The members directory

The page at `/user` lists all active members, with their picture, verified tick and number of listings. Visitors
can:

- search members by name or by words in their description (at least three characters),
- filter by any user custom field marked **Searchable**, such as "Business" or "Verified seller",
- sort by **Rating**, **Name (A-Z)**, **Name (Z-A)**, **Newest**, **Oldest**, **More Ads** or **Less Ads**.

The directory shows the first 50 pages of results; visitors should narrow their search to find someone further down.

### Make the directory your home page

On marketplaces where people matter more than items, such as directories of tradespeople, tutors or businesses, you
can open your site on the members list:

1. Go to **Settings › General**.
2. In **Your site**, set **Landing Page** to **Users**.
3. Click **Save changes**.
{: .steps}

Add a link to `/user` in your [menu](/modify-top-menu/) if you want visitors to find the directory from every page.

## Related guides

- [Your profile](/how-to-edit-your-profile/) — the member's own account pages and Edit profile.
- [User custom fields](/users-custom-fields/) — add details to profiles.
- [Verified members](/verified-user/) — the verified tick.
- [Seller storefronts and the stores directory](/storefronts/) — turn sellers' profiles into stores.
- [Manage users](/manage-users/) — statuses that hide a profile.
{: .cards}
