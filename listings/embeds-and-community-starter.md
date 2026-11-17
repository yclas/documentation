---
title: Embeds, community boards and reserved listings
nav_title: Embeds and community boards
description: Show your latest listings or upcoming events on your organisation's own website, start a community board in one click, and let sellers mark items as reserved or given.
section: listings
order: 1110
permalink: /embed-and-community-board/
keywords: embed, embeds, iframe, widget, website widget, show listings on my website, events on my website, community board, neighbourhood board, club, school, buy and give, swap board, free items, reserved, reserve, mark as reserved, on hold, given, given away, lend and borrow, lost and found
updated: 2026-11-16
plans: Available on all plans (embeds on Professional and Marketplace)
---

These features help a neighbourhood, club, school or organisation run its board on Yclas:

- **Embeds** show your latest listings, or your upcoming events, on your organisation's own website.
- **The community board starter** sets up a site for buying, giving, lending and sharing in one go.
- **Reserved listings** let a seller hold an item for someone, and a free item that has gone reads **Given**.

Embeds and reserved listings are off until you switch them on.

## Embed on your website

An embed is a small, always up-to-date board you paste into a page of another website. Each listing in it opens on
your Yclas site in a new tab.

Embeds come with the **Professional** and **Marketplace** plans; sites on an older plan keep them too. On other
plans the page says which plan includes them.

### Switch embeds on

1. In the admin panel, go to **Embed on your website**.
2. In **Embeds**, tick **Turn on embeds**.
3. In **Websites that may show your embeds**, write the address of each website, one per line, for example
   `www.example.org`. Write `*.example.org` for every subdomain, or `*` only if any website may show them.
4. Click **Save**.
{: .steps}

Only the websites in the list can show your embeds; on any other website the frame stays empty. Anything that isn't a
website address is left out, and the page tells you which. You can list up to 30 websites.

### Get the code

1. Under **Your code**, choose what to **Show**: **Latest listings** or **Upcoming events**.
2. For listings, choose a **Category**, or **Every category**.
3. Set **How many**: up to 24.
4. Click **Update the code**.
5. Copy the code from the box and paste it where the listings should appear on your website (in an HTML or "embed
   code" block of your website builder).
{: .steps}

The **Preview** below the code shows the embed as it will look. The frame grows and shrinks with its content.

**Upcoming events** is offered once your site has the event date field (see
[Sell event tickets](/sell-event-tickets-online/#set-it-up)). It lists the soonest events first, with their date.

### What an embed shows

Only what any visitor may see on your site: published listings in categories open to everyone, with their title,
photo, price, place and, for events, the date. Descriptions and custom fields are never shown. A reserved listing
carries a **Reserved** tag.

## Start a community board

### When you create a site

In the sign-up wizard, choose **Community board** at **What will people list?** Your new site gets:

- seven categories: **For sale**, **Free**, **Wanted**, **Lend and borrow**, **Lost and found**, **Events** and
  **Services**;
- a **Condition** field and a **Pickup or delivery** field on listings;
- the **Free tag**, so a listing with no price reads *Free*;
- reserved listings switched on.

On a site in English the categories are created as they are. On a site in another language, the AI set-up writes
these seven in your language; if the AI set-up isn't used, no starter categories are created.

### On an existing site

1. Go to **Listings › Custom Fields**.
2. Under **Start from a template**, click **Community board** and confirm.
{: .steps}

This adds the **Condition** and **Pickup or delivery** fields if you don't have them, creates only the seven
categories you don't have yet (it says which it added), switches on the **Free tag**, and switches on reserved
listings unless you had already chosen a setting for them. Your other fields and categories stay as they are.

## Reserved listings

A seller who has promised an item to someone can mark it as reserved. The listing stays on your site, in lists and
search, with a **Reserved** badge, but nobody can start buying it until the seller frees it or marks it as sold.
Reserved listings are on every plan.

### Switch reserved listings on

1. Go to **Embed on your website**.
2. In **Reserved and given**, tick **Let sellers mark a listing as reserved**.
3. Click **Save**.
{: .steps}

### How sellers use it

In **My listings**, a published listing has a **Mark as reserved** button. Once reserved, the button reads **Not
reserved any more**. Marking the listing as sold, or deleting it, also ends the reservation.

As an administrator or moderator, you can free a seller's reserved listing from the **Listings** page in the admin
panel with **Not reserved any more**. You can't reserve another seller's listing.

### What a reservation blocks

While a listing is reserved, these can't be started, and the buyer sees *This listing is reserved.*:

- **Buy now**, the guest checkout and adding it to the [shopping cart](/shopping-cart/);
- a new [offer](/make-an-offer/), and accepting or countering one;
- a [booking](/bookings/) request;
- a bid, or starting an [auction](/auctions/). A listing with a running auction can't be reserved.

A purchase already under way is never stopped: if a buyer's payment for an accepted offer or an existing order
arrives after the seller reserved the listing, the order is paid and the listing is sold as usual. Bookings that
already exist on a listing aren't affected.

### Given

With reserved listings and the **Free tag** on, a free listing (price 0) that is marked as sold reads **Given**
instead of **Sold** in the seller's **My listings**, on the Nova, Atlantic Lite and default themes.

## Good to know

- **Private sites** show nothing in an embed, because an embed only shows what any visitor may see.
- **The auto-resize needs the script.** If your website builder removes the `<script>` part of the code, the frame
  keeps a fixed height.
- **Changes take a few minutes** to appear in an embed.
- **Embeds count as visits** to your Yclas site.
- **Show one location.** To limit a listings embed to one location, add `&location=` followed by the location's
  address (as in its page address on your site) to the address in the code.
- **Custom themes.** The **Reserved** badge shows on the Nova, Atlantic Lite, Mercury and default themes. A theme with
  its own listing templates may not show it, but reserved listings still can't be bought.
- **A category called "embed".** If one of your categories already uses the address `embed`, embeds aren't served;
  new categories can't use that address.

## Related guides

- [Custom fields](/how-to-create-custom-fields/) — templates and your own fields.
- [Sell event tickets](/sell-event-tickets-online/) — the event date field and the calendar.
- [Private site](/private-site/) — a board for members only.
- [Make an offer](/make-an-offer/) — offers between buyers and sellers.
{: .cards}
