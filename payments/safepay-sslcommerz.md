---
title: Take payments in Pakistan and Bangladesh with Safepay and SSLCommerz
nav_title: Safepay and SSLCommerz
description: Let members pay you by card in Pakistan with Safepay, or with bKash, Nagad, Rocket, cards and internet banking in Bangladesh with SSLCommerz, and set up each one step by step.
section: payments
order: 61
permalink: /safepay-sslcommerz/
keywords: safepay, getsafepay, sslcommerz, ssl commerz, pakistan, bangladesh, rupee, pkr, taka, bdt, bkash, nagad, rocket, internet banking, mobile banking, card, store id, store password, api key, secret key, webhook, shared secret, endpoint, payment.succeeded, ipn, ipn url, sandbox, high risk, risk level, south asia
updated: 2026-11-03
plans: Available on all plans
---

<div class="summary" markdown="1">
- **Safepay**: card payments in Pakistan on Safepay's secure checkout page. PKR, USD, GBP, EUR, CAD, AED or SAR.
- **SSLCommerz**: Bangladesh. Buyers pay with bKash, Nagad, Rocket, a card or internet banking on SSLCommerz's page.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Test first: both have a **Sandbox** switch.
</div>

Many members in Pakistan and Bangladesh would rather pay with a local provider than with an international card
gateway. Safepay and SSLCommerz are local providers, and SSLCommerz also takes the mobile wallets people in
Bangladesh use every day.

You use your own account with Safepay or SSLCommerz, and the money goes straight to it. Yclas doesn't take a cut. You
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

A membership plan paid with Safepay or SSLCommerz doesn't renew by itself: when it ends, the member gets an email with
a link to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## Safepay

Safepay works in Pakistan. Buyers click **Pay with Safepay** at checkout and pay on Safepay's secure checkout page.
Then they come back to your site.

### What you need from Safepay

- A Safepay merchant account.
- From your Safepay dashboard (**Developers › API keys**): your **API Key** and **Secret Key**.
- A webhook endpoint you add in **Developers › Endpoints** (see the steps below), and its **shared secret**.
- Your site's currency must be **PKR**, **USD**, **GBP**, **EUR**, **CAD**, **AED** or **SAR**. Set it in
  **Settings › Payments** (see [Currency and price format](/how-to-currency-format/)). For any other currency the
  Safepay button doesn't appear.

### Set up Safepay

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Safepay**.
2. Paste your **API Key** and **Secret Key**.
3. To try it first, tick **Sandbox** and use the keys of your Safepay sandbox dashboard.
4. Click **Save**.
5. Copy the address in **Webhook URL** (click the box to select it). It looks like
   `https://yourdomain.com/safepay/webhook/1`.
6. In your Safepay dashboard, go to **Developers › Endpoints**, add that address as an endpoint and subscribe it to
   the `payment.succeeded` event.
7. Copy the endpoint's shared secret, paste it in **Webhook shared secret** and click **Save** again.
{: .steps}

| Setting | What it does |
| --- | --- |
| **API Key** | From **Developers › API keys**. Creates the payment for each order. |
| **Secret Key** | From **Developers › API keys**. Lets your site check each payment with Safepay before confirming the order. Once saved it isn't shown again: leave the field blank to keep it. |
| **Webhook shared secret** | The shared secret of the endpoint you added in **Developers › Endpoints**. Your site only accepts webhooks signed with it. Not shown again once saved. |
| **Sandbox** | Uses Safepay's sandbox (sandbox.api.getsafepay.com) with the keys of your sandbox dashboard, so no real money is charged. Turn it off and paste your live keys to accept real payments. |
| **Webhook URL** | Read only. The address to add as an endpoint in your Safepay dashboard. |

The API Key and Secret Key are needed: until both are filled in, the Safepay button doesn't appear.

**Why the webhook matters.** The button works without it, but some payments finish after the buyer has left
Safepay's page. Without the endpoint and its shared secret, those orders stay unpaid on your site even though the
money arrived. With them, Safepay tells your site and the order is confirmed by itself.
{: .important}

Your sandbox dashboard has its own keys and endpoints. When you untick **Sandbox**, paste your live
API Key and Secret Key, add the endpoint again in your live dashboard and paste its shared secret.

### What buyers see

1. At checkout they click **Pay with Safepay**.
2. They pay on Safepay's checkout page. If they cancel there, they come back to your checkout.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment is authorised but not completed yet, they see *Your payment is being processed. We will confirm your
order as soon as it completes.* The order is confirmed when Safepay calls your webhook. If the payment failed they see
*Transaction not successful!* and can try again.

## SSLCommerz

SSLCommerz works in Bangladesh. Buyers click **Pay with SSLCommerz** at checkout and pay on SSLCommerz's secure
payment page with bKash, Nagad, Rocket, a card or internet banking. Then they come back to your site.

### What you need from SSLCommerz

- An SSLCommerz store. When it is approved, SSLCommerz emails you its **Store ID** and **Store Password**.
- For testing, a sandbox store: register one at developer.sslcommerz.com.
- Your site's currency must be **BDT**, **USD**, **EUR**, **GBP**, **SGD**, **INR** or **MYR**. Other currencies than
  BDT are converted to BDT by SSLCommerz. For any other currency the SSLCommerz button doesn't appear.

### Set up SSLCommerz

1. Go to **Add-ons**, open the **Payments** tab and click **SSLCommerz**.
2. Paste your **Store ID** and **Store Password**.
3. To try it first, tick **Sandbox** and use your sandbox store's Store ID and Password.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Store ID** | From the email SSLCommerz sent when your store was approved. |
| **Store Password** | From the same email. Your site uses it to check every payment with SSLCommerz. Once saved it isn't shown again: leave the field blank to keep it. |
| **Sandbox** | Uses SSLCommerz's sandbox (sandbox.sslcommerz.com) with a sandbox store's Store ID and Password, so no real money is charged. Turn it off and paste your live credentials to accept real payments. |
| **IPN URL** | Read only. Your site sends it with every payment, so there is nothing to set up. You can also add it in your SSLCommerz merchant panel (**My Stores › IPN Settings**) so payments that complete after the buyer leaves still confirm the order. |

Both the Store ID and Store Password are needed: until they are filled in, the SSLCommerz button doesn't appear.

You can use the same SSLCommerz store on more than one site: each payment carries the site it was made on.

### Payments held as high risk

SSLCommerz marks some payments as high risk. Your site doesn't confirm those by itself:

- The buyer sees *Your payment is being reviewed. The site will confirm your order once it has been checked.*
- You get an email at your **Sender email** (**Settings › Email**) with the subject
  *SSLCommerz: a payment for order #… needs checking*.
- Check the payment in your SSLCommerz panel. If it is genuine, open the order in **Orders** and click
  **Mark as paid** (see [Mark an order as paid](/how-to-manage-orders/#mark-an-order-as-paid)). If it is refused,
  the buyer is refunded by SSLCommerz.
{: .steps}

Until you mark it paid, the order stays unpaid and the buyer doesn't get what they bought. Check these emails promptly.
{: .important}

### What buyers see

1. At checkout they click **Pay with SSLCommerz**.
2. They pay on SSLCommerz's page with the method they choose.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment failed they see *Transaction not successful!*; if they cancelled on SSLCommerz's page they see
*Payment cancelled.* Either way they are back at the checkout and can try again.

## If the payment page doesn't open

If Safepay or SSLCommerz refuses to start a payment (for example wrong keys, sandbox keys with **Sandbox** off, or the other way
round), the buyer goes back to the checkout with an error asking them to try another payment method. Check your keys and the **Sandbox** switch, then try again.

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in your Safepay dashboard or SSLCommerz merchant panel.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice (say, with Safepay and then another method), the second payment doesn't apply the
order again. Your site emails the address in **Sender email** (**Settings › Email**) with the subject
*Safepay: an extra payment for order #…* (or *SSLCommerz: …*), so you can check it in your dashboard and refund it.

## Before you go live

These gateways are new on Yclas. Before you tell your members:

- Test the whole flow with **Sandbox** ticked, signed in as an ordinary member. For SSLCommerz, try a wallet such as
  bKash as well as a card.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Untick **Sandbox**, paste your live keys (and, for Safepay, your live endpoint's shared secret) and make one small
  real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Take payments in the Middle East and Egypt](/tap-paymob/) — Tap and Paymob, which also works in Pakistan.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider.
- [Currency and price format](/how-to-currency-format/) — set PKR, BDT or another currency.
- [Orders and refunds](/how-to-manage-orders/) — mark an order paid or refunded.
{: .cards}
