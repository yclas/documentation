---
title: Checkout, payments and invoices for members
nav_title: Members' payments and invoices
description: What your members see when they pay, where they find their payments, invoices and sales, and how to answer the questions they ask most.
section: payments
order: 120
permalink: /member-payments/
keywords: checkout, my payments, my orders, my sales, invoice, receipt, print invoice, pay later, unpaid, member orders, buyer, seller, mark as shipped, mark as received
updated: 2026-10-07
---

This guide walks through payments from your members' side, so you know what they see and can help when they ask
"where is my invoice?" or "I paid, why isn't my listing featured?".

## The checkout page

Whatever a member buys, from a featured listing to an item with [Buy Now](/pay-directly-from-ad/), they land on a
checkout page with:

- an **Order summary**: the order number, date, what they are buying, any [VAT](/eu-vat/) and the **Total**;
- choices where they apply: the featured plan (number of days), the quantity, an eWallet money package, or
  **Shipping** versus **Customer Pickup** for items;
- a coupon box, when you have active [coupons](/how-to-use-coupon-system/);
- one button per payment method you've connected.

They click a payment method, pay on the provider's page (Stripe, PayPal…) and come back to your site with a
confirmation message. When the price is zero, they click **Click to proceed** instead.

The order is created when they reach the checkout, so a member can leave and pay later.

## My Payments

Members find every order they've placed in **My Payments** in their account menu (it appears once they have at least
one order). For each order they see the status, product, amount, listing and dates, and:

- **Pay**, for an unpaid order, which takes them back to the checkout;
- **Invoice**, which opens the invoice with your site name, their details, the items and VAT. **Print this** gives a
  printer-friendly version.

Members who bought an item can also mark it as received here when the [eWallet](/ewallet/),
[Escrow.com](/escrow-pay/) or the [Stripe escrow flow](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow)
needs it, or cancel an order that hasn't shipped yet.

## My Sales

Sellers see what they have sold in **My Sales** (shown when PayPal's **Buy Now button** or Stripe Connect is on),
with the buyer, amount and date. Depending on how you take payments, they can also:

- **Mark as shipped**, adding the **Shipment provider name** and **Shipment tracking code**, which emails the buyer;
- **Cancel order** before it ships;
- see whether the buyer has confirmed receipt;
- open the **Download** link of a [digital product](/sell-digital-goods/) they sold.

## Emails members receive

| Email | Sent when |
| --- | --- |
| *ads-purchased* | A buyer has paid for an item: sent to the buyer, with the order, any buyer instructions and download link. |
| *ads-sold* | Sent to the seller when their item is bought, with the order details. |
| *new-order* | Two days after an unpaid order about a listing, as a reminder with a link to the checkout. |
| *order-shipped* | The seller marked the order as shipped. |
| *ad-expired* | A listing's featured period has ended (the same email is sent when a listing expires). |
| *plan-expired* | A membership plan ended and needs paying again. |
| *out-of-stock* | A seller's listing has sold out. |

You can change the wording in [Email templates](/automatic-emails-sent-to-users/).

## Questions members ask

**"I paid but nothing happened."** Look the order up in [Orders](/how-to-manage-orders/). If it's **Unpaid**, the
payment provider didn't confirm it: check the payment in your Stripe or PayPal dashboard, then use **Mark as paid**
if the money arrived. For Stripe, turning on [webhooks](/stripe/#set-up-the-webhook) prevents this.

**"Where's my invoice?"** In **My Payments**, under **Invoice**.

**"Can I pay by bank transfer?"** Only if you've set up [Alternative Payment](/offline-payments/).

**"Why do I have to pay to post?"** The category has a price, or you use membership plans. See
[Pay to post](/pay-to-post/) and [Membership plans](/membership-plans/).

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Orders and transactions](/how-to-manage-orders/) — the admin side of the same orders.
- [How members post a listing](/how-members-post-listings/) — the rest of the member area.
{: .cards}
