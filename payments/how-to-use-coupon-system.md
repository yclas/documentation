---
title: Coupons
description: Create discount codes for featured listings, pay to post, plans and other extras, share them with a link, and import or export them in bulk.
section: payments
order: 100
permalink: /how-to-use-coupon-system/
keywords: coupon, coupons, discount, discount code, promo code, voucher, percentage, fixed amount, free, promotion, import coupons, export coupons, bulk coupons, checkout
updated: 2026-10-07
---

Coupons are discount codes members type at checkout, such as `SUMMER20` for 20% off. Use them to win back sellers,
reward your best members, run a launch offer or give partners a free featured listing.

Coupons work on everything members pay **you** for: featured listings, bring to top, pay to post, membership plans and
eWallet top-ups. They don't apply to items sellers sell with [Buy Now](/pay-directly-from-ad/).

## Create a coupon

1. Go to **Settings › Coupons** and click **+ New coupon**.
2. Fill in the form (see the table below).
3. Click **Create coupon**.
{: .steps}

| Field | What it does |
| --- | --- |
| **Coupon code** | What members type at checkout, for example `WELCOME10`. Each code must be unique and can't be changed later. |
| **Applies to** | **Any product**, or one product only: *Post in paid category*, *Top up ad* (bring to top), *Featured ad*, *Add money* (eWallet), or one of your [membership plans](/membership-plans/). |
| **Discount** | Choose **%** for a percentage off, or your currency for a fixed amount off, and enter the value. A 100% discount makes the purchase free. |
| **Valid until** | The coupon works until the start of this day. To include the last day of a promotion, pick the day after. |
| **Uses left** | How many times the coupon can still be used in total, across all members. Each paid order uses one. |

Always enter a discount. A coupon saved with no percentage and no amount makes the purchase free.
{: .warning}

The coupon list shows each coupon's discount, product, uses left and end date, with a status: **Active**,
**Expired**, **Used up** or **Inactive**.

## Edit or pause a coupon

Click a coupon's code to edit it. You can change everything except the code. Switch off **Active** to pause a
coupon: inactive coupons are refused at checkout. Click **Save changes**.

To give a coupon more uses, raise **Uses left**.

## How members use a coupon

Members have three ways to apply a code:

- **At checkout.** The checkout page shows a coupon box whenever you have at least one active coupon. The member
  types the code and clicks **Add**.
- **With a link.** Add `?coupon=CODE` to any link to your site, for example
  `https://your-site.com/?coupon=WELCOME10`. The coupon is remembered for that visitor and applied at their next
  checkout. Ideal for newsletters and social posts.
- **From a widget.** Add the **Coupon** [widget](/overview-of-widgets/) in **Design › Widgets** so members can enter a
  code from any page.

A coupon that doesn't exist, has expired or has no uses left is refused with *Coupon not valid, expired or already
used.*

The discount is taken off before [VAT](/eu-vat/) is added. If the discount brings the price to zero, the member
clicks **Click to proceed** instead of paying.

## Import and export coupons

Use import when a partner gives you a list of codes, or to create many coupons at once.

1. Click **Download example** on the Coupons page to get the sample file.
2. Prepare a CSV file with this header row and one coupon per line:
   `name,id_product,discount_amount,discount_percentage,number_coupons,valid_date,status`
3. In **Import coupons**, choose the file and click **Upload**.
{: .steps}

| Column | What to enter |
| --- | --- |
| `name` | The code. |
| `id_product` | Empty for any product, or a product number: `1` pay to post, `2` bring to top, `3` featured, `7` eWallet money. Membership plans use their own plan number (100 or above). |
| `discount_amount` / `discount_percentage` | Fill in one of the two. |
| `number_coupons` | Uses. |
| `valid_date` | End date as `YYYY-MM-DD`. |
| `status` | `1` active, `0` inactive. |

Files can be up to 1 MB and 10,000 coupons. **Export CSV** downloads all your coupons in a spreadsheet file.

To generate many unique single-use codes at once (for example 500 codes for a printed flyer), the bulk generator at
`/oc-panel/coupon/bulk` on your site creates random 8-character codes with the discount, product and end date you
choose.
{: .tip}

## Related guides

- [Featured listings and bring to top](/how-to-create-featured-plan/) — the most common thing to discount.
- [Membership plans](/membership-plans/) — coupons work for plans too.
- [Orders and transactions](/how-to-manage-orders/) — orders show which coupon was used.
{: .cards}
