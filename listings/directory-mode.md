---
title: Run a business directory
nav_title: Business directory
description: Turn your site into a business directory, or mix businesses with classifieds - opening hours, services and prices, social links, claims and paid quote requests.
section: listings
order: 1100
permalink: /directory-mode/
keywords: directory, business directory, directory mode, site type, local businesses, yellow pages, listing a business, business listing, claim, claim this business, claim listing, quote, request a quote, get a quote, leads, lead generation, pay per lead, sell leads, opening hours, open now, services, price list, social links, events, venue
updated: 2026-10-20
---

Directory mode turns listings into business pages: a plumber, a restaurant or a shop gets its opening hours with an
**Open now** badge, a list of services with prices, its social links and a **Request a quote** button. Businesses can
claim the listing you added for them, and you can charge them for every quote request they receive.

Use it for a local business directory, a guide to services in your area, or a classifieds site that also lists the
businesses around it.

Directory mode is available on every plan. The business details, claims and quote requests on listing pages work with
the **Nova** theme.
{: .note}

## Switch directory mode on

Directory mode is off on existing sites. A new site created as a directory or services marketplace in the sign-up
wizard starts with it on.

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
| **Opening hours** | Hours for each day. The listing shows an **Open now** or **Closed** badge next to its title and a weekly timetable. |
| **Services and price list** | A short list of services, each with a price, shown as **Services and prices**. A service without a price shows *On request*. |
| **Social links** | Facebook, Instagram, X and LinkedIn profile links, shown as icons under **Follow**. |
| **Venue** and **Event end date** | For events: where it takes place and when it finishes, next to the [event date](/special-custom-fields/). |

The fields apply to every category. Open each one in **Listings › Custom Fields** to limit it to your business
categories. The business's website comes from the listing's own **Website** field.

In Nova and the Atlantic-based themes, sellers get a simple editor for services and social links. In older themes
they are plain text boxes.
{: .tip}

## Claims: let businesses take over their listing

Directories often start with listings the owner adds: you list the local businesses yourself, then invite them to
take them over. A signed-in member who works for the business clicks **Claim this business** on its listing.

- **Verified by email.** If the listing has a website, the member can give an email address at the website's domain,
  for example `anna@bakery.com` for `bakery.com`. They get a 6-digit code, valid for 30 minutes, and type it on the
  listing. If the listing still belongs to you (an administrator), it moves to their account straight away.
- **Reviewed by you.** Every other claim waits for you, with the member's message (*How can we check it is your
  business?*). This includes verified claims on a listing that already belongs to another member.

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

## Related guides

- [Business sellers](/business-sellers/) — business accounts with a badge, trader details and bulk import.
- [Special custom fields](/special-custom-fields/) — opening hours, event dates and more.
- [Membership plans](/membership-plans/) — include quote requests in a plan.
- [Marketplace ideas](/marketplace-ideas/) — other ways to set up your site.
{: .cards}
