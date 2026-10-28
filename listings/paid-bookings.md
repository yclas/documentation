---
title: Paid bookings
description: "Take payment when buyers book: the card is held at request and charged when the seller accepts, with deposits, cancellation policies and payouts."
section: listings
order: 800
permalink: /paid-bookings/
keywords: paid bookings, booking payment, pay to book, pay online, card hold, hold card, authorize, charge on accept, deposit, deposits, security deposit, damage deposit, refundable deposit, damage claim, deposit claim, service fee, booking fee, cancellation policy, flexible, moderate, strict, partial refund, 50% refund, seller cancellation policy, refund, booking refund, payout, seller payout, commission on bookings, stripe connect, rental payment, request expiry, answer before
updated: 2026-10-22
plans: Marketplace plan
---

<div class="summary" markdown="1">
- Paid bookings let buyers pay online when they request a booking: the card is held, then charged when the seller accepts.
- Switch on **Take payments online for bookings** in **Add-ons › Bookings**; it needs the Marketplace plan, bookings and Stripe Connect.
- Sellers are paid through Stripe two days after the booking ends, minus your commission.
- You choose the cancellation policy, and can let sellers ask for a deposit or a security deposit.
</div>

With paid bookings, buyers pay online when they request a booking, and your marketplace takes its commission. The
buyer's card is **held, not charged**, when they send the request. It is charged only when the seller accepts, and the
hold is released if they decline. Two days after the booking ends, the seller is paid through Stripe, minus your
commission.

It's the same flow buyers know from holiday rental sites, and it means no more chasing payments or no-shows.

Paid bookings come with the **Marketplace** plan and use
[Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect). They build on [bookings](/bookings/), which
must be set up first.
{: .note}

## Before you start

You need:

- [Bookings](/bookings/) switched on, with the categories for rentals ticked.
- [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect) set up with your own Stripe keys in
  **Add-ons › Stripe**. Your commission on bookings is worked out as on sales, including any rates by category
  or seller: see [Commission and service fees](/commission-and-service-fees/).
- Sellers who have set up payouts with Stripe (**Get paid for your sales** in their profile).

A listing takes payment online only when it has a price, its currency is one Stripe accepts, and its seller has set
up payouts. Every other bookable listing keeps working as a request without payment, as before.

## Switch paid bookings on

1. In the admin panel, go to **Add-ons** and open **Bookings**.
2. Under **Paid bookings**, tick **Take payments online for bookings**.
3. Choose the settings below.
4. Click **Save changes** in the bar at the bottom.
{: .steps}

Paid bookings are off until you switch them on. If Stripe Connect isn't ready yet, the page says so, and bookings
stay requests without payment until it is.

| Setting | What it does |
| --- | --- |
| **Take payments online for bookings** | Buyers pay by card when they request a booking. |
| **Sellers can ask for a deposit** | Off by default. Each seller can then choose a percentage of the price that is paid online; the buyer pays the rest to the seller directly. |
| **Sellers can ask for a refundable security deposit** | Off by default. Each seller can add a security deposit that buyers pay with the booking and get back afterwards (see [Security deposits](#security-deposits)). |
| **Days a paid request waits for the seller** | 1 to 6 days, 6 by default. An unanswered request expires after this many days, and the hold on the buyer's card is released. |
| **Days after the end before the security deposit goes back** | 1 to 30 days, 3 by default: the seller's time to claim for damage. |
| **Cancellation policy** | What a buyer gets back if they cancel an accepted booking (see below). **Flexible** is the default. |
| **Sellers may choose instead** | The policies sellers may pick for their own listings. Leave them all unticked to give every listing your policy. |
| **Buyer service fee** | A percentage and/or a fixed amount added on top of what the buyer pays online, kept by you. 0 for none. The percentage can be up to 50%. It is separate from the service fee on sales. |

A new request waits for the number of days you set. Requests already sent keep the time they were given.

### Cancellation policies

| Policy | The buyer cancels an accepted booking… |
| --- | --- |
| **Flexible** | Full refund up to 24 hours before the start. |
| **Moderate** | Full refund up to 5 days before the start. |
| **Strict** | No refund once the seller accepts. |
| **Flexible with partial refund** | Full refund up to 24 hours before the start, then 50% until the start. |
| **Moderate with partial refund** | Full refund up to 5 days before the start, then 50% until 24 hours before. |
| **Strict with partial refund** | 50% refund up to 7 days before the start, then none. |

With the first three policies, a refund is all or nothing. The partial policies add a step where the buyer gets
half of the booking price paid online back; the service fee isn't refunded then. Your commission goes down in
proportion, so the seller and you each give back your share.

A cancellation by the seller, or by you, always refunds the buyer in full. Each booking keeps the policy it was made
under, so changing a policy only affects new bookings.

### Let sellers choose their policy

A city flat and a remote cabin may need different rules. Under **Sellers may choose instead**, tick the policies
sellers can pick from. Each seller then sees **Cancellation policy** in a listing's
[booking settings](/bookings/#how-sellers-make-a-listing-bookable), with your policy (*The site's*) first and then the
ones you ticked. Listings where the seller chose nothing keep your policy. The listing tells buyers which policy
applies before they book.

## Deposits

With **Sellers can ask for a deposit** on, sellers see **Deposit paid online** in a listing's
[booking settings](/bookings/#how-sellers-make-a-listing-bookable): the part of the price, in percent, that buyers pay
online. They pay the rest to the seller directly. 0 or 100 means the whole price is paid online.

Your commission and the service fee are worked out on the amount paid online.

## Security deposits

A security deposit covers damage: a scratched car, a broken lamp, lost keys. It isn't part of the price, unlike the
deposit above.

With **Sellers can ask for a refundable security deposit** on, sellers see **Security deposit** in a listing's
[booking settings](/bookings/#how-sellers-make-a-listing-bookable), where they enter an amount. Buyers see it on the
payment page and pay it together with the booking.

- The security deposit is held on the card with the booking and charged when the seller accepts. It stays on your
  Stripe account: it is never part of the seller's payout, and you take no commission on it.
- It goes back to the buyer in full a few days after the booking ends: 3 by default, or the **Days after the end
  before the security deposit goes back** you set.
- If the request is declined, withdrawn or expires, or the booking is cancelled, the security deposit goes back (or
  is never charged) straight away.

Each booking in **Bookings** shows where its security deposit stands, for example *returned* or *the seller claims …,
the site team decides*.

### When the seller claims for damage

Between the end of the booking and the return of the security deposit, the seller sees **Claim for damage** next to
the booking in **Bookings › Requests received**. They enter an **Amount** (up to the whole security deposit) and
**What happened**, and click **Send claim**. The buyer is emailed about the claim, and the security deposit waits
for your decision instead of going back.

You get an email, and **Security deposit claims to decide** appears under **Needs your attention** on your
dashboard. It opens the **Deposit claims** page, which is also in the admin sidebar, under **Orders**, while security
deposits are on:

1. Read the claim. If you need to, ask both sides in your messages.
2. Enter how much to **Keep for the seller**, and an optional **Note to both**.
3. Click **Decide**.
{: .steps}

What you keep is paid to the seller, and the rest is refunded to the buyer. Both are emailed your decision. While
the buyer has a dispute open with their bank about the payment, you can only decide once it is closed.

## How buyers pay

1. The buyer picks their dates on the listing and clicks **Request to book**. The listing already tells them they
   pay online, that their card is only charged if the seller accepts, and which cancellation policy applies.
2. A payment page shows the dates, the **Total**, any **Deposit paid online** and **Paid to the seller directly**
   amounts, any **Security deposit**, the **Service fee**, and the amount **Held on your card now**.
3. The buyer enters their card and confirms. Their card is held, not charged.
{: .steps}

Only then does the seller see the request and get the email. A buyer who leaves the payment page can come back with
**Finish payment** in **Bookings › My bookings** within an hour; after that, the request is dropped.

## What happens next

| What happens | Payment |
| --- | --- |
| The seller accepts | The card is charged. If the charge fails, the request stays open and the seller can try again or decline. |
| The seller declines, or the buyer withdraws the request | The hold is released. Nothing is charged. |
| Nobody answers | The request expires after 6 days (or the number of days you set), or when the booking would start if that's sooner, and the hold is released. Sellers see the deadline as **Answer before** in their requests. |
| The buyer cancels an accepted booking | Refunded according to the cancellation policy. The confirmation tells the buyer how much they get back. |
| The seller or you cancel an accepted booking | Refunded in full. |
| The booking ends | Two days later, the seller's payout is sent through Stripe: the amount paid online minus your commission. Any security deposit goes back to the buyer once the time to claim is over. |

With [instant booking](/bookings/#advanced-settings-for-sellers) on a listing, the booking is accepted and the card
charged as soon as the card is held.

Each booking in **Bookings** shows a **Payment** line, for example *held on the card until the seller answers*, *paid
online*, *refunded*, or for the seller *your payout of … is sent on …*. You see every booking and its payment in the
**All bookings** tab.

### When something goes wrong

- If the buyer disputes the payment with their bank, the seller's payout is put on hold.
- If a refund or a payout fails, the booking shows it and we email you at your **Sender email** (**Settings ›
  Email**) so you can sort it out in your Stripe dashboard. Failed payouts aren't retried automatically.
- If a buyer cancels too late for a refund, the seller is still paid.

## Emails

On top of the [booking emails](/bookings/#booking-emails), paid bookings send these
[email templates](/automatic-emails-sent-to-users/), which you can reword:

| Template key | Sent to | When |
| --- | --- | --- |
| *booking-paid-request* | The seller | A paid request arrives, once the buyer's card is held. |
| *booking-paid-request-sent* | The buyer | Confirms the request and that their card is held. |
| *booking-paid-accepted* | The buyer | The seller accepts and the card is charged. |
| *booking-expired* | Buyer and seller | A paid request expired without an answer and the hold was released. |
| *booking-refund* | The buyer | Money was refunded after a cancellation. |
| *booking-reminder* | Buyer and seller | About a day before a paid booking starts. |
| *booking-payout* | The seller | Their payout for a booking was sent. |

The emails about a security deposit claim and your decision aren't templates: they're written by the site, in the
language of your site.

## Good to know

- Buyers pay by card. Stripe holds a card for about 7 days, which is why requests expire after 6 days at most.
- Listings you post yourself as the site owner are paid into your own Stripe account, with no payout.
- Bookings made before you switched paid bookings on, and listings that don't qualify, stay requests without
  payment.
- Stripe's own fees come out of your share, as with
  [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect) sales.
- A seller in [vacation mode](/storefronts/#vacation-mode) can't be booked until they're back.

## Related guides

- [Bookings and rentals](/bookings/) — make listings bookable, opening hours, time slots, places and price rules.
- [Stripe and Stripe Connect](/stripe/) — connect Stripe and set your commission.
- [Commission and service fees](/commission-and-service-fees/) — your rates, by category or seller.
- [Plans and billing](/plans-and-billing/) — move to the Marketplace plan.
- [Email templates](/automatic-emails-sent-to-users/) — reword the payment emails.
{: .cards}
