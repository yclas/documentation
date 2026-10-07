---
title: Orders and transactions
description: Follow your revenue, find any payment, confirm bank transfers, fix an order and handle refunds from the Orders page.
section: payments
order: 110
permalink: /how-to-manage-orders/
keywords: orders, order, payments, revenue, invoice, transactions, mark as paid, unpaid, refund, refunded, cancel order, paid, status, sales, report, earnings, payment method
updated: 2026-10-07
---

Every time a member starts paying for something, Yclas creates an **order**. The **Orders** page in the admin
sidebar lists them all, with your revenue at the top. Use it to see what you earn, find a member's payment, confirm
offline payments and sort out problems.

## What creates an order

| Product | Created when |
| --- | --- |
| **Featured ad** | A member features a listing. See [Featured listings](/how-to-create-featured-plan/). |
| **Top up ad** | A member brings a listing to the top. |
| **Post in paid category** | A member posts in a category with a price. See [Pay to post](/pay-to-post/). |
| A plan's name | A member buys a [membership plan](/membership-plans/), or a plan renews. |
| **Add money** | A member tops up their [eWallet](/ewallet/). |
| **Buy product** | A buyer buys an item with [Buy Now](/pay-directly-from-ad/). The money goes to the seller. |
| **Application Fee** | Your commission on a Stripe Connect sale. See [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect). |
| **Custom** | A buyer pays a custom price a seller sent them in Messages. |

An order is created as soon as the member reaches the checkout, so not every order is paid.

## Your revenue at a glance

The top of the page shows, for the last **7 days**, **30 days**, **90 days** or **12 months**:

- **Revenue**, compared with the period before.
- **Paid orders** and **Average order**.
- **Unpaid**: how many orders are waiting for payment. Click the number to see them.
- **Revenue per day** and **Revenue by product**.

Revenue only counts money paid to you. Sales between members (**Buy product** and **Custom**) are left out because
that money belongs to the sellers, while your Stripe Connect commissions (**Application Fee**) are included. If you
have orders in several currencies, the totals use the most common one.
{: .note}

## Find an order

- Use the tabs to show orders by status: **Paid**, **Unpaid**, **Pending confirmation**, **Refused** or
  **Refunded**.
- Search by order number, member email or name.
- Filter by product (including each membership plan), payment method, and paid date (**Paid from** and
  **Paid until**).
- Click a customer's name to see all their orders. From **Users** and **Listings** you can also jump to a member's or
  a listing's orders.

Click **View** to open the order's invoice, as the member sees it.

| Status | Meaning |
| --- | --- |
| **Unpaid** | The member reached the checkout but hasn't paid (yet). |
| **Paid** | Payment received and the product applied. |
| **Pending confirmation** | The member came back from Stripe and Yclas is waiting for Stripe's webhook to confirm the payment. |
| **Refused** | The payment was declined. |
| **Refunded** | The money was given back. |

## Mark an order as paid

For bank transfers, cash or any payment you received outside the site:

1. Find the order in the **Unpaid** tab.
2. Open its menu (the three dots), click **Mark as paid** and confirm.
{: .steps}

The order becomes **Paid** with the method *Cash*, and the product is applied at once: the listing is featured,
moved to the top or published, the plan starts or the wallet is topped up. See
[Bank transfer and cash](/offline-payments/).

## Edit an order

Click **Edit** in the order's menu to change its details, such as the amount, description, payment method, pay date
or transaction ID. Use it to correct records, for example after a partial refund made in your payment provider.

Editing an order only changes the record. Setting the status to paid here doesn't feature, publish or activate
anything; use **Mark as paid** for that.
{: .warning}

## Refunds and cancellations

Refunds are made in your payment provider's dashboard (Stripe, PayPal…): Yclas doesn't send money back by itself.
After refunding, edit the order and set its status to refunded so your revenue figures stay right. Refunding an
order doesn't undo the product: unfeature or deactivate the listing yourself if needed.

The exception is the [Stripe escrow flow](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow). There,
sale orders get extra actions in their menu:

- **Mark as received** pays the seller, as if the buyer had confirmed delivery.
- **Cancel order** cancels an order that hasn't been paid out to the seller.
- **Refund order** gives a cancelled order's money back to the buyer through Stripe.

## What members see

Members find their own orders in **My Payments** in their account, with a **Pay** button for unpaid ones and an
invoice for each. Sellers see their sales in **My Sales**. See [Checkout, payments and invoices for members](/member-payments/).

## eWallet transactions

When the [eWallet](/ewallet/) is on, a **Transaction** page appears under **Orders** in the sidebar. It lists every
movement of wallet money: top-ups, payments, transfers between members and rewards.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Bank transfer and cash](/offline-payments/) — confirming offline payments.
- [Coupons](/how-to-use-coupon-system/) — discounts show on the order.
- [Analytics](/useful-statistics-about-your-advertisements/) — your marketplace's other numbers.
{: .cards}
