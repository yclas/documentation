---
title: Let sellers show their connected social accounts
nav_title: Connected social accounts
description: Sellers link their Google or Facebook account to their profile, and buyers see which ones next to the seller's badges.
section: users
order: 44
permalink: /connected-accounts/
keywords: connected accounts, social accounts, connect google, connect facebook, connect linkedin, linkedin, social proof, seller trust, social account connected, verify with google, linked accounts, social verification
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Sellers connect their Google or Facebook account from their **Trust & verification** page.
- Buyers then see **Connected: Google, Facebook** next to the seller's badges, on their profile and listings.
- It shows the seller has a real account there. It is not an ID check and never gives the verified badge.
- Off by default. It needs **Verification requests** on and the provider set up in **Social login**.
</div>

Buyers trust a seller more when they can see the person behind the profile. With connected accounts, sellers can link
the Google or Facebook account they already have, and buyers see which ones they linked.

Connecting only proves that the seller could sign in to that account once. It doesn't check their identity, so it is
always labelled **Connected**, never **Verified**. For real ID checks, use [verification requests](/verified-user/) or
[automatic ID checks](/id-verification/).
{: .note}

## What you need

- **Verification requests** switched on in **Settings › General**, under **Trust & safety**. Connected accounts are
  stored with the verification requests, so they only work while those are on.
- **Google** or **Facebook** (or both) switched on and set up in the **Social login** add-on. See
  [Social login](/how-to-login-using-social-auth-facebook-google-twitter/). Sellers can only connect the providers
  that are switched on there. Sites that set up LinkedIn sign-in in the past can offer LinkedIn too; it can't be
  added from the panel any more.

## Switch it on

1. In the admin panel, go to **Add-ons**, open the **Security** tab and click **Trust & safety**.
2. In **Connected accounts**, switch on **Let sellers connect social accounts**. Underneath, the page lists the
   providers that are available now. If it asks you to switch on a provider in the Social login add-on first, do
   that, then come back.
3. Optionally, switch on **Show a mark for a connected account** (see below).
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Let sellers connect social accounts** | Adds a **Connected accounts** box to each member's **Trust & verification** page, and shows the connected accounts to buyers. |
| **Show a mark for a connected account** | Off by default. Sellers with a connected account and no verified badge get a separate outlined **Social account connected** mark next to their name. It never counts as verified, so features for verified sellers only (such as verified-only auctions) stay closed to them. If your site has a **verifiedbadge** user field, only the sellers you ticked get the mark. |

## What sellers do

1. They open **Trust & verification** from their account menu.
2. In **Connected accounts**, they click **Connect Google** or **Connect Facebook**.
3. They sign in at that provider and allow access, then come back to the page, which says
   *Your Google account is connected.*
{: .steps}

Only the account's id at the provider is kept, to show it is connected. Your site doesn't keep the provider's access
tokens, and it doesn't post anything to the seller's account.

- A seller who signed up with Google or Facebook already counts as connected to it. That one can't be
  removed, because they sign in with it.
- Any other connected account has a **Remove** link. After removing it, it is no longer shown on their profile.
- One Google or Facebook account can only be connected to one member. Trying to connect it to a second one
  shows *This Google account is already connected to another member.*

## What buyers see

On the seller's profile and on their listings, after the seller's badges, buyers see a label such as
**Connected: Google, Facebook**. Hovering over it explains that the seller connected these accounts and that it is not
an ID check.

With **Show a mark for a connected account** on, a seller without a verified badge also gets the outlined
**Social account connected** mark next to their name. A seller who is verified keeps their verified badge instead.

Connected accounts don't appear in **Verification requests**: there is nothing for you to approve.

## Related guides

- [Verified members](/verified-user/): verified badges from documents you check yourself.
- [Automatic ID checks](/id-verification/): Stripe Identity or Onfido check sellers' IDs for you.
- [Social login](/how-to-login-using-social-auth-facebook-google-twitter/): set up Google and Facebook sign-in.
- [Member profiles](/member-profiles/): what buyers see on a seller's profile.
{: .cards}
