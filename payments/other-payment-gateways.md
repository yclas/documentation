---
title: Other payment gateways
description: The regional and specialist payment providers you can connect besides Stripe and PayPal, what each one needs and where to enter it.
section: payments
order: 50
permalink: /other-payment-gateways/
redirect_from:
  - /2checkout-configuration/
  - /bitcoin-integration/
keywords: payment gateway, 2checkout, authorize.net, bitpay, bitcoin, mercadopago, mollie, paguelofacil, payfast, payline, paymill, paysbuy, paytabs, razorpay, robokassa, securepay, serfinsa, zenith, globalpay, crypto, local payments
updated: 2026-10-07
---

Besides [Stripe](/stripe/) and [PayPal](/paypal/), Yclas works with a range of regional payment providers. Use one
when your members prefer a local payment method, or when Stripe and PayPal aren't available in your country.

These gateways take payments **to you**: featured listings, bring to top, pay to post, membership plans and eWallet
top-ups. They can't pay sellers for their items; for that, use Stripe Connect, PayPal or Escrow.com (see
[Let members sell with Buy Now](/pay-directly-from-ad/)).

## How to connect a gateway

1. Open an account with the provider and get your API details from their dashboard.
2. In your admin panel, go to **Integrations**, open the **Payments** tab and click the provider.
3. Enter the details, tick **Sandbox** if you want to test first, and click **Save**.
4. Some providers need your site's addresses: the page shows them under **Integration URIs**. Copy them into the
   provider's dashboard.
5. Make sure your **Payment Currency** (**Settings › Payments**) is a currency the provider accepts.
{: .steps}

The gateway's button then appears at checkout next to your other payment methods. You can connect several at once;
members choose.

Several of these providers have changed hands, renamed their products or closed to new merchants since they were
added. Check that the provider still offers the service in your country before you sign up, and always test a payment.
{: .important}

## The gateways

### 2Checkout

International card payments. Enter your **Merchant Code** and **Secret Word** from the 2Checkout dashboard. In
2Checkout's site settings, set the return method to a header redirect so members come back to your site after
paying.

### Authorize.net

Card payments for merchants in the US, Canada, the UK, Europe and Australia. Enter your **Authorize API Login** and
**Authorize transaction Key**. Members enter their card details in a form on your checkout page, so they must be
signed in to see it.

### BitPay (Bitcoin)

Accept Bitcoin. Create a pairing code in your BitPay merchant dashboard and enter it in **Bitpay pairing code**. Tick **Sandbox** to pair with BitPay's test network instead.

Pairing turns that code into a token for your site, and the new Integrations page doesn't complete that step yet:
saving the code alone doesn't make the BitPay button appear. If you want to accept Bitcoin through BitPay, contact
[Yclas support](/use-yclas-support-system/) to finish the pairing.
{: .warning}

To let sellers show their own Bitcoin address on listings and profiles instead, use the `bitcoinaddress`
[special-purpose field](/special-custom-fields/). To show prices in Bitcoin, choose **Bitcoin** as your
[Money Format](/how-to-currency-format/).

### Mercado Pago

Popular across Latin America. Enter your **Client ID** and **Client Secret** from Mercado Pago's developer panel.

### Mollie

Cards and local European methods such as iDEAL and Bancontact. Members choose on Mollie's payment page from the
methods you have switched on in Mollie. Enter your
**API key** (use the test key to try it out).

### PagueloFacil

Panama. Enter your **CCLW** code, and copy the **Result URL** shown on the page into your PagueloFacil settings.

### PayFast

South Africa. Enter your **Merchant ID** and **Merchant Key**, from **Settings** in your PayFast account. Use
**Sandbox** with PayFast's sandbox details to test.

### Payline

Card payments in Europe. Enter your **Merchant ID**, **Access Key** and **Contract Number**, and copy the
**Result URL** into Payline. **Sandbox** uses Payline's test (homologation) environment.

### Paymill

Card payments in Europe. Enter your **Paymill private key** and **Paymill public key**.

### Paysbuy

Thailand. Enter your **Paysbuy account** email address.

### PayTabs

The Middle East and North Africa. Enter your **Merchant Email** and the **Secret Key** from your PayTabs merchant
dashboard.

### Razorpay

India. Enter your **Key Id** and **Key Secret** from the Razorpay dashboard. Razorpay always charges in Indian rupees,
so use it only if your Payment Currency is **Indian Rupee**.

### Robokassa

Russia. Enter your **Shop identifier**, **Password 1** and **Password 2**, and copy the **Result URL**,
**Success URL** and **Fail URL** shown on the page into your Robokassa shop settings.

### SecurePay

Australia. Enter your SecurePay **Merchant ID** and **Password**.

### Serfinsa

El Salvador. Enter your **Serfinsa Token**, and copy the **Result URL** into Serfinsa.

The Serfinsa button only appears on the checkout page of older themes. Nova, Mercury and Atlantic Lite don't show
it yet.
{: .note}

### Zenith GlobalPAY

Nigeria. Enter the **merchantid**, **Web service username** and **Web service password** Zenith gave you, plus your
**Merchant name** and **Merchant phone**, and copy the **Result URL** into GlobalPAY. Zenith needs the buyer's phone
number: members without one on their profile are asked to add it before they can check out.

## Fraud checks with FraudLabs Pro

FraudLabs Pro, also listed under Payments on the Integrations page, isn't a gateway: it screens payments for signs of
fraud. See [Other integrations](/other-integrations/).

## Bank transfer, cash and other offline payments

To accept a payment method that isn't listed, such as a bank transfer, use the **Alternative Payment** button and
confirm payments by hand. See [Bank transfer and cash](/offline-payments/).

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Stripe and Stripe Connect](/stripe/) — card payments in most countries.
- [PayPal](/paypal/) — PayPal and cards.
- [Currency and price format](/how-to-currency-format/) — the Payment Currency.
{: .cards}
