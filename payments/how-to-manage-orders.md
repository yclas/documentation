---
title: Orders and transactions
description: Follow your revenue, find any payment, confirm bank transfers, record money paid to you outside the site, fix an order and handle refunds from the Orders page.
section: payments
order: 110
permalink: /how-to-manage-orders/
keywords: orders, order, payments, revenue, invoice, pdf invoice, download invoice, transactions, mark as paid, unpaid, refund, refunded, cancel order, paid, status, sales, report, earnings, payment method, income, boost, renew listing, urgent, highlight, spotlight, included, cart, cart order, service fee, sponsored, banner order, record payment, manual payment, payment methods, bank transfer, cash, ccp, baridimob, mobile money, other payment, pending confirmation, add a payment by hand
updated: 2026-11-17
plans: Available on all plans
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
| **Other payment** | You save a payment for anything else with [Record payment](#record-a-payment-you-received). |

An order is created as soon as the member reaches the checkout, so not every order is paid. To email members who
didn't finish paying, switch on [unpaid checkout reminders](/make-money/#unpaid-checkout-reminders).

When a member buys several things in one payment (for example a boost together with the posting fee), the payment
is one order. Each promotion bought with it also gets its own order, with the payment method *included* and an amount
of 0, so you can see what was bought without counting the money twice.

## Your revenue at a glance

The top of the page shows, for the last **7 days**, **30 days**, **90 days** or **12 months**:

{% include figure.html src="panel/orders.webp" alt="The Orders page, with revenue, paid orders, revenue by product and the list of orders" %}

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
  **Paid until**). The payment method filter also lists [your own payment methods](#your-payment-methods), even
  before an order uses them.
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

The PDF has the same details as the invoice page, with your logo at the top when **Use the site logo on invoices** is
on and the logo is a PNG, JPEG or GIF of up to 1 MB and 2000 px on each side; otherwise the PDF is made without it. It isn't available on sites in Arabic, Hebrew,
Persian, Urdu, Chinese, Japanese, Korean, Thai or Indian languages, which keep **Print / Save as PDF**. See
[Invoices](/member-payments/#invoices) for what an invoice shows.

| Status | Meaning |
| --- | --- |
| **Unpaid** | The member reached the checkout but hasn't paid (yet). |
| **Paid** | Payment received and the product applied. |
| **Pending confirmation** | The member came back from Stripe and Yclas is waiting for Stripe's webhook to confirm the payment. A payment you [recorded](#record-a-payment-you-received) as **Pending** also shows here. |
| **Refused** | The payment was declined. |
| **Refunded** | The money was given back. |

## Mark an order as paid

For bank transfers, cash or any payment you received outside the site:

1. Find the order in the **Unpaid** tab.
2. Open its menu (the three dots) and click **Mark as paid**.
3. If you have set up [your payment methods](#your-payment-methods), a **Mark as paid** page shows the order: check
   the payment arrived, choose the method under **How was it paid?** and click **Confirm payment**. Otherwise,
   confirm in the box that opens.
{: .steps}

The order becomes **Paid**, with the method you chose (or *Cash* when you have no payment methods set up), and the
product is applied at once: the listing is featured, moved to the top or published, the plan starts or the wallet is
topped up. See [Bank transfer and cash](/offline-payments/).

## Record a payment you received

When a customer pays you outside the site for something that has no order yet, such as a plan paid by bank transfer
or a service you sell yourself, save it with **Record payment**. It then shows in **Orders**, in the payment method
filter and in **Export CSV**, and counts in your revenue.

1. On the **Orders** page, click **Record payment**.
2. In **Customer**, type their email address or name and pick them from the list. They need an active account.
3. Fill in the **Amount** and the **Date paid** (today or earlier).
4. In **For**, choose what it was for: one of your products or plans, or **Other payment**.
5. Choose the **Payment method** and the **Status**: **Paid**, or **Pending** if the money hasn't arrived yet.
6. Optionally add a **Description**, such as a transfer reference. The customer sees it.
7. Click **Save payment**.
{: .steps}

The order uses your site's currency. Type the amount as you usually write it: `1500`, `1 500`, `1,500` and `200,50`
all work, and so do Arabic digits.

Record payment only records the money. It doesn't feature a listing, start a plan or add wallet credit. When the customer
started a checkout for what they paid, [mark that order as paid](#mark-an-order-as-paid) instead, so they get it.
{: .important}

A **Pending** payment shows in **Pending confirmation**, and to the customer as waiting for confirmation, with
nothing to pay. When the money arrives, click **Mark as paid** in its menu: it only becomes **Paid**.

Sales between members, your commission (**Application Fee**) and wallet top-ups can't be recorded this way.

### Your payment methods

List the ways your customers pay you outside the site, such as *Bank transfer*, *CCP* or a mobile payment app, and
you choose one each time you mark an order paid or record a payment.

1. On the **Orders** page, click **Record payment**.
2. Open **Your payment methods**.
3. Type one method per line, up to 12, of up to 20 characters each.
4. Click **Save methods**.
{: .steps}

Names of payment gateways on your site, such as *Stripe* or *PayPal*, are left out, because refunds and disputes rely
on those names: use another name, such as *PayPal transfer*. Without any methods, payments you mark or record are
saved as *Cash*.

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
