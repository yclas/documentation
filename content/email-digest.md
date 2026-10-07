---
title: Email digest
description: Send members a regular email with the newest listings on your marketplace, daily, weekly or monthly, without writing anything yourself.
section: content
order: 80
permalink: /email-digest/
keywords: digest, email digest, weekly email, daily email, monthly email, new listings email, round-up, retention, re-engagement
updated: 2026-10-07
---

The email digest is a round-up of new listings that your site sends by itself. Each member chooses how often they
want it, daily, weekly or monthly, and gets an email with the latest listings, each with its photo and a link.

It's one of the simplest ways to bring members back: buyers see what's new without having to remember to visit,
and sellers see that the marketplace is active.

## Switch the digest on

1. In the admin panel, go to **Email**.
2. In the **Email digest** card, switch on **Enabled**.
3. Choose the **Listings Type In the Email Digest**: **Normal** (all new listings) or **Featured** (only featured
   ones).
4. Set the **Listings Limit In the Email Digest**: the most listings one email shows, up to 100.
5. Click **Save digest**.
{: .steps}

## Who receives it, and how often

Every member has a **Receive digest emails** setting in their profile, with **Never**, **Daily**, **Weekly** and
**Monthly**. The setting only appears in profiles while the digest is switched on.

- Members who sign up while the digest is on start with **Weekly**.
- Members who joined before you switched it on start with **Never**, so they won't get it until they choose a
  frequency. Tell them about it, for example in a [newsletter](/how-to-send-the-newsletter/).
- Members who haven't signed in for more than two years, and accounts that aren't active, are skipped.
- Every digest has an **Unsubscribe** link that sets the member's choice to **Never**.

As an administrator, you can see a member's choice when you edit them in **Users**: it is the *digest_interval*
field in the **Advanced** part of the form (*never*, *daily*, *weekly* or *monthly*).

## When it's sent and what it contains

| Frequency | Sent | Listings included |
| --- | --- | --- |
| **Daily** | Every morning | Published between 36 and 12 hours before sending. |
| **Weekly** | Saturday mornings | Published in the week before, up to the day before sending. |
| **Monthly** | The morning of the 1st | Published in the month before. |

The listings are the newest published ones in that period (only featured ones if you chose **Featured**), up to your
limit. If there are no new listings in the period, nothing is sent.

On a [multilingual site](/how-to-activate-multilingual-mode/) with a **language** [user custom field](/users-custom-fields/),
each member gets the digest in their own language.

## Change the wording

The digest uses the *digest* [email template](/automatic-emails-sent-to-users/). To edit its subject and the text
above the listings, go to **Email** and click **Open templates** in the **Email templates** card. Keep `[ADS]` where
the listings should appear.

To word one frequency differently, add a template with the key *digest-daily*, *digest-weekly* or
*digest-monthly* with **+ New template**. When one exists, it's used instead of *digest* for that frequency.

## Tips

- **Normal** suits most marketplaces. **Featured** turns the digest into extra exposure you can sell with
  [featured listings](/how-to-create-featured-plan/).
- Ten to twenty listings is a good length: enough to be useful, short enough to read on a phone.
- The digest goes out through your [email service](/general-email-configuration/). With many members, use your own
  service rather than the built-in one so it isn't held back.

## Related guides

- [Listing alerts and notifications](/notification-system/) — emails the moment a matching listing is posted.
- [Newsletters](/how-to-send-the-newsletter/) — one-off emails you write yourself.
- [Email templates](/automatic-emails-sent-to-users/) — change the digest's wording.
- [Email settings](/general-email-configuration/) — how your emails are delivered.
{: .cards}
