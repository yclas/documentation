---
title: Coupons on sales
description: Let sellers create discount codes for their own items, and offer your own codes paid from your commission, which buyers enter when they pay for their cart.
nav_title: Coupons on sales
section: payments
order: 540
permalink: /coupons-on-sales/
keywords: seller coupons, seller coupon, my coupons, discount code, promo code, voucher, sale coupon, coupon on sales, coupon in cart, cart coupon, shop discount, store discount, coupon for buy product, discount on items
updated: 2026-10-20
plans: Marketplace plan
---

Sellers run their own promotions: 10% off for a weekend, 5 off for returning customers, a code printed on a flyer.
With coupons on sales, each seller can create discount codes for their own items, and you can offer codes of your
own. Buyers enter the code when they pay for their [cart](/shopping-cart/).

These coupons work on sales between members. For discounts on what members pay **you** (featured listings, plans,
pay to post), use the [Coupons](/how-to-use-coupon-system/) page as usual.

Coupons on sales apply in the [shopping cart](/shopping-cart/) paid in one payment, so they need the
**Marketplace plan**, Stripe Connect and the **Nova** theme. They are off until you switch them on.
{: .note}

## Switch coupons on sales on

1. Switch on the [shopping cart](/shopping-cart/#switch-the-cart-on) and click **Save**. The option only appears once
   the cart is on and can be paid in one payment.
2. On the same **Commission on sales** page, switch on **Coupons on sales**.
3. Click **Save**.
{: .steps}

Sellers then find **My coupons** in their account menu.

If you see *Our team has switched coupons on sales on (or off) for your site*, ask us through **Support** to change
it.

## Two kinds of coupon

| | A seller's coupon | Your coupon |
| --- | --- | --- |
| Who creates it | The seller, in **My coupons** | You, as a coupon for the **Buy product** product |
| What it takes off | That seller's items only, in a cart with items from several sellers | Your commission on the items in the cart |
| Who pays for the discount | The seller: it comes off their price, before your commission is worked out | You: the sellers still get their full share |

## How sellers create a coupon

1. The seller opens **My coupons** in their account menu.
2. They fill in the form (see the table) and click **Make coupon**.
{: .steps}

| Field | What it does |
| --- | --- |
| **Code** | What buyers type, 3 to 40 letters, numbers, `-` or `_`, for example `SUMMER10`. Each code must be unique on your site. |
| **Discount** and **Value** | **% off** for a percentage, or an amount off in your currency. |
| **Times it can be used** | How many paid orders can use it, in total. 100 unless changed. |
| **Last day** | The coupon works until the end of this day. |

Their coupons are listed below the form with the uses **Left** and the **Last day**. **Switch off** stops a coupon
(*Not active*). A seller can have up to 50 coupons.

A seller's coupon takes its discount off their items, not their shipping. A fixed amount is shared across their
items in the cart and never takes more than their items cost. Your commission is then worked out on the lower price,
and any VAT for VAT-registered sellers too.

## Your own coupons for sales

Your coupons are ordinary [coupons](/how-to-use-coupon-system/) whose product is **Buy product**. The **Applies to**
list on the coupon form doesn't include **Buy product**, so create them by importing a CSV file:

1. Go to **Settings › Coupons** and click **Download example**.
2. Fill in one line per coupon, with `4` in the `id_product` column (4 is **Buy product**). See
   [Import and export coupons](/how-to-use-coupon-system/#import-and-export-coupons) for the other columns.
3. In **Import coupons**, choose the file and click **Upload**.
{: .steps}

Your coupon comes off your commission on each item, never more than that commission. The buyer pays less and every
seller still receives their full share. If you take no commission on an item, your coupon takes nothing off it.

**Example:** your commission is 10% and a buyer's cart holds 200 of items. With your `WELCOME5` coupon for 5 off,
the buyer pays 195, you keep 15 instead of 20, and the sellers get their 180 as usual.

## What buyers see

On the cart's **Checkout** page, the buyer types the code in **Coupon code** and clicks **Apply**. The discount shows
as a **Coupon** line in the **Order summary**, and **Remove** takes the coupon off. One coupon can be used per cart.

A code that doesn't exist, has expired, is switched off or has no uses left is refused with *Coupon not valid,
expired or already used.* A paid cart uses the coupon once, whatever the number of items it discounted.

## Good to know

- Coupons on sales only work in the cart's one-payment checkout. They don't apply to a single **Buy Now** purchase.
- Coupons for sales and coupons for your own extras are separate: a **Buy product** coupon is refused at a featured
  listing or plan checkout, and the other way round. Sales coupons don't make the coupon box appear on your other
  checkouts.
- Sellers' coupons also appear in your **Settings › Coupons** list, with **Buy product** as their product.
- Each item's order shows what the buyer paid for it, after the discount.

## Related guides

- [Coupons](/how-to-use-coupon-system/) — discount codes for featured listings, plans and other extras.
- [Shopping cart](/shopping-cart/) — where buyers enter the code.
- [Commission and service fees](/commission-and-service-fees/) — what your coupons come off.
{: .cards}
