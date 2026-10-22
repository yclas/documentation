---
title: Checkout, payments and invoices for members
nav_title: Members' payments and invoices
description: What your members see when they pay, where they find their payments, invoices and sales, and how to answer the questions they ask most.
section: payments
order: 120
permalink: /member-payments/
keywords: checkout, pay with card, card form, apple pay, google pay, payment complete, my payments, my orders, my sales, invoice, receipt, print invoice, save as pdf, invoice number, invoice details, pay later, unpaid, member orders, buyer, seller, mark as shipped, mark as received, pdf invoice, download pdf, digital download
updated: 2026-10-22
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
- a button for each payment method you've connected.

On the Nova theme, card payment comes first as the main button. Your other methods, such as PayPal or
[bank transfer](/offline-payments/), follow under **or pay with**. A line under the buttons reassures members that
their card details go straight to the payment provider, never to your site.

When the price is zero, members click **Click to proceed** instead and nothing is charged.

The order is created when they reach the checkout, so a member can leave and pay later.

### Paying by card with Stripe

With [Stripe](/stripe/) connected, members click **Pay with Card** and the card form opens right there on your
checkout page, in your site's fonts and colours. They type their card details and click **Pay** followed by the
amount. They never leave your site, and if their bank asks for a security check (3D Secure), it appears inside the
form.

On phones and tablets that have Apple Pay or Google Pay set up, members can pay with that too.

If you use Stripe's older **Legacy checkout** instead, members pay in a Stripe pop-up. See
[Stripe](/stripe/#the-card-form-at-checkout) for the options.

### Other payment methods

With PayPal and most other gateways, members pay on the provider's own page and come back to your site afterwards.

## After paying: the Payment complete page

Signed-in members who pay land on a **Payment complete** page that says, in plain words, what they bought and what
happens next. For example:

- a featured listing or bump: which listing, and until when it's featured;
- [pay to post](/pay-to-post/): whether the listing is live, waiting for your approval, or waiting for them to
  confirm their email;
- a [membership plan](/membership-plans/): that the plan is active and until when;
- an item bought with Buy Now: **Purchase complete**, with a link to the listing and to messages;
- an eWallet top-up: their new balance.

It also shows the amount, how they paid, the date and the payment number, with a **View receipt** button.

Some payments take a moment to be confirmed, for example a bank payment or a PayPal payment still on its way. The page
then shows **Payment received, confirming…** and updates by itself once it's confirmed.

## My Payments

Members find every payment they've made in **My Payments** in their account menu (it appears once they have at least
one order). Each payment shows what it was for, the listing, the amount, the date and a status such as **Paid**,
**Awaiting payment** or **Refunded**, with:

- **Pay now**, for an unpaid order, which takes them back to the checkout;
- **Receipt**, which opens the invoice (below);
- **Report a problem**, to open a [dispute](/disputes/) about an order they haven't received yet;
- **Return**, to [ask for a return](/returns/) when you allow returns;
- **Download (n left)**, for a [digital download](/sell-digital-goods/) they bought, with the downloads they have left.

Items bought together in a [shopping cart](/shopping-cart/) appear as separate orders, one per item, each with its
own receipt.

Members who bought an item can also mark it as received here when the [eWallet](/ewallet/),
[Escrow.com](/escrow-pay/) or the [Stripe escrow flow](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow)
needs it, or cancel an order that hasn't shipped yet.

## Invoices

Every payment has an invoice with its own number (for example `INV-000045`). It shows:

- your logo and site name, and a **Paid**, **Unpaid** or **Refunded** badge;
- **From**: your business details; **Billed to**: the member's name, address and email; the dates it was issued
  and paid;
- one line per item, with quantity and price, then the subtotal, any coupon, **VAT** with its rate and the **Total**;
- how it was paid, and a payment reference.

The amounts are exactly what the member was charged, even if you've changed your prices since. Members click
**Print / Save as PDF** to keep a copy, and **Pay now** on an unpaid invoice. With **PDF invoices** on, a
**Download PDF** button next to it saves a real PDF file (see [PDF invoices](/how-to-manage-orders/#pdf-invoices)).

### Add your business details to invoices

To put your legal name, address, company number or a note (such as payment terms) on your invoices, fill in the
**Invoice details** section in **Settings › Payments** and click **Save changes**. Many countries require your legal
name and address on every invoice, and the panel reminds you if you charge VAT but haven't added an address yet.

| Setting | What it does |
| --- | --- |
| **Business or legal name** | Printed in the **From** part. Leave it empty to use your site name. |
| **Street address**, **Postal code**, **City**, **Country** | Your business address. |
| **Company registration number** | Optional. Your number in the company register. |
| **VAT number** | Comes from the VAT section of the same page; **Change** takes you there. See [VAT and taxes](/eu-vat/). |
| **Note at the bottom** | Optional, up to 500 characters: bank details, payment terms or a thank-you. |
| **Use the site logo on invoices** | Shows your logo at the top of each invoice, and of each PDF invoice. On unless you turn it off. PNG, JPEG or GIF logos only (for the PDF, up to 1 MB and 2000 px on each side). |
| **PDF invoices** | Adds a **Download PDF** button to invoices, for you and your members. Off until you switch it on. The PDF leaves the logo out. |

When a member buys an item from a seller with Buy Now, the invoice shows the seller in **From**, and your note isn't
printed on it.
{: .note}

This invoice is used by the Nova, Atlantic Lite and Default themes. Some older themes still show their own simpler
receipt.
{: .note}

## My Sales

Sellers see what they have sold in **My Sales** (shown when PayPal's **Buy Now button** or Stripe Connect is on),
with the listing, buyer, amount, date and status. Depending on how you take payments, they can also:

- **Mark as shipped**, adding the **Shipment provider name** and **Shipment tracking code**, which emails the buyer;
- **Cancel order** before it ships;
- answer [return requests](/returns/) with **Accept the return** or **Refuse**, and refund the buyer;
- see whether the buyer has confirmed receipt;
- open the **Download** link of a [digital product](/sell-digital-goods/) they sold.

## Account settings for members

On Nova, **Edit profile** in the account menu opens into separate pages: **Profile**, **Profile pictures**,
**Password**, and, when you use the features behind them, **2 Step Authentication**, **Get paid for your sales**
(where sellers set up [Stripe payouts](/stripe/#what-sellers-do)) and **Subscription** (the member's
[membership plan](/membership-plans/)).

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

**"Where's my invoice?"** In **My Payments**, under **Receipt**, or with **View receipt** on the Payment complete
page.

**"Can you put my company name on the invoice?"** The **Billed to** part uses the name and address in the member's
profile, so ask them to update their profile.

**"I don't see Apple Pay or Google Pay."** They only appear on phones and tablets where Apple Pay or Google Pay is set
up, and only in Stripe's card form. A card always works.

**"Can I pay by bank transfer?"** Only if you've set up an [other payment method](/offline-payments/) such as bank
transfer.

**"Why do I have to pay to post?"** The category has a price, or you use membership plans. See
[Pay to post](/pay-to-post/) and [Membership plans](/membership-plans/).

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Stripe](/stripe/) — the card form, Apple Pay and Google Pay.
- [Orders and transactions](/how-to-manage-orders/) — the admin side of the same orders.
- [How members post a listing](/how-members-post-listings/) — the rest of the member area.
{: .cards}
