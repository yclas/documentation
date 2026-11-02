---
title: Pay your sellers with Mangopay
nav_title: Mangopay
description: When you collect payments for your sellers, let buyers pay by card into each seller's Mangopay wallet, with Mangopay checking sellers' identity and paying their withdrawals to their bank.
section: payments
order: 622
permalink: /mangopay/
keywords: mangopay, mangopay wallet, e-wallet, wallet, kyc, know your customer, identity check, identity documents, proof of identity, proof of registration, articles of association, shareholder declaration, sca, strong customer authentication, payout, payouts, pay sellers, bank account, iban, recipient, pay-in, card payment, fees wallet, commission, stripe connect alternative, eu, europe, sandbox, test keys, client id, api key, webhooks, notification url, send with mangopay, withdrawals
updated: 2026-11-02
---

<div class="summary" markdown="1">
- For marketplaces where **you collect the payments** for your sellers: buyers pay by card on Mangopay's page and the money goes into the seller's Mangopay wallet, less your commission.
- Sellers open their Mangopay account, send their identity documents and add their bank account from **Earnings and withdrawals**.
- You pay their withdrawals with **Send with Mangopay** instead of by hand.
- Off by default. You need your own Mangopay account, and only admins can set it up.
</div>

When you [collect the payments for your sellers](/transactions-and-withdrawals/#the-withdrawals-page), the money
from every sale lands with you, and you pay each seller their balance yourself. Mangopay, an EU-licensed payment
service for marketplaces, can hold that money for you instead: each card payment goes straight into the seller's own
Mangopay wallet, Mangopay checks who the seller is, and it pays the seller's withdrawals to their bank account. It is
an alternative to [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect) for marketplaces that collect
for their sellers.

Mangopay only works together with **Collect payments for your sellers** in **Commission on sales**. The add-on only
appears on sites where that option is available, and only admins can open its page. Your site uses your own
Mangopay account: Mangopay charges you its own fees, so check them with Mangopay.
{: .note}

## How the money moves

1. A buyer clicks **Pay by card with Mangopay** on the checkout page and types their card on Mangopay's page, never on
   your site.
2. The payment goes into the seller's Mangopay wallet for that currency. Your [commission](/commission-and-service-fees/)
   is taken as Mangopay's fee on the payment and lands in your Mangopay **fees wallet**.
3. The sale goes on the seller's balance in **Earnings and withdrawals**, as for any sale you collect (held until
   delivery if you hold sellers' money).
4. The seller asks for a withdrawal to their Mangopay bank account, and you click **Send with Mangopay** in
   **Withdrawals**. Mangopay pays it from their wallet to their bank.
{: .steps}

Buyers only see the Mangopay button for a seller who has an active Mangopay account. For other sellers, and for
anything Mangopay can't take, buyers pay through your other payment methods as before.

## What you need

- A **Mangopay** account for your marketplace, with its **Client ID** and an **API key** (in your Mangopay dashboard,
  under **Developers > API keys**).
- **Collect payments for your sellers** switched on in **Commission on sales** (see
  [Transactions and withdrawals](/transactions-and-withdrawals/#the-withdrawals-page)).
- One Mangopay account per site. Mangopay sends each kind of notification to one address only, so two sites can't
  share an account.

## Set it up

1. In your admin panel, go to **Add-ons**, open the **Payments** tab and click **Mangopay**.
2. Check the list at the top. It says whether **You collect payments for your sellers** is on, and whether Mangopay
   is on.
3. Paste your **Client ID** and **API key**.
4. If they are sandbox keys, tick **These are sandbox keys (Mangopay's test environment)**.
5. Click **Save**. Your site checks the keys with Mangopay straight away.
6. Under **Notification URL**, click **Register the notifications**.
{: .steps}

The API key is never shown again after you save it. Leave the field empty to keep the saved one.

If Mangopay doesn't accept the keys, the page says *Mangopay did not accept these keys (or could not be reached).*
Check the Client ID and API key, and that the sandbox box matches the keys: sandbox keys only work with it ticked,
and production keys only without it.

### The notifications

Mangopay tells your site when a payment, a payout, an identity check or a bank account changes, so orders,
withdrawals and sellers' status update on their own. **Register the notifications** sets this up on your Mangopay
account for you. The page then says how many notifications point to your site.

If some already point to another address on your Mangopay account, they are left alone and the page lists them. You
can also add the address shown in **Notification URL** yourself in your Mangopay dashboard (**Developers >
Webhooks**).

### Test with the sandbox first

With the sandbox box ticked, your site uses Mangopay's test environment. The page warns that *its test cards pay real
orders on your site*: a test payment marks a real order paid. Try the whole flow with a test seller and a test order,
then save your production keys, untick the sandbox and click **Save**.
{: .warning}

## What your sellers do

Sellers set up their Mangopay account from **Earnings and withdrawals**, with the link **Set up your Mangopay account
to be paid for card sales**. It opens their **Mangopay account** page, in three steps.

### 1. Open the Mangopay account

Under **Open your Mangopay account**, the seller chooses **I sell as a private person** or **I sell as a business**
and fills in their name, **Date of birth**, **Nationality**, **Country of residence** and address. A business also
gives its **Business type** (**Company**, **Sole trader**, **Partnership** or **Non-profit organisation**), its
**Business name** and, for a company, its **Company registration number**; the person filling in the form is its
legal representative.

They accept Mangopay's terms and click **Open my Mangopay account**. Mangopay then asks them to confirm their phone
or email on its own page. If they leave before finishing, the page shows **Continue with Mangopay**.

Once the account is active, buyers can pay the seller with Mangopay.

### 2. Send identity documents

Mangopay must check the seller's identity before it can pay them out. Under **Identity documents**, the seller picks
a **Document**, adds the files (PDF, JPEG or PNG, up to 7 MB each, up to 5 files) and clicks **Send to Mangopay**.

| Who | Documents asked for |
| --- | --- |
| Everyone | **Proof of identity**: passport or ID card (both sides) of the person, or of the business's legal representative. |
| A business | **Proof of registration**: a company register extract, or the trade register for a sole trader. |
| A company, partnership or non-profit organisation | **Articles of association**, signed and dated. |
| A company | **Shareholder declaration**, Mangopay's form, if Mangopay asks for it. |

Each document shows its status: **Being checked by Mangopay**, **Accepted**, **Refused** (with Mangopay's reason) or
**Out of date: please send a new one**. Mangopay usually checks them within a few days. When everything is accepted,
the **Identity** line says **Verified: you can be paid out**.

### 3. Add a bank account

Under **Your bank account**, the seller gives the account holder, their **IBAN**, the **Currency** and the address,
and clicks **Add with Mangopay**. Mangopay asks them to confirm it on its page, after which the **Bank account** line
says **Confirmed**.

Bank accounts must be IBAN accounts in EUR, CHF, CZK, DKK, NOK, PLN, RON or SEK.

Once the identity is verified and the bank account confirmed, the seller can choose **Mangopay (verified bank
account)** when they ask for a withdrawal.

When you use **Log in as** on a seller, you can see their Mangopay page but can't change anything on it: only the
seller can give Mangopay their details.
{: .note}

## Paying withdrawals

In **Withdrawals**, a request to a Mangopay bank account has a **Send with Mangopay** button. Click it and confirm:
the amount goes from the seller's wallet to their bank account. The withdrawal says *Sent with Mangopay* and is
marked paid as soon as Mangopay confirms the payout, or goes back on the seller's balance if Mangopay can't pay it.

Your site checks the payout every 15 minutes too, so it settles even if a notification is missed. If Mangopay hasn't
paid or failed a payout for over two days, you get an email. Check it in your Mangopay dashboard, then use **Mark
paid** or **Put back on the balance** on the withdrawal. Only put it back if you checked in Mangopay that it was not
paid, or the seller would be paid twice.

Nothing is sent, and the page says why, when the seller's identity isn't verified yet, they changed their bank
account after asking, or their wallet holds less than the withdrawal.

## Good to know

- **Only sales paid with Mangopay are in the seller's wallet.** A seller's balance from sales paid through your other
  payment methods can't be sent with Mangopay: pay it yourself and mark it paid, as before.
- **Refunds:** refunding an order in your admin panel takes it off the seller's balance but doesn't refund the card.
  Refund the payment from your Mangopay dashboard too. Chargebacks are handled there as well.
- **Your commission** stays in your Mangopay fees wallet until you pay it out from your Mangopay dashboard.
- Card payments can be in EUR, GBP, USD, CHF, NOK, PLN, SEK, DKK, CAD, AUD, CZK or RON. An order converted to the
  buyer's own currency isn't offered Mangopay.
- Mangopay is a button on a single sale's checkout. A cart paid in one payment doesn't offer it.
- **Remove the keys** on the setup page stops Mangopay taking payments. Withdrawals already sent are still followed
  until they settle.

## Related guides

- [Transactions and withdrawals](/transactions-and-withdrawals/) — collecting payments for your sellers and paying their balance.
- [Commission and service fees](/commission-and-service-fees/) — the commission taken from each sale.
- [Stripe and Stripe Connect](/stripe/) — the other way to pay sellers automatically.
- [Manage orders](/how-to-manage-orders/) — the orders behind each payment.
- [Other payment gateways](/other-payment-gateways/) — more ways for buyers to pay.
{: .cards}
