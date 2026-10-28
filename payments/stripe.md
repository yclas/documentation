---
title: Stripe and Stripe Connect
description: Take card payments with Stripe, right on your checkout page, and let sellers get paid by card with Stripe Connect while you keep a commission on every sale.
section: payments
order: 30
permalink: /stripe/
keywords: stripe, stripe connect, credit card, card payments, card form, pay with card, apple pay, google pay, link, wallets, commission, application fee, marketplace fee, webhook, payment_intent.succeeded, ideal, alipay, stripe tax, express, payout, escrow, connected account, legacy checkout, test keys, commission on sales, service fee, shopping cart, pay sellers after delivery
updated: 2026-10-28
plans: Available on all plans (Stripe Connect on Marketplace)
---

<div class="summary" markdown="1">
- Stripe takes card payments to you; Stripe Connect lets buyers pay your sellers by card while you keep a commission.
- Connect it in **Add-ons › Stripe** with your publishable and secret keys, and untick **Legacy checkout** for the modern card form.
- Set up the webhook so every payment is confirmed, even if the member closes the browser.
- Stripe Connect and Stripe escrow are on the Marketplace plan.
</div>

[Stripe](https://stripe.com) is the easiest way to take card payments on your marketplace. Yclas uses it in two ways:

- **Stripe** takes payments *to you*: featured listings, bring to top, pay to post, membership plans and eWallet
  top-ups.
- **Stripe Connect** takes payments *to your sellers* when buyers use [Buy Now](/pay-directly-from-ad/), and can
  keep a commission for you on every sale.

You need a Stripe account for both. Sellers using Stripe Connect get their own Stripe account through a short sign-up
that Yclas starts for them.

Stripe needs your site to run on HTTPS. Hosted sites on a yclas.com address already do; if you use your own domain,
make sure SSL is on (see [Connect your own domain](/custom-domain/)).
{: .note}

## Connect Stripe

1. In your Stripe dashboard, go to **Developers › API keys** and copy the **Publishable key** and the **Secret key**.
2. In your admin panel, go to **Add-ons** and click **Stripe**.
3. Paste the keys into **Secret key** and **Publishable key**.
4. Untick **Legacy checkout** (see below), so members get the modern card form.
5. Click **Save**.
6. Set up the [webhook](#set-up-the-webhook). It takes two minutes and makes sure every payment is confirmed.
{: .steps}

{% include figure.html src="panel/stripe.webp" alt="The Stripe page under Add-ons: Secret key and Publishable key, Legacy checkout unticked, then the Stripe Connect and escrow options" caption="Add-ons › Stripe, with Legacy checkout unticked." %}

From now on members can pay by card for everything they pay you. Stripe shows as **Connected** on the Integrations
page.

Use your test keys first (`pk_test_…` and `sk_test_…`) and pay with Stripe's test card `4242 4242 4242 4242`. When
everything works, replace them with your live keys.
{: .tip}

## The card form at checkout

With **Legacy checkout** off, members click **Pay with Card** on the checkout page and a card form opens right there,
under the button. They never leave your site:

- The form uses your site's fonts and colours, and the button says **Pay** with the amount.
- If the member's bank wants a security check (3D Secure), it appears inside the form.
- Signed-in members have their name and email filled in already.
- On phones and tablets, members who have Apple Pay or Google Pay set up can pay with it. On a computer they see the
  card fields only.
- If a card is declined, Stripe's message appears in the form so the member can try another card.

After paying, members land on a [Payment complete](/member-payments/#after-paying-the-payment-complete-page) page that
explains what they bought.

Apple Pay and Google Pay need your site's address to be registered with your Stripe account. Yclas does this for you
the first time the card form opens on your site, so there's nothing to set up.
{: .note}

### Card only, or more payment methods

By default the form offers the card, plus Apple Pay and Google Pay on phones. That keeps checkout simple and every
payment is instant.

To offer more, tick **Also offer other payment methods from my Stripe account**. Members then also see the methods
you've switched on in your Stripe dashboard under **Settings › Payment methods**, such as Link, bank payments or pay
later. Some of these take days to clear: a featured listing or other extra starts once the money arrives.

### Card form style

**Card form style** decides which form opens when members click **Pay with Card**:

| Option | What members see |
| --- | --- |
| **Match my site (recommended)** | The card form in your site's fonts and colours, with your own **Pay** button. |
| **Stripe checkout** | Stripe's own checkout form, also shown inside your checkout page, with your site name and colour. |

If the form in your site's look can't load, for example because Stripe is slow, the page switches to Stripe's own
form by itself, so members can still pay. With **Let Stripe add the tax (Stripe Tax)** on, Stripe's own form is
always used.

### Card form or Legacy checkout
{: #stripe-checkout-or-legacy-checkout}

**Legacy checkout** is the old Stripe card pop-up. New sites start with it switched on; untick it to use the card
form above.

| | Card form (Legacy checkout off) | Legacy checkout (on) |
| --- | --- | --- |
| How members pay | In a card form on your checkout page. | In a Stripe pop-up. |
| Card security checks (3D Secure) | Handled by Stripe. | Only with **Require 3D Secure (beta)**. |
| Apple Pay and Google Pay | Yes, on phones and tablets. | No. |
| Extra payment methods | Your Stripe account's methods, and iDEAL. | Alipay. |
| Automatic renewal of [membership plans](/membership-plans/) | Yes: the card is kept and charged when the plan ends. With **Retry failed renewals** on, a declined card is tried again; see [Retry declined cards](/membership-plans/#retry-declined-cards). | Yes. |
| Webhooks | Supported (recommended). | Not used. |

Unless you have a reason to keep the pop-up, switch Legacy checkout off: the card form handles the bank security checks
that many European cards need.

## Stripe settings

These appear when **Legacy checkout** is off:

| Setting | What it does |
| --- | --- |
| **Use webhooks** | Stripe tells your site about each completed payment, so an order is marked as paid even if the member closes the browser before the payment finishes. Strongly recommended. |
| **Webhook signing secret** | The signing secret of your webhook, from the Stripe dashboard. It starts with `whsec_`. |
| **Accept iDEAL payments** | Adds iDEAL, popular in the Netherlands, to Stripe's own checkout form. Your payment currency must be EUR. With the **Match my site** form, offer iDEAL by ticking **Also offer other payment methods** and switching iDEAL on in Stripe. |
| **Let Stripe add the tax (Stripe Tax)** | Stripe works out sales tax or VAT for each buyer. Set up Stripe Tax in your Stripe dashboard first, or Stripe refuses the payments. While it's on, your site doesn't add its own [VAT](/eu-vat/), and plans aren't renewed automatically: members get an email with a link to pay. |
| **Card form style** | **Match my site (recommended)** or **Stripe checkout**. See above. |
| **Also offer other payment methods from my Stripe account** | Off: card, plus Apple Pay and Google Pay on phones. On: also the other methods switched on in your Stripe account. |

These appear when **Legacy checkout** is on:

| Setting | What it does |
| --- | --- |
| **Ask for the billing address** | Asks for the billing address in the card pop-up. |
| **Accept Alipay payments** | Adds Alipay to the pop-up. |
| **Require 3D Secure (beta)** | Runs the card's 3D Secure check before charging. |

### Set up the webhook

1. Tick **Use webhooks**. The page shows your endpoint address, which looks like
   `https://your-site.com/stripecheckout/webhook/1`.
2. In the Stripe dashboard, go to **Developers › Webhooks** and add an endpoint with that address.
3. Choose the events `checkout.session.completed` and `payment_intent.succeeded`, and save.
4. Copy the endpoint's **Signing secret** into **Webhook signing secret** and click **Save**.
{: .steps}

Already had a webhook before the card form arrived? Edit the endpoint in Stripe and add the
`payment_intent.succeeded` event. The card form's payments are confirmed through it.
{: .important}

With webhooks on, the order turns to **Paid** as soon as Stripe's notification arrives, usually within seconds. Yclas
only confirms an order when the amount Stripe received covers the order.

## Sell for your members with Stripe Connect

With Stripe Connect, buyers pay sellers by card through your site. Stripe pays the seller and sends your commission
to your Stripe account at the same time.

**Example:** your commission is 5%. A seller lists a bike for 200. A buyer pays 200 by card; the seller receives 190
and you receive 10 (Stripe's own fees come out of your share).

Stripe also charges you, the site owner, for Connect itself, for example per active seller account and per payout.
See Stripe's Connect pricing before you start.
{: .note}

### Switch it on

1. [Connect Stripe](#connect-stripe) with your own keys, as above.
2. In the Stripe dashboard, open **Connect** and finish setting up your platform (business details and branding).
   Stripe asks for this before your sellers can sign up.
3. In your admin panel, go to **Add-ons › Stripe**, scroll to **Stripe Connect** and tick
   **Enable Stripe Connect**.
4. Enter your commission in **Application fee (%)**, for example `5`. Leave it at `0` to take no commission.
5. Click **Save**.
6. Make sure the **Price** field is on in the posting form (**Listings › Settings › Form fields**).
{: .steps}

Once Stripe Connect is on, **Add-ons › Stripe** links to the **Commission on sales** page. It walks you through
the setup with a checklist (your keys, activating Connect, your logo on Stripe's pages, webhooks and your
commission), suggests answers to Stripe's questions about your marketplace, and sets up the webhooks on your Stripe
account for you. It also shows what you've earned in commission. You can also open it from **Make money**, with
**Manage** on the **Take a commission on sales** card.

On that page you can also:

- take the commission on the items only, without the shipping, and, on the Marketplace plan, add a **Buyer’s service
  fee** and set different rates for some categories or sellers: see
  [Commission and service fees](/commission-and-service-fees/);
- on the Marketplace plan, switch on the [shopping cart](/shopping-cart/), so buyers pay several sellers in one
  payment, with [product options](/product-variants/), [shipping profiles](/shipping-profiles/) and
  [coupons on sales](/coupons-on-sales/).

### What sellers do

Each seller sets up payouts once:

1. The seller goes to **Edit profile** in their account. On Nova it's the **Get paid for your sales** page under
   **Edit profile**. A box tells them your commission.
2. They choose their country (Stripe can't change it later) and click **Set up payouts with Stripe**.
3. They complete Stripe's short sign-up (identity and bank details, about 5 minutes).
4. Back on your site, the box shows **Ready** and an **Open Stripe dashboard** button for their payouts. If Stripe
   needs more details, it shows **Continue with Stripe** instead.
{: .steps}

From then on, every listing they post with a price shows a **Buy Now** button. Listings from sellers who haven't
connected show **Request safe payment** instead: a buyer who clicks it sends the seller an email asking them to
connect Stripe.

To make connecting compulsory, tick **Require a Stripe account to post**. Members are then sent to their profile to
set up payouts before they can post.

Commissions are only taken from sellers' sales. Listings you post as an administrator are sold for you, so the whole
amount goes to your own Stripe account.
{: .note}

Sites that connected sellers years ago with Stripe's old method also see **Stripe Connect legacy** and **Client ID**.
New sites don't need them.

### Different commissions per membership plan

If you use [membership plans](/membership-plans/), each plan has a **Marketplace Fee**. A seller on a plan pays that
percentage instead of **Application fee (%)**. A plan with a marketplace fee of 0 means no commission for its members.

On the Marketplace plan you can also set rates for some categories, or agree one with a seller, on the
**Commission on sales** page. A
seller's own rate comes first, then their plan's marketplace fee, then the category's rate, then your usual
percentage. See [Different rates by category or seller](/commission-and-service-fees/#different-rates-by-category-or-seller).

### What you see

Each paid sale creates two [orders](/how-to-manage-orders/): the buyer's purchase (**Buy product**) and your
commission (**Application Fee**, with any buyer's service fee included), so your earnings show up in **Orders**.
Buyer and seller both get an email with the order details.

## Hold the money until the buyer has the item (Stripe escrow)

**Stripe escrow** keeps the seller's money in their Stripe balance until the buyer confirms delivery. It's part of the
**Marketplace** plan. Switch it on
with **Stripe escrow** in **Add-ons › Stripe**, or **Pay sellers after delivery** on the **Commission on sales**
page: they're the same setting. It also holds each seller's part of a [shopping cart](/shopping-cart/#pay-sellers-after-delivery)
payment until that item is received.

1. The buyer pays. Buyers must be signed in to use Buy Now.
2. The seller ships the item and clicks **Mark as shipped** in **My Sales**, optionally with the carrier name and
   tracking code. The buyer gets an email.
3. When it arrives, the buyer clicks **Mark as received** in **My Payments**. Stripe then pays the money out to the
   seller.
{: .steps}

Until the item ships, buyer and seller can **Cancel order**. You then refund the buyer from **Orders** with
**Refund order**. You can also mark an order as received or cancel it yourself from the order's menu in **Orders**.

If the buyer reports a problem, the money stays on hold until you decide the [dispute](/disputes/).

| Setting | What it does |
| --- | --- |
| **Fixed application fee** | A fixed amount you keep from each sale, on top of the percentage. |
| **Days to ship** | Paid orders not marked as shipped after this many days are cancelled, and the payment to the seller is reversed. Leave it empty or at `0` to never cancel. |

Turn Stripe escrow on before sellers connect. Yclas sets each seller's Stripe payouts to manual when their account
is created, which is what lets it hold the money; sellers who connected earlier keep automatic payouts.
{: .important}

## Troubleshooting

- **The order stays unpaid after a member paid.** Turn on webhooks, with both events. Without them the order is only
  confirmed when the member's browser gets back to your site.
- **Members see "Try the standard Stripe checkout".** Something unexpected stopped the card form. The link opens
  Stripe's own form so they can still pay. If it keeps happening, check your keys, or set **Card form style** to
  **Stripe checkout**.
- **No Apple Pay or Google Pay button.** It only shows on phones and tablets with Apple Pay or Google Pay set up, and
  not with Legacy checkout.
- **No Buy Now button.** The listing needs a price above zero, the seller must have connected Stripe, and with
  [stock control](/stock-control/) on, the stock must be above zero.
- **Payments fail with a currency error.** Check that your payment **Currency** in **Settings › Payments** (or the
  listing's currency) is one Stripe supports for your account.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Checkout, payments and invoices for members](/member-payments/) — what members see.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — stock, quantities and shipping.
- [Commission and service fees](/commission-and-service-fees/) — commission rules and the buyer's service fee.
- [Shopping cart](/shopping-cart/) — one payment for items from several sellers.
- [Paid bookings](/paid-bookings/) — card held at booking, charged when the seller accepts.
- [Orders and transactions](/how-to-manage-orders/) — sales, commissions and refunds.
- [PayPal](/paypal/) — the other common payment method.
{: .cards}
