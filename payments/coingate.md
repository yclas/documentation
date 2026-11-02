---
title: Accept crypto payments with CoinGate
nav_title: Crypto with CoinGate
description: Let members pay for featured listings, plans and other extras in Bitcoin and other cryptocurrencies, while your prices stay in your own currency.
section: payments
order: 58
permalink: /coingate/
keywords: coingate, crypto, cryptocurrency, bitcoin, btc, ethereum, eth, usdt, tether, stablecoin, litecoin, altcoins, crypto payments, accept bitcoin, pay with crypto, auth token, api token, api app, sandbox, invoice, network confirmation, payout currency, settlement
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Members pay in Bitcoin or another cryptocurrency your CoinGate account accepts, on CoinGate's invoice page.
- Your prices stay in your site's currency. CoinGate works out the crypto amount, and pays you out as set in your CoinGate account.
- For payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your CoinGate token. Test first with the **Sandbox** switch.
</div>

Some members would rather pay in cryptocurrency than by card. CoinGate lets them: they choose a coin on CoinGate's
invoice page and pay from their wallet. You keep your prices in your own currency, and CoinGate pays you out in the
currency you choose in your CoinGate account.

You use your own CoinGate account. Yclas doesn't take a cut.

The old BitPay connection no longer works for new sites. CoinGate is the crypto option to use now. To let sellers show
their own Bitcoin address on listings instead, see [Other payment gateways](/other-payment-gateways/#bitpay-bitcoin).
{: .note}

## What it can be used for

CoinGate takes payments **to you**, the site owner:

- [featured listings and bring to top](/how-to-create-featured-plan/),
- [pay to post](/pay-to-post/),
- [membership plans](/membership-plans/),
- [eWallet](/ewallet/) top-ups,
- and the other extras you sell (boosts, renewals, badges and so on).

It is **not** offered for sales between members (Buy Now, offers, auctions or the
[shopping cart](/shopping-cart/)), not even when you collect payments for your sellers. Those need a method that can
pay sellers: see [Let members sell with Buy Now](/pay-directly-from-ad/).

A membership plan paid with crypto doesn't renew by itself: when it ends, the member gets an email with a link to pay
again. See [Renewals](/membership-plans/#renewals).

## What you need from CoinGate

- A CoinGate merchant account.
- An **API app** created in your CoinGate account, and its **Auth Token**. The setup page says where: Merchant › API ›
  Apps.
- Your payout currency, set in your CoinGate account. Your site leaves that choice to CoinGate.
- For testing: a CoinGate sandbox account (sandbox.coingate.com) and a token from it.

Your site's currency can be any normal currency code CoinGate prices in, such as USD, EUR or GBP. If CoinGate doesn't
accept it, buyers see an error when they click the button: try a payment before you go live.

You don't need to give CoinGate any address from your site: each invoice tells CoinGate where to report the payment
and where to send the buyer back.

## Set up CoinGate

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **CoinGate**.
2. Paste your token in **Auth Token**.
3. To try it first, tick **Sandbox** and use a token from your sandbox account.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Auth Token** | The token of your CoinGate API app. It lets your site create invoices in your account and check them. Keep it secret. |
| **Sandbox** | Uses CoinGate's sandbox (sandbox.coingate.com) with a token from a sandbox account, so no real money is charged. Turn it off to accept real payments. |

Once the token is saved, the **Pay with crypto (CoinGate)** button appears at checkout.

## What buyers see

1. At checkout they click **Pay with crypto (CoinGate)**.
2. On CoinGate's invoice they pay the equivalent of your price in crypto from their wallet. If they cancel, they come back
   to your checkout.
3. They come back to your payment-complete page, which says *Payment received, confirming…*: *Your payment is on its
   way. Some payment methods take a moment to confirm…* The page updates by itself.
4. Once the network confirms the payment and CoinGate reports it as paid, the order is marked paid and what they
   bought is applied.
{: .steps}

A crypto payment is confirmed by the network, not straight away: it usually takes a few minutes, sometimes longer.
The buyer doesn't have to keep the page open: the order is confirmed in the background.

Only a payment CoinGate reports as **paid** confirms the order. An invoice that expires, or that is paid short, leaves
the order unpaid. Sort it out with the buyer in your CoinGate account, and if you're satisfied, use **Mark as paid**
in [Orders](/how-to-manage-orders/#mark-an-order-as-paid).
{: .important}

## Refunds and double payments

Refunds aren't made from your admin panel. To give money back:

1. Refund the buyer through your CoinGate account.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice, the second payment doesn't apply the order again. Your site emails the address
in **Sender email** (**Settings › Email**) with the subject *CoinGate: an extra payment for order #…*, so you can
check it in CoinGate and refund it.

## Before you go live

CoinGate is new on Yclas. Before you tell your members:

- Tick **Sandbox**, save a sandbox token and pay a test order signed in as an ordinary member.
- Check that the order turns **Paid** in [Orders](/how-to-manage-orders/) once the sandbox payment is confirmed, and
  that the listing changed.
- Check your payout currency in your CoinGate account.
- Save your live token, untick **Sandbox**, and make one small real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Other payment gateways](/other-payment-gateways/) — every other provider, and the Bitcoin address field for sellers.
- [Currency and price format](/how-to-currency-format/) — the currency your prices are in.
- [Orders and refunds](/how-to-manage-orders/) — find a payment, mark it paid or refunded.
{: .cards}
