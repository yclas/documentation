---
title: Membership plans
description: Charge members a subscription to post, with plans that include a number of listings for a number of days, and decide what happens when a plan runs out.
section: payments
order: 90
permalink: /membership-plans/
keywords: membership, memberships, subscription, subscriptions, plan, plans, pricing page, recurring, renew, renewal, expire, expiry, dealer plan, agent plan, monthly, yearly, free plan, marketplace fee, cancel subscription
updated: 2026-10-07
---

Membership plans turn posting into a subscription. Members choose a plan on your pricing page, for example
*Starter: 5 listings for 30 days*, pay for it, and can then post up to that many listings until the plan ends.
It is how most car, property and equipment marketplaces charge their dealers and agents.

Use membership plans when your sellers post regularly. For occasional sellers, a fee per listing with
[pay to post](/pay-to-post/) is usually simpler.

## Switch on memberships

1. Go to **Addons** and click **Subscriptions / Memberships**.
2. Click **Enable**.
3. Click **New Plan**, fill in the plan (see below) and click **Submit**. Create every plan you want to offer.
4. Back on the Subscriptions page, choose your options (see [Subscription Expire](#subscription-expire) below) and
   click **Save**.
{: .steps}

At the moment, clicking **Save** on this page also flips the **Enable**/**Disable** switch. After saving, check
that the button says **Disable** (which means memberships are on) and click **Enable** again if needed.
{: .warning}

Once memberships are on, every member needs a plan to post. Members without one are sent to the pricing page
(`/pricing.html` on your site) when they try to post. Administrators and moderators never need a plan.

You need at least one [payment method](/setup-payment-gateways/) for paid plans. A plan with a price of 0 is free
and starts without a checkout.
{: .note}

## Create a plan

| Field | What it does |
| --- | --- |
| **Name** | The plan name members see, such as *Dealer* or *Pro*. |
| **Seoname** | The plan's short name for web addresses, in lower case without spaces, such as `dealer`. Must be unique. |
| **Description** | What the plan includes, shown on the pricing page. |
| **Price** | What members pay for each period, in your **Payment Currency**. 0 makes the plan free. |
| **Days** | How long the plan lasts, for example 30 or 365. |
| **Amount Ads** | How many listings a member can post during the plan. `-1` means unlimited. |
| **Marketplace Fee** | With [Stripe Connect](/stripe/#different-commissions-per-membership-plan), the commission (%) taken on this plan's members' sales instead of your standard one. |
| **Status** | Active plans appear on the pricing page. Deactivate a plan to stop selling it. |

Plans are listed on the Subscriptions add-on page, where you can edit or delete them. The pricing page shows active
plans from the cheapest up.

After creating or changing a plan, clear the cache from the link in the confirmation message so the pricing page
shows the change straight away. See [Cache](/modify-cache-time/).
{: .tip}

## How members subscribe

1. The member opens your pricing page, or is sent there when they try to post.
2. They click the plan they want. They must be signed in.
3. They pay at checkout. [Coupons](/how-to-use-coupon-system/) work here too.
4. The plan starts at once. Their **Edit profile** page shows *You are subscribed to the plan … until … with … ads left*.
{: .steps}

Each listing they post uses one of the plan's listings. Listings they already had published count too: if a member
with 3 published listings buys a 5-listing plan, they have 2 left.

### Changing plans

Members change plan by buying another one on the pricing page. The new plan replaces the old one straight away (the
remaining days of the old plan aren't carried over). Yclas stops a member from:

- buying the plan they already have before it ends;
- moving to a plan with fewer listings than they are already using.

## Subscription Expire {#subscription-expire}

**Subscription Expire** decides what happens when a member's plan runs out, and whether plan limits are enforced.

| Setting | What it does |
| --- | --- |
| **Subscription Expire** | When a plan ends and isn't renewed, the member's listings are hidden (status *Unavailable*) until they buy a plan again. Members who have used all their listings, or whose plan has ended, are sent to the pricing page when they try to post. Their listings come back automatically when they renew. |
| **Do not limit access** | Appears once **Subscription Expire** is on. Members with an expired plan can still browse, contact sellers and use their account; they are only asked to renew when they post or edit a listing. |
| **Give extra ad on mark as sold** | When a member marks a listing as sold, they get that listing back on their plan (never more than the plan's total). |

Switch on **Subscription Expire** if you want plans to be enforced. Without it, a member who has had a plan once can
keep posting after the plan has ended or after using all its listings; only members who never had a plan are sent
to the pricing page.
{: .important}

If you switch on **Subscription Expire** before creating any plan, Yclas reminds you to create one first.

## Renewals

When a plan ends, Yclas renews it automatically if it can:

- **Free plans** renew on their own.
- **Plans paid by card with Stripe's Legacy Checkout** are charged again to the same card. See
  [Stripe](/stripe/#stripe-checkout-or-legacy-checkout).
- **Every other plan** creates a new order, and the member gets the *plan-expired* email with a link to pay. Until
  they pay, the plan counts as expired (and, with **Subscription Expire**, their listings are hidden).

Members on automatic card renewal can stop it with **Cancel Subscription** on their **Edit profile** page. Their plan
then runs to its end date and isn't charged again.

If you deactivate a plan, members on it aren't renewed when their period ends.

## See and adjust subscriptions

**Subscriptions** in the admin sidebar (shown while memberships are on) lists every member's plan, with listings
left, expiry date and status. You can filter by member, plan, dates and status, and click a subscription to edit it,
for example to give a member extra listings or extend their end date.

Plan payments appear in [Orders](/how-to-manage-orders/) under the plan's name.

## Related guides

- [Pay to post](/pay-to-post/) — charge per listing instead.
- [Stripe and Stripe Connect](/stripe/) — card payments, renewals and per-plan commissions.
- [Email templates](/automatic-emails-sent-to-users/) — edit the *plan-expired* email.
- [Ways to make money from your marketplace](/how-to-earn-money/) — pricing ideas.
{: .cards}
