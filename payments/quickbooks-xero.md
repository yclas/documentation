---
title: Send your sales to QuickBooks or Xero
nav_title: QuickBooks and Xero
description: Send what your marketplace earns, your own sales, commissions and booking fees, to QuickBooks Online or Xero as paid sales, once each, without typing them in.
section: payments
order: 625
permalink: /quickbooks-xero/
keywords: quickbooks, quickbooks online, qbo, intuit, xero, accounting, bookkeeping, accountant, books, sales receipt, invoice, sync, export sales, commissions, income, revenue account, tax, vat, sync now, retry failed, connect again, redirect uri, client id, client secret, developer app, sandbox, custom transaction numbers
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Sends your own sales, your commissions and your booking fees to QuickBooks Online or Xero, each one once, as a paid sale.
- Sales between your members are their money, so they are not sent. Only your commission on them is.
- You need your own QuickBooks or Xero subscription and a free developer app from them.
- Off by default. Nothing is sent until you connect a company, choose where the money goes and the tax setting, and switch it on.
</div>

If you keep your books in QuickBooks Online or Xero, typing in every featured listing, membership and commission by
hand takes time and invites mistakes. The accounting add-on does it for you: each payment your site takes for you
becomes a paid sale in your accounts, with the customer, the amount and the site's order number on it.

It works with your own QuickBooks or Xero company, through an app you create on their developer site. Nothing goes to
your accounts until you switch it on.

## What is sent, and what isn't

| Money | Sent? | How it arrives |
| --- | --- | --- |
| **What you sell on the site**: featured, top and boosted listings, renewals, badges, banners, paid categories, memberships and other plans | Yes | A paid sale to the member who paid. |
| **Your commission** on a sale between members (Buy now, offers, auctions, the cart) | Yes | A paid sale to the seller, on the commissions item or account you choose. In effect a commission invoice, already settled, because it was taken from the sale. |
| **Paid bookings** | Yes, once the host has been paid | Your commission as a sale to the host (**Booking commission**), and the guest's service fee, if you charge one, as a sale to the guest (**Booking service fee**). Amounts are after any refund. |
| **Sales between members** | No | That money belongs to the seller. Only your commission is sent. |
| **Your own listings** sold through the site | Only if you ask | Switch on **Also send sales of my own listings** for listings posted by your site's admins, when you sell your own stock. |
| **Wallet top-ups** | No | That money is held for the member, it isn't income yet. What they then buy with the wallet is sent like any other sale. |
| **Free orders**, and anything paid **before the Send from date** | No | |

A promotion paid for a listing that isn't live yet waits until the listing goes live, because it is refunded if the
listing never does.

Refunds are not sent. A sale refunded after it reached your accounts stays there as it was: record the refund in
QuickBooks or Xero yourself.
{: .warning}

In QuickBooks each sale is a **sales receipt**, deposited to the account you choose (or Undeposited Funds). In Xero
it is an **invoice**, marked paid with a payment into the bank account you choose; without a bank account the invoice
is left awaiting payment. Customers and contacts are found by their email address, or created.

Each sale carries the site's own number, `YC-123` for an order (`YCB-` and `YCF-` for booking commissions and booking
fees). Before sending, the add-on looks for that number in your company, so the same sale is never sent twice, even
if a run is cut short.

## What you need

- A **QuickBooks Online** or **Xero** subscription. Your accountancy provider bills you for it; Yclas doesn't charge
  anything for the add-on.
- A **developer app** with QuickBooks (Intuit) or Xero. It is what lets your site sign in to your company. Creating
  one for your own company is free; check the provider's developer terms for the current limits.
- Admin access to your site, and permission to add apps in your QuickBooks or Xero company.

## Step 1: create the developer app

Your site shows the exact **redirect URI** to give the provider:

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Accounting (QuickBooks, Xero)**.
2. Scroll to **Your app** and copy the address shown there. It looks like
   `https://yourdomain.com/oc-panel/integrations/accounting/callback`.
3. Sign in at **developer.intuit.com** (QuickBooks) or **developer.xero.com** (Xero) and create a new app. For Xero,
   choose a **Web app**. For QuickBooks, choose the accounting scope.
4. Add the address you copied as the app's **redirect URI**. It must match exactly, including `https://`.
5. Copy the app's **client ID** and **client secret**.
{: .steps}

QuickBooks gives development keys first, which only connect to a QuickBooks **sandbox** (test) company. To connect your
real company you need the app's production keys: Intuit asks a few questions about the app before it shows them.
{: .note}

If your site has its own domain, create the app with that domain's address. If you change domains later, add the new
redirect URI to the app too.
{: .tip}

## Step 2: connect your company

1. Back on **Accounting (QuickBooks, Xero)**, under **Your app**, paste the **QuickBooks Online client ID** and
   **QuickBooks Online client secret**, or the **Xero client ID** and **Xero client secret**.
2. To try it on a QuickBooks sandbox company with development keys, switch on **QuickBooks sandbox**.
3. Click **Save**.
4. Under **Connect**, click **Connect QuickBooks Online** or **Connect Xero**. The button stays grey until the app's
   details are saved.
5. Sign in at QuickBooks or Xero, choose the company or organisation and allow the connection. Your password is never
   seen by your site.
6. You come back to the page, which says **Connected to** and your company's name.
{: .steps}

Secrets are never shown again after you save them, only their last 4 characters (**Saved (…1a2b)**). Leave the box
empty to keep the saved one.

## Step 3: choose where the money goes

Once connected, the page loads your company's lists, and you fill in **Where it goes**:

| Setting | What it does |
| --- | --- |
| **Organisation** (Xero only) | Shown when you allowed more than one Xero organisation. Choosing another one turns sending off, starts its **Send from** at today and clears the choices below. |
| **Product or service for site income** (QuickBooks) / **Account for site income** (Xero) | Where your own sales go. In QuickBooks every sale line needs a product or service: pick the one whose income account should get your site's income. |
| **Product or service for commissions** / **Account for commissions** | Where your commissions and booking fees go. It can be the same as site income. |
| **Deposit to** (QuickBooks) / **Bank account the money is paid into** (Xero) | QuickBooks: the account the receipts are deposited to, or **Undeposited Funds (QuickBooks default)**. Xero: with a bank account each invoice is marked paid; with **None: leave invoices awaiting payment** it isn't. |
| **Tax** | Whether your amounts include tax. You must choose one, there is no default (see below). |
| **Tax code** (QuickBooks) / **Tax rate** (Xero) | The tax code or rate to put on each line, or **Default**. |
| **Send from** | Only what is paid from this day is sent. It starts as the day you connected. An earlier day sends older sales too, a few at a time. |
| **Also send sales of my own listings** | Sales of listings posted by your site's admins. Sales by other members are never sent, only your commission on them. |
| **Send automatically** | Every 15 minutes, a few at a time. Off: nothing is sent except when you click **Sync now**. |

Added an item or an account in QuickBooks or Xero while the page was open? Click **Reload the lists from QuickBooks
Online** (or Xero) to see it.

Click **Save**. You can't switch on **Send automatically** until the income, commission and tax settings are chosen:
the page says *Choose where income and commissions go, and the tax setting, before switching sending on.*

### The tax setting

Your site sends each amount exactly as it was paid. When your site adds VAT to a price, the amount paid already
includes it. So there are two choices:

- **Amounts include tax (the site charges VAT)**: choose this only if your site charges VAT (see
  [EU VAT](/eu-vat/)), and pick the matching **Tax code** or **Tax rate**.
- **No tax (out of scope)**: for everything else.

There is no "amounts exclude tax" choice on purpose: it would add tax on top of what the member paid and record money
you never received.

A **US QuickBooks company** records sales tax line by line, so only **No tax (out of scope)** is offered there.
{: .note}

Whatever you choose, each sale must come out in your accounts at exactly the amount paid on your site. If it doesn't,
it is not counted as sent (see [Troubleshooting](#troubleshooting)).

## Sending and the results

With **Send automatically** on, the site sends up to 10 sales every 15 minutes. Click **Sync now** to send the next 25
straight away; the message says how many were sent, failed and skipped. The line next to the buttons shows the last
run.

**Latest results** lists the last sales with their date, what they were (**Order**, **Booking commission** or
**Booking service fee** and its number), the amount and a status:

| Status | What it means |
| --- | --- |
| **Sent** | It is in your accounts. **Details** shows the receipt or invoice number. |
| **Waiting** | QuickBooks or Xero didn't answer, asked to slow down, or the connection was busy. It is sent once they answer, and it doesn't count as a failed try. |
| **Failed** | QuickBooks or Xero refused it. **Details** says why. It is tried again every 30 minutes, up to 5 times. |
| **Failed** with **gave up** | Refused 5 times: it is no longer tried. Fix the cause, then click **Retry failed**. |
| **Sending** | A run has it in hand right now. |
| **Not sent** | It doesn't belong in your accounts, for example a sale between members or a wallet top-up. **Details** says why. |

**Retry failed** appears when something failed or gave up. It gives those sales their tries back, and they go on the
next run or when you click **Sync now**.

## Switching company or disconnecting

You connect one company at a time. Under **Connect another company**, connecting a different QuickBooks company or
Xero organisation replaces the current one. Sending is switched off, and its **Send from** starts at today, so the
new company doesn't receive everything again. Choose where the money goes for it, then switch sending on.

The old company's connection isn't removed at QuickBooks or Xero: you can remove it from the connected apps list in
your old company.

**Disconnect** stops sending. What was already sent stays in your accounts.

## Troubleshooting

**The connect buttons are grey.** Save your app's client ID and secret under **Your app** first.

**"QuickBooks Online refused the saved sign-in (it was revoked or expired), so sending was switched off."** The
connection was removed in QuickBooks or Xero, expired, or your subscription lapsed. Click **Connect QuickBooks Online
again** (or **Connect Xero again**) on the card at the top, then switch **Send automatically** back on. Nothing is
lost: what wasn't sent yet goes once you do. The same happens when QuickBooks or Xero refuses access three runs in a
row.

**A sale failed with "QuickBooks made sales receipt YC-123 for …, but … was paid on the site".** The receipt or invoice
was created, but its total doesn't match what the member paid, usually because of the tax setting or the tax code.
Check both, then in QuickBooks or Xero either correct that receipt or invoice (it is kept) or void it (a correct one
is made), and click **Retry failed**. In Xero, an invoice with the wrong total is not marked paid.

**The page says custom transaction numbers are off.** Your QuickBooks company numbers sales receipts itself, so they
get QuickBooks' numbers instead of `YC-123`. They are still sent only once (the site's number is kept in the private
note). To see the site's numbers, switch on **Custom transaction numbers** in QuickBooks: **Settings › Account and
settings › Sales › Sales form content**.

**"The lists could not be loaded from …".** The connection couldn't fetch your items, accounts or tax codes. Wait a
minute and click **Reload the lists**; if it keeps failing, connect again.

**A sale in another currency failed.** Each sale is sent in the currency it was paid in. If that isn't your company's
home currency, QuickBooks or Xero may refuse it until multi-currency is set up in your company.

**"The accounting sync is switched off for this site by Yclas support".** Nothing is sent until support switches it
back on. Contact support.

**Older sales aren't arriving.** Only sales paid from the **Send from** date are sent. Set an earlier date and click
**Save**: they follow a few at a time.

## Related guides

- [Commission and service fees](/commission-and-service-fees/) — the commissions this add-on sends.
- [Manage orders](/how-to-manage-orders/) — the orders behind each sale.
- [Marketplace sales report](/marketplace-sales-report/) — your sales and commissions on the site.
- [EU VAT](/eu-vat/) — when your amounts include tax.
- [Paid bookings](/paid-bookings/) — booking commissions and service fees.
{: .cards}
