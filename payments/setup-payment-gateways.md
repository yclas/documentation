---
title: Take payments on your marketplace
description: What members can pay for, how Settings › Payments and the payment integrations fit together, and how to test before you go live.
section: payments
order: 10
permalink: /setup-payment-gateways/
keywords: payments, payment gateway, payment settings, stripe, paypal, checkout, currency, test mode, sandbox, monetise, charge, earn money, payment methods
updated: 2026-10-07
---

Your marketplace can charge members for extras and let sellers take money for what they sell. Money always goes
straight to your own account with the payment provider (or to the seller's, for sales), never through Yclas.

This guide gives you the big picture: what you can charge for, where each setting lives and how to test it all
before real money moves.

## What members can pay for

There are two kinds of payment, and they use different payment methods.

**Payments to you, the site owner.** These are the extras you sell:

| What | Where you set it up |
| --- | --- |
| [Featured listings](/how-to-create-featured-plan/) | **Settings › Payments › Featured listings** |
| [Bring to top](/how-to-create-featured-plan/#bring-to-top) | **Settings › Payments › Bring to top** |
| [Pay to post](/pay-to-post/) in some or all categories | **Settings › Payments › Pay to post**, with a price on each category |
| [Membership plans](/membership-plans/) | **Addons › Subscriptions / Memberships** |
| [eWallet top-ups](/ewallet/) | **Addons › eWallet** |

Members pay for these with any payment method you connect: card through Stripe, PayPal, one of the
[other gateways](/other-payment-gateways/), or a [bank transfer or cash](/offline-payments/) that you confirm by hand.

**Payments to sellers.** When you let members [sell with a Buy Now button](/pay-directly-from-ad/), the buyer pays
the seller. Only three methods can do that, because the money has to reach each seller's own account:

- [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect), which also lets you take a commission on every sale.
- [PayPal](/paypal/#let-sellers-get-paid-through-paypal), paid straight to the seller's PayPal account.
- [Escrow.com](/escrow-pay/), which holds the money until the buyer has received the item.

## Set up payments

1. Go to **Integrations** and connect at least one payment provider. Most sites use [Stripe](/stripe/),
   [PayPal](/paypal/) or both.
2. Go to **Settings › Payments** and choose your **Payment Currency**. It must be a currency your payment provider
   accepts.
3. On the same page, switch on what you want to sell: **Featured listings**, **Bring to top** or **Pay to post**.
4. Click **Save changes**.
5. Test a purchase yourself (see below) before you tell your members.
{: .steps}

The **Payment methods** section at the top of **Settings › Payments** links to the Integrations page, so you can move
between the two.

## Settings › Payments at a glance

| Setting | What it does |
| --- | --- |
| **Payment Currency** | The currency of everything members pay you: featured listings, bring to top, pay to post, plans and eWallet top-ups. See [Currency and price format](/how-to-currency-format/). |
| **Alternative Payment** | Shows an extra button at checkout that opens one of your pages, for example bank transfer instructions. See [Bank transfer and cash](/offline-payments/). |
| **Charge for posting** | Turns [pay to post](/pay-to-post/) on, with or without moderation. |
| **Stock Control** | Lets sellers set a quantity; the listing sells out at zero. See [Buy Now](/pay-directly-from-ad/#stock-control). |
| **Sell featured listings** | Lets members pay to feature a listing, using the featured plans you create. |
| **Bring To Top Listing** and **To Top Price** | Lets members pay to bump a listing back to the top. |
| **VAT Country**, **VAT Number**, **VAT Rate Only for Non-EU Countries** | Adds VAT to what members pay you. See [VAT and taxes](/eu-vat/). |

The **Orders** button at the top of the page opens [Orders](/how-to-manage-orders/), where every payment is listed.

## What members see at checkout

When a member buys something, Yclas creates an order and sends them to a checkout page. It shows what they are
paying for, the price, any VAT and coupon, and one button for each payment method you have connected. Once the
payment goes through, the order is marked as paid and the extra is applied straight away: the listing is featured,
published or moved to the top.

If you haven't connected any payment method, members have no way to pay (the Nova theme says so on the checkout
page), so connect one before you switch anything on. If the price
is zero (for example after a 100% [coupon](/how-to-use-coupon-system/)), members see **Click to proceed** instead
and no payment is taken.

As an administrator or moderator you also see **Mark as paid** on checkout pages for your own extras. It confirms
the order without taking money, which is handy for cash payments and for testing.
{: .tip}

## Test before you go live

Every payment integration has a test mode, so you can try the whole flow without real money:

- **Stripe**: enter your test keys (they start with `pk_test_` and `sk_test_`) and pay with Stripe's test card
  `4242 4242 4242 4242`, any future date and any CVC. Swap in your live keys when you are done.
- **PayPal**: tick **Sandbox** and use a PayPal sandbox account.
- **Other gateways**: most have a **Sandbox** box on their integration page.

Then, signed in as an ordinary member (not your admin account), feature a listing or post in a paid category and
pay. Check that the order shows as **Paid** in **Orders** and that the listing changed.

Remember to switch test mode off. In test mode no real money is taken, but members' orders are still marked as
paid.
{: .warning}

## Related guides

- [Stripe](/stripe/) — card payments and commissions on sales.
- [PayPal](/paypal/) — PayPal for your extras and for sellers.
- [Featured listings and promotions](/how-to-create-featured-plan/) — the most common thing to sell.
- [Orders and transactions](/how-to-manage-orders/) — see and manage every payment.
- [Ways to make money from your marketplace](/how-to-earn-money/) — ideas for pricing.
{: .cards}
