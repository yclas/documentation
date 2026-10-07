---
title: Scheduled jobs
description: The tasks your marketplace runs by itself — expiry reminders, digests, sitemap, memberships — and how to switch one off.
section: tools
order: 60
permalink: /how-to-set-crons/
keywords: cron, crontab, scheduled jobs, scheduled tasks, automatic, expiry emails, digest, sitemap, run now
updated: 2026-10-07
---

Some of what your marketplace does isn't triggered by a visitor clicking something, but by the clock: telling a
seller their listing is about to expire, sending the weekly digest, renewing memberships. These are your site's
**scheduled jobs** (developers call them cron jobs). On a hosted Yclas site they are already set up and running; you
only come here to check on them or switch one off.

## See your jobs

In the admin panel, go to **Tools** and scroll to **Scheduled jobs**. For each job the table shows:

| Column | What it means |
| --- | --- |
| **Job** | The job's name, with its technical name underneath. |
| **Schedule** | When it runs, in cron notation (see below). |
| **Last run** | When it last finished. |
| **Next run** | When it is due next. Shows "—" if the job is off. |
| | **On** or **Off**, with a link to **Disable** or **Activate** it. |

## The jobs on a typical site

| Job | What it does | When |
| --- | --- | --- |
| Sitemap | Rebuilds your [sitemap](/sitemap-classifieds-website/). | Once a day |
| Expired Ad | Emails sellers whose listing has expired. | Daily |
| About to Expire Ad | Emails sellers a few days before their listing expires. | Daily |
| Expired Featured Ad | Tells sellers their featured period has ended. | Daily |
| Unpaid Orders | Reminds buyers about orders they haven't paid. | Daily |
| Unreceived orders reminder, Mark unreceived orders as received, Mark unshipped orders as cancelled | Move [checkout orders](/pay-directly-from-ad/) along when buyer or seller doesn't confirm. | Daily |
| Renew subscription, About to Expire Subscription | Renew [memberships](/membership-plans/) and warn members before theirs runs out. | Every few minutes / daily |
| Dispatch Daily / Weekly / Monthly Digest | Send the email digest of new listings to members who chose that frequency. | Daily, Saturdays, the 1st of the month |
| Generate Access Token, About to Expire Instagram Token | Belong to the old Facebook and Instagram connections, which no longer work. They have nothing to do. | Monthly / daily |
| Algolia Search re-index | Keeps [Algolia search](/algolia-search/) up to date. | Hourly |

Jobs for features you don't use simply have nothing to do when they run.

### Reading the schedule

The schedule has five parts: minute, hour, day of the month, month and day of the week. A `*` means "every".

| Schedule | Means |
| --- | --- |
| `00 9 * * *` | Every day at 9:00 |
| `*/5 * * * *` | Every five minutes |
| `0 7 * * SAT` | Saturdays at 7:00 |
| `0 7 1 * *` | The 1st of every month at 7:00 |

Times are server time, which may differ from your own time zone.

## Switch a job off or on

Click **Disable** next to a job to stop it, and **Activate** to start it again. For example, disable **About to
Expire Ad** if you don't want sellers to get expiry reminders.

Think twice before disabling a job. With **Renew subscription** off, memberships aren't renewed; with **Sitemap**
off, search engines stop seeing your new listings. To stop a single email, it is usually better to switch off that
[email template](/automatic-emails-sent-to-users/) instead.
{: .warning}

## How jobs run

Jobs run in the background while your site gets visits: when someone opens a page after a job's time has passed, the
job runs. On a quiet site a job can therefore run a little later than its scheduled time. **Run now** at the top of
the table runs every job that is due straight away, in a new tab.

You can't add your own jobs or change schedules on a hosted site.

## Related guides

- [Listing expiry and renewal](/ad-expiration/) — the emails the expiry jobs send.
- [Email templates](/automatic-emails-sent-to-users/) — change or switch off each email.
- [The Tools page](/tools-overview/) — everything else under Tools.
{: .cards}
