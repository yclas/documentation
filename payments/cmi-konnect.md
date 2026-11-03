---
title: Take payments in Morocco and Tunisia with CMI and Konnect
nav_title: CMI and Konnect
description: Accept Moroccan and international cards in dirhams with CMI, or bank card, e-DINAR and Konnect wallet payments in Tunisian dinars with Konnect, and set up each one step by step.
section: payments
order: 62
permalink: /cmi-konnect/
keywords: cmi, centre monetique interbancaire, centre monétique interbancaire, 3d pay hosting, maroc, morocco, dirham, mad, konnect, tunisia, tunisie, dinar, tnd, e-dinar, edinar, konnect wallet, wallet id, api key, client id, store key, callback url, webhook, test mode, sandbox, 3-d secure, 3d secure, north african payments, maghreb
updated: 2026-11-03
plans: Available on all plans
---

<div class="summary" markdown="1">
- **CMI**: Moroccan and international cards, paid in dirhams (MAD) on CMI's secure card page.
- **Konnect**: bank card, e-DINAR or Konnect wallet, paid in Tunisian dinars (TND) on Konnect's payment page.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own credentials. Test first: CMI has a **Test mode** switch, Konnect a **Sandbox** switch.
</div>

CMI and Konnect let members in Morocco and Tunisia pay you in their own currency, with the cards and wallets they
already use.

You use your own CMI store or Konnect account, and the money goes straight to it. Yclas doesn't take a cut. You can
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

A membership plan paid with CMI or Konnect doesn't renew by itself: when it ends, the member gets an email with a link
to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## CMI

CMI (Centre Monétique Interbancaire) processes card payments in Morocco. Your site uses CMI's 3D Pay Hosting: buyers
enter their card on CMI's secure page, pass the 3-D Secure check, and come back to your site.

CMI charges **Moroccan dirhams** only. The button appears only when your site's currency is **MAD** (see
[Currency and price format](/how-to-currency-format/)).

### What you need from CMI

- A CMI merchant contract with a **3D Pay Hosting** store.
- Your **Client ID** (merchant ID), which CMI gives you with your store.
- Your **Store Key**, which you set in CMI's merchant back office.
- For testing, the Client ID and Store Key of a CMI test store.

### Set up CMI

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **CMI**.
2. Paste your **Client ID** and **Store Key**.
3. To try it first, tick **Test mode** and use the Client ID and Store Key of your test store.
4. Click **Save**.
5. If CMI asks for your callback URL when activating your store, give them the address in **Callback URL** (click the
   box to select it).
{: .steps}

| Setting | What it does |
| --- | --- |
| **Client ID** | Your CMI merchant ID. |
| **Store Key** | Signs every payment between your site and CMI. Once saved it isn't shown again (*Already set. Leave blank to keep it.*). |
| **Test mode** | Uses CMI's test platform (testpayment.cmi.co.ma) with the Client ID and Store Key of your test store, so no real money is charged. Turn it off and paste your live credentials to accept real payments. |
| **Callback URL** | Read only. Each payment sends it to CMI, which calls it to confirm the order. |

Both the Client ID and the Store Key are needed: until they are filled in, the CMI button doesn't appear. To switch
CMI off, empty **Client ID** and save.

**How CMI confirms a payment.** CMI first only authorises the card. Then it calls your site's callback URL with the
result, and your site checks it with your Store Key. Only when the payment is for the right order, amount and currency
does your site mark the order paid and tell CMI to take the money. Anything else is not taken. So your site must be
reachable from the internet, and the Store Key you save must be the one set in CMI's back office.
{: .important}

### What buyers see

1. At checkout they click **Pay by card (CMI)**.
2. They are taken to CMI's card page, in French, Arabic or English to match your site's language (French for any
   other language).
3. They enter their card and pass the 3-D Secure check with their bank.
4. They come back to your site. If CMI has already confirmed the payment, they land on the payment-complete page and
   what they bought is applied.
{: .steps}

If CMI's confirmation hasn't reached your site yet, they see *Your payment is being processed. We will confirm your
order as soon as it completes.* A refused card shows *Transaction not successful!*, and they can try again.

## Konnect

Konnect is a payment gateway for Tunisia. Buyers click **Pay with Konnect** at checkout and pay on Konnect's payment
page with a bank card, e-DINAR or their Konnect wallet, whichever your Konnect account offers. Then they come back to
your site.

Konnect is offered only in **Tunisian dinars**. The button appears only when your site's currency is **TND**.

### What you need from Konnect

- A Konnect account.
- Your **API Key** and **Wallet ID**, from your Konnect dashboard (**Integration / Credentials**).
- For testing, the API key and wallet of a Konnect sandbox account (dashboard.sandbox.konnect.network).

### Set up Konnect

1. Go to **Add-ons**, open the **Payments** tab and click **Konnect**.
2. Paste your **API Key** and **Wallet ID**.
3. To try it first, tick **Sandbox** and use the API key and wallet of your sandbox account.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **API Key** | Lets your site create payments in your Konnect account and check them. Once saved it isn't shown again (*Already set. Leave blank to keep it.*). |
| **Wallet ID** | The wallet that receives the payments. |
| **Sandbox** | Uses Konnect's sandbox (dashboard.sandbox.konnect.network) with the API key and wallet of a sandbox account, so no real money is charged. Turn it off and paste your live credentials to accept real payments. |
| **Webhook URL** | Read only. Nothing to paste: each payment sends it to Konnect, which calls it when the payment completes to confirm the order. |

Both the API Key and the Wallet ID are needed: until they are filled in, the Konnect button doesn't appear. To switch
Konnect off, empty **Wallet ID** and save.

Before an order is marked paid, your site asks Konnect for the payment and checks that it is completed, for the right
order and amount, and paid into the wallet you saved. Make sure your site can be reached from the internet, so
Konnect's call gets through.
{: .note}

### What buyers see

1. At checkout they click **Pay with Konnect**.
2. They pay on Konnect's payment page.
3. They come back to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If Konnect hasn't confirmed the payment yet, they see *Your payment is being processed. We will confirm your order as
soon as it completes.*; Konnect's call to your webhook then confirms it. A failed payment shows *Transaction not
successful!*, and they can try again.

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in CMI's merchant back office or your Konnect dashboard.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice, the second payment doesn't apply the order again:

- **CMI**: the second card payment is never taken. Your site tells CMI not to capture it, so the buyer isn't charged
  twice.
- **Konnect**: your site emails the address in **Sender email** (**Settings › Email**) with the subject
  *Konnect: an extra payment for order #…*, so you can check it in your dashboard and refund it.

## Before you go live

These gateways are new on Yclas and haven't yet been tried on real merchant accounts. Before you tell your members:

- Test the whole flow in test mode, signed in as an ordinary member: CMI with **Test mode** ticked and your test
  store's credentials, Konnect with **Sandbox** ticked and your sandbox account.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Untick **Test mode** or **Sandbox**, paste your live credentials, and make one small real payment.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider.
- [Currency and price format](/how-to-currency-format/) — set MAD or TND.
- [Orders and refunds](/how-to-manage-orders/) — find a payment and mark it refunded.
- [Take payments in Africa with Paystack and M-Pesa](/paystack-mpesa/) — Nigeria, Ghana, Kenya and South Africa.
{: .cards}
