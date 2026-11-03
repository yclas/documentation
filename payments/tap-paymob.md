---
title: Take payments in the Middle East and Egypt with Tap and Paymob
nav_title: Tap and Paymob
description: Let members pay you with cards, mada, KNET, Benefit, Apple Pay or mobile wallets in the Gulf, Egypt, Jordan and Pakistan, with Tap Payments or Paymob, and set up each one step by step.
section: payments
order: 55
permalink: /tap-paymob/
keywords: tap, tap payments, gosell, paymob, unified checkout, mada, knet, benefit, apple pay, mobile wallet, saudi arabia, ksa, uae, emirates, dubai, kuwait, bahrain, qatar, oman, jordan, egypt, pakistan, riyal, sar, dirham, aed, dinar, kwd, bhd, jod, qar, omr, egyptian pound, egp, pkr, gulf, gcc, middle east, mena, arab payments, integration id, hmac, api key, secret key, public key, webhook, callback, test key
updated: 2026-11-03
plans: Available on all plans
---

<div class="summary" markdown="1">
- **Tap Payments**: cards, mada, KNET, Benefit, Apple Pay and the other methods your Tap account offers, in the Gulf, Egypt and Jordan, on Tap's own payment page.
- **Paymob**: cards, mobile wallets and the other methods of your Paymob integrations, in Egypt, Saudi Arabia, the UAE or Pakistan, on Paymob's checkout page.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Test first: both use their test keys, there is no separate switch.
</div>

Many members in the Middle East pay with a local card network or a wallet rather than Visa or Mastercard: mada in
Saudi Arabia, KNET in Kuwait, Benefit in Bahrain, a mobile wallet in Egypt. Tap and Paymob let them pay you that way.

You use your own account with Tap or Paymob, and the money goes straight to it. Yclas doesn't take a cut. You can
connect one, both, or either alongside [Stripe](/stripe/) and [PayPal](/paypal/): members choose at checkout.

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

A membership plan paid with Tap or Paymob doesn't renew by itself: when it ends, the member gets an email with a link
to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## Tap Payments

Tap works in the Gulf, Egypt and Jordan. Buyers click **Pay with Tap** at checkout and pay on Tap's payment page with
the methods enabled on your Tap account, for example card, mada, KNET, Benefit or Apple Pay. Then they come back to
your site.

### What you need from Tap

- A Tap business account.
- Your **Secret Key**, from your Tap dashboard (**goSell › API Credentials**). Tap gives you a test key
  (`sk_test_…`) and a live key (`sk_live_…`).
- Your site's currency must be one Tap charges in and that is enabled on your Tap account: **AED**, **SAR**, **KWD**,
  **BHD**, **QAR**, **OMR**, **EGP**, **JOD** or **USD**. Set it in **Settings › Payments** (see
  [Currency and price format](/how-to-currency-format/)). For any other currency the Tap button doesn't appear.

### Set up Tap

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Tap Payments**.
2. Paste your key in **Secret Key**.
3. Click **Save**.
{: .steps}

That's all. There is nothing to set in your Tap dashboard.

| Setting | What it does |
| --- | --- |
| **Secret Key** | The key that lets your site create payments in your Tap account and check them. A test key (`sk_test_…`) takes test payments; a live key takes real ones. Once saved it isn't shown again: leave the field blank to keep it, or tick **Remove the saved secret** to delete it. |
| **Webhook URL** | Read only, for your information. Your site sends this address to Tap with every payment, and Tap uses it to confirm payments that complete after the buyer has left its page. |

You can use the same Tap account on more than one site: each payment carries the site it was made on.

### Test mode

Tap has no separate switch: the key decides. Save your **test** Secret Key and pay with one of Tap's test cards.
While a test key is saved, the page warns: *This is a test key: Tap's test cards will pay real orders on your site.
Use your live Secret Key once you have finished testing.*

That warning is meant literally: a test payment marks the order as paid and gives the member what they bought. Swap in
your live key before you tell your members.
{: .warning}

### What buyers see

1. At checkout they click **Pay with Tap**.
2. They pay on Tap's page, with whichever method they choose there.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment is still going through, they see *Your payment is being processed. We will confirm your order as soon
as it completes.* The order is confirmed when Tap calls your site. If the payment failed they see
*Transaction not successful!* and can try again.

Amounts in **KWD**, **BHD**, **OMR** and **JOD** are charged with three decimals (for example 1.250 KWD); the other
currencies with two.

## Paymob

Paymob works in Egypt, Saudi Arabia, the United Arab Emirates and Pakistan. Buyers click **Pay with Paymob** at
checkout and pay on Paymob's checkout page with the methods of the integrations you list, for example card or mobile
wallet. Then they come back to your site.

Each Paymob region charges in its own currency only, and your site's currency must match it:

| Region | Currency |
| --- | --- |
| Egypt | EGP |
| Saudi Arabia | SAR |
| United Arab Emirates | AED |
| Pakistan | PKR |

For any other currency the Paymob button doesn't appear.

### What you need from Paymob

- A Paymob account in one of the regions above.
- From your Paymob dashboard, under **Settings › Account Info**: the **Secret Key**, **Public Key**,
  **HMAC secret** and **API Key**.
- From **Developers › Payment Integrations**: the **Integration ID** of each payment method you want to offer (one
  for cards, one for wallets and so on). Test and live integrations have different IDs.

### Set up Paymob

1. Go to **Add-ons**, open the **Payments** tab and click **Paymob**.
2. In **Region**, choose the country your Paymob account is in.
3. Fill in the keys and the integration IDs (see the table below).
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Region** | The country your Paymob account is in: Egypt (EGP), Saudi Arabia (SAR), United Arab Emirates (AED) or Pakistan (PKR). Each region charges in its own currency only. |
| **Public Key** | From **Settings › Account Info**. Opens Paymob's checkout page for the buyer. |
| **Integration IDs** | Comma separated, one for each payment method to offer, for example `1234567, 1234568`. The checkout page offers exactly these. |
| **Secret Key** | From **Settings › Account Info**. Lets your site create payments. |
| **HMAC secret** | From **Settings › Account Info**. Lets your site check that a payment result really comes from Paymob. |
| **API Key** | From **Settings › Account Info**. Lets your site look up a payment in Paymob before confirming the order. |
| **Transaction processed callback** | Read only. Your site sends this address to Paymob with every payment, so it confirms payments that complete after the buyer leaves. You can also paste it as the Transaction processed callback of your integrations. |

All of these must be filled in: until they are, the Paymob button doesn't appear. The Secret Key, HMAC secret and API
Key aren't shown again once saved: leave a field blank to keep it. **Remove the saved secrets** deletes all three.

You can use the same Paymob account on more than one site: each payment carries the site it was made on.

### Test mode

Like Tap, Paymob has no separate switch: your keys and integration IDs decide. Save your test keys with your **test**
integration IDs and pay with one of Paymob's test cards. While a test Secret Key is saved, the page warns:
*This is a test key: Paymob's test cards will pay real orders on your site. Use your live keys and integrations once
you have finished testing.*

A test payment marks the order as paid and gives the member what they bought. When you switch to your live keys,
change the **Integration IDs** to your live ones too.
{: .warning}

### What buyers see

1. At checkout they click **Pay with Paymob**.
2. They pay on Paymob's checkout page with one of the methods you listed.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

A wallet or kiosk payment can still be pending when the buyer comes back. They then see *Your payment is being
processed. We will confirm your order as soon as it completes.* and the order is confirmed when Paymob calls your
site. If the payment failed they see *Transaction not successful!* and can try again.

## If the payment page doesn't open

If Tap or Paymob refuses to start a payment (a wrong key, a currency not enabled on your account, a wrong integration
ID), the buyer goes back to the checkout with an error asking them to try another payment method. Check your keys, your currency and, for Paymob, the region and integration IDs, then try again.

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in your Tap or Paymob dashboard.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice (say, with Tap and then another method), the second payment doesn't apply the
order again. Your site emails the address in **Sender email** (**Settings › Email**) with the subject
*Tap: an extra payment for order #…* (or *Paymob: …*), so you can check it in your dashboard and refund it.

## Before you go live

These gateways are new on Yclas. Before you tell your members:

- Test the whole flow with your test keys, signed in as an ordinary member. For Paymob, try each integration you
  listed (card, wallet).
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Switch to your live keys (and, for Paymob, your live integration IDs) and make one small real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider, including PayTabs.
- [Take payments in Pakistan and Bangladesh](/safepay-sslcommerz/) — Safepay and SSLCommerz.
- [Currency and price format](/how-to-currency-format/) — set your site's currency.
- [Orders and refunds](/how-to-manage-orders/) — find a payment and mark it refunded.
{: .cards}
