---
title: Commission and service fees on sales
description: Set what you keep from each sale between members, take it with or without shipping, add a service fee paid by the buyer, and set different rates for some categories or sellers.
nav_title: Commission and service fees
section: payments
order: 510
permalink: /commission-and-service-fees/
keywords: commission, commission rate, marketplace fee, application fee, take rate, platform fee, fee per sale, fixed fee, service fee, buyer fee, buyer's fee, booking fee, commission on shipping, commission by category, category commission, seller commission, custom commission, different commission, commission rules, lower commission for one seller, discount, partial refund
updated: 2026-10-22
---

When buyers pay sellers by card through [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect), your
site keeps a commission on every sale and Stripe pays the rest to the seller. This guide covers everything that
decides how much you keep:

- your **commission**: a percentage, plus an optional fixed fee per sale;
- whether the commission is taken on the **shipping** too;
- an optional **service fee** that the buyer pays on top of the price (Marketplace plan);
- **different rates** for some categories or for individual sellers (Marketplace plan).

They all apply to every card sale through Stripe Connect: [Buy Now](/pay-directly-from-ad/), the
[shopping cart](/shopping-cart/), and [auction](/auctions/) winners and [offers](/make-an-offer/) paid through
Buy Now. Sales paid with PayPal or Escrow.com go to the seller without a commission.

## Where to set it

Everything is on the **Commission on sales** page. Open it from **Make money** (**Manage** on the **Take a
commission on sales** card) or from the **Commission on sales** link in **Add-ons › Stripe**. The page appears
once Stripe Connect is switched on.

The commission settings are in step 5, **Set your commission and switch on Buy now**. Click **Save** after changing
them.

## Your commission

| Setting | What it does |
| --- | --- |
| **Commission (%)** | The percentage of each sale you keep, from 0 to 100. The same setting as **Application fee (%)** in **Add-ons › Stripe**. |
| **Plus a fixed fee** | An amount you keep from each sale on top of the percentage. The same as **Fixed application fee** in **Add-ons › Stripe**. |
| **Commission is taken on** | **The whole sale, shipping included** (the default), or **The items only, not the shipping**. |

Under the fields, the page shows what you'd keep and what the seller would get on a sale of 100.

**Example:** a commission of 5% plus a fixed fee of 0.50. A buyer pays 40 for an item and 10 for shipping. On the
whole sale you keep 3.00 (5% of 50, plus 0.50) and the seller gets 47.00. With **The items only, not the shipping**,
you keep 2.50 (5% of 40, plus 0.50) and the seller gets 47.50.

Stripe's card fee for each sale comes out of your account, not the seller's, so set a commission that covers it.
Stripe also charges you for Connect itself (per active seller account and per payout): the page links to Stripe's
pricing.
{: .note}

The commission is never more than the sale itself. In a [cart](/shopping-cart/), it's worked out on each seller's
part of the cart, and the fixed fee is charged once per seller, not once per item. It's worked out on what the buyer
actually pays, after any [sale price, quantity discount or bundle discount](/sale-prices/).

## Buyer's service fee

A service fee is added to what the buyer pays, and you keep it with your commission. Marketplaces use it to share
their costs between buyers and sellers instead of raising the sellers' commission. The buyer's service fee is part of
the **Marketplace** plan.

| Setting | What it does |
| --- | --- |
| **Buyer’s service fee (%)** | A percentage of the sale added to the buyer's total, up to 30%. Leave it at 0 for none. |
| **Plus a fixed fee** | An amount added to the buyer's total on each sale. Leave it at 0 for none. |

Buyers always see it before they pay:

- on a Buy Now checkout, under the pay button: *A service fee of … is added at payment*, and in the card form's
  total;
- in a cart, as a **Service fee** line in the **Order summary**, worked out once on the whole cart.

The seller's part doesn't change: the fee goes to you, and appears with your commission in the **Application Fee**
order in [Orders](/how-to-manage-orders/). No service fee is added on listings you sell yourself as an
administrator. If one item of a cart is refunded, the buyer also gets that item's share of the service fee back.

## Different rates by category or seller

Below the commission settings, **Commission by category or seller** lets you take a different percentage in some
categories, or agree a percentage with one seller. For example 3% on vehicles, 12% on clothing, or a lower rate for
your biggest dealer. Commission rates by category or by seller are part of the **Marketplace** plan.

To add a rate for a category:

1. Choose the **Category** and enter its **Commission (%)**.
2. Click **Add for this category**.
{: .steps}

To add a rate for a seller:

1. Enter the **Seller's email** and the **Commission (%)**.
2. Click **Add for this seller**.
{: .steps}

Your rules are listed in a table (**Applies to**, **Commission (%)**). Adding a rule again for the same category or
seller replaces its rate, and **Remove** deletes it.

### Which rate applies

For each sale, the first of these that exists is used:

1. the seller's own rate (a seller rule);
2. the **Marketplace Fee** of the seller's [membership plan](/membership-plans/), so a plan they paid for keeps its
   promise;
3. the rate of the listing's category, or of its nearest parent category with a rule (subcategories follow their
   parent unless they have their own rule);
4. your **Commission (%)**.

Rules only change the percentage. The fixed fee, the service fee and **Commission is taken on** stay the same for
every sale.

## Good to know

- You don't take a commission on your own sales: listings you post as an administrator are paid straight into your
  Stripe account, and you can't add a seller rule for an administrator.
- A seller rule needs the email of an existing user (*No user has that email address* otherwise).
- Changing a rate doesn't change orders already paid.
- Your earnings show under **What you earn** on the same page, and every commission is an **Application Fee** order
  in [Orders](/how-to-manage-orders/).
- The same commission applies to [paid bookings](/paid-bookings/); their buyer service fee is set separately in
  **Add-ons › Bookings**. When a booking is partly refunded under its cancellation policy, your commission goes down
  in proportion, so you and the seller give back the same share.
- The Buy now part of the page also holds **Digital downloads** and **Downloads per purchase** (see
  [Sell digital downloads](/sell-digital-goods/)) and **Sale prices**, **Quantity pricing** and **Bundles** (see
  [Sale prices, quantity discounts and bundles](/sale-prices/)).
- The same page also holds **Returns** and **Days to ask for a return**. See [Returns on sales](/returns/).

## Related guides

- [Stripe and Stripe Connect](/stripe/) — set up selling for your members.
- [Shopping cart](/shopping-cart/) — one payment for items from several sellers.
- [Membership plans](/membership-plans/) — each plan's Marketplace Fee.
- [Orders and transactions](/how-to-manage-orders/) — your commissions as Application Fee orders.
- [Marketplace sales report](/marketplace-sales-report/) — your commission and take rate over any period.
{: .cards}
