---
title: Disputes about an order
nav_title: Disputes
description: When a buyer says an item never arrived or isn't as described, the payment stays on hold while you read the conversation and decide who gets paid.
section: payments
order: 600
permalink: /disputes/
keywords: dispute, disputes, open a dispute, report a problem, problem with an order, item not received, not as described, damaged, refund the buyer, pay the seller, buyer protection, held payment, chargeback, bank dispute, resolve dispute, customer opened a chargeback
updated: 2026-10-20
plans: Professional and Marketplace plans
---

Most sales go smoothly. When one doesn't, the buyer needs somewhere to turn, and you need the facts to decide
fairly. With disputes, a buyer who paid through your site can report a problem with their order. You read their
conversation with the seller and decide: refund the buyer, pay the seller, or close it.

Disputes are part of the **Professional** and **Marketplace** plans, for every sale paid on your site:
[Buy Now](/pay-directly-from-ad/), accepted [offers](/make-an-offer/) and [quotes](/request-a-quote/), and the
[shopping cart](/shopping-cart/) (Marketplace plan). There's nothing to switch on. They work with the **Nova** and
**default** themes.
{: .note}

## Hold the money until delivery

A dispute is most useful when the seller hasn't been paid yet. On the Marketplace plan, switch on **Pay sellers after
delivery** on the **Commission on sales** page (the [Stripe escrow](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow)
setting): the money then waits until the buyer confirms they received the item, and while a dispute is open it stays
on hold, even if the order would otherwise be marked as received automatically.

With it on, buyers also see a buyer protection note at checkout in the shopping cart: *each seller is paid only once
you confirm you received your order. If something is wrong, report a problem from My Payments before confirming.*

Without it, the seller is paid at the moment of the sale. You can still read the dispute and help both sides, but any
refund is made in your Stripe or PayPal account.

## How a buyer reports a problem

1. In **My Payments**, the buyer clicks **Report a problem** next to the order. (From their conversation with the
   seller, **Open a dispute** does the same; in Nova it's in the conversation's **⋯** menu.)
2. They choose **What went wrong?**: *I didn't receive it*, *It isn't as described*, *It arrived damaged* or
   *Something else*.
3. They describe it under **Tell us what happened** (10 to 2,000 characters) and click **Send the dispute**.
{: .steps}

**Report a problem** shows on a paid sale that the buyer hasn't marked as received, and that isn't cancelled or
refunded. One dispute can be open per order; the order then shows **Dispute open**.

What happens next:

- the buyer's message is posted in their conversation with the seller, so the seller can answer there;
- the seller and your site's administrators get an email, with a button that opens the disputes;
- the conversation appears in **Reported conversations** in your admin panel.

If the buyer sorts it out with the seller and clicks **Mark as received** after all, their dispute closes in the
seller's favour, and the seller is paid.

## Decide a dispute

1. Click **Reported conversations** in the sidebar. Disputes about an order show *Dispute* with the order number.
2. Click **Open**. You see the order (amount, buyer, seller, whether it was shipped or received), what the buyer
   says, and the whole conversation between them.
3. Write your decision in the box. It is emailed to the buyer and the seller.
4. Click one of the buttons and confirm.
{: .steps}

| Button | What happens |
| --- | --- |
| **Refund the buyer** | The order is cancelled, what the seller was due is taken back, and the buyer is refunded to their card. |
| **Pay the seller** | The order is marked as received and the seller is paid. |
| **Close without a payment change** | No money moves: they sorted it out, or you settled it elsewhere. |

**Refund the buyer** and **Pay the seller** only show for a card payment through Stripe that is still on hold
(payments held until delivery, not yet received or cancelled). For anything else, the page tells you why, and you
settle it in that payment account (Stripe, PayPal, Escrow.com…) and then close the dispute.

If Stripe refuses a refund, nothing is said to the buyer or seller and the dispute opens again, so you can check the
order in [Orders](/how-to-manage-orders/) and try again.
{: .important}

**Resolve** in the list of reported conversations also closes a dispute without a payment change, and tells both
sides. Every decision is recorded in the [audit log](/admin-support-tools/#audit-log).

## Bank chargebacks

Sometimes a buyer asks their bank to reverse a card payment instead. When Stripe tells your site about it (set up
the webhooks on the **Commission on sales** page), the chargeback opens a dispute on the order, or joins the one the
buyer already opened. The dispute page then shows *The buyer also disputed the payment with their bank* with an
**Open in Stripe** link.

Answer the bank in your Stripe Dashboard before its deadline. When the bank decides, the dispute closes by itself,
as won by the seller or by the buyer, and both are emailed.

## Good to know

- Disputes and [returns](/returns/) work together: a buyer whose return the seller refused can take it to you, and
  it arrives as a dispute.
- The dispute emails are written by Yclas and aren't in **Email templates**.
- Themes with their own **My Payments** page (such as Atlantic Lite and the themes based on it) don't show **Report a
  problem**. Members can still use **Open a dispute** in the conversation on Nova and the default theme.
- Paid bookings keep their own chargeback handling and don't open a dispute here.

## Related guides

- [Returns on sales](/returns/) — when the buyer wants to send an item back.
- [Support tools for administrators](/admin-support-tools/) — reported conversations and the audit log.
- [Stripe and Stripe Connect](/stripe/) — card payments, commission and holding the money.
- [Orders and transactions](/how-to-manage-orders/) — refunds and cancellations by hand.
{: .cards}
