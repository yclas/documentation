---
title: Take payments in Asia with Omise and CCAvenue
nav_title: Omise and CCAvenue
description: Accept cards in Thailand, Japan, Singapore and Malaysia with Omise, or cards, net banking, UPI and wallets in India with CCAvenue, and set up each one.
section: payments
order: 54
permalink: /omise-ccavenue/
keywords: omise, opn, opn payments, ccavenue, cc avenue, thailand, japan, singapore, malaysia, india, baht, thb, yen, jpy, sgd, ringgit, myr, rupee, inr, net banking, netbanking, upi, wallets, 3-d secure, 3d secure, public key, secret key, merchant id, access code, working key, webhook, sandbox, test keys, asian payments
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- **Omise**: card payments in Thailand, Japan, Singapore and Malaysia, in a secure card form on your checkout.
- **CCAvenue**: India. Buyers pay on CCAvenue's page by card, net banking, UPI or wallet.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Test first: Omise with test keys, CCAvenue with its **Sandbox** switch.
</div>

Omise and CCAvenue are payment providers that merchants in Asia use every day. Connect one when your members are in
these countries and expect a local way to pay.

You use your own account with the provider, and the money goes straight to it. Yclas doesn't take a cut. You can
connect them alongside [Stripe](/stripe/), [PayPal](/paypal/) or [Razorpay](/other-payment-gateways/#razorpay):
members choose at checkout.

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

A membership plan paid with Omise or CCAvenue doesn't renew by itself: when it ends, the member gets an email with a
link to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## Omise

Omise takes card payments for merchants in Thailand, Japan, Singapore and Malaysia. Buyers type their card into
Omise's own secure form, which opens on your checkout page, so card details never reach your site. Cards that need
3-D Secure go to the bank's page to confirm and then come back.

### What you need from Omise

- An Omise merchant account.
- Your **Public Key** (`pkey_…`) and **Secret Key** (`skey_…`), from the keys section of your Omise dashboard. Omise
  gives test keys (`pkey_test_…`, `skey_test_…`) and live keys.
- Your site's currency must be one your Omise account accepts. The Omise button only appears for **THB**, **JPY**,
  **SGD**, **MYR**, **USD**, **EUR**, **GBP**, **AUD**, **CAD**, **CHF**, **CNY**, **DKK** and **HKD**, and your
  account may accept fewer, depending on its country. Set it in **Settings › Payments** (see
  [Currency and price format](/how-to-currency-format/)).

### Set up Omise

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Omise**.
2. Paste your **Public Key** and **Secret Key**.
3. Click **Save**.
4. Copy the address in **Webhook URL** (click the box to select it). It looks like
   `https://yourdomain.com/omise/webhook/1`.
5. In your Omise dashboard, add it as your webhook endpoint.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Public Key** | Shows Omise's card form on your checkout. |
| **Secret Key** | Lets your site charge the card and check the payment. |
| **Webhook URL** | Read only. Paste it into your Omise dashboard so a 3-D Secure payment still confirms the order when the buyer closes the window before coming back. |

An Omise account has only one webhook URL. If you run more than one site, use a separate Omise account for each.
{: .important}

If the page says *The form expired. Please send it again.*, reload the page and save again.

### Test mode

Omise has no separate switch: the keys decide. Save your **test** keys and pay with one of Omise's test cards. While
test keys are saved, the page warns: *These are test keys: Omise's test cards will pay real orders on your site. Use
your live keys once you have finished testing.*

A test payment marks the order as paid and gives the member what they bought. Swap in your live keys before you tell
your members.
{: .warning}

### What buyers see

1. At checkout they click **Pay with card (Omise)**. Omise's card form opens, with your site's name on it.
2. They enter their card and click **Pay Now**.
3. If their bank asks for 3-D Secure, they confirm on the bank's page and come back.
4. They land on your payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment is still being confirmed, they see *Your payment is being processed. We will confirm your order as
soon as it completes.*; the webhook then confirms it. A declined card shows *Transaction not successful!*

## CCAvenue

CCAvenue is one of India's largest payment gateways. Buyers click **Pay with CCAvenue**, see a short
*Redirecting to CCAvenue…* page, and pay on CCAvenue's billing page with card, net banking, UPI or a wallet,
whichever your CCAvenue account offers. Then they come back to your site.

### What you need from CCAvenue

- A CCAvenue merchant account.
- Your **Merchant ID**, **Access Code** and **Working Key**, from the API keys section of your CCAvenue dashboard.
- **Your site's address registered with CCAvenue.** CCAvenue only accepts payments from the website address
  registered with your account. The setup page shows the address to register. If you change domain, register the new
  one too.
- Your site's currency must be **INR**, or, if your CCAvenue account has multi-currency processing, one of **USD**,
  **GBP**, **EUR**, **AED**, **SGD**, **SAR**, **QAR**, **OMR**, **BHD** or **KWD**.

### Set up CCAvenue

1. Go to **Add-ons**, open the **Payments** tab and click **CCAvenue**.
2. Paste your **Merchant ID**, **Access Code** and **Working Key**.
3. Note the website address shown under the fields and make sure it is registered with CCAvenue.
4. To try it first, tick **Sandbox** and use the details of a CCAvenue test account.
5. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Merchant ID** | Your CCAvenue merchant number. |
| **Access Code** | Identifies your site to CCAvenue. |
| **Working Key** | Encrypts the payment details between your site and CCAvenue. Keep it secret. |
| **Sandbox** | Uses the test environment, so no real money is charged. Turn it off to accept real payments. |

There is no webhook address to paste: each payment tells CCAvenue where to send the buyer back.

Before an order is marked paid, your site also checks the payment with CCAvenue's Status API. If CCAvenue asks you to
allow server IP addresses for its API, ask [Yclas support](/use-yclas-support-system/) for the address to add.
{: .note}

### What buyers see

1. At checkout they click **Pay with CCAvenue**.
2. They pay on CCAvenue's billing page.
3. They come back to your payment-complete page, and what they bought is applied straight away.
{: .steps}

If CCAvenue is still waiting for the bank, or its Status API doesn't confirm the payment yet, they see *Your payment is
being processed. We will confirm your order as soon as it completes.* A failed or cancelled payment shows
*Transaction not successful!*

CCAvenue has no webhook in Yclas: the order is confirmed only when the buyer comes back to your site. If a buyer
paid but closed the window first, or CCAvenue confirmed the payment later, the order stays unpaid. Check the payment
in your CCAvenue dashboard, then open the order in **Orders** and click **Mark as paid** (see
[Mark an order as paid](/how-to-manage-orders/#mark-an-order-as-paid)).
{: .important}

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in your Omise or CCAvenue dashboard.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice, the second payment doesn't apply the order again. Your site emails the address
in **Sender email** (**Settings › Email**) with the subject *Omise: an extra payment for order #…* (or *CCAvenue: …*),
so you can check it in your dashboard and refund it.

## Before you go live

These gateways are new on Yclas. Before you tell your members:

- Test the whole flow in test mode, signed in as an ordinary member: Omise with your test keys, CCAvenue with
  **Sandbox** ticked. For Omise, try a card that asks for 3-D Secure too.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Switch to your live keys, or untick **Sandbox**, and make one small real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider, including Razorpay for India.
- [Currency and price format](/how-to-currency-format/) — the currency you charge in.
- [Orders and refunds](/how-to-manage-orders/) — find a payment, mark it paid or refunded.
{: .cards}
