---
title: Ways to make money from your marketplace
description: Every way Yclas lets you earn from your marketplace — paid listings, featured listings, memberships, commissions and advertising — and when each one makes sense.
section: growth
order: 80
permalink: /how-to-earn-money/
keywords: make money, earn money, monetise, monetize, revenue, pay to post, featured, bump, bring to top, membership, subscription, commission, stripe connect, escrow, adsense, banners, ads.txt
updated: 2026-10-07
---

Yclas gives you several ways to earn from your marketplace, and you can combine them. The right mix depends on your
niche and how big your site is. A useful rule: **charge for extras before you charge for the basics.** Free posting
brings in the listings that attract buyers; paid extras earn money from the sellers who want more.

Most of these need a payment gateway such as Stripe or PayPal, so members can pay you. See [Take payments on your
site](/setup-payment-gateways/) first.

## At a glance

| Model | Who pays | Good for | Set up in |
| --- | --- | --- | --- |
| Featured listings | Sellers who want more visibility | Almost every marketplace, once it has traffic | **Settings › Payments** |
| Bring to top | Sellers who want to be seen again | Busy sites where listings sink quickly | **Settings › Payments** |
| Pay to post | Every seller, per listing | Jobs, property, vehicles, B2B: listings worth a lot to the seller | **Settings › General** and categories |
| Memberships | Sellers, per month or year | Dealers, agents and professional sellers who post often | **Addons › Subscriptions / Memberships** |
| Commission on sales | Sellers, a share of each sale | Marketplaces where buyers pay through your site | **Integrations › Stripe**, Escrow |
| Advertising | Advertisers | Sites with a lot of traffic | **Design › Theme Options**, **Design › Widgets** |

## Featured listings

Sellers pay to have their listing highlighted with a badge and pinned at the top of lists for a number of days. You
create one or more featured plans (for example 7 days, 30 days) with their prices.

Go to **Settings › Payments**, switch on **Sell featured listings** and add your plans. See [Featured listings and
promotions](/how-to-create-featured-plan/).

## Bring to top

Sellers pay a small fee to move their listing back to first place, as if it had just been posted. On the same page,
switch on **Bring to top** and set the **To Top Price**.

## Pay to post

Sellers pay before their listing goes live.

1. Set a price on the categories that should be paid, under **Listings › Categories**. Categories without a price stay
   free. See [Categories](/how-to-add-categories/).
2. In **Settings › General › How new listings go live**, choose **Payment on**, or **Payment with Moderation** if you
   also want to approve each listing after it's paid.
{: .steps}

Charging only in some categories (for example "Jobs" and "Property") while keeping the rest free is a good way to
start.

## Memberships

Sellers pay a recurring fee for a plan that lets them post a number of listings. It suits professional sellers and
gives you predictable income. Switch on **Subscriptions / Memberships** under **Addons**, then create your plans. See
[Membership plans](/membership-plans/).

## Commission on sales

If buyers pay for items through your site with the **Buy Now** button, you can take a share of every sale:

- **Stripe Connect** pays the seller directly into their own Stripe account and sends your commission to you. See
  [Stripe](/stripe/).
- **Escrow** holds the buyer's payment until they confirm they received the item. See [Escrow payments](/escrow-pay/).

See [Let members sell with Buy Now](/pay-directly-from-ad/) for how buying works.

## Advertising

Show banners from advertisers, or from networks like Google AdSense, in your theme's banner fields and widget areas.
See [Banners and ad slots](/how-to-add-banner/).

If you use AdSense or another ad network, they ask you to publish an `ads.txt` file. Paste the line they give you into
**Ads.txt** under **Settings › General › Advanced** and click **Save changes**. See
[Ads.txt](/how-to-add-banner/#adstxt).

Ads from networks pay very little per visitor. They only start to add up with tens of thousands of visits a month,
and they can make a young site look less trustworthy. Selling a banner directly to a local business often pays more.
{: .tip}

## More ideas

- **Coupons:** run promotions on featured listings or memberships. See [Coupons](/how-to-use-coupon-system/).
- **Sell tickets or downloads:** members can sell [event tickets](/sell-event-tickets-online/) or [digital
  goods](/sell-digital-goods/) through listings, with your commission.
- **Sponsored content:** charge businesses for a page or blog post about them.

## Pricing tips

- **Wait for traffic.** Sellers pay for visibility only when the site has buyers. Start free, then add paid extras.
- **Keep prices simple.** One or two featured plans are easier to choose from than five.
- **Tell sellers what they get.** Show how many views a featured listing gets compared with a normal one.
- **Payment currency:** fees are charged in the **Payment Currency** set in **Settings › Payments**, which can be
  different from the currency of listing prices. Check that your payment gateway supports it.

## Related guides

- [Take payments on your site](/setup-payment-gateways/) — connect Stripe, PayPal and others.
- [Orders and transactions](/how-to-manage-orders/) — see what you've earned.
- [VAT and taxes](/eu-vat/) — invoices and VAT on your fees.
{: .cards}
