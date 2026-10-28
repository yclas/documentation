---
title: Membership plans
description: "Put posting behind a paywall: charge members a subscription with plans that include a number of listings for a number of days, and decide what happens when a plan runs out."
section: payments
order: 90
permalink: /membership-plans/
keywords: membership, memberships, membership plan, create membership plans, members only, members-only posting, paywall, pay wall, paid membership, subscription, subscriptions, plan, plans, packages, pricing page, recurring, renew, renewal, expire, expiry, dealer plan, agent plan, monthly, yearly, free plan, marketplace fee, cancel subscription, plan credits, included featured, saved card, automatic renewal, declined card, failed renewal, retry payment, renewal reminder, change card, my plan, listing level, listing levels, bronze silver gold, gold member, plan badge, photos per listing, more photos, deals per listing, listing statistics, members-only content, members only page, members only field, premium content, paid claim
updated: 2026-10-28
---

Membership plans put posting behind a paywall. Members choose a plan on your pricing page, for example
*Starter: 5 listings for 30 days*, pay for it, and can then post up to that many listings until the plan ends.
Only members with a plan can post. It is how most car, property and equipment marketplaces charge their dealers and
agents. Memberships are part of the **Professional** and **Marketplace** plans.

Memberships charge for **posting**. Browsing stays open to everyone, apart from the pages and listing details you
mark [members only](#members-only-content). To keep whole listings for signed-in members, use **Require Login to View
Listing** (see [Listing page and form fields](/how-to-manage-advertisement-fields/)) or make the whole site
[private](/private-site/); neither is paid. To earn from advertisers rather than sellers, see
[Banners and ad slots](/how-to-add-banner/).

Use membership plans when your sellers post regularly. For occasional sellers, a fee per listing with
[pay to post](/pay-to-post/) is usually simpler.

## Switch on memberships

1. Go to **Add-ons** in the sidebar and open **Subscriptions**.
2. Under **Plans**, click **+ New plan**, fill in the plan (see below) and click **Submit**. Create every plan you
   want to offer.
3. Back on the Subscriptions page, switch on **Enable subscriptions** and choose your options (see
   [When a plan runs out](#subscription-expire) and [Renewals](#renewals) below).
4. Click **Save changes** in the bar at the bottom.
{: .steps}

{% include figure.html src="panel/subscriptions.webp" alt="The Subscriptions page under Add-ons with the Enable subscriptions, Block expired members, Extra listing when sold and Retry failed renewals switches" caption="Add-ons › Subscriptions. The pill next to the title says Off until you switch memberships on." height="700" %}

You can also switch on **Seller plans** in the guided [Make money](/make-money/) set-up. On a site without plans it
offers to create three for you (*Free*, *Pro seller* and *Dealer*), and it won't switch memberships on until there is
at least one active plan.

The pill next to the page title says **On** while memberships are on.

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
| **Price** | What members pay for each period, in your **Currency**. 0 makes the plan free. |
| **Days** | How long the plan lasts, for example 30 or 365. |
| **Amount Ads** | How many listings a member can post during the plan. `-1` means unlimited. |
| **Marketplace Fee** | With [Stripe Connect](/stripe/#different-commissions-per-membership-plan), the commission (%) taken on this plan's members' sales instead of your standard one. A rate you set for one seller on the **Commission on sales** page comes before the plan's fee. See [Commission and service fees](/commission-and-service-fees/#which-rate-applies). |
| **Status** | Active plans appear on the pricing page. Deactivate a plan to stop selling it. |

Plans are listed on the Subscriptions add-on page, where you can edit or delete them. The pricing page shows active
plans from the cheapest up.

After creating or changing a plan, clear the cache from the link in the confirmation message so the pricing page
shows the change straight away. See [Clear the cache](/modify-cache-time/).
{: .tip}

## Promotions included in a plan {#promotions-included-in-a-plan}

A plan can include featured listings and moves back to the top, which sellers use instead of paying. It gives your
higher plans more value: for example, *Dealer* with 5 featured listings and 20 moves to the top each month.

Set them at the bottom of the plan's form, when you create or edit it:

| Field | What it does |
| --- | --- |
| **Featured listings included** | How many listings a seller on this plan can feature without paying, each plan period. |
| **Days featured per credit** | How long each of those listings stays featured. |
| **Moves to the top included** | How many times a seller can move a listing back to the top without paying, each plan period. |

The credits start again each time the plan renews, and unused ones don't carry over. In the Nova theme, sellers use
them with **Use a credit** on the **Promote** page of a live listing (see [The Promote page](/boosts/#the-promote-page)),
and the pricing page lists them on each plan as *Included: …*.

## Listing levels: what each plan unlocks {#listing-levels}

Business directories often sell levels such as *Bronze*, *Silver* and *Gold*, where a higher plan gets a better
listing. The **Listing level** part of a plan's form, below the promotions, does that. Leave a field at 0 or off and
the plan gets your site's usual setting.

| Field | What it does |
| --- | --- |
| **Photos per listing** | How many photos sellers on this plan can add to each listing, in every posting form. 0 uses **Number of Images** in **Listings › Settings** (see [Image settings](/how-to-configure-image-settings/)). It can't go above the photos your Yclas plan allows. |
| **Deals per listing** | How many [deals](/listing-deals/) each of their listings can have running at once. 0 uses the usual 3. |
| **Badge on listings** | A short label, up to 40 characters, such as *Gold member*, shown with a star on the seller's business listings (in the business details box of a [directory listing](/directory-mode/)). Empty for none. |
| **Listing statistics** | The [Performance page](/listing-performance/#keep-it-for-paying-members) of each listing: views, contact clicks and searches. Once any plan includes it, only sellers on those plans see the numbers; the others see which plans include it and a **See plans** button. |
| **Members-only content** | Lets this plan's members read what you mark [members only](#members-only-content). |

Levels only apply while memberships are on, and only plans that are active count. A seller gets the level of the
plan they're on now: when it ends, their listings go back to the site's usual settings. Administrators and moderators
are never limited.

On a [business directory](/directory-mode/#paid-claims) you can also ask businesses to choose a plan when they claim
their listing, so the level is part of taking it over.
{: .tip}

## Members-only content {#members-only-content}

Some of what you publish can be kept for paying members: a price guide page, a trade price on a
listing, a detailed spec. Two switches appear once memberships are on:

- **Custom fields.** Open a field in **Listings › Custom Fields** and switch on **Members only**. Visitors without a
  plan see a *Members only* link to your pricing page instead of the value. The listing's seller and your team always
  see it. The value is also left out of what search engines and the AI features read.
- **Pages.** In the page editor, under **Publish**, switch on **Members only** (see [Pages](/how_to_add_pages/)).
  Visitors who aren't members see *(page title) is for members. Join one of our membership plans to read
  it.*, a **See plans** button and, if they aren't signed in, **Sign in**. Search engines are asked not to index the page.

Who counts as a member: while no plan has **Members-only content** switched on, anyone on a running plan; once a plan
has it, only members on such plans. Administrators and moderators always count.

If you switch memberships off, members-only fields and pages are shown to everyone again. Your choices are kept for
when you switch them back on.
{: .note}

## How members subscribe

1. The member opens your pricing page, or is sent there when they try to post.
2. They click the plan they want. They must be signed in.
3. They pay at checkout. [Coupons](/how-to-use-coupon-system/) work here too.
4. The plan starts at once. Their profile shows *You are subscribed to the plan … until … with … ads left*.
{: .steps}

Each listing they post uses one of the plan's listings. Listings they already had published count too: if a member
with 3 published listings buys a 5-listing plan, they have 2 left.

### Changing plans

Members change plan by buying another one on the pricing page. The new plan replaces the old one straight away (the
remaining days of the old plan aren't carried over). Yclas stops a member from:

- buying the plan they already have before it ends;
- moving to a plan with fewer listings than they are already using.

## When a plan runs out {#subscription-expire}

**Block expired members** decides what happens when a member's plan runs out, and whether plan limits are enforced.
These settings are on the Subscriptions add-on page.

| Setting | What it does |
| --- | --- |
| **Block expired members** | When a plan ends and isn't renewed, the member's listings are hidden (status *Unavailable*) until they buy a plan again. Members who have used all their listings, or whose plan has ended, are sent to the pricing page when they try to post. Their listings come back automatically when they renew. |
| **Do not limit access** | Appears once **Block expired members** is on and saved. Members with an expired plan can still browse, contact sellers and use their account; they are only asked to renew when they post or edit a listing. |
| **Extra listing when sold** | When a member marks a listing as sold, they get that listing back on their plan (never more than the plan's total). |
| **Retry failed renewals** | Off by default. Tries a declined card again before the plan expires, and reminds members before each automatic renewal. See [Retry declined cards](#retry-declined-cards). |

Switch on **Block expired members** if you want plans to be enforced. Without it, a member who has had a plan once
can keep posting after the plan has ended or after using all its listings; only members who never had a plan are
sent to the pricing page.
{: .important}

If you switch on **Block expired members** before creating any plan, Yclas reminds you to create one first.

## Renewals

When a plan ends, Yclas renews it automatically if it can:

- **Free plans** renew on their own.
- **Plans paid by card through [Stripe](/stripe/)** are charged again to the same card. When a member pays for a plan
  on Stripe's payment page, Stripe asks their permission to save the card for future payments; at renewal the saved
  card is charged without the member having to do anything. Plans paid with Stripe's older card pop-up (Legacy
  Checkout) renew the same way.
- **Every other plan** creates a new order, and the member gets the *plan-expired* email with a link to pay. Until
  they pay, the plan counts as expired (and, with **Subscription Expire**, their listings are hidden).

If the bank asks the member to confirm the renewal, or the card is declined, the member gets the *plan-expired* email
with the link to pay instead, unless you retry declined cards (see below).

Cards are not saved while **Let Stripe add the tax (Stripe Tax)** is on (see [VAT and taxes](/eu-vat/#let-stripe-work-out-the-tax-stripe-tax)):
members then renew by paying from the email.
{: .note}

Members on automatic card renewal can stop it with **Cancel Subscription** on their profile (or, with **Retry failed
renewals** on, from their **My plan** page). Their plan then runs to its end date and isn't charged again.

If you deactivate a plan, members on it aren't renewed when their period ends.

### Retry declined cards

Cards get declined for ordinary reasons: an expired card, a limit reached that day. With **Retry failed renewals**
on, a declined renewal doesn't end the plan straight away:

1. A few days before an automatic renewal, the member gets a reminder with the date, the amount and a link to
   change their card or stop the renewal.
2. If the card is declined, the member keeps their plan and their listings stay up. They get an email with the date
   of the next try, a link to update their card and a link to pay now.
3. The card is tried again 1, 3 and 7 days after the first failure. Each failed try sends the same email with the
   next date.
4. If the last try fails, or the member turned automatic renewal off meanwhile, the plan expires as usual: the
   *plan-expired* email, and hidden listings with **Block expired members**.
{: .steps}

To switch it on, go to **Add-ons › Subscriptions**, switch on **Retry failed renewals** and click **Save changes**.
It only affects plans that renew from a card saved with [Stripe](/stripe/).

The Subscriptions page then also lists **Failed renewals**: each member whose card was declined, the order, the
number of **Tries**, the **Next try**, and whether it is **Trying again** or **Given up**.

The reminder and the failed-renewal emails have a fixed text: they aren't in
[Email templates](/automatic-emails-sent-to-users/).
{: .note}

### The My plan page

With **Retry failed renewals** on, members see **Manage your plan** in the plan box of their profile, in place of
**Cancel Subscription**. It opens **My plan**, where they can:

- see their plan, its renewal date and the listings left;
- **Turn automatic renewal off**, or back on with the card already saved;
- **Change card** (or **Add a card**) on Stripe's secure page, for the next renewals;
- **Pay now**, while a declined renewal is being retried.

## See and adjust subscriptions

**Subscriptions** in the admin sidebar (shown while memberships are on) lists every member's plan, with listings
left, expiry date and status. You can filter by member, plan, dates and status, and click a subscription to edit it,
for example to give a member extra listings or extend their end date.

Plan payments appear in [Orders](/how-to-manage-orders/) under the plan's name. Refunding a plan order there ends
that member's plan straight away.

## Related guides

- [Pay to post](/pay-to-post/) — charge per listing instead.
- [Run a business directory](/directory-mode/) — business listings, and claims that take a plan.
- [Listing performance](/listing-performance/) — the statistics a plan can include.
- [Stripe and Stripe Connect](/stripe/) — card payments, renewals and per-plan commissions.
- [Email templates](/automatic-emails-sent-to-users/) — edit the *plan-expired* email.
- [Ways to make money from your marketplace](/how-to-earn-money/) — pricing ideas.
- [Invoices](/member-payments/#invoices) — the invoice members get for each plan payment.
{: .cards}
