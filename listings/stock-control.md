---
title: Stock control
description: Let sellers set how many items they have, count them down with every Buy Now sale, and mark the listing as sold when stock runs out.
section: listings
order: 180
permalink: /stock-control/
keywords: stock, quantity, inventory, in stock, out of stock, sold out, only left, buy now, shop, units
updated: 2026-10-07
---

On a marketplace where sellers offer more than one of the same item — a shop with 20 T-shirts, a farm with 50 boxes
of eggs, an event with 100 tickets — one listing can sell many times. Stock control keeps count, so a listing stays
up while items are left and stops selling when they run out.

Stock control works together with **Buy Now**, where buyers pay for an item on your site. Set that up first:
[Let members sell with Buy Now](/pay-directly-from-ad/).

## Switch stock control on

1. Go to **Settings › Payments**.
2. In **Pay to post**, switch on **Stock Control** (*Sellers set a quantity; the listing sells out at zero.*).
3. Click **Save changes** in the bar at the bottom.
{: .steps}

## How it works for sellers

- The posting form gets an **In Stock** field, filled in with 1. Sellers enter how many they have.
- Every **Buy Now** sale lowers the stock by the quantity bought. Buyers can't order more than what is in stock
  (*There is not enough stock; please choose another quantity.*).
- When the stock reaches 0, the listing is marked as **Sold**, the Buy Now button disappears, and the seller gets the
  *out-of-stock* email with a link to edit the listing.
- When five or fewer are left, Nova shows *Only N left* by the Buy Now button, which nudges buyers to decide.

Leaving **In Stock** empty means the listing sells out after the first sale.
{: .note}

## Restocking

| Situation | What the seller does |
| --- | --- |
| Still live, wants to add more | **Edit** the listing and raise **In Stock**. |
| Set **In Stock** to 0 by hand | The listing goes offline (**Unavailable**). Editing the stock back above 0 publishes it again. |
| Sold out through sales | The listing is **Sold**. In **My Listings**, use **Activate the listing**, then **Edit** and set the new stock. |

With a [moderation mode](/how-ads-moderation-works/), sellers can't reactivate a sold-out listing themselves, and every
edit goes back to the moderation queue. You can reactivate it with **Activate** in
[All listings](/how-to-manage-advertisements/), then the seller edits the stock.
{: .tip}

## Good to know

- Marking a listing as sold, by you or the seller, sets its stock to 0.
- Stock is only counted for sales made on your site. If a seller sells an item in person, they should lower the
  stock themselves.
- When you [import listings](/how-to-import-ads/) while stock control is on, the CSV can include a `stock` column.
- [Digital downloads](/sell-digital-goods/) and [event tickets](/sell-event-tickets-online/) use stock the same way.

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — the Buy Now button stock control depends on.
- [Orders and transactions](/how-to-manage-orders/) — every sale.
- [Manage listings](/how-to-manage-advertisements/) — statuses and reactivating.
{: .cards}
