---
title: Sell event tickets
description: Add an event date to listings, sort and browse events by date, and let organisers sell a limited number of tickets with Buy Now.
section: payments
order: 180
permalink: /sell-event-tickets-online/
keywords: events, event, tickets, ticketing, sell tickets, event date, eventdate, calendar, concerts, workshops, classes, courses, sold out, stock
updated: 2026-10-07
---

Your marketplace can work as a simple ticket shop for concerts, workshops, classes or tours. Organisers post a
listing with the event date and the number of tickets, buyers pay with [Buy Now](/pay-directly-from-ad/), and the
listing shows as sold out when the last ticket is gone. Once the event has passed, the listing disappears from your
category pages and search results by itself.

## Set it up

1. Go to **Listings › Custom Fields** and create a field with the **Name** `eventdate` (exactly this, in lower case),
   the **Type** **Date** and a **Label** such as *Event date*. Choose the categories it applies to, or none for all.
2. Switch on Buy Now with a method that pays organisers: Stripe Connect, PayPal's **Buy Now button** or the eWallet.
   See [Let members sell with Buy Now](/pay-directly-from-ad/).
3. Go to **Settings › Payments**, switch on **Stock Control** and click **Save changes**. Organisers can then set
   the number of tickets in **In Stock**.
{: .steps}

Organisers now pick the event date when they post. Each sale takes the number of tickets bought off the stock; at
zero, the listing is marked as **Sold**.

## What happens with the date

As soon as an `eventdate` field exists on your site:

- **Past events are hidden.** Listings whose event date has passed no longer appear in category pages and search
  results. Listings with no event date aren't affected.
- **Sort by date.** In **Listings › Settings › Listing pages**, set **Sort Listings** to **Event date** to list the
  soonest events first. With this sort, only listings that have an event date are shown.
- **Calendar.** A calendar of upcoming events is available at `/calendar.html` on your site. Add it to your
  [menu](/modify-top-menu/) so visitors can find it.

## What buyers get

After paying, the buyer receives the *ads-purchased* email with the order number and listing details. Yclas doesn't
generate tickets with barcodes; the order number serves as proof of purchase. To send entry details, add a
`buyer_instructions` field (see [Special-purpose fields](/special-custom-fields/)): its text is included in the email,
for example *Show this email at the door. Doors open at 7 pm.*

Organisers see who bought tickets in **My Sales**.

## Tips

- Create a separate *Events* category and attach the `eventdate` field only to it, so other listings don't ask for a
  date.
- If your whole site is about events, make **Event date** the default sort.
- Free events work too: with no price, the listing has no **Buy Now** button and works as a normal listing.

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — payments to organisers, stock and quantities.
- [Custom fields](/how-to-create-custom-fields/) — creating the date field.
- [Menu](/modify-top-menu/) — add the calendar link.
{: .cards}
