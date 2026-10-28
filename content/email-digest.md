---
title: Email digest
description: Send members a regular email with the newest listings on your marketplace, daily, weekly or monthly, without writing anything yourself.
section: content
order: 80
permalink: /email-digest/
keywords: digest, email digest, weekly email, daily email, monthly email, new listings email, round-up, retention, re-engagement, existing members, coming up, events, community
updated: 2026-10-22
plans: Available on all plans
---

The email digest is a round-up of new listings that your site sends by itself. Each member chooses how often they
want it, daily, weekly or monthly, and gets an email with the latest listings, each with its photo and a link.

It's one of the simplest ways to bring members back: buyers see what's new without having to remember to visit,
and sellers see that the marketplace is active.

## Switch the digest on

1. In the admin panel, go to **Email**.
2. In the **Email digest** card, switch on **Send the digest**.
3. Choose **Listings to include**: **All new listings** or **Featured listings only**.
4. Set **Listings per email**: the most listings one email shows, up to 100.
5. Click **Save digest**.
{: .steps}

## Who receives it, and how often

Every member has a **Receive digest emails** setting in their profile, with **Never**, **Daily**, **Weekly** and
**Monthly**. The setting only appears in profiles while the digest is switched on.

- Members who sign up while the digest is on start with **Weekly**.
- Members who joined before you switched it on start with **Never**, so they won't get it until they choose a
  frequency, or until you add them (see below).
- Members who haven't signed in for more than two years, and accounts that aren't active, are skipped.
- Every digest has an **Unsubscribe** link that sets the member's choice to **Never**.

As an administrator, you can see a member's choice when you edit them in **Users**: it is the *digest_interval*
field in the **Advanced** part of the form (*never*, *daily*, *weekly* or *monthly*).

## Send it to your existing members

If your site already has members, you can put the active ones on the weekly digest in one go. This is the quickest
way to bring a quiet community back to life.

1. Switch the digest on and save it, as above.
2. Go to **Email**. Under the **Email digest** card, a box says how many existing members don't get the digest yet.
3. Click **Send it to them** and confirm.
{: .steps}

Only members who agreed to receive emails, whose account is active and who signed in during the last 12 months are
added, on **Weekly**. Members who already chose a frequency keep it. Each of them can change or stop the digest from
their profile or with the email's unsubscribe link.

<div class="note" markdown="1">
This needs your own [email service](/general-email-configuration/), like newsletters do:

- **Elastic Email**: works for any number of members.
- **SMTP** (your own mail server, Gmail, Outlook…): up to 1,000 members on the weekly digest in total.
- **Mailgun** or the built-in Yclas service: the button is replaced by a message explaining why. Switch to Elastic
  Email (or SMTP for smaller sites) to use it.
</div>

The box only appears while the digest is on and there are members to add.

## When it's sent and what it contains

| Frequency | Sent | Listings included |
| --- | --- | --- |
| **Daily** | Every morning | Published between 36 and 12 hours before sending. |
| **Weekly** | Saturday mornings | Published in the week before, up to the day before sending. |
| **Monthly** | The morning of the 1st | Published in the month before. |

The listings are the newest published ones in that period (only featured ones if you chose **Featured listings
only**), up to your limit.

### Coming up: events in the digest

If your listings have an event date (a [custom field](/how-to-create-custom-fields/) named `eventdate`, see
[special custom fields](/special-custom-fields/#event-date--eventdate)), the digest starts with a **Coming up** block:
the listings whose event falls between today and shortly after the next digest, soonest first, at most 10.

| Frequency | Events shown |
| --- | --- |
| **Daily** | The next 3 days |
| **Weekly** | The next 14 days |
| **Monthly** | The next 38 days |

If there are no new listings in the period and no events coming up, nothing is sent. A week with no new listings
but events coming up still sends a digest, so members of a community or events site hear about what's on.

On a [multilingual site](/how-to-activate-multilingual-mode/) with a **language** [user custom field](/users-custom-fields/),
each member gets the digest in their own language.

## Change the wording

The digest uses the *digest* [email template](/automatic-emails-sent-to-users/). To edit its subject and the text
above the listings, go to **Email** and click **Open templates** in the **Email templates** card. Keep `[ADS]` where
the listings should appear.

To word one frequency differently, add a template with the key *digest-daily*, *digest-weekly* or
*digest-monthly* with **+ New template**. When one exists, it's used instead of *digest* for that frequency.

## Tips

- **All new listings** suits most marketplaces. **Featured listings only** turns the digest into extra exposure you can sell with
  [featured listings](/how-to-create-featured-plan/).
- Ten to twenty listings is a good length: enough to be useful, short enough to read on a phone.
- The digest goes out through your [email service](/general-email-configuration/). With many members, use your own
  service rather than the built-in one so it isn't held back.

## Related guides

- [Listing alerts and notifications](/notification-system/) — emails the moment a matching listing is posted.
- [Newsletters](/how-to-send-the-newsletter/) — one-off emails you write yourself.
- [Share your site](/promote-classifieds-website-free/#share-your-site) — get members to join in the first place.
- [Email templates](/automatic-emails-sent-to-users/) — change the digest's wording.
- [Email settings](/general-email-configuration/) — how your emails are delivered.
{: .cards}
