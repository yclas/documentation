---
title: Take payments in Africa with Paystack and M-Pesa
nav_title: Paystack and M-Pesa
description: Let members pay you by card and the other methods your Paystack account offers, or with M-Pesa on their phone in Kenya, and set up each one step by step.
section: payments
order: 52
permalink: /paystack-mpesa/
keywords: paystack, m-pesa, mpesa, lipa na m-pesa, m-pesa express, stk push, safaricom, daraja, paybill, till number, buy goods, shortcode, passkey, consumer key, consumer secret, nigeria, ghana, kenya, south africa, naira, ngn, cedi, ghs, kes, shilling, zar, rand, ussd, mobile money, bank transfer, africa, african payments, webhook, sandbox, test key
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- **Paystack**: cards and the other methods your Paystack account offers, in Nigeria, Ghana, Kenya and South Africa, on Paystack's own payment page.
- **M-Pesa**: buyers in Kenya type their phone number and confirm with their M-Pesa PIN on their phone. Kenyan shillings only.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Test first: M-Pesa has a **Sandbox** switch, Paystack uses its test key.
</div>

Many members in Africa don't pay by card. Paystack and M-Pesa let them pay you the way they already pay for everything
else: a bank transfer, a USSD code, mobile money, or a prompt on their phone.

You use your own account with Paystack or Safaricom, and the money goes straight to it. Yclas doesn't take a cut. You
can connect one, both, or either alongside [Stripe](/stripe/) and [PayPal](/paypal/): members choose at checkout.

## What they can be used for

Both gateways take payments **to you**, the site owner:

- [featured listings and bring to top](/how-to-create-featured-plan/),
- [pay to post](/pay-to-post/),
- [membership plans](/membership-plans/),
- [eWallet](/ewallet/) top-ups,
- and the other extras you sell (boosts, renewals, badges and so on).

They are **not** offered for sales between members (Buy Now, offers, auctions or the
[shopping cart](/shopping-cart/)), not even when you collect payments for your sellers. Those need a method that can
pay sellers: see [Let members sell with Buy Now](/pay-directly-from-ad/).

A membership plan paid with Paystack or M-Pesa doesn't renew by itself: when it ends, the member gets an email with a
link to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## Paystack

Paystack works in Nigeria, Ghana, Kenya and South Africa. Buyers click **Pay with Paystack** at checkout and pay on
Paystack's checkout page, with whichever methods your Paystack account offers: card, bank transfer, USSD or mobile
money. Then they come back to your site.

### What you need from Paystack

- A Paystack business account in your country.
- Your **Secret Key**, from the API keys section of your Paystack dashboard. Paystack gives you a test key
  (`sk_test_…`) and, once your business is approved, a live key (`sk_live_…`).
- Your site's currency must be one Paystack charges in and that is switched on for your account: **NGN**, **GHS**,
  **KES**, **ZAR** or **USD**. Set it in **Settings › Payments** (see [Currency and price format](/how-to-currency-format/)).
  For any other currency the Paystack button doesn't appear.

### Set up Paystack

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Paystack**.
2. Paste your key in **Secret Key**.
3. Click **Save**.
4. Copy the address in **Webhook URL** (click the box to select it). It looks like
   `https://yourdomain.com/paystack/webhook/1`.
5. In your Paystack dashboard, in the API keys and webhooks settings, paste it as your webhook URL and save.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Secret Key** | The key that lets your site create payments in your Paystack account and check them. A test key (`sk_test_…`) takes test payments; a live key takes real ones. |
| **Webhook URL** | Read only. The address Paystack tells when a payment completes. Paste it into your Paystack dashboard. |

**Why the webhook matters.** Some payments, such as bank transfers, finish after the buyer has left Paystack's page.
Without the webhook those orders stay unpaid on your site even though the money arrived. With it, Paystack tells your
site and the order is confirmed by itself.

A Paystack account has only one webhook URL. If you run more than one site, use a separate Paystack account for each.
{: .important}

### Test mode

Paystack has no separate switch: the key decides. Save your **test** Secret Key and pay with one of Paystack's test
cards. While a test key is saved, the page warns: *This is a test key: Paystack's test cards will pay real orders on
your site. Use your live Secret Key once you have finished testing.*

That warning is meant literally: a test payment marks the order as paid and gives the member what they bought. Swap in
your live key before you tell your members.
{: .warning}

### What buyers see

1. At checkout they click **Pay with Paystack**.
2. They pay on Paystack's page. A **cancel** link there brings them back to your checkout.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment is still going through (for example a bank transfer), they see *Your payment is being processed. We
will confirm your order as soon as it completes.* The order is confirmed when Paystack calls your webhook. If the
payment failed they see *Transaction not successful!* and can try again.

## M-Pesa

M-Pesa uses Safaricom's Lipa na M-Pesa Online (M-Pesa Express, also called STK Push). There is no payment page to
visit: the buyer types their phone number at checkout, gets a prompt on their phone, and enters their M-Pesa PIN.
The checkout page waits and moves on by itself once the payment is through.

M-Pesa charges **Kenyan shillings** only. The button appears only when your site's currency is **KES**.

### What you need from Safaricom

- An M-Pesa **Paybill** or **Till** (Buy Goods) number for your business.
- An app on the Safaricom Daraja portal (developer.safaricom.co.ke) with M-Pesa Express, taken live for your Paybill
  or Till. Safaricom handles going live; it can take a few days.
- From Daraja: the app's **Consumer Key** and **Consumer Secret**, your **Business Shortcode** and the
  Lipa na M-Pesa Online **Passkey** Safaricom sends you when you go live.

You don't need to give Safaricom any address from your site: each payment request tells Safaricom where to send the
result.

### Set up M-Pesa

1. Go to **Add-ons**, open the **Payments** tab and click **M-Pesa**.
2. Fill in the fields below.
3. To try it first, tick **Sandbox** and use the keys of your Daraja test app.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Consumer Key** | From your Daraja app. |
| **Consumer Secret** | From your Daraja app. |
| **Business Shortcode** | Your Paybill number, or for a Till the store number (head office) it belongs to. |
| **Passkey** | The Lipa na M-Pesa Online passkey Safaricom sent you when you went live. |
| **Till number (Buy Goods)** | Only for a Till: buyers pay this Till. Leave it empty for a Paybill, where the order number is the account number. |
| **Sandbox** | Uses Safaricom's sandbox with your Daraja test app, so no real money is charged. Turn it off to accept real payments. |

The first four fields are all needed: until they are filled in, the M-Pesa button doesn't appear. With a Paybill,
the account reference on the buyer's M-Pesa message is the order number, for example `Order 1234`.

If the page says *M-Pesa is not available on your site yet: it is being updated*, you can still save your keys.
Buyers see M-Pesa as soon as the update is done.
{: .note}

### What buyers see

1. At checkout, under **M-Pesa phone number**, they type their number (for example `0712345678`). Signed-in members
   who have a phone number on their profile find it filled in.
2. They click **Pay with M-Pesa** and see *Check your phone and enter your M-Pesa PIN to pay.*
3. They enter their PIN on the prompt on their phone.
4. The checkout page checks every few seconds and, once the payment is confirmed, moves to the payment-complete page.
{: .steps}

Numbers can be typed as `0712 345 678`, `+254712345678` or `712345678`; only Kenyan mobile numbers are accepted.
M-Pesa charges whole shillings, so an amount with cents is rounded **up** to the next shilling.

If the buyer cancels on their phone or the prompt times out, they see *The M-Pesa payment was not completed. You can
try again.*

### Limits that protect your members

A payment prompt rings someone's phone, so M-Pesa is careful about who can send one:

- Only the buyer can pay their order: the signed-in member who made it, an admin, or a visitor who isn't signed in,
  for one hour after making the order, from the same browser. Anyone else doesn't see the phone field. A visitor who
  tries after that hour is asked *Please log in to pay this order.*
- One prompt per order per minute (*A payment request was just sent. Please check your phone, or try again in a
  minute.*), and at most 5 prompts per phone number and 10 per internet connection each hour (*Too many payment
  requests. Please try again later or use another payment method.*).

Phone numbers typed at checkout aren't stored.

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in your Paystack dashboard, or through M-Pesa for your Paybill or Till.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice (say, with Paystack and then another method), the second payment doesn't apply
the order again. Your site emails the address in **Sender email** (**Settings › Email**) with the subject
*Paystack: an extra payment for order #…* (or *M-Pesa: …*), so you can check it in your dashboard and refund it.

## Before you go live

These gateways are new on Yclas. Before you tell your members:

- Test the whole flow in test mode, signed in as an ordinary member: Paystack with your test key, M-Pesa with
  **Sandbox** ticked. Try M-Pesa on a real phone.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Switch to your live key, or untick **Sandbox**, and make one small real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider, including PayFast for South Africa.
- [Currency and price format](/how-to-currency-format/) — set NGN, GHS, KES, ZAR or USD.
- [Orders and refunds](/how-to-manage-orders/) — find a payment and mark it refunded.
- [Accept crypto with CoinGate](/coingate/) — another way to pay where cards are rare.
{: .cards}
