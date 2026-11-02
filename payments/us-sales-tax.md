---
title: Charge US sales tax with Avalara AvaTax or TaxJar
nav_title: US sales tax (AvaTax, TaxJar)
description: Let Avalara AvaTax or TaxJar work out the sales tax on every cart checkout from the buyer's and seller's addresses, and record each sale in your tax account.
section: payments
order: 162
permalink: /us-sales-tax/
keywords: sales tax, us sales tax, american sales tax, avalara, avatax, taxjar, tax engine, tax calculation, nexus, state tax, zip code, ship-from address, ship from, buyer countries, product tax code, tax code, license key, account id, company code, api token, sandbox, test connection, remit, file sales tax, marketplace facilitator, sales tax refund, tax not calculated, cannot pay cart, checkout refused, sales tax error
updated: 2026-11-02
plans: Marketplace plan
---

<div class="summary" markdown="1">
- Avalara AvaTax or TaxJar works out the sales tax on cart checkout, from the buyer's delivery address and each seller's ship-from address.
- Every paid order is recorded in your AvaTax or TaxJar account, and a refunded order is refunded there too.
- The tax is yours to file and pay: it isn't paid out to sellers.
- Cart checkout only: **Buy now** and other payment methods are not taxed.
- Off by default. You need your own AvaTax or TaxJar account, and only admins can set it up.
</div>

US sales tax depends on where the buyer is, down to the state and ZIP code, and the rates change often. A tax
service such as **Avalara AvaTax** or **TaxJar** keeps track of them. With this add-on, your site asks your AvaTax or
TaxJar account for the exact tax of each cart, adds it at checkout, and records the sale in your account so it is
ready when you file.

It works with the [shopping cart](/shopping-cart/) paid in one payment, so it needs the **Marketplace** plan. Only
admins can open its page.

## What it does, and what it doesn't

- **Who is taxed:** buyers whose delivery address is in one of your **Buyer countries** (the United States unless you
  change it). Buyers elsewhere keep your sellers' VAT exactly as before (see [VAT and taxes](/eu-vat/)).
- **What is taxed:** the items and their shipping in a cart paid in one payment.
- **What isn't taxed:** **Buy now** (a single listing paid on its own), other payment methods and paid bookings.
  Buyers who pay that way pay no sales tax, so make sure that fits your tax obligations.
- **Who keeps the tax:** you. The sales are recorded in your account, so the tax is yours to file and pay. It is
  added after your [commission and service fee](/commission-and-service-fees/), is never counted in them, and isn't
  paid out to the seller. If a seller would normally add their own VAT, the sales tax replaces it and that VAT comes
  off the seller's payout.
- **No tax, no payment:** a buyer in your countries can only pay once every item in their cart is taxed. If the tax
  can't be worked out, the checkout is refused with the reason (see [What buyers see](#what-buyers-see)). It never
  charges them without the tax.
{: .important}

Whether you must collect sales tax, and in which states, is a question for your accountant. The add-on calculates and
records the tax; it doesn't decide where you are registered.
{: .note}

## What you need

- An **Avalara AvaTax** or **TaxJar** account, set up with the states where you collect tax. The provider bills you
  for it; Yclas doesn't charge for the add-on.
- Your keys: for AvaTax, the **account ID**, a **license key** and your **company code**; for TaxJar, an **API
  token**. Both providers have a sandbox (test) account, and its keys only work with the sandbox switched on.
- The [shopping cart](/shopping-cart/) switched on, with buyers paying the whole cart in one payment.
- Sellers' ship-from addresses: each seller's **Shipping origin**, or your own address on the setup page.

## Set it up

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Sales tax (AvaTax, TaxJar)**.
2. Choose your **Provider**: **Avalara AvaTax** or **TaxJar**.
3. Fill in that provider's keys (see the table below). To try it on a test account first, tick **Use the sandbox
   (test account)**.
4. Under **What is taxed**, check **Buyer countries** and, if you need one, the **Product tax code (optional)**.
5. Fill in the **Ship-from address**, for sellers who haven't set their own.
6. Click **Save and test connection**. The page says *The connection works*, or why the test failed.
{: .steps}

Secret keys are never shown again after you save them. Leave the field empty to keep the saved one, or tick **Remove
the saved key** (or **Remove the saved token**) to delete it. To switch sales tax off, choose **None (off)** as the
provider and click **Save**.

| Setting | What it does |
| --- | --- |
| **Provider** | **Avalara AvaTax**, **TaxJar**, or **None (off)**. |
| **Use the sandbox (test account)** | Uses the provider's test environment. Untick it when you change to your live keys. |
| **Account ID**, **License key** (AvaTax) | In AvaTax, under **Settings > License and API keys**. |
| **Company code** (AvaTax) | The AvaTax company the sales are recorded in, on **Settings > Manage companies**. Empty uses `DEFAULT`. |
| **API token** (TaxJar) | In TaxJar, under **Account > TaxJar API**. |
| **Buyer countries** | Two-letter country codes, separated by commas, such as `US` or `US, CA`. Only buyers delivering to these countries are taxed. |
| **Product tax code (optional)** | The provider's code for what your sellers sell. Empty means general goods. |
| **Ship-from address** | **Street**, **City**, **State**, **Postcode** and **Country**. Used for sellers who haven't set their own shipping origin. |

If the page shows *Sales tax is calculated when buyers pay for their whole cart in one payment*, the cart isn't set up
for one payment yet: switch on the [shopping cart](/shopping-cart/) first.
{: .tip}

### Where tax is worked out from

The tax depends on two addresses:

- **The buyer's delivery address.** In the cart, buyers in your countries see *Your delivery address is needed to
  calculate the sales tax.* and fill in **Street**, **Postcode**, **City**, **State or province** and **Country**.
  With [live shipping rates](/shippo/) on, the address they give for shipping rates is used instead.
- **The seller's ship-from address.** It comes from the seller's **Shipping origin** page, the same one live shipping
  rates use. Sellers who haven't filled it in use your **Ship-from address** on the setup page.

The taxed address is also the address the seller sees for the order in **My sales**.

## What buyers see

At checkout, a buyer in your countries sees a **Sales tax** line, and the invoice shows the exact tax as **Sales
tax**.

When the tax can't be worked out, the cart says why and the buyer can't pay yet:

| What happened | What the buyer is told |
| --- | --- |
| The provider didn't answer in time, or gave an incomplete answer | *We couldn't calculate the sales tax for your order. Please try again in a moment.* |
| The provider rejected the address | They're asked to check their address in the cart, especially the ZIP code and the state. |
| A seller has no ship-from address, and there's none on the setup page | That item can't be taxed: they're asked to remove it from the cart or contact you. |
| The cart has items from more than 10 sellers | They're asked to remove some items and buy them in a separate payment. |
| The provider refused your keys or account | *Sales tax can't be calculated right now, so your cart can't be paid yet.* You're told too (see below). |

Buyers outside your **Buyer countries** are never refused because of sales tax.

## When your account stops working

If AvaTax or TaxJar refuses your keys or your account (a key expired or was revoked, or the account was
suspended), buyers in your countries can't pay for their cart until it is fixed. Your site tells you in three places:

- the setup page shows a red notice, *Your sales tax provider refused your keys or account*, with the date and the
  provider's message;
- the **Sales tax (AvaTax, TaxJar)** card in **Add-ons** says **Not working** in red;
- an email, *Sales tax: your tax account stopped working*, goes to your **Sender email** from
  [Email settings](/general-email-configuration/), at most once a day.

Fix the keys or the account with the provider, then save the settings again (**Save and test connection** is the
quickest check). The notice also clears by itself as soon as the provider accepts a call again.

## What is recorded in your tax account

When an order is paid, your site records it in your account: as a committed transaction in AvaTax, or as an order
transaction in TaxJar, with the tax charged at checkout. A refunded order is refunded there the same way. An order
refunded before it was recorded is simply never sent.

**Latest orders** on the setup page lists the recent orders with their **Sales tax**, the **Transaction** reference
in your account and a **Status**:

| Status | What it means |
| --- | --- |
| **Not paid** | The tax was worked out at checkout, but the order isn't paid (yet). |
| **Waiting to be recorded** | Paid: it is sent to your account shortly. |
| **Recorded** | It is in your AvaTax or TaxJar account. |
| **Refund waiting to be recorded** | The order was refunded: the refund is sent shortly. |
| **Refund recorded** | The refund is in your account. |
| **Refunded before it was recorded** | Nothing was sent, and nothing needs to be. |
| **Could not be recorded** | The provider refused it 6 times. The reason is shown in red: record it in your account yourself. |

## Good to know

- Refunds go to your tax account for whole order lines. A partial refund isn't sent to AvaTax or TaxJar.
- With prices shown in the buyer's currency, the tax is worked out in the listing's currency.
- Your sellers' [VAT settings](/eu-vat/) still apply to buyers outside your **Buyer countries**.

## Related guides

- [Shopping cart](/shopping-cart/) — the one-payment checkout sales tax applies to.
- [VAT and taxes](/eu-vat/) — VAT on what members pay you, and sellers' own VAT.
- [Live shipping rates with Shippo](/shippo/) — the delivery address and sellers' shipping origin.
- [Commission and service fees](/commission-and-service-fees/) — what you keep from each sale.
- [QuickBooks and Xero](/quickbooks-xero/) — send your sales to your accounting software.
{: .cards}
