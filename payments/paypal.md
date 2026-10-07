---
title: PayPal
description: Accept PayPal for featured listings, plans and other extras, and let sellers get paid straight into their own PayPal account.
section: payments
order: 40
permalink: /paypal/
keywords: paypal, paypal account, paypal email, sandbox, ipn, instant payment notification, buy now, seller paypal, paypalaccount, pay with paypal
updated: 2026-10-07
---

PayPal is the payment method most members already know. With Yclas you can use it two ways:

- **For your extras**: members pay you with PayPal for featured listings, bring to top, pay to post, membership plans
  and eWallet top-ups.
- **For sellers**: with the **Buy Now button** option, buyers pay sellers directly into the seller's own PayPal
  account.

Members pay on PayPal's own site, with their PayPal balance or a card, and come back to your marketplace afterwards.

## Connect PayPal

1. Go to **Integrations** and click **Paypal**.
2. In **Paypal account**, enter the email address of your PayPal account (the one that should receive the money).
3. Click **Save**.
{: .steps}

Members now see **Pay with Paypal** at checkout. PayPal shows as **Connected** on the Integrations page.

Use a PayPal **Business** account. It's free, and it lets you receive card payments from people who don't have a
PayPal account.
{: .tip}

Each payment tells PayPal where to send its confirmation, and Yclas marks the order as paid when PayPal confirms it
(through PayPal's Instant Payment Notifications). You don't need to enter a notification address in PayPal. If
orders stay unpaid after members have paid, check that Instant Payment Notifications aren't switched off in your
PayPal account settings.

## PayPal settings

| Setting | What it does |
| --- | --- |
| **Paypal account** | The PayPal email address that receives payments for your extras. Leave it empty to turn PayPal off. |
| **Sandbox** | Sends payments to PayPal's test environment instead of the real one. Use it with a PayPal sandbox account to try the flow; untick it before going live. |
| **Buy Now button** | Lets buyers pay sellers through PayPal from a listing. See below. |

Payments are made in your **Payment Currency** (**Settings › Payments**). PayPal only accepts
[certain currencies](https://developer.paypal.com/reference/currency-codes/), so check yours is one of them.
{: .important}

## Let sellers get paid through PayPal

With **Buy Now button** ticked, listings with a price show a **Buy Now** button. The buyer pays through PayPal and
the money goes straight into the seller's PayPal account. Your site doesn't take a commission on these sales; if you
want one, use [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect) instead.

1. Go to **Integrations › Paypal**.
2. Make sure **Paypal account** is filled in, then tick **Buy Now button**.
3. Click **Save**.
4. Make sure the **Price** field is on in the posting form (**Listings › Settings › Form fields**).
{: .steps}

Buyers don't need an account on your site: a buyer who isn't signed in can still pay with PayPal from the checkout
page. Both buyer and seller get an email when the payment goes through, and the sale appears in the seller's
**My Sales**.

### Which PayPal account the seller is paid into

Yclas picks the first of these that holds a valid email address:

1. A `paypalaccount` field on the listing.
2. A `paypalaccount` field on the seller's profile.
3. The email address the seller signed up with.
{: .steps}

If your sellers use a different email for PayPal than for your site, create a `paypalaccount`
[custom field](/how-to-create-custom-fields/) for listings or a [user custom field](/users-custom-fields/) for
profiles. The field name must be exactly `paypalaccount`. See [Special-purpose fields](/special-custom-fields/).

If a seller's email isn't linked to a PayPal account, PayPal holds the money and emails the seller to claim it.
Tell sellers to sign up with the same email they use for PayPal, or to fill in the PayPal field.
{: .note}

### Stock and quantities

With [stock control](/pay-directly-from-ad/#stock-control) on, buyers can choose a quantity at checkout, and the
listing is marked as sold when the stock reaches zero. Without stock control, the listing is marked as sold after the
first purchase.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — the full selling flow, shipping and stock.
- [Stripe and Stripe Connect](/stripe/) — card payments and commissions.
- [Orders and transactions](/how-to-manage-orders/) — see every PayPal payment.
{: .cards}
