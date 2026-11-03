---
title: Take payments in Turkey with iyzico
nav_title: iyzico
description: Let members pay you by card, with installments where their card allows, on iyzico's secure payment page, and set it up step by step.
section: payments
order: 59
permalink: /iyzico/
keywords: iyzico, iyzipay, turkey, türkiye, turkish lira, lira, try, tl, usd, eur, gbp, installments, taksit, card payments, credit card, debit card, checkout form, merchant portal, api key, secret key, notification url, merchant notifications, fraud review, sandbox, test, turkish payments
updated: 2026-11-03
plans: Available on all plans
---

<div class="summary" markdown="1">
- **iyzico**: card payments in Turkey, with installments where the buyer's card allows, on iyzico's secure payment page.
- Charges in **TRY**, and in **USD**, **EUR** or **GBP** if iyzico has enabled them on your account.
- Takes payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Test first with the **Sandbox** switch.
</div>

iyzico is one of the most used ways to pay online in Turkey. Connect it when your members are in Turkey and expect
to pay by card in Turkish lira, often in installments.

You use your own iyzico account, and the money goes straight to it. Yclas doesn't take a cut. You can connect it
alongside [Stripe](/stripe/) and [PayPal](/paypal/): members choose at checkout.

## What it can be used for

iyzico takes payments **to you**, the site owner:

- [featured listings and bring to top](/how-to-create-featured-plan/),
- [pay to post](/pay-to-post/),
- [membership plans](/membership-plans/),
- [eWallet](/ewallet/) top-ups,
- and the other extras you sell (boosts, renewals, badges and so on).

It is **not** offered for sales between members (Buy Now, offers, auctions or the
[shopping cart](/shopping-cart/)), not even when you collect payments for your sellers. Those need a method that can
pay sellers: see [Let members sell with Buy Now](/pay-directly-from-ad/).

A membership plan paid with iyzico doesn't renew by itself: when it ends, the member gets an email with a link to pay
again. See [Renewals](/membership-plans/#renewals).
{: .note}

## What you need from iyzico

- An iyzico merchant account.
- Your **API Key** and **Secret Key**, from your iyzico Merchant Portal under **Settings › Merchant Settings**.
- To test first: the keys of an iyzico sandbox account (sandbox-merchant.iyzipay.com).
- Your site's currency must be **TRY**, **USD**, **EUR** or **GBP**. Currencies other than TRY must be enabled on
  your iyzico account. Set it in **Settings › Payments** (see [Currency and price format](/how-to-currency-format/)).
  For any other currency the iyzico button doesn't appear.

## Set up iyzico

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **iyzico**.
2. Paste your **API Key** and **Secret Key**.
3. To try it first, tick **Sandbox** and use the keys of your sandbox account.
4. Click **Save**.
5. Copy the address in **Notification URL** (click the box to select it). It looks like
   `https://yourdomain.com/iyzico/webhook/1`.
6. In your iyzico Merchant Portal, go to **Settings › Merchant Settings › Merchant Notifications** and add it.
{: .steps}

| Setting | What it does |
| --- | --- |
| **API Key** | From your iyzico Merchant Portal. |
| **Secret Key** | From your iyzico Merchant Portal. It signs every request your site sends to iyzico. Once saved it isn't shown again: leave the field blank to keep it. |
| **Sandbox** | Uses iyzico's sandbox (sandbox-merchant.iyzipay.com) with the keys of a sandbox account, so no real money is charged. Turn it off and paste your live keys to accept real payments. |
| **Notification URL** | Read only. The address iyzico tells about payments. Add it in your Merchant Portal. |
| **Remove the saved keys (switches iyzico off)** | Shown once a Secret Key is saved. Tick it and save to delete both keys and stop taking iyzico payments. |

Both keys are needed: until they are filled in, the iyzico button doesn't appear. To switch iyzico off, tick
**Remove the saved keys (switches iyzico off)** and save.

**Why the notification URL matters.** If a buyer pays but doesn't make it back to your site (for example, they close
the page), iyzico's notification still lets your site confirm the order. As the panel puts it: *A payment held for
iyzico's fraud review is emailed to you instead: check it in iyzico and mark the order paid.* See
[Payments held for review](#payments-held-for-review).

An iyzico account has only one notification URL. If you run more than one site, use a separate iyzico account for
each.
{: .important}

While **Sandbox** is ticked, a sandbox payment still marks the order as paid on your site and gives the member what
they bought. Untick it and paste your live keys before you tell your members.
{: .warning}

## What buyers see

1. At checkout they click **Pay with iyzico**.
2. They pay by card on iyzico's page, in Turkish when your site's language is Turkish, otherwise in English. Where
   their card allows, they can choose installments.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment failed, or they gave up on iyzico's page, they see *Transaction not successful!* and can try again.

iyzico asks for the buyer's full details with every payment. Your site sends the buyer's email and, when the buyer is
signed in and paying their own order, the name, phone and address from their profile. Anything your site doesn't
have is filled with placeholder values (for example the city Istanbul), so don't rely on the buyer details in your
iyzico portal.

## Payments held for review

iyzico checks payments for fraud, and sometimes holds one for review after the buyer has paid. The order is then
**not** marked as paid:

- The buyer sees *Your payment is being reviewed by iyzico. The site will confirm your order once it is approved.*
- Your site emails the address in **Sender email** (**Settings › Email**) with the subject
  *iyzico: a payment for order #… needs checking*.

Your site doesn't find out when the review ends, so you finish it by hand:

1. Check the payment in your iyzico Merchant Portal.
2. If iyzico approved it, find the order in **Orders**, open its menu and click **Mark as paid** (see
   [Mark an order as paid](/how-to-manage-orders/#mark-an-order-as-paid)).
3. If iyzico refused it, do nothing: iyzico refunds the buyer.
{: .steps}

Until you mark it paid, the member doesn't get what they bought. Check these emails promptly.
{: .important}

## Refunds and double payments

iyzico doesn't refund from your admin panel. To give money back:

1. Refund the payment in your iyzico Merchant Portal.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice, the second payment doesn't apply the order again. Your site emails the address
in **Sender email** (**Settings › Email**) with the subject *iyzico: an extra payment for order #…*, so you can check
it in your Merchant Portal and refund it.

## Before you go live

iyzico is new on Yclas and hasn't yet been used with a real iyzico account. Before you tell your members:

- Test the whole flow with **Sandbox** ticked and one of iyzico's test cards, signed in as an ordinary member.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Make sure the address in **Sender email** is one you read, so you see payments held for review.
- Untick **Sandbox**, paste your live keys and make one small real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider.
- [Currency and price format](/how-to-currency-format/) — set TRY, USD, EUR or GBP.
- [Orders and refunds](/how-to-manage-orders/) — find a payment, mark it paid or refunded.
- [Take payments with Stripe](/stripe/) — cards and wallets in many countries.
{: .cards}
