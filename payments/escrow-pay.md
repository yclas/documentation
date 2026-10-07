---
title: Escrow payments with Escrow.com
description: Protect buyers and sellers of expensive items. Escrow.com holds the buyer's money until the item has arrived and been accepted.
section: payments
order: 140
permalink: /escrow-pay/
keywords: escrow, escrow.com, escrow pay, safe payment, secure payment, buyer protection, hold payment, inspection period, vehicles, machinery, high value, api key
updated: 2026-10-07
---

With [Escrow.com](https://www.escrow.com), the buyer's money is held by a licensed escrow company until the buyer
has received the item and accepted it. Only then is the seller paid. It removes the biggest worry in high-value
deals between strangers, which makes it popular on marketplaces for vehicles, machinery, boats and domain names.

Yclas connects each sale on your marketplace to an Escrow.com transaction. Buyers and sellers each use their own
Escrow.com account.

If you want card payments with a hold on the money but without sending everyone to Escrow.com, look at the
[Stripe escrow flow](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow) instead.
{: .tip}

## Before you switch it on

- **Every member needs an Escrow.com account.** While Escrow is on, members are sent to their profile to connect
  Escrow.com before they can post a listing, and buyers need it to confirm delivery.
- **Payments are in US dollars.** Escrow transactions are always created in USD, whatever your site's currency.
- **The seller pays the Escrow.com fee.** It is taken from the seller's side of each transaction.
- **Buyers must register** on your site to pay with Escrow.

## Switch it on

1. Go to **Integrations** and click **Escrow**.
2. Tick **Enable Escrow**.
3. To try it out first, tick **Sandbox**: transactions then go to Escrow.com's test environment, and members must
   connect test accounts from escrow-sandbox.com.
4. Click **Save**.
5. Make sure the **Price** field is on in **Listings › Settings › Form fields**.
{: .steps}

Listings with a price now show a **Buy Now** button, and checkout offers **Pay with Escrow**.

## How members connect

1. The member goes to **Edit profile**. An **Escrow Pay** box asks them to connect.
2. They create an Escrow.com account (**Create an Escrow account.**) and an API key in Escrow.com's API settings
   (**Create an API key.**).
3. They enter their **Escrow email** and **API Key** and save.
{: .steps}

Yclas checks the details with Escrow.com and shows **Escrow connected.**

## How a sale works

1. The buyer clicks **Buy Now** on a listing, then **Pay with Escrow** at checkout.
2. They're taken to Escrow.com to review the transaction, sign in and pay. Escrow.com secures the money.
3. Back on your site, the order is confirmed once Escrow.com reports the payment as secured. If the buyer paid by
   wire transfer and the money arrives later, they click **Mark as paid** on the order in **My Payments** to check
   again.
4. The seller ships the item and clicks **Mark as shipped** in **My Sales**.
5. When it arrives, the buyer clicks **Mark as received** in **My Payments**.
6. The buyer has an inspection period of three days to check the item and accept it on Escrow.com. Escrow.com then
   pays the seller.
{: .steps}

On the Nova theme, **My Sales** only appears in the account menu when PayPal's **Buy Now button** or Stripe Connect
is also on. Until then, sellers can open it at `/oc-panel/profile/sales` on your site.
{: .note}

The order appears in your [Orders](/how-to-manage-orders/) as **Buy product** with the payment method *Escrow*.
Disputes and returns are handled by Escrow.com, under its own rules.

## Settings reference

| Setting | What it does |
| --- | --- |
| **Enable Escrow** | Turns Escrow payments on for listings with a price, and asks every member to connect Escrow.com. |
| **Sandbox** | Uses Escrow.com's test environment. Untick it before going live. |

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — the other ways to pay sellers.
- [Stripe and Stripe Connect](/stripe/) — card payments with an optional hold.
- [Checkout, payments and invoices for members](/member-payments/) — My Payments and My Sales.
{: .cards}
