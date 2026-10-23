---
title: Request a quote
description: Let buyers ask a seller for a price for exactly what they need; the seller answers in the conversation and the buyer accepts and pays the quote online.
section: listings
order: 620
permalink: /request-a-quote/
keywords: quote, quotes, request a quote, ask for a quote, get a quote, price on request, ask for a price, no price, POA, custom price, estimate, quotation, bulk order, quantity, budget, services, B2B, accept quote, pay quote, quote timer, quote expiry, vacation mode
updated: 2026-10-22
plans: Available on all plans
---

Some things don't have one fixed price: a custom-made item, a bulk order, a service that depends on the job, or a
listing marked "price on request". With quotes, a buyer tells the seller what they need, the seller answers with a
price, and the buyer accepts and pays it online, all inside their conversation.

Quotes use [messaging](/how-to-use-messaging-system/), so switch messaging on first. They work with the **Nova** and
**default** themes.
{: .note}

## Switch quotes on

New sites have quotes on. On older sites they're off until you switch them on:

1. Go to **Add-ons** and open **Messaging**.
2. Make sure messaging is on, and switch on **Request a quote**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

Listings then show a **Request a quote** button (in Nova, under **Make an offer**). It shows on every listing members
can contact, with or without a price, except the member's own. Visitors who aren't signed in are asked to sign in
first.

## How a buyer asks for a quote

1. The buyer clicks **Request a quote** on the listing.
2. They fill in **What do you need?** (at least 10 characters) and, if they like, **Needed by**, **Quantity** and their
   **Budget**, in the listing's currency.
3. They click **Send the request**.
{: .steps}

The request is posted into their conversation with the seller about that listing, and the seller is notified like
for any new message. There can be one quote in progress per conversation; once it's closed, the buyer can ask again.

## How the seller answers

In the conversation, the seller sees the request and a form:

- **Your price**, **Delivery (days)** (optional, up to 365) and **Note (optional)**, then **Send the quote**. Until the
  buyer answers, they can change it with **Update the quote** or **Withdraw** it;
- or **Decline** the request.

## Accept and pay

The buyer sees **Quoted price** with the delivery time and note, and can **Accept** it, **Decline** it or
**Withdraw** their request.

| The listing can be paid online | The listing can't be paid online |
| --- | --- |
| After accepting, the buyer gets **Pay … now** and has 48 hours to pay the quoted price through your site's checkout. | The quote is accepted with no deadline, and they agree on payment in the conversation. |

"Paid online" means your site has a way to pay sellers ([Buy Now](/pay-directly-from-ad/) with Stripe Connect, PayPal
or Escrow.com, and the seller has set it up), the listing is published and, with [stock control](/stock-control/), in
stock. The listing's own price doesn't matter, so a quote can be paid on a listing with no price.

The quoted price is the whole amount: no shipping is added. A paid quote appears in [Orders](/how-to-manage-orders/)
as a custom order (*Quote: …*), and in the buyer's **My Payments** and the seller's **My Sales**. It is protected like
any other sale: payments held until delivery, [disputes](/disputes/) and [returns](/returns/) all apply.

## When quotes expire

| Step | Expires after |
| --- | --- |
| A request nobody answered | 14 days |
| A quote the buyer didn't answer | 7 days |
| An accepted quote not paid | 48 hours |

These are the defaults. Change them in **Settings › General**, in the **Messages** section: **A quote request waits for
a quote** (1 to 60 days), **A quote waits for the buyer** (1 to 60 days) and **An accepted quote can be paid for**
(1 to 168 hours). New values apply to quotes asked for after you save.

Both sides see what is waiting for them in the **Needs your action** list at the top of Messages: *Send a quote*,
*Answer the quote* or *Pay the quote*.

## Quotes or offers?

[Make an offer](/make-an-offer/) is haggling over a listed price: the buyer proposes less. A quote starts from what the
buyer needs, and works on listings without a price, where offers aren't possible. You can have both on.

## Good to know

- Every step adds a short line to the conversation and uses the normal new-message notification, so there's no
  separate email template.
- Themes with their own conversation page don't show quotes. Switch to Nova to use them.
- Quotes are included when a member downloads their data or deletes their account.
- While a seller's store is in [vacation mode](/storefronts/#vacation-mode), buyers can't ask them for a quote.
- On a business directory, listings have their own lead form instead: see [Run a business directory](/directory-mode/).

## Related guides

- [Make an offer](/make-an-offer/) — let buyers propose a lower price.
- [Messaging between members](/how-to-use-messaging-system/) — quotes need it.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — lets buyers pay a quote online.
- [Disputes about an order](/disputes/) — if a paid quote goes wrong.
{: .cards}
