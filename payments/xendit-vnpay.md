---
title: Take payments in Southeast Asia with Xendit and VNPAY
nav_title: Xendit and VNPAY
description: Let members pay you by card, bank transfer, e-wallet or QR with Xendit in Indonesia, the Philippines, Malaysia, Thailand and Vietnam, or with VNPAY in Vietnam, and set up each one step by step.
section: payments
order: 53
permalink: /xendit-vnpay/
keywords: xendit, vnpay, vnpay-qr, vnpayment, indonesia, philippines, malaysia, thailand, vietnam, rupiah, idr, peso, php, ringgit, myr, baht, thb, dong, vnd, usd, e-wallet, ewallet, qr, qris, bank transfer, virtual account, retail outlet, atm card, international cards, secret key, webhook verification token, callback token, invoices paid, terminal id, vnp_tmncode, hash secret, vnp_hashsecret, ipn, ipn url, sandbox, test key, southeast asia, asian payments
updated: 2026-11-03
plans: Available on all plans
---

<div class="summary" markdown="1">
- **Xendit**: cards, bank transfers, e-wallets, QR and retail outlets in Indonesia, the Philippines, Malaysia, Thailand and Vietnam, on Xendit's own payment page.
- **VNPAY**: Vietnam. Buyers pay on VNPAY's page with VNPAY-QR, ATM cards, bank accounts or international cards. Vietnamese dong only.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Test first: Xendit uses its test key, VNPAY has a **Sandbox** switch.
</div>

In much of Southeast Asia, people pay with a bank transfer, an e-wallet or a QR code more often than with a card.
Xendit and VNPAY let your members pay you the way they already pay for everything else.

You use your own account with Xendit or VNPAY, and the money goes straight to it. Yclas doesn't take a cut. You can
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

A membership plan paid with Xendit or VNPAY doesn't renew by itself: when it ends, the member gets an email with a
link to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## Xendit

Xendit works in Indonesia, the Philippines, Malaysia, Thailand and Vietnam. Buyers click **Pay with Xendit** at
checkout and pay on Xendit's payment page, with whichever methods your Xendit account offers: for example card, bank
transfer, e-wallet, QR or retail outlet. Then they come back to your site.

### What you need from Xendit

- A Xendit business account.
- A **Secret Key** with write permission for Money-in. Create it in your Xendit dashboard under
  **Settings › API Keys**. Xendit gives you test keys (`xnd_development_…`) and, once your account is activated, live
  keys (`xnd_production_…`).
- Your **Webhook verification token**, from **Settings › Webhooks** in your Xendit dashboard.
- Your site's currency must be one Xendit charges in and that is enabled on your Xendit account: **IDR**, **PHP**,
  **MYR**, **THB**, **VND** or **USD**. Set it in **Settings › Payments** (see
  [Currency and price format](/how-to-currency-format/)). For any other currency the Xendit button doesn't appear.

### Set up Xendit

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Xendit**.
2. Paste your key in **Secret Key**.
3. Paste the token in **Webhook verification token**.
4. Click **Save**.
5. Copy the address in **Webhook URL** (click the box to select it). It looks like
   `https://yourdomain.com/xendit/webhook/1`.
6. In your Xendit dashboard, go to **Settings › Webhooks** and paste it as the **Invoices paid** URL.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Secret Key** | The key that lets your site create payments in your Xendit account and check them. A test key (`xnd_development_…`) takes test payments; a live key takes real ones. Once saved it isn't shown again: leave the field blank to keep it. |
| **Webhook verification token** | Required. Proves that a webhook really comes from your Xendit account. Until it is filled in, the Xendit button doesn't appear. |
| **Webhook URL** | Read only. The address Xendit tells when a payment completes. Paste it into your Xendit dashboard as the **Invoices paid** URL. |
| **Remove the saved keys (switches Xendit off)** | Shown once a key is saved. Tick it and save to delete both the key and the token and stop taking Xendit payments. |

**Why the webhook matters.** Some payments, such as bank transfers and retail outlets, finish after the buyer has
left Xendit's page. Without the webhook those orders stay unpaid on your site even though the money arrived. With it,
Xendit tells your site and the order is confirmed by itself.

A Xendit account has only one **Invoices paid** URL. If you run more than one site, use a separate Xendit account for
each.
{: .important}

### Test mode

Xendit has no separate switch: the key decides. Save a **test** Secret Key and make a test payment. While a test key is saved, the page warns: *This is a test key:
Xendit's test payments will pay real orders on your site. Use your live Secret Key once you have finished testing.*

That warning is meant literally: a test payment marks the order as paid and gives the member what they bought. Swap in
your live key before you tell your members.
{: .warning}

### What buyers see

1. At checkout they click **Pay with Xendit**.
2. They pay on Xendit's page. If they are signed in and paying their own order, Xendit can email them its receipt.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment is still going through (for example a bank transfer), they see *Your payment is being processed. We
will confirm your order as soon as it completes.* The order is confirmed when Xendit calls your webhook. If the
payment failed they see *Transaction not successful!* and can try again.

Rupiah (IDR) and dong (VND) are charged in whole units, so an amount with decimals is rounded **up** to the next
whole rupiah or dong.

## VNPAY

VNPAY is Vietnam's payment gateway. Buyers click **Pay with VNPAY** at checkout and pay on VNPAY's page with
VNPAY-QR, ATM cards, bank accounts or international cards. Then they come back to your site.

VNPAY charges **Vietnamese dong** only. The button appears only when your site's currency is **VND**, and only for
orders of 5,000 VND or more.

### What you need from VNPAY

- A VNPAY merchant account.
- The **Terminal ID** (`vnp_TmnCode`) and **Hash Secret** (`vnp_HashSecret`) VNPAY sent you when your merchant
  account was opened.
- To test first: a sandbox Terminal ID and Hash Secret for VNPAY's sandbox (sandbox.vnpayment.vn).

### Set up VNPAY

1. Go to **Add-ons**, open the **Payments** tab and click **VNPAY**.
2. Paste your **Terminal ID (vnp_TmnCode)** and **Hash Secret (vnp_HashSecret)**.
3. To try it first, tick **Sandbox** and use your sandbox Terminal ID and Hash Secret.
4. Click **Save**.
5. Copy the address in **IPN URL** (click the box to select it). It looks like `https://yourdomain.com/vnpay/ipn/1`.
6. Send it to VNPAY, or set it in the VNPAY merchant portal, as your terminal's IPN URL.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Terminal ID (vnp_TmnCode)** | Your terminal's code, from VNPAY. |
| **Hash Secret (vnp_HashSecret)** | The secret that signs every payment and every result. Once saved it isn't shown again: leave the field empty to keep it. |
| **Sandbox** | Uses VNPAY's sandbox (sandbox.vnpayment.vn) with a sandbox Terminal ID and Hash Secret, so no real money is charged. Turn it off to accept real payments. |
| **IPN URL** | Read only. The address VNPAY calls with the result of every payment. Give it to VNPAY for your terminal. |
| **Remove the saved keys (switches VNPAY off)** | Shown once a Hash Secret is saved. Tick it and save to delete both the Terminal ID and the Hash Secret and stop taking VNPAY payments. |

Both the Terminal ID and the Hash Secret are needed: until they are filled in, the VNPAY button doesn't appear. To
switch VNPAY off, tick **Remove the saved keys (switches VNPAY off)** and save.

**Why the IPN URL matters.** VNPAY calls it with the result of every payment, so orders are confirmed even when the
buyer closes the page before coming back to your site.

A terminal has only one IPN URL. If you run more than one site, use a separate VNPAY terminal for each.
{: .important}

While **Sandbox** is ticked, a sandbox payment still marks the order as paid on your site and gives the member what
they bought. Untick it and paste your live Terminal ID and Hash Secret before you tell your members.
{: .warning}

### What buyers see

1. At checkout they click **Pay with VNPAY**.
2. They pay on VNPAY's page, in Vietnamese when your site is shown in Vietnamese, otherwise in English. The page
   expires after 15 minutes; after that they start again from checkout.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If VNPAY took the payment but hasn't confirmed it yet, they see *Your payment is being processed. We will confirm
your order as soon as it completes.* The order is confirmed when VNPAY calls your IPN URL. If the payment failed or
was cancelled they see *Transaction not successful!* and can try again.

VNPAY doesn't take payments under 5,000 VND, so for a smaller order the VNPAY button doesn't appear at checkout and
buyers simply pay another way.
{: .note}

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in your Xendit dashboard or VNPAY merchant portal.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice, the second payment doesn't apply the order again. Your site emails the address
in **Sender email** (**Settings › Email**) with the subject *Xendit: an extra payment for order #…* (or
*VNPAY: an extra payment for order #…*), so you can check it in your dashboard and refund it.

## Before you go live

These gateways are new on Yclas and haven't yet been used with real Xendit or VNPAY accounts. Before you tell your
members:

- Test the whole flow in test mode, signed in as an ordinary member: Xendit with your test key, VNPAY with
  **Sandbox** ticked.
- For Xendit, try a bank transfer too, and check that the webhook confirms the order once it is paid.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Switch to your live key, or untick **Sandbox** and paste your live Terminal ID and Hash Secret, and make one small
  real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Take payments in Asia with Omise and CCAvenue](/omise-ccavenue/) — cards in Thailand, Japan, Singapore and Malaysia, and India.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider.
- [Currency and price format](/how-to-currency-format/) — set IDR, PHP, MYR, THB, VND or USD.
- [Orders and refunds](/how-to-manage-orders/) — find a payment and mark it refunded.
{: .cards}
