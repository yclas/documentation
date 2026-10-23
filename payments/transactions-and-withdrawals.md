---
title: Transactions and withdrawals
description: See every eWallet movement on the Transactions page, and pay your sellers their balance from the Withdrawals page when you collect payments for them.
section: payments
order: 620
permalink: /transactions-and-withdrawals/
keywords: transaction, transactions, without stripe connect, no stripe connect, collect payments yourself, transaction history, withdrawal, withdrawals, withdraw, payout, payouts, pay sellers, pay my sellers, seller balance, balance, cash out, earnings, mark paid, reject withdrawal, adjust balance, held until delivery, smallest withdrawal, minimum withdrawal, ewallet history, wallet movements
updated: 2026-10-23
---

Two pages in the admin sidebar show money that belongs to your members rather than to you:

- **Transaction** lists every movement in your members' [eWallets](/ewallet/): top-ups, payments, transfers between
  members and rewards. It only appears while the eWallet is on.
- **Withdrawals** is where sellers ask to be paid their balance when **you collect the payments for them** instead of
  using Stripe Connect. It appears once that option is on in **Commission on sales**.

They belong to two different ways of running a marketplace, so most sites only ever see one of them.

## The Transactions page

Every time credit moves in a member's eWallet, Yclas records a transaction. Open **Transaction** in the admin sidebar
to see them all, newest first.

| Column | What it shows |
| --- | --- |
| **ID** | The transaction's number. |
| **To user** | The email of the member whose wallet the transaction belongs to. |
| **From user** | For credit one member sent to another, the email of the sender. Empty otherwise. |
| **Order** | The [order](/how-to-manage-orders/) the transaction belongs to, if any: a credit package bought, a featured listing paid with credit, a Buy Now purchase. |
| **Amount** | Positive when credit came in (a top-up, a transfer received, a sale, a reward), negative when it was spent. |

A member's wallet balance is the total of their amounts. When one member sends credit to another, you see two lines:
a negative one on the sender, and a positive one on the recipient with the sender in **From user**.

To narrow the list, use the filters above it: a member's user ID, or a date range. The page is read-only: you can't
add, change or delete a transaction here, and it has no export.

Credit packages bought with money also appear in [Orders](/how-to-manage-orders/) as **Add money**, which is the
place to look for the payment itself.
{: .note}

Members can't turn eWallet credit back into money through the site, so there is no withdrawal for eWallet credit.
If you want to pay out credit a seller earned, arrange it with them yourself.
{: .important}

## The Withdrawals page

### When you use it

If Stripe Connect isn't available in your country, or you'd rather handle the money yourself, you can collect the
payments for your sellers:

- buyers pay **you**, through the payment methods you already set up (PayPal, Stripe, bank transfer or another);
- each sale goes on the seller's **balance**, less your [commission](/commission-and-service-fees/);
- sellers ask for a withdrawal by PayPal or bank transfer, and you pay them yourself.

Switch it on in **Commission on sales**, in the section **Without Stripe Connect: you collect, sellers withdraw**:

1. Turn on **Collect payments for your sellers**.
2. Choose whether to **Hold the seller's money until delivery** (on by default).
3. Optionally set **Release held money automatically after (days)** and the **Smallest withdrawal**.
4. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Collect payments for your sellers** | Listings with a price get a Buy now button, and the buyer pays you. |
| **Hold the seller's money until delivery** | A sale stays *held* on the seller's balance until the buyer confirms they received it, or you mark the order received. Only then can it be withdrawn. |
| **Release held money automatically after (days)** | Marks every paid sale received after this many days, unless a dispute is open. Leave it empty to release only when the buyer or you mark the order received. |
| **Smallest withdrawal** | The lowest amount a seller can ask for. 0 means no minimum. |

Stripe Connect wins: while Buy now through Stripe Connect is on, sellers are paid by Stripe and this option stays off.
It is also off while the eWallet is on. Paid bookings are paid through Stripe Connect only.
{: .note}

If you don't see this section on your **Commission on sales** page, it isn't available on your site yet. Ask us
through support.

### How a request arrives

A seller opens **Earnings** in their account menu, enters the amount and how they want to be paid, and clicks **Ask
for a withdrawal**. The amount comes off their available balance straight away, so they can't ask for the same money
twice.

You get an email at your site's notification address (*Withdrawal request from …*) with the amount and the payment
details, partly hidden. The full details are on the **Withdrawals** page.

Open **Withdrawals** in the admin sidebar. The tabs **Requested**, **Paid** and **Rejected** sort the requests; the
number next to **Requested** is how many are waiting. Each request shows:

- the amount and the seller's name (click it to open their user page);
- **Asked on** and the seller's email;
- **Balance now**: what the seller still has available in that currency;
- where to pay: *PayPal:* and an email address, or *Bank transfer:* with the account holder, IBAN or account number,
  bank name and any extra details (SWIFT/BIC, routing number).

### Pay a withdrawal

1. Send the money yourself, from your own PayPal or bank, to the details shown.
2. On the request, enter the **Payment reference (optional)**, for example the PayPal transaction ID or your bank's
   reference.
3. Click **Mark paid** and confirm.
{: .steps}

The request moves to **Paid** with its reference and date, and the seller gets an email (*Your withdrawal of … was
paid*) with the reference. The seller's balance doesn't change again: the amount already came off when they asked.

Yclas doesn't send the money for you. **Mark paid** only records that you paid it, so pay first, then mark it.
{: .important}

If the seller's available balance has gone below zero since they asked (after a refund or a chargeback), **Mark paid**
is refused until you tick **Pay anyway: the available balance is below zero**. Usually it's better to reject the
request instead.

### Reject a withdrawal

1. Enter the **Reason, sent to the seller** (at least 3 characters).
2. Click **Reject** and confirm.
{: .steps}

The amount goes back on the seller's available balance, and they get an email (*Your withdrawal of … was not paid*)
with your reason. A request can only be decided once: after **Mark paid** or **Reject**, it can't be changed.

### Adjust a seller's balance

At the bottom of the page, **Adjust a seller's balance** corrects a balance by hand: a refund you gave outside the
site, a chargeback, or a sale paid through a payment method that doesn't credit sellers.

1. Enter the **Seller (email or user ID)**.
2. Enter the **Amount**. A negative amount takes money off the balance.
3. Check the **Currency** (its three-letter code, such as EUR or USD).
4. Write the **Reason** and click **Adjust balance**.
{: .steps}

The adjustment is available to withdraw at once, and appears as *Adjustment* in the seller's history with your reason.

## What sellers see

The **Earnings and withdrawals** page in a seller's account shows:

- their balance in each currency: **Available**, and **Held until delivery** while holding is on;
- the **Ask for a withdrawal** form: **Amount**, **Currency**, and **Pay me by** PayPal or bank transfer. Their last
  details are filled in again next time, and the smallest withdrawal is shown when you set one;
- **Your withdrawals**, with the date, amount, where it was paid (partly hidden) and the status;
- **History**: every sale, commission, refund, withdrawal and adjustment, with its order number and whether it is
  held, available or cancelled.

A refund, a cancellation or a lost chargeback takes the sale back off the seller's balance. If the money was already
available, the balance can go below zero, and nothing can be withdrawn until new sales cover it.

Payment details are stored encrypted and only shown to you to pay the seller. If you use **Log in as** to see a
seller's account, you can see their balance but can't ask for a withdrawal in their name.
{: .note}

If you switch the option off later, sellers who still have a balance keep their **Earnings and withdrawals** page so
they can take out what's theirs, and **Withdrawals** stays in your sidebar.

## Good to know

- **Keep your own records.** The reference you enter on **Mark paid** is what links the request to the real payment
  in your PayPal or bank. Enter it every time.
- **Every decision is logged.** Marking a withdrawal paid, rejecting it and adjusting a balance are recorded in the
  [audit log](/admin-support-tools/#audit-log) with the admin who did it.
- **The emails can be edited.** The three emails (*withdrawal-requested*, *withdrawal-paid* and
  *withdrawal-rejected*) are created the first time they're needed, and then appear in **Emails** where you can change
  their wording. Sellers always get the paid and rejected emails, even if they unsubscribed from your other emails.
- **Your commission** on each sale is also recorded as an **Application Fee** order in
  [Orders](/how-to-manage-orders/), so your reports include it.

## Related guides

- [eWallet](/ewallet/) — the site credit listed on the Transactions page.
- [Commission and service fees on sales](/commission-and-service-fees/) — what you keep from each sale.
- [Stripe and Stripe Connect](/stripe/) — let Stripe pay your sellers automatically instead.
- [Orders and transactions](/how-to-manage-orders/) — every payment, including credit packages and commissions.
- [Support tools for administrators](/admin-support-tools/) — the audit log.
{: .cards}
