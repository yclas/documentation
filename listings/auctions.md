---
title: Auctions
description: Let sellers put an item up for bidding instead of a fixed price, with a starting price, an optional reserve and buy-now price, and an end time.
section: listings
order: 210
permalink: /auctions/
keywords: auction, auctions, run an auction, run auctions, hold an auction, bid, bidding, bids, highest bidder, reserve price, buy now, buy it now, starting price, proxy bidding, maximum bid, anti-sniping, outbid, countdown, relist
updated: 2026-10-16
---

Auctions let a seller list an item for bidding instead of at a fixed price. Members bid until the end time, and the
highest bidder wins. They suit collectables, vehicles, machinery, livestock and anything where the right price is
hard to guess.

Auctions work with the **Nova** theme.
{: .note}

## Switch auctions on

Newer sites have auctions on already. To check, or to switch them on:

1. Go to **Settings › General**.
2. In **Search**, switch on **Auctions**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

If the switch says *Set by Yclas support for your site*, ask us through **Support** to change it.

## Set the bidding rules

Once auctions are on, a link under the switch (*Who may bid, bidding increments and anti-sniping*) opens the
**Auctions** settings page. These rules apply to every auction on your site.

| Setting | What it does |
| --- | --- |
| **Who may bid** | **Any signed-in user** (the default), or **Verified users only**: only members with the [verified badge](/verified-user/) can bid. |
| **Flat minimum increment** | The smallest step between bids. Leave it at 0 to use a ladder that grows with the price: a few cents on a cheap item, more on an expensive one. |
| **Extend when under (minutes)** | Anti-sniping: a bid placed this close to the end pushes the end time back, so nobody wins just by bidding in the final seconds. The default is 5; 0 turns it off. |
| **Extend by (minutes)** | How far the end time moves back each time. The default is 5. |

Click **Save** when you're done.

## How sellers create an auction

On the post form, the seller ticks **List this as an auction instead of a fixed price** and fills in:

| Field | Detail |
| --- | --- |
| **Starting price** | Required. Bidding starts here. |
| **Reserve price (optional)** | The lowest price the seller will accept. Bidders see whether the reserve has been met, never the amount. It can't be lower than the starting price. |
| **Buy-now price (optional)** | A bidder who pays this ends the auction straight away at this price. It must be higher than the starting price and the reserve. |
| **Ends at** | At least one hour from now and at most 90 days ahead, and before the listing itself expires. |

Only listings posted as auctions are auctions: an existing listing can't be turned into one later.

Until the first bid, the seller can change the prices and end time from the listing's edit page, or click
**Cancel auction** on the listing, which puts it back on sale at its normal price.

## How bidding works

The listing shows the current bid, the number of bids, a countdown and whether the reserve is met. Visitors see
**Sign in to bid**.

Bidders enter **Your maximum bid** and click **Place bid**. The site then bids for them automatically, only as much
as needed to stay in the lead, up to their maximum. Others see the price, not the maximum. If two members bid the same
maximum, the earlier bid wins. Anyone can open **See bid history**.

When someone bids higher, the previous leader gets an email (*auction-outbid*) so they can bid again. If the auction
has a buy-now price, bidders also see **Buy it now for …** until the bidding passes it.

## When the auction ends

| Result | What happens |
| --- | --- |
| Sold (no reserve, or reserve met, or bought now) | The winner sees *You won this auction!* and gets an email with a **Pay now** link for the winning price, plus the listing's shipping if it has any. The seller is emailed too. |
| Reserve not met | The highest bidder and the seller are told the item didn't sell. |
| No bids | The auction ends without a sale. |

Members can't buy an auction listing at its listed price with **Buy Now**: the auction decides the price. For winners
to pay online, set up payments for sales as for [Buy Now](/pay-directly-from-ad/). Paid orders appear in
[Orders](/how-to-manage-orders/) like any other sale.

### Relisting an item that didn't sell

If an auction ends with no bids, below the reserve, or the winner doesn't pay within 14 days, the seller gets a
**What next?** choice on the listing's edit page:

- **Start a new auction** with new prices and an end time (old bids are cleared);
- **Sell at a fixed price**, which turns it back into a normal listing at its posted price;
- **Leave it as it is**.

## Good to know

- On a quiet site, an auction that has ended closes, and its emails go out, with the next visit to your site.
- If a seller deactivates a listing while its auction runs, the auction is called off with no sale. A listing with
  bids can't be marked as sold by hand.
- [Price offers in messages](/make-an-offer/) are not available on auction listings.
- If you switch auctions off, auctions that have already started still run to the end, so their bidders aren't let
  down. No new ones can be created.
- Reword the auction emails in [Email templates](/automatic-emails-sent-to-users/): *auction-outbid*, *auction-won*,
  *auction-won-seller*, *auction-reserve-not-met* and *auction-ended-seller*.

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — the checkout auction winners pay through.
- [Verified members](/verified-user/) — needed if only verified members may bid.
- [Make an offer](/make-an-offer/) — haggling on fixed-price listings.
- [How members post a listing](/how-members-post-listings/) — the post form.
{: .cards}
