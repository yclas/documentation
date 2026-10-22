---
title: Stock control
description: Let sellers set how many items they have, count them down with every Buy Now sale, and mark the listing as sold when stock runs out.
section: listings
order: 180
permalink: /stock-control/
keywords: stock, quantity, inventory, in stock, out of stock, sold out, only left, buy now, shop, units, cart, options, variants, sizes
updated: 2026-10-22
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
- Stock levels aren't imported: after a [CSV import](/how-to-import-ads/), set them on the listings.
- [Digital downloads](/sell-digital-goods/) and [event tickets](/sell-event-tickets-online/) use stock the same way.
- In the [shopping cart](/shopping-cart/), buyers can't add more than what is in stock (and 20 at most). An item
  that sells out before the buyer's payment arrives is refunded on its own.
- With [product options](/product-variants/), each option (a size, a colour) has its own stock, and the listing's
  stock is the sum of its options' stock. Nova shows *Only N left* next to an option when five or fewer are left,
  and *Sold out* when none are.
- With [quantity pricing](/sale-prices/#quantity-pricing), sellers can also set a minimum and a maximum per order.

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — the Buy Now button stock control depends on.
- [Product options (variants)](/product-variants/) — sizes and colours with their own stock.
- [Orders and transactions](/how-to-manage-orders/) — every sale.
- [Manage listings](/how-to-manage-advertisements/) — statuses and reactivating.
{: .cards}
