---
title: Take payments in Southern and East Africa with Peach Payments and Chapa
nav_title: Peach Payments and Chapa
description: Let members pay you by card, EFT, M-PESA and the other methods your Peach Payments account offers in South Africa, Kenya and Mauritius, or with telebirr, CBE Birr and more through Chapa in Ethiopia.
section: payments
order: 57
permalink: /peach-chapa/
keywords: peach, peach payments, peachpayments, chapa, south africa, kenya, mauritius, ethiopia, rand, zar, kes, shilling, mur, rupee, birr, etb, usd, eft, m-pesa, mpesa, telebirr, cbe birr, entity id, client id, client secret, merchant id, allowlisted domains, secret key, chaseck, webhook, webhook secret, sandbox, test key, hosted checkout, african payments
updated: 2026-11-03
plans: Available on all plans
---

<div class="summary" markdown="1">
- **Peach Payments**: card, EFT, M-PESA and the other methods your Peach account offers, in South Africa, Kenya and Mauritius, on Peach's own checkout page.
- **Chapa**: telebirr, CBE Birr, M-Pesa, bank or card in Ethiopia, on Chapa's own checkout page. ETB or USD.
- Both take payments to you: featured listings, bring to top, pay to post, plans, eWallet top-ups. Not sales between members.
- Off until you paste your own keys. Test first: Peach has a **Sandbox** switch, Chapa uses its test key.
</div>

Peach Payments and Chapa let members in Southern and East Africa pay you the way they already pay for things:
an instant EFT, mobile money, or a card.

You use your own Peach Payments or Chapa account, and the money goes straight to it. Yclas doesn't take a cut. You can
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

A membership plan paid with Peach Payments or Chapa doesn't renew by itself: when it ends, the member gets an email
with a link to pay again. See [Renewals](/membership-plans/#renewals).
{: .note}

## Peach Payments

Peach Payments works in South Africa, Kenya and Mauritius. Buyers click **Pay with Peach Payments** at checkout and
pay on Peach's hosted checkout page, with whichever methods are enabled on your Peach account: for example card, EFT
or M-PESA. Then they come back to your site.

### What you need from Peach Payments

- A Peach Payments merchant account.
- From your Peach dashboard (**Checkout › API keys**): your **Entity ID**, **Client ID**, **Client Secret** and
  **Merchant ID**. The sandbox dashboard has its own set for testing.
- Your site's domain added in the Peach dashboard under **Checkout › Allowlisted domains**. Without it Peach refuses
  to open the checkout. The setup page shows the domain to add.
- Your site's currency must be **ZAR**, **KES**, **MUR** or **USD**, and enabled on your Peach account. Set it in
  **Settings › Payments** (see [Currency and price format](/how-to-currency-format/)). For any other currency the
  Peach Payments button doesn't appear.

### Set up Peach Payments

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Peach Payments**.
2. Paste your **Entity ID**, **Merchant ID**, **Client ID** and **Client Secret**.
3. To try it first, tick **Sandbox** and use the keys from your Peach sandbox dashboard.
4. If you use webhook security in your Peach dashboard, paste its secret in **Webhook secret (optional)**.
5. Click **Save**.
6. Add the domain shown on the page to **Checkout › Allowlisted domains** in your Peach dashboard.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Entity ID** | From **Checkout › API keys** in your Peach dashboard. |
| **Merchant ID** | From the same page. |
| **Client ID** | From the same page. Your site uses it with the Client Secret to sign in to Peach's API. |
| **Client Secret** | From the same page. Once saved it isn't shown again (*Saved: leave empty to keep it*). |
| **Remove the saved keys (switches Peach Payments off)** | Shown once a Client Secret is saved. Tick it and save to delete all four keys and the webhook secret and stop taking Peach payments. |
| **Sandbox** | Uses Peach's sandbox (testsecure.peachpayments.com) with the keys from your sandbox dashboard, so no real money is charged. Turn it off to accept real payments. |
| **Webhook URL** | Read only. Sent to Peach with every checkout, so you don't need to add it in the dashboard. |
| **Webhook secret (optional)** | The secret from the Peach dashboard's webhook security settings. When it is saved, only webhooks signed with it are read. Tick **Remove the webhook secret** to clear it. |

All four keys are needed: until they are filled in, the Peach Payments button doesn't appear. To switch Peach off,
tick **Remove the saved keys (switches Peach Payments off)** and save.

**Why the webhook matters.** Some payments, such as EFT or M-PESA, finish after the buyer has left Peach's page.
Peach then tells your site through the webhook, and the order is confirmed by itself. Either way your site asks Peach
for the payment's status before it marks an order paid.

One Peach account can serve more than one of your sites: each payment carries the site it was made on. Add every
site's domain to the allowlist.
{: .note}

### What buyers see

1. At checkout they click **Pay with Peach Payments**.
2. They pay on Peach's checkout page.
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If the payment is still going through (for example an EFT or a mobile money payment), they see *Your payment is being
processed. We will confirm your order as soon as it completes.* The order is confirmed when Peach calls your webhook.
If the payment failed they see *Transaction not successful!* and can try again.

If Peach can't open a checkout (wrong keys, or the domain isn't allowlisted), buyers see an error asking them to try another payment method. Check the keys and the allowlist.
{: .important}

## Chapa

Chapa is a payment gateway for Ethiopia. Buyers click **Pay with Chapa** at checkout and pay on Chapa's checkout page
with telebirr, CBE Birr, M-Pesa, bank or card, whichever your Chapa account offers. Then they come back to your site.

### What you need from Chapa

- A Chapa account.
- Your **Secret Key**, from your Chapa dashboard (**Settings › API**). A test key (it starts with `CHASECK_TEST`)
  takes test payments; your live key takes real ones.
- Your site's currency must be **ETB** or **USD**. For any other currency the Chapa button doesn't appear.

### Set up Chapa

1. Go to **Add-ons**, open the **Payments** tab and click **Chapa**.
2. Paste your key in **Secret Key**.
3. Optional: in your Chapa dashboard (**Settings › Webhooks**), choose a secret hash and paste the same value in
   **Webhook secret**.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Secret Key** | The key that lets your site create payments in your Chapa account and check them. Once saved it isn't shown again (*Already set. Leave blank to keep it.*). Tick **Remove the saved keys (switches Chapa off)** to switch Chapa off. |
| **Webhook secret** | Optional. The secret hash you choose in your Chapa dashboard: webhooks not signed with it are refused. |
| **Webhook URL** | Read only. Each payment already tells Chapa to call it. You can also add it in your Chapa dashboard (**Settings › Webhooks**). |

Every payment is checked with Chapa before an order is confirmed, with or without the webhook secret. The webhook
lets payments that complete after the buyer leaves, such as mobile money, still confirm the order.

### Test mode

Chapa has no separate switch: the key decides. Save your **test** Secret Key and pay with Chapa's test details. While
a test key is saved, the page warns: *This is a test key: Chapa's test payments will pay real orders on your site.
Use your live Secret Key once you have finished testing.*

That warning is meant literally: a test payment marks the order as paid and gives the member what they bought. Swap in
your live key before you tell your members.
{: .warning}

### What buyers see

1. At checkout they click **Pay with Chapa**.
2. They pay on Chapa's checkout page, titled with your site's name (shortened to 16 characters).
3. They return to your site's payment-complete page, and what they bought is applied straight away.
{: .steps}

If a mobile money payment is still pending, they see *Your payment is being processed. We will confirm your order as
soon as it completes.* The order is confirmed when Chapa calls your site. If the payment failed they see
*Transaction not successful!* and can try again.

## Refunds and double payments

Neither gateway refunds from your admin panel. To give money back:

1. Refund the payment in your Peach Payments or Chapa dashboard.
2. In **Orders**, open the order's menu and click **Mark as refunded**. This takes back what the order gave (for
   example the featured days).
{: .steps}

See [Refunds and cancellations](/how-to-manage-orders/#refunds-and-cancellations).

If a buyer pays the same order twice, the second payment doesn't apply the order again. Your site emails the address
in **Sender email** (**Settings › Email**) with the subject *Peach: an extra payment for order #…* (or *Chapa: …*),
so you can check it in your dashboard and refund it.

## Before you go live

These gateways are new on Yclas and haven't yet been tried on real merchant accounts. Before you tell your members:

- Test the whole flow in test mode, signed in as an ordinary member: Peach with **Sandbox** ticked and your sandbox
  keys, Chapa with your test key. Try a mobile money payment too, so you see a pending payment get confirmed.
- Check that the order shows as **Paid** in [Orders](/how-to-manage-orders/) and that the listing changed.
- Untick **Sandbox** and paste your live Peach keys, or swap in your live Chapa key, and make one small real payment.

## Related guides

- [Take payments in Africa with Paystack and M-Pesa](/paystack-mpesa/) — Nigeria, Ghana, Kenya and South Africa.
- [Take payments on your marketplace](/setup-payment-gateways/) — what members can pay for and how to test.
- [Other payment gateways](/other-payment-gateways/) — every other regional provider, including PayFast for South Africa.
- [Currency and price format](/how-to-currency-format/) — set ZAR, KES, MUR, ETB or USD.
- [Orders and refunds](/how-to-manage-orders/) — find a payment and mark it refunded.
{: .cards}
