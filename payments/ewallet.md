---
title: eWallet
description: Give every member a wallet of site credit they top up, spend on featured listings and other extras, send to each other and use to buy items.
section: payments
order: 150
permalink: /ewallet/
keywords: ewallet, e-wallet, wallet, credit, credits, coins, points, balance, top up, add money, money packages, send money, transfer, gamification, reward, sign-up bonus, mark as received, virtual money
updated: 2026-10-07
---

The eWallet gives every member a balance of site credit. Members buy credit in packages (for example 100 credits for
€10), then spend it on everything your marketplace sells, send it to each other, and buy items from other members.
You decide the name and symbol of your currency, such as *coins* or *★*.

Use it when you want members to buy credit in advance, to reward them with free credit, or to run a closed economy
such as a barter or community marketplace.

## How it changes payments

Once the eWallet is on, **everything on your marketplace is paid in wallet credit**:

- Featured listings, bring to top, pay to post and membership plans are paid from the member's wallet. Prices stay the
  same numbers, now in credit: a featured plan priced 10 costs 10 credits.
- [Buy Now](/pay-directly-from-ad/) purchases are paid in credit too, and the seller receives the credit once the
  buyer confirms delivery.
- Your payment methods (Stripe, PayPal…) are only used when members **buy credit**.

Members can't turn credit back into money through the site. If sellers earn credit you want to pay out, arrange it
with them yourself.
{: .important}

## Switch it on

1. Go to **Addons** and click **eWallet**.
2. Click **Enable**.
3. Enter your **Money symbol**, for example `$`, `★` or `pts `. It is shown in front of every amount.
4. Set up the options below and click **Save**.
{: .steps}

At the moment, clicking **Save** on this page also flips the **Enable**/**Disable** switch. After saving, check that
the button says **Disable** (which means the eWallet is on) and click **Enable** again if needed.
{: .warning}

## Let members buy credit

1. In **Add money**, tick **Add money**.
2. Under **Money packages**, click **Add a package**. Enter the amount of credit in **Money** and what it costs in
   **Price** (in your Payment Currency), then click **Save**.
3. Add as many packages as you like, for example 100 credits for 10 and 550 credits for 50.
4. Click **Save** at the bottom of the page.
{: .steps}

Members top up with the **Add money** button on the **Transactions** page of their account, and pay with any
[payment method](/setup-payment-gateways/) you've connected.
They can switch between packages at checkout. Credit is added as soon as the payment is confirmed.

Credit is always a whole number. Price your extras in whole numbers when the eWallet is on.
{: .note}

## eWallet settings

| Setting | What it does |
| --- | --- |
| **Money symbol** | The symbol shown with every amount of credit. |
| **Mark as received reminder** | For Buy Now purchases: how many days after paying the buyer gets an email reminding them to mark the order as received. |
| **Auto mark unreceived orders as received** | How many days after paying an order is marked as received automatically, so the seller is paid even if the buyer forgets. |
| **Buy Now button** | Shows **Buy Now** on listings with a price, so members can buy items with credit. This is the same switch as **Buy Now button** on the PayPal integration page. |
| **Add money** | Lets members buy credit with the **Money packages** you define. |
| **Enable gamification** | Lets members earn credit for actions. |
| **On sign up** | Credit given to each new member when they confirm their email address. Needs email verification on sign-up (see [Sign-up and login settings](/registration-and-login/)). |

## What members can do

- **See their balance**: *eWallet balance* in their account menu.
- **See their history**: **Transactions** in their account lists every top-up, payment, transfer and reward.
- **Pay**: at checkout, a single button pays from their wallet. If the balance is too low, the payment is declined
  and they need to top up first.
- **Send credit** to another member: on that member's public profile, **Send money** and an amount.
- **Confirm a purchase**: after buying an item, **Mark as received** in **My Payments** releases the credit to the
  seller.

## What you can see

**Transaction** in the admin sidebar (shown while the eWallet is on) lists every wallet movement on your site. Credit
purchases appear in [Orders](/how-to-manage-orders/) as **Add money**.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the payment methods used to buy credit.
- [Featured listings and bring to top](/how-to-create-featured-plan/) — extras members spend credit on.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — buying items with credit.
- [Coupons](/how-to-use-coupon-system/) — discounts on credit packages (*Add money*).
{: .cards}
