---
title: Run a business directory
nav_title: Business directory
description: Turn your site into a business directory, or mix businesses with classifieds - opening hours, services and prices, social links, claims and paid quote requests.
section: listings
order: 1100
permalink: /directory-mode/
keywords: directory, business directory, directory mode, site type, local businesses, yellow pages, listing a business, business listing, claim, claim this business, claim listing, claim by phone, claim by sms, quote, request a quote, get a quote, leads, lead generation, pay per lead, sell leads, lead matching, nearest businesses, response time, reply time, usually responds, opening hours, open now, special hours, holiday hours, closed today, past midnight, attributes, wheelchair accessible, parking, wifi, accepts cards, women-owned, veteran-owned, family-owned, several locations, branches, multiple locations, services, price list, social links, events, venue, localbusiness
updated: 2026-10-22
---

Directory mode turns listings into business pages: a plumber, a restaurant or a shop gets its opening hours with an
**Open now** badge, a list of services with prices, its social links and a **Request a quote** button. Businesses can
claim the listing you added for them, and you can charge them for every quote request they receive.

Use it for a local business directory, a guide to services in your area, or a classifieds site that also lists the
businesses around it.

Directory mode is available on every plan and works with every theme. Nova shows the most: some extras (special
hours, several locations, reply times and claims by text message) appear only there. See
[Which theme shows what](#which-theme-shows-what).
{: .note}

## Switch directory mode on

Directory mode is off on existing sites. A new site created as a directory or services marketplace in the sign-up
wizard starts with it on, together with the [sales dashboard for every seller](/sales-dashboard/) (so businesses see
their views and contacts) and [structured data by listing type](/seo-classifieds-website/#seo-settings) (so business
listings are described to Google as local businesses).

1. Go to **Settings › General**.
2. In **Directory**, set **Site type** to **Directory (businesses)** or **Both**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

**Classifieds** is the normal marketplace without the directory tools. **Directory (businesses)** and **Both** switch on
the same tools: pick the one that describes your site.

When you save, Yclas adds the business fields to your posting form (see below). Once directory mode is on, the
**Directory** section also shows where everything else lives: the business fields, claims waiting for you, how quote
requests are billed, and whether [business seller accounts](/business-sellers/) are on.

If **Site type** is greyed out with *Set by Yclas support for your site.*, ask us through
[Support](/use-yclas-support-system/) to change it. If it says *Available after the next update of your site.*, check
again a little later.

To switch it off again, choose **Classifieds** and save. Business listings stay on your site as normal listings.

## The business fields

Directory mode adds these [custom fields](/how-to-create-custom-fields/) to the posting form. You can also add them
yourself with the **Directory** template under **Start from a template** in **Listings › Custom Fields**.

| Field | What it does |
| --- | --- |
| **This is a business** | A tick box. Only listings with it ticked get the business details, claims and quote requests. |
| **Opening hours** | Hours for each day. The listing shows an **Open now** or **Closed** badge and a weekly timetable. |
| **Special hours** | Holidays and other dates with different hours, or closed. They replace the week's hours on that date. |
| **Wheelchair accessible**, **Parking**, **Free Wi-Fi**, **Accepts cards** | Tick boxes shown on the listing, and filters in search. |
| **Women-owned**, **Veteran-owned**, **Family-owned** | The same, declared by the business itself. |
| **Services and price list** | A short list of services, each with a price, shown as **Services and prices**. A service without a price shows *On request*. |
| **Social links** | Facebook, Instagram, X and LinkedIn profile links, shown as icons under **Follow**. |
| **Venue** and **Event end date** | For events: where it takes place and when it finishes, next to the [event date](/special-custom-fields/). |

The fields apply to every category. Open each one in **Listings › Custom Fields** to limit it to your business
categories. The business's website comes from the listing's own **Website** field.

Special hours and the seven attribute tick boxes come with new directory sites. If your site was a directory before
they existed, they aren't added on their own (they would appear on your forms unasked): to add them, use the
**Directory** template under **Start from a template** in **Listings › Custom Fields**. Fields you already have are
left as they are. Delete any attribute you don't want.

Sellers get a simple editor for services, social links and special hours in the post form of every theme.
{: .tip}

### Opening hours and Open now

The **Open now** badge follows the business's hours in your site's time zone:

- hours that run past midnight, for example 18:00 to 02:00, count as open until 02:00 the next morning;
- a day marked closed, or missing from the timetable, is closed;
- a special date replaces the week's hours that day. In Nova, the next 30 days of special hours show under the
  timetable as **Special hours**.

In search, Nova shows an **Open now** button above the results whenever your site has the opening hours field. It
keeps only businesses open at that moment. See [Search and filters](/search-and-filters/#filters).

## Claims: let businesses take over their listing

Directories often start with listings the owner adds: you list the local businesses yourself, then invite them to
take them over. A signed-in member who works for the business clicks **Claim this business** on its listing.

- **Verified by email.** If the listing has a website, the member can give an email address at the website's domain,
  for example `anna@bakery.com` for `bakery.com`. They get a 6-digit code, valid for 30 minutes, and type it on the
  listing. If the listing still belongs to you (an administrator), it moves to their account straight away.
- **Verified by a text message** (Nova). If the listing has a phone number, nobody owns it yet and your site sends
  text messages (Twilio, Clickatell or 2Factor, set up for [SMS sign-in](/2-step-sms-authentication/)), the member
  can click **Text a code to ••• 1234** (the listing's own number, with all but its last digits hidden). Whoever
  answers that phone works there, which suits businesses without an email address at their own domain. This option is
  off until you switch it on (see below).
- **Reviewed by you.** Every other claim waits for you, with the member's message (*How can we check it is your
  business?*). This includes verified claims on a listing that already belongs to another member.

To let businesses claim by text message:

1. Set up an SMS add-on (Twilio, Clickatell or 2Factor), as for [SMS sign-in](/2-step-sms-authentication/).
2. Go to **Settings › General**.
3. In **Access & privacy**, switch on **Claim a listing by phone**.
4. Click **Save changes** in the bar at the bottom.
{: .steps}

The switch only shows on a directory site. If it says *Set by Yclas support for your site.*, ask us through
[Support](/use-yclas-support-system/) to change it.

Review claims in **Listings › Claims** in the sidebar, which shows how many are waiting. Click **Approve** to give the
listing to the member, or **Reject**. Under **Latest decisions** you see who decided each claim, how and when.

The listing's current owner is always emailed when someone claims it and when it changes hands. A listing that belongs
to an approved [business seller account](/business-sellers/) can't be claimed: that business already manages it. Each
member can make up to 5 claims a day.

## Quote requests

Every business listing has a **Get a quote** box with a **Request a quote** button. Visitors don't need an account:
they give their name, email, an optional phone number and what they need, and click **Send request**. The business is
emailed about each request.

This is the directory's lead form, sent to the business by email. It's different from
[Request a quote](/request-a-quote/), where a buyer asks a seller for a price in messages and pays it online.
{: .note}

Requests have spam protection: a hidden trap field, a check that the form was sent from your site, Cloudflare
Turnstile when your site uses it, and a daily limit per visitor.

### Send requests to the nearest businesses

The **Request quotes** section you can add to your home page (see [With the AI page builder](#with-the-ai-page-builder))
sends one request to up to 5 businesses in a category. Normally those are the newest business listings in it. With
**Send quote requests to the nearest businesses** on, the request goes to the businesses nearest the area the
visitor types in **Your area**, within 50 km. If the area can't be found on the map, or no business with a map point
is that close, it goes to the newest ones as before. Businesses are placed on the map from their listing's address.

The same switch shows how quickly each business usually answers: a line such as *Usually responds within ~3 hours*
on its listings (Nova). It is worked out once a day from the last 90 days of quote requests and conversations about
the business's listings, once there are at least 3. A business that leaves most requests unanswered shows no time.

A reply to a quote request counts when the business clicks the visitor's email address in the request email, which
opens their email app to answer. With [messages](/how-to-use-messaging-system/) on, their replies in chat count too.

To switch it on:

1. Go to **Settings › General**.
2. In **Access & privacy**, switch on **Send quote requests to the nearest businesses**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

The switch only shows once **Site type** is **Directory (businesses)** or **Both**.

### Free or paid

Out of the box, quote requests are free: the business gets the visitor's contact details by email straight away. You
can instead charge businesses for them, which is a common way for a directory to earn money.

1. Click **Make money** in the sidebar and choose **Charge sellers**.
2. In **What sellers pay for**, switch on **Quote requests**.
3. Choose how to charge (see the table) and set the **Price per lead**.
4. Finish the steps and click **Save and switch on**. See [Make money](/make-money/) for the rest of the page.
{: .steps}

| Billing | How it works |
| --- | --- |
| **Per lead** | Each request creates an order for the business. The business is emailed that a request arrived, with a link to pay. The visitor's name, email, phone and message are sent once it pays. |
| **Included in the plan** | Each [membership plan](/membership-plans/) includes a number of requests per period, set in **Quote requests included** on the plan's page. Requests beyond that are charged per lead. Needs seller plans on. |

Businesses pay through the payment methods you've set up, like any other order. Requests to a listing that still
belongs to you are never charged: you get them in full.

**Listings › Leads** lists every request with the listing, the sender, the message and how it was billed: **Free**,
**Awaiting payment**, **Paid**, **Plan credit** or **Refunded**.

## Several locations per business

A chain or a business with several branches can list them all on one listing, instead of posting the same business
again for each address. With **Several locations per business** on, the seller of a business listing sees **Add your
other locations** on it (Nova). They add up to 20 branches, each with a name, address and phone. The listing shows
them under **Locations**, each with a **Directions** link, and they appear as markers on the
[map page](/how-to-configure-Google-Map-Settings/). One claim covers the whole business.

1. Go to **Settings › General**.
2. In **Access & privacy**, switch on **Several locations per business**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

Like lead matching, the switch only shows on a directory site.

## Fill your directory and earn from it

An empty directory is hard to sell to visitors or to businesses. These guides help you get started and make money:

- [Import businesses from Google](/import-businesses-from-google/) — fill your directory with real businesses from a
  Google Places search, ready for them to claim.
- [Review replies, invitations and awards](/review-extras/) — owner replies, review invitations with a QR poster,
  a rating badge for businesses' websites, yearly awards, fake-review protection and AI summaries.
- [Licensed and Insured badges](/verified-user/#licensed-and-insured-badges) — let tradespeople prove their licence
  and insurance.
- [Listing performance](/business-sellers/#listing-performance) — show businesses the calls, website visits and
  searches their listing brings them.
- [Deals on listings](/listing-deals/) — businesses post offers, collected on a Deals page.
- [Sponsored in search results](/boosts/#sponsored-in-search-results) and [banners advertisers buy
  themselves](/how-to-add-banner/#sell-banners-to-advertisers) — paid places you sell to businesses.
- [Compare listings](/search-and-filters/#compare-listings) — visitors compare up to 4 businesses side by side.
{: .cards}

## Which theme shows what

| Feature | Nova | Other themes |
| --- | --- | --- |
| Open now badge, services and prices, social links | Yes | Yes |
| Request a quote, claim this business (email code or review) | Yes | Yes |
| Weekly timetable | Yes | From the theme's custom field display |
| Special hours, several locations, reply times | Yes | No |
| Claim by a code texted to the business's phone | Yes | No |
| Open now button in search | Yes | No |

On themes other than Nova, the business details appear in a box of their own on the listing page, styled to fit any
theme.

## Emails

Reword them in [Email templates](/automatic-emails-sent-to-users/):

| Template | Sent to | When |
| --- | --- | --- |
| *directory-claim-code* | The claimant, at the business address | With the code to confirm a claim. |
| *directory-claim-received* | The listing's owner | Someone claimed their listing. |
| *directory-claim-approved* | The claimant | Their claim was approved. |
| *directory-claim-transferred* | The previous owner | The listing changed hands. |
| *directory-new-lead* | The business | A quote request, with the visitor's contact details (free, or once paid for). |
| *directory-new-lead-paid* | The business | A request it must pay for, with a link to pay. |

## With the AI page builder

If your plan includes the [AI page builder](/ai-page-builder/), ask it for directory sections on your home page:
featured businesses, a "claim your business" call to action, upcoming events, or a quote form that sends one request
to up to 5 matching businesses in a category.

## Good to know

- Only listings with **This is a business** ticked get the business details. Ordinary listings look as they did.
- The **Claims** and **Leads** pages are for administrators. They appear in the sidebar once directory mode is on.
- A visitor's contact details are sent by email; the business doesn't see them in its account. You see them all in
  **Leads**.
- For dealers and agencies who post many listings, also look at [business seller accounts](/business-sellers/).
- With **Structured data by listing type** on in **Settings › SEO**, business listings are described to Google as a
  local business, with their address, map point, phone, website and opening hours. It is on for directory sites
  created in the sign-up wizard; on other sites, switch it on yourself. See
  [SEO for your marketplace](/seo-classifieds-website/#seo-settings).

## Related guides

- [Business sellers](/business-sellers/) — business accounts with a badge, trader details and bulk import.
- [Special custom fields](/special-custom-fields/) — opening hours, event dates and more.
- [Review replies, invitations and awards](/review-extras/) — the review tools directories rely on.
- [Import businesses from Google](/import-businesses-from-google/) — seed an empty directory.
- [Membership plans](/membership-plans/) — include quote requests in a plan.
- [Marketplace ideas](/marketplace-ideas/) — other ways to set up your site.
{: .cards}
