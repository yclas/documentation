---
title: Stripe and Stripe Connect
description: Take card payments with Stripe, and let sellers get paid by card with Stripe Connect while you keep a commission on every sale.
section: payments
order: 30
permalink: /stripe/
keywords: stripe, stripe connect, credit card, card payments, commission, application fee, marketplace fee, webhook, ideal, alipay, express, payout, escrow, connected account, legacy checkout, test keys
updated: 2026-10-07
---

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
2. In your admin panel, go to **Integrations** and click **Stripe**.
3. Paste the publishable key into **Stripe public key** and the secret key into **Stripe private key**.
4. Decide on **Legacy Checkout** (see below). For most sites, untick it.
5. Click **Save**.
{: .steps}

From now on members see a Stripe button at checkout for everything they pay you. Stripe shows as **Connected** on
the Integrations page.

Use your test keys first (`pk_test_…` and `sk_test_…`) and pay with Stripe's test card `4242 4242 4242 4242`. When
everything works, replace them with your live keys.
{: .tip}

### Stripe Checkout or Legacy Checkout

Yclas can send members to Stripe in two ways:

| | Stripe Checkout (Legacy Checkout off) | Legacy Checkout (on) |
| --- | --- | --- |
| How members pay | On a payment page hosted by Stripe. | In a card pop-up on your site. |
| Card security checks (3D Secure) | Handled by Stripe. | Only with **Requires 3D security - BETA**. |
| Extra payment methods | iDEAL. | Alipay. |
| Automatic renewal of [membership plans](/membership-plans/) | No: members renew by paying again. | Yes: the card is charged again when the plan ends. |
| Webhooks | Supported (recommended). | Not used. |

New sites start with Legacy Checkout switched on. Unless you rely on automatic plan renewals, switch it off and use
Stripe Checkout: it handles bank security checks, which many European cards need.

## Stripe settings

These appear when **Legacy Checkout** is off:

| Setting | What it does |
| --- | --- |
| **Enable Stripe Webhooks** | Stripe tells your site about each completed payment, so an order is marked as paid even if the member closes the browser before returning to your site. Strongly recommended. |
| **Stripe webhook secret key** | The signing secret of your webhook, from the Stripe dashboard. |
| **Accept iDEAL payments** | Adds iDEAL, popular in the Netherlands. Your Payment Currency must be EUR. |

These appear when **Legacy Checkout** is on:

| Setting | What it does |
| --- | --- |
| **Requires address to pay for extra security** | Asks for the billing address in the card pop-up. |
| **Accept Alipay payments** | Adds Alipay to the pop-up. |
| **Requires 3D security - BETA** | Runs the card's 3D Secure check before charging. |

### Set up the webhook

1. Tick **Enable Stripe Webhooks**. The page shows your endpoint address, which looks like
   `https://your-site.com/stripecheckout/webhook/1`.
2. In the Stripe dashboard, go to **Developers › Webhooks** and add an endpoint with that address.
3. Choose the event `checkout.session.completed` and save.
4. Copy the endpoint's **Signing secret** into **Stripe webhook secret key** and click **Save**.
{: .steps}

With webhooks on, members who return from Stripe see a thank-you message and the order turns to **Paid** as soon as
Stripe's notification arrives, usually within seconds. Yclas only confirms an order when the amount Stripe received
covers the order.

## Sell for your members with Stripe Connect

With Stripe Connect, buyers pay sellers by card through your site. Stripe pays the seller and sends your commission
to your Stripe account at the same time.

**Example:** your commission is 5%. A seller lists a bike for 200. A buyer pays 200 by card; the seller receives 190
and you receive 10 (Stripe's own fees come out of your share).

### Switch it on

1. In the Stripe dashboard, open **Connect** and finish setting up your platform (business details and branding).
   Stripe asks for this before your sellers can sign up.
2. In your admin panel, go to **Integrations › Stripe**, scroll to **Stripe Connect** and tick
   **Activate Stripe Connect**.
3. Leave **Enable Stripe Connect Legacy** unticked. It is only for sites that connected sellers with the old Stripe
   OAuth flow and a **Stripe client id**.
4. Enter your commission in **Application fee %**, for example `5`. Leave it at `0` to take no commission.
5. Click **Save**.
6. Make sure the **Price** field is on in the posting form (**Listings › Settings › Form fields**).
{: .steps}

### What sellers do

Each seller connects once:

1. The seller goes to **Edit profile** in their account. A **Stripe Connect** box tells them your commission.
2. They click **Connect with Stripe** and complete Stripe's short sign-up (identity and bank details).
3. Back on your site, the box shows **View Stripe account**, which opens their Stripe Express dashboard for payouts.
{: .steps}

From then on, every listing they post with a price shows a **Buy Now** button. Listings from sellers who haven't
connected show **Request safe payment** instead: a buyer who clicks it sends the seller an email asking them to
connect Stripe.

To make connecting compulsory, tick **Make a connected Stripe account mandatory otherwise, users cannot post an ad**.
Members are then sent to their profile to connect Stripe before they can post.

Commissions are only taken from sellers' sales. Listings you post as an administrator are sold for you, so the whole
amount goes to your own Stripe account.
{: .note}

### Different commissions per membership plan

If you use [membership plans](/membership-plans/), each plan has a **Marketplace Fee**. A seller on a plan pays that
percentage instead of **Application fee %**. A plan with a marketplace fee of 0 means no commission for its members.

### What you see

Each paid sale creates two [orders](/how-to-manage-orders/): the buyer's purchase (**Buy product**) and your
commission (**Application Fee**), so your earnings show up in **Orders**. Buyer and seller both get an email with the
order details.

## Hold the money until the buyer has the item (Stripe escrow)

**Activate Stripe Escrow Flow** keeps the seller's money in their Stripe balance until the buyer confirms delivery.

1. The buyer pays. Buyers must be signed in to use Buy Now.
2. The seller ships the item and clicks **Mark as shipped** in **My Sales**, optionally with the carrier name and
   tracking code. The buyer gets an email.
3. When it arrives, the buyer clicks **Mark as received** in their orders. Stripe then pays the money out to the
   seller.
{: .steps}

Until the item ships, buyer and seller can **Cancel order**. You then refund the buyer from **Orders** with
**Refund order**. You can also mark an order as received or cancel it yourself from the order's menu in **Orders**.

| Setting | What it does |
| --- | --- |
| **A fixed application fee amount** | A fixed commission per sale, added to the percentage. |
| **Cancel orders not marketed as shipped after a certain number of days** | Cancels paid orders that haven't shipped after this many days and emails both sides. `0` turns it off. |

Turn the escrow flow on before sellers connect. Yclas sets each seller's Stripe payouts to manual when their account
is created, which is what lets it hold the money; sellers who connected earlier keep automatic payouts.
{: .important}

## Troubleshooting

- **The order stays unpaid after a member paid.** Turn on webhooks. Without them the order is only confirmed when the
  member returns to your site from Stripe.
- **No Buy Now button.** The listing needs a price above zero, the seller must have connected Stripe, and with
  [stock control](/pay-directly-from-ad/#stock-control) on, the stock must be above zero.
- **Payments fail with a currency error.** Check that your **Payment Currency** (or the listing's currency) is one
  Stripe supports for your account.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — stock, quantities and shipping.
- [Orders and transactions](/how-to-manage-orders/) — sales, commissions and refunds.
- [PayPal](/paypal/) — the other common payment method.
{: .cards}
