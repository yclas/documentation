---
title: Returns on sales
nav_title: Returns
description: "Let buyers ask to return something within a return window: the seller accepts or refuses, and refunds the buyer once the item is back."
section: payments
order: 610
permalink: /returns/
keywords: returns, return, return an item, send back, refund, refunds, return window, return policy, returns policy, RMA, return request, accept return, refuse return, changed my mind, wrong item, damaged, faulty
updated: 2026-10-20
plans: Professional and Marketplace plans
---

Buyers shop with more confidence when they know they can send something back. With returns switched on, a buyer can
ask to return an item they bought through your site, within the number of days you choose. The seller accepts or
refuses, the buyer sends it back, and the seller refunds them. Every step is a button, and both sides get an email.

Returns are part of the **Professional** and **Marketplace** plans. They work for items paid on your site:
[Buy Now](/pay-directly-from-ad/), accepted [offers](/make-an-offer/) and [quotes](/request-a-quote/), and the
[shopping cart](/shopping-cart/) (Marketplace plan). They work with the **Nova** and **default** themes.
{: .note}

## Switch returns on

Returns are off until you switch them on. The setting is on the **Commission on sales** page, so you need
[Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect):

1. Open the **Commission on sales** page, for example with the **Commission on sales** link in
   **Add-ons › Stripe** (see [where to find it](/commission-and-service-fees/#where-to-set-it)).
2. In **5. Set your commission and switch on Buy now**, make sure **Buy now** is on.
3. Switch on **Returns** and set **Days to ask for a return**.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Returns** | Buyers can ask to return what they bought. Off by default. |
| **Days to ask for a return** | The return window, from 1 to 365 days. The default is 14. It counts from the day the buyer marked the order as received, or else the day it was shipped, or else the day it was paid. |

Sellers can write their own **Returns policy** on their [store](/storefronts/). The buyer sees it when they ask for a
return.
{: .tip}

## How a buyer asks for a return

1. In **My Payments**, the buyer clicks **Return** next to the order. The page says until when they can ask, and
   shows the seller's returns policy if there is one.
2. They choose **Why are you returning it?**: *It isn't as described*, *It arrived damaged or faulty*, *I received the
   wrong item*, *I changed my mind* or *Something else*.
3. They explain under **Tell the seller what is wrong** (10 to 2,000 characters) and click **Ask for a return**.
{: .steps}

The seller gets an email. **Return** only shows on a paid order within the return window, with no other return open
for it. A buyer who withdrew a return can ask again while the window is open.

## What the seller does

The request appears on the sale in **My Sales**, with the reason and the buyer's explanation. With
[messaging](/how-to-use-messaging-system/) on, it is also in the **Needs your action** list at the top of the seller's
Messages, and so are the later steps for both sides.

1. The seller writes a note and clicks **Accept the return** or **Refuse**. When accepting, the note is the place to
   say where to send the item back. When refusing, a reason is required. The buyer is emailed either way.
2. Once the buyer has sent it, the seller clicks **I have it back: refund the buyer**. If they don't want the item
   back, they can click **Refund without the item back** straight after accepting.
{: .steps}

How the refund is made depends on how the buyer paid:

| The buyer paid | Refund |
| --- | --- |
| By card through Stripe | The money goes back to the buyer's card, and what the seller was paid for the sale (and your commission) is taken back. For a cart, only that seller's part is refunded. |
| Any other way (PayPal, Escrow.com…) | The seller refunds the buyer themselves, the way they paid, then confirms with the same button. The order is marked as refunded. |

A return always refunds the whole order. If Stripe refuses the refund, the return stays where it was and the seller
sees why.

## What the buyer does after an answer

On the order in **My Payments**, the buyer sees the status (*Return requested*, *Return accepted*, *Return refused*,
*Sent back*, *Refunded*) and the seller's note. Depending on the step they can:

- click **I sent it back**, with an optional tracking number, which emails the seller;
- **Withdraw** the return, while it hasn't been refunded;
- **Take it to the site team**, if the seller refused it.

## When a return is refused

If the buyer disagrees with a refusal, **Take it to the site team** turns it into a [dispute](/disputes/) on the order.
Your administrators get an email, and the conversation appears in **Reported conversations**, where you read both
sides and decide.

## Good to know

- The return emails are written by Yclas and aren't in **Email templates**.
- Themes with their own **My Payments** and **My Sales** pages (such as Atlantic Lite and the themes based on it)
  don't show returns.
- A refund made through a return shows on the order in [Orders](/how-to-manage-orders/) like any other refund.

## Related guides

- [Disputes about an order](/disputes/) — when buyer and seller can't agree.
- [Stripe and Stripe Connect](/stripe/) — the payments returns refund through.
- [Seller storefronts](/storefronts/) — where sellers write their returns policy.
- [Checkout, payments and invoices for members](/member-payments/) — My Payments and My Sales.
{: .cards}
