---
title: Take card payments with eWay and Braintree
nav_title: eWay and Braintree
description: Accept cards in Australia and New Zealand with eWay's hosted payment page, or cards anywhere Braintree works with its secure checkout, and set up each one.
section: payments
order: 56
permalink: /eway-braintree/
keywords: eway, e-way, myeway, braintree, paypal braintree, drop-in, australia, new zealand, aud, nzd, australian dollar, new zealand dollar, card payments, credit card, api key, api password, public key, private key, merchant account id, merchant account currency, sandbox, test environment
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- **eWay**: card payments in Australia and New Zealand, on eWay's secure payment page. AUD or NZD.
- **Braintree**: card payments in a secure Braintree form on your site, in the currency of your Braintree merchant account.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Each has a **Sandbox** switch for testing.
</div>

eWay and Braintree are card payment providers. Use eWay if your business is in Australia or New Zealand and already
banks with it; use Braintree if you have a Braintree merchant account, for example one set up through PayPal.

You use your own account with the provider, and the money goes straight to it. Yclas doesn't take a cut. You can
connect them alongside [Stripe](/stripe/) and [PayPal](/paypal/): members choose at checkout.

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

A membership plan paid with eWay or Braintree doesn't renew by itself: when it ends, the member gets an email with a
link to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## eWay

eWay takes card payments for businesses in Australia and New Zealand. Buyers click **Pay with eWay**, enter their card
on eWay's secure payment page, and come back to your site.

### What you need from eWay

- An eWay merchant account.
- Your **API Key** and **API Password**, from the API key settings in MYeWAY, eWay's merchant dashboard.
- Your site's currency must be **AUD** or **NZD**, and the one your eWay account takes. Set it in
  **Settings › Payments** (see [Currency and price format](/how-to-currency-format/)). For any other currency the eWay
  button doesn't appear.
- For testing: a separate eWay sandbox account, with its own API Key and Password.

### Set up eWay

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **eWay**.
2. Paste your **API Key** and **API Password**.
3. To try it first, tick **Sandbox** and use the key and password of your eWay sandbox account.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **API Key** | Identifies your eWay account. |
| **API Password** | The password that goes with the API key. Keep it secret. |
| **Sandbox** | Uses the test environment, so no real money is charged. It needs the API Key and Password of an eWay sandbox account. Turn it off to accept real payments. |

There is no webhook address to paste: each payment tells eWay where to send the buyer back.

If the page says *The form expired. Please send it again.*, reload the page and save again.

### What buyers see

1. At checkout they click **Pay with eWay**.
2. They enter their card on eWay's payment page.
3. They come back to your payment-complete page, and what they bought is applied straight away.
{: .steps}

A declined or cancelled payment shows *Transaction not successful!*, and they can try again.

eWay has no webhook in Yclas: the order is confirmed when the buyer comes back to your site. If a buyer paid but
closed the window first, the order stays unpaid. Check the payment in MYeWAY, then open the order in **Orders** and
click **Mark as paid** (see [Mark an order as paid](/how-to-manage-orders/#mark-an-order-as-paid)).
{: .important}

## Braintree

Braintree is a card payment service owned by PayPal. Buyers click **Pay with Braintree**, which opens a **Pay with
Braintree** page on your site showing what they are buying and the price. They enter their card in Braintree's secure
form on that page and click **Pay Now**. Card details go straight to Braintree, never to your site.

### What you need from Braintree

- A Braintree merchant account.
- Your **Public Key** and **Private Key**, from the API settings of your Braintree Control Panel.
- The currency of the merchant account you will use. Braintree charges every payment in its merchant account's
  currency, so tell your site which one it is (see below).
- For testing: a Braintree sandbox account, with its own keys.

### Set up Braintree

1. Go to **Add-ons**, open the **Payments** tab and click **Braintree**.
2. Paste your **Public Key** and **Private Key**.
3. If you have more than one merchant account, enter the one to use in **Merchant Account ID**. Leave it empty to use
   your default merchant account.
4. In **Currency**, enter that merchant account's currency as a three-letter code, for example `USD`, `EUR` or `GBP`.
5. To try it first, tick **Sandbox** and use the keys of your Braintree sandbox account.
6. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Public Key** | Identifies your Braintree account. |
| **Private Key** | Lets your site take payments. Keep it secret. |
| **Merchant Account ID** | Optional. The merchant account to charge. Leave empty to use your default merchant account. |
| **Currency** | The currency of that merchant account. Braintree charges every payment in it, so the Braintree button only shows for orders in this currency. |
| **Sandbox** | Uses the test environment, so no real money is charged. It needs the keys of a Braintree sandbox account. Turn it off to accept real payments. |

**Currency** must match your site's currency (**Settings › Payments**). If it's empty, or a different currency, the
Braintree button doesn't appear at checkout. If a payment still comes back in another currency, the order isn't
marked paid and your site cancels the payment in Braintree, so the buyer gets the money back.
{: .important}

There is no webhook address to paste: your site gets the result of each payment straight away.

### What buyers see

1. At checkout they click **Pay with Braintree**.
2. On the **Pay with Braintree** page they enter their card and click **Pay Now**, or **Cancel** to go back to the
   checkout.
3. They land on your payment-complete page, and what they bought is applied straight away.
{: .steps}

A declined card shows *Transaction not successful!* If a payment is already being processed for the same order (a
double click, for example), they see *Your payment is being processed. We will confirm your order as soon as it
completes.*, and the card is never charged twice for one order.

The Braintree setup page mentions PayPal and wallets, but the payment form on your site asks for a card: PayPal,
Apple Pay and Google Pay aren't offered there, even if they are switched on in your Braintree account. To take
PayPal, connect [PayPal](/paypal/) as well.
{: .note}

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in MYeWAY or in your Braintree Control Panel.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays an order with eWay after it was already paid another way, the eWay payment doesn't apply the order
again. Your site emails the address in **Sender email** (**Settings › Email**) with the subject *eWAY: an extra
payment for order #…*, so you can refund it.

## Before you go live

These gateways are new on Yclas. Before you tell your members:

- Tick **Sandbox**, save your sandbox keys and test the whole flow signed in as an ordinary member, with the
  provider's test cards.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Save your live keys, untick **Sandbox**, and make one small real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Stripe](/stripe/) — card payments in most countries, with automatic plan renewals.
- [PayPal](/paypal/) — PayPal for your extras and for sellers.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider.
- [Orders and refunds](/how-to-manage-orders/) — find a payment, mark it paid or refunded.
{: .cards}
