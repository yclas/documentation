---
title: Pay to post
description: Charge members for posting a listing, with a different price per category, and choose whether paid listings still go through moderation.
section: payments
order: 80
permalink: /pay-to-post/
keywords: pay to post, paid listing, paid category, category price, charge for posting, posting fee, listing fee, payment on, payment with moderation, paid ads
updated: 2026-10-07
---

With pay to post, members pay a fee before their listing goes live. You set the price per category, so you can
charge for cars and property while keeping small items free.

Pay to post is a good fit for marketplaces where each listing is worth a lot to the seller: vehicles, property, jobs,
business listings. If you'd rather charge per month for unlimited or bundled listings, use
[membership plans](/membership-plans/) instead.

## Switch it on

1. Go to **Listings › Categories**, open a category and enter a **Price**. Click **Submit**. Repeat for every category
   that should cost something.
2. Go to **Settings › Payments**.
3. In **Pay to post**, set **Charge for posting** to **Payment on** or **Payment with Moderation**.
4. Click **Save changes**.
{: .steps}

Paid categories show a *… to post* label in the category list, so you can check your prices at a glance.

Connect a [payment method](/setup-payment-gateways/) before you switch this on. Without one, members can post but
never pay, and their listings stay unpublished.
{: .important}

## The three options

| Charge for posting | What happens |
| --- | --- |
| **No charge** | Posting is free. Listings follow your normal [moderation](/how-ads-moderation-works/) setting, shown in brackets. |
| **Payment on** | In a paid category the member pays straight after posting, and the listing is published as soon as the payment goes through. |
| **Payment with Moderation** | The member pays straight after posting, then the listing waits in **Listings › Moderation** until you approve it. |

**Charge for posting** is the same choice as **How new listings go live** in **Settings › General › Moderation**,
so changing one changes the other. **Payment on** replaces email confirmation and moderation; choose
**Payment with Moderation** if you still want to check every listing. To go back to free posting, choose
**No charge**: your previous moderation mode is kept.
{: .note}

## How prices work

- Each category has its own price. A subcategory with no price (0) uses its parent category's price.
- A category whose price, and whose parent's price, is 0 stays free. Listings there are published as if pay to post
  were off: directly with **Payment on**, through moderation with **Payment with Moderation**.
- Prices are in your **Payment Currency** and include [VAT](/eu-vat/) at checkout if you have set it up.
- Members can use a [coupon](/how-to-use-coupon-system/) for the *Post in paid category* product.

## What members see

1. The member fills in the posting form as usual and submits it.
2. They see *Please pay before we publish your listing.* and go to the checkout page.
3. They pay with any payment method you have connected.
4. With **Payment on**, the listing is published and they get a confirmation email. With
   **Payment with Moderation**, they're told it will be published after review.
{: .steps}

Until it is paid, the listing is saved as unpublished. Members can pay later from **My Listings**, where unpaid
listings show a **Pay** button, and two days after posting they get an email reminder with a link to the checkout.

If a member edits a listing and moves it into a paid category, they are asked to pay for the new category.

## Manage paid listings

- Every payment creates an order of type **Post in paid category**. See [Orders and transactions](/how-to-manage-orders/).
- To publish a listing without payment (for example a partner's), open the checkout from the unpaid order and click
  **Mark as paid**, or mark the order as paid in **Orders**.
- Expired listings are renewed according to your [expiry settings](/ad-expiration/).

## Related guides

- [Categories](/how-to-add-categories/) — create categories and set their price.
- [Moderation](/how-ads-moderation-works/) — review listings before they go live.
- [Membership plans](/membership-plans/) — charge a subscription instead of per listing.
- [Featured listings and bring to top](/how-to-create-featured-plan/) — extras sellers can add.
{: .cards}
