---
title: Reported listings
description: Let visitors report scams, illegal content and inappropriate listings with a Report button, and decide on each report from the Reports queue.
section: listings
order: 160
permalink: /flag-ad-inappropriate/
keywords: report, flag, inappropriate, abuse, scam, fraud, complaint, report this listing, reports queue, illegal content, prohibited item, digital services act, dsa, statement of reasons, spam
updated: 2026-10-16
---

Your members are your best moderators. A **Report** button on every listing lets them warn you about scams, illegal
content or prohibited items, so you can act before more people see it.

Yclas has two ways of handling a report:

| | **Report this listing** (recommended) | Contact form (older) |
| --- | --- | --- |
| What the visitor does | Picks a reason and adds details on a short report form | Sends a message through your contact page |
| Where you see it | The **Reports** queue in your admin panel, with a counter for new reports | Your inbox |
| What the seller gets | An email explaining your decision and the reason for it | Nothing, unless you write to them |

**Report this listing** is on for new sites. On a site created earlier, you switch it on yourself (below). It also
covers the basics the EU's Digital Services Act asks of marketplaces: a way to report illegal content and a statement
of reasons to the seller when you act on it.

## Show the Report button

The button itself is controlled in your listing settings:

1. Go to **Listings › Settings**.
2. In **Listing details**, switch on **Report button**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

The button appears on every published listing (in Nova next to **Save** and **Share**; older themes call it
**Report this ad**).

## Switch on Report this listing

1. Go to **Settings › General**.
2. In **Access & privacy**, switch on **Report this listing**.
3. Click **Save changes**.
{: .steps}

From now on the **Report** button opens the report form instead of your contact page. With this switch off, the
button works the older way, through your contact form (see [below](#the-older-contact-form-reports)).

If the switch is greyed out with "Available after the next update of your site", your site hasn't received the
update that adds reports yet. Try again later, or ask [Yclas support](/use-yclas-support-system/).
{: .note}

## What the visitor sees

The report form asks:

- **Why are you reporting this listing?** One of *Illegal content*, *Scam or fraud*, *Prohibited item* or *Other*.
- **Your email (so we can follow up)**, for visitors who aren't signed in.
- **Anything else we should know?** Optional details.

Anyone can report, signed in or not. Visitors who aren't signed in also see your captcha, if you use one, and a limit
on how many reports one visitor can send in an hour or a day keeps the queue free of floods. After sending, the
visitor goes back to the listing with a thank-you message.

## Handle reports

When reports come in, you get an email at your **Sender email** address (on the **Email** settings page), or at your
own account's address if that is empty. You get at most one email an hour, however many reports arrive, with a link to
the queue.

1. In the admin panel, open **Reports**. The number next to it is the count of new reports.
2. The queue has a tab for each status: **New**, **Reviewing**, **Actioned** and **Dismissed**. Click a report to open
   it.
3. Check the listing (the link opens it), the reason, the details and who reported it.
4. Optionally write a **Note to the seller**. It goes into the email the seller receives.
5. Choose what to do:
   - **Remove listing** takes it off the site and marks it as spam.
   - **Restrict listing** takes it offline (deactivated), so the seller can fix it and you can put it back later.
   - **Dismiss report** closes the report without changing the listing.
{: .steps}

When you remove or restrict a listing, the seller gets an email (the *listing-report-decision* template) saying what
you decided, which reason it was reported for and your note, with a link to your contact page if they think it was a
mistake. Every other open report on the same listing is closed with the same decision.

Opening a report without deciding moves it to **Reviewing**, so your team can see someone is on it.

Moderators can work in the Reports queue too, as well as administrators. See [Roles](/roles-work-classified-ads-script/).
{: .tip}

You can reword the emails in [Email templates](/automatic-emails-sent-to-users/): *listing-report-new* (to you) and
*listing-report-decision* (to the seller).

## The older contact form reports

With **Report this listing** switched off, the **Report** button opens your site's **contact page** with the subject
and message already filled in: *Report Ad*, the listing's ID, its title and its link. The visitor adds their reason and
sends it like any contact message.

These reports arrive by email at the **Contact form email** address on the **Email** settings page, or at the
**Sender email** if that is empty. They don't appear in the Reports queue, so make sure that address is one you read.
See [Email settings](/general-email-configuration/).

To act on one, search for the listing's ID in **Listings › All listings** and deactivate, edit, mark as spam or delete
it. See [Manage listings](/how-to-manage-advertisements/).

## Prevent the same problems

If the same kind of listing keeps getting reported, prevention works better than cleaning up: approve listings first
with [moderation](/how-ads-moderation-works/), block words with [banned words](/activate-blacklist-works/), and see
[Fight spam](/how-to-avoid-spam-in-my-site/).

## Related guides

- [Help your members avoid scams](/5-facts-get-scammed/) — tips you can share with buyers.
- [Manage listings](/how-to-manage-advertisements/) — every action you can take on a listing.
- [Cookie consent and privacy](/cookie-consent/) — the other privacy and EU basics in Access & privacy.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — every anti-spam tool.
{: .cards}
