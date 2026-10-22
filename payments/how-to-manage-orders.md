---
title: Orders and transactions
description: Follow your revenue, find any payment, confirm bank transfers, fix an order and handle refunds from the Orders page.
section: payments
order: 110
permalink: /how-to-manage-orders/
keywords: orders, order, payments, revenue, invoice, pdf invoice, download invoice, transactions, mark as paid, unpaid, refund, refunded, cancel order, paid, status, sales, report, earnings, payment method, income, boost, renew listing, urgent, highlight, spotlight, included, cart, cart order, service fee, sponsored, banner order
updated: 2026-10-22
---

Every time a member starts paying for something, Yclas creates an **order**. The **Orders** page in the admin
sidebar lists them all, with your revenue at the top. Use it to see what you earn, find a member's payment, confirm
offline payments and sort out problems.

## What creates an order

| Product | Created when |
| --- | --- |
| **Featured ad** | A member features a listing. See [Featured listings](/how-to-create-featured-plan/). |
| **Top up ad** | A member brings a listing to the top. |
| **Boost** | A member buys a boost package. See [Boosts](/boosts/). |
| **Renew listing** | A member pays to renew a listing. See [Paid renewal](/make-money/#paid-renewal). |
| **Urgent or Highlight** | A member buys the Urgent label or Highlight for a listing. See [Urgent and Highlight](/boosts/#urgent-and-highlight). |
| **Home page spotlight** | A member buys a place in the home page spotlight. See [Home page spotlight](/boosts/#home-page-spotlight). |
| **Sponsored in search results** | A member pays for a sponsored place at the top of a category. See [Sponsored in search results](/boosts/#sponsored-in-search-results). |
| **Banner** | An advertiser buys a banner on your site. See [Sell banners to advertisers](/how-to-add-banner/#sell-banners-to-advertisers). |
| **Post in paid category** | A member posts in a category with a price. See [Pay to post](/pay-to-post/). |
| A plan's name | A member buys a [membership plan](/membership-plans/), or a plan renews. |
| **Add money** | A member tops up their [eWallet](/ewallet/). |
| **Buy product** | A buyer buys an item with [Buy Now](/pay-directly-from-ad/), or pays for a [shopping cart](/shopping-cart/) (one order per item). The money goes to the seller. |
| **Application Fee** | Your commission on a Stripe Connect sale, with any buyer's service fee. See [Commission and service fees](/commission-and-service-fees/). |
| **Custom** | A buyer pays a custom price a seller sent them in Messages. |

An order is created as soon as the member reaches the checkout, so not every order is paid. To email members who
didn't finish paying, switch on [unpaid checkout reminders](/make-money/#unpaid-checkout-reminders).

When a member buys several things in one payment (for example a boost together with the posting fee), the payment
is one order. Each promotion bought with it also gets its own order, with the payment method *included* and an amount
of 0, so you can see what was bought without counting the money twice.

## Your revenue at a glance

The top of the page shows, for the last **7 days**, **30 days**, **90 days** or **12 months**:

- **Revenue**, compared with the period before.
- **Paid orders** and **Average order**.
- **Unpaid**: how many orders are waiting for payment. Click the number to see them.
- **Revenue per day** and **Revenue by product**.

The [Make money](/make-money/#your-earnings) page shows a shorter summary of your earnings by product, with how
many new listings were promoted and how many checkouts went unpaid.

Revenue only counts money paid to you. Sales between members (**Buy product** and **Custom**) are left out because
that money belongs to the sellers, while your Stripe Connect commissions (**Application Fee**) are included. If you
have orders in several currencies, the totals use the most common one. To see the sales between members, with what
you earned on them, use the [Marketplace sales report](/marketplace-sales-report/).
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

### PDF invoices

The invoice page has a **Print / Save as PDF** button. To add a **Download PDF** button that saves a real PDF file,
for you and your members:

1. Go to **Settings › Payments**.
2. In **Invoice details**, switch on **PDF invoices**.
3. Click **Save changes**.
{: .steps}

The PDF has the same details as the invoice page, without the logo. It isn't available on sites in Arabic, Hebrew,
Persian, Urdu, Chinese, Japanese, Korean, Thai or Indian languages, which keep **Print / Save as PDF**. See
[Invoices](/member-payments/#invoices) for what an invoice shows.

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

You can refund what members paid you (featured listings, bring to top, pay to post, boosts, renewals, Urgent,
Highlight, the spotlight and membership plans) from the order's menu:

1. Find the order in the **Paid** tab.
2. Open its menu (the three dots) and click **Refund order** or **Mark as refunded**, then confirm.
{: .steps}

| You see | When | What happens |
| --- | --- | --- |
| **Refund order** | The member paid by card through Stripe. | Stripe sends the money back to the member. |
| **Mark as refunded** | Any other payment method (PayPal, bank transfer, cash…). | The order is marked refunded. Send the money back yourself in your PayPal or other account. |

Either way the order becomes **Refunded**, and what it gave is taken back:

- a featured listing stops being featured;
- a boost's remaining moves to the top stop, and the featured days it added are taken off;
- an Urgent label, a Highlight or a spotlight place ends at once;
- a membership plan ends.

Each refund you make is recorded in the [Audit log](/admin-support-tools/#audit-log).

Bring to top, pay to post and renewal orders are only marked: the listing stays where it is and online. Unpublish or
deactivate it yourself if needed. If Stripe refuses a refund, nothing changes and you see Stripe's reason.

Promotions paid for a listing that never goes live are refunded automatically. See
[Automatic refunds](/boosts/#automatic-refunds).
{: .note}

Sellers can also refund a sale themselves through a [return](/returns/), and you can refund the buyer from a
[dispute](/disputes/).

eWallet top-ups (**Add money**) can't be refunded here, because the credit may already have been spent. For a
partial refund, refund it in your payment provider's dashboard and use **Edit** to correct the amount.

Sales between members are refunded differently. With the
[Stripe escrow flow](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow), sale orders get extra
actions in their menu:

- **Mark as received** pays the seller, as if the buyer had confirmed delivery.
- **Cancel order** cancels an order that hasn't been paid out to the seller.
- **Refund order** gives a cancelled order's money back to the buyer through Stripe.

A [shopping cart](/shopping-cart/) paid in one payment creates one **Buy product** order and one **Application Fee**
order per item. These actions work item by item: refunding one item gives back only that item's share of the
payment (with its part of any service fee), and the other sellers' orders stay as they are.

## What members see

Members find their own orders in **My Payments** in their account, with a **Pay** button for unpaid ones and an
invoice for each. Sellers see their sales in **My Sales**. See [Checkout, payments and invoices for members](/member-payments/).

## eWallet transactions

When the [eWallet](/ewallet/) is on, **Transaction** appears in the sidebar, just below **Orders**. It lists every
movement of wallet credit: top-ups, payments, transfers between members and rewards.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the overview.
- [Bank transfer and cash](/offline-payments/) — confirming offline payments.
- [Coupons](/how-to-use-coupon-system/) — discounts show on the order.
- [Analytics](/useful-statistics-about-your-advertisements/) — your marketplace's other numbers.
- [Marketplace sales report](/marketplace-sales-report/) — what your members sold to each other.
{: .cards}
