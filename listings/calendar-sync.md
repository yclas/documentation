---
title: Sync bookings with Google or Outlook calendars and add video links
nav_title: Calendar sync and video links
description: Sellers connect Google Calendar or Outlook so accepted bookings appear in their calendar and busy times can't be booked, and add Google Meet, Microsoft Teams or Zoom links to bookings.
section: listings
order: 810
permalink: /calendar-sync/
keywords: calendar sync, google calendar, outlook, outlook calendar, microsoft 365, office 365, two-way sync, 2-way sync, busy times, double booking, availability, google meet, meet link, microsoft teams, teams link, zoom, zoom link, video call, video meeting, online meeting, join link, oauth, client id, client secret, redirect uri, google cloud console, entra, azure, app registration, zoom app marketplace, connect calendar, connect again, appointments, sessions, lessons, consultations
updated: 2026-11-02
plans: Professional and Marketplace plans (with bookings)
---

<div class="summary" markdown="1">
- Sellers connect Google Calendar or Outlook: accepted bookings become events in their calendar, and cancelled bookings are removed.
- For bookings by the hour and sessions, times the seller is busy in their calendar can't be booked.
- Bookings by the hour and sessions can get a Google Meet, Microsoft Teams or Zoom link, sent to both sides.
- Off by default. You switch it on in **Add-ons › Calendar & video** and create an app with each provider.
</div>

Sellers who take [bookings](/bookings/) usually live in their own calendar. With calendar sync, a seller connects
Google Calendar or Outlook once, and from then on:

- **Every accepted booking appears in their calendar**, with the buyer's name, the dates or times, the total and
  the buyer's message. When the booking is cancelled, the event is removed.
- **Their busy times block the listing.** For bookings by the hour and sessions, a time the seller already has
  something in their calendar can't be requested on your site, so a dentist appointment or a booking taken
  elsewhere never clashes with one taken on your marketplace.
- **Online bookings get a meeting link.** Lessons, consultations and other online sessions can get a Google Meet,
  Microsoft Teams or Zoom link, sent to the buyer and the seller when the booking is accepted.

It works with bookings, [test drives](/vehicles-pack/#book-a-test-drive) and
[viewings](/property-pack/#book-a-viewing-and-open-houses), which come with the **Professional** and **Marketplace**
plans. It's off until you switch it on, and uses apps you create with Google, Microsoft and Zoom yourself; those
providers don't charge for this.

Bookings already have a one-way **Calendar link** (see [Bookings](/bookings/#how-sellers-make-a-listing-bookable)):
a private feed that shows accepted bookings in any calendar app, which refreshes when the app decides to.
Calendar sync is two-way and immediate, but works only with Google and Microsoft calendars.
{: .note}

## Set it up (site owner)

Each provider needs an app that lets your site ask sellers for access to their calendar. You create it once, in the
provider's developer console, and paste its **Client ID** and **Client secret** into your admin panel. Set up only
the providers you want to offer.

1. In the admin panel, go to **Add-ons**, open the **Automation** tab and click **Calendar & video**.
2. Copy the **Redirect URI** shown at the top. You'll register it with every app.
3. Create an app with Google, Microsoft or Zoom as described below.
4. Paste its **Client ID** and **Client secret** under the provider's name.
5. Tick the box next to **Sync bookings with sellers' calendars and add video meeting links**.
6. Click **Save**.
{: .steps}

Each provider shows a label: **Your app** once your own keys are saved, **Available** when an app is already set up
for your site, and **Not available** when sellers can't connect it yet. Secrets are never shown again: leave the
field empty to keep the saved one, or tick **Remove the saved secret**.

If the page says *Bookings are off on this site*, switch on [bookings](/bookings/#switch-bookings-on), test drives or
viewings first.

| Setting | What it does |
| --- | --- |
| **Sync bookings with sellers' calendars and add video meeting links** | Off by default. Switches calendar sync and video links on for every seller. |
| **Redirect URI** | The address of your site that providers send sellers back to. Register it in every app, exactly as shown. |
| **Client ID** / **Client secret** | The keys of your app, for **Google Calendar**, **Outlook / Microsoft 365** and **Zoom**. |
| **Tenant** | Microsoft only. Leave it empty for any work, school or personal Microsoft account, or enter your organisation's tenant to allow only its accounts. |

### Google Calendar and Google Meet

1. In the [Google Cloud console](https://console.cloud.google.com), create a project.
2. Under **APIs & Services › Library**, enable the **Google Calendar API**.
3. Under **OAuth consent screen** (or **Google Auth Platform**), set up the consent screen as **External**, with your
   marketplace's name, logo and privacy policy link, and add the scope
   `https://www.googleapis.com/auth/calendar.events`. No other scope is needed.
4. Under **Credentials**, create an **OAuth client ID** of type **Web application** and add the **Redirect URI** under
   **Authorised redirect URIs**.
5. Copy the client ID and secret into **Calendar & video**.
6. Set the app's publishing status to **In production**, and submit it for verification.
{: .steps}

Google treats calendar access as a sensitive scope. Until Google has verified your app, sellers see a *Google hasn't
verified this app* screen when they connect, and at most 100 Google accounts can connect in total. While the app is
still in **Testing**, only the test users you list can connect, and they must connect again every 7 days. Verification
is free and asks for your domain, privacy policy and a short video of the connection; it usually takes a few days to a
few weeks.
{: .warning}

Google Meet links come with Google Calendar: there's nothing else to set up.

### Outlook / Microsoft 365 and Microsoft Teams

1. In the [Microsoft Entra admin center](https://entra.microsoft.com), go to **App registrations** and click **New
   registration**.
2. Under **Supported account types**, choose accounts in any organisational directory and personal Microsoft
   accounts (or only your organisation, if you enter a **Tenant**).
3. Add the **Redirect URI** as a **Web** redirect URI.
4. Under **Certificates & secrets**, create a client secret and copy its **Value**.
5. Under **API permissions**, add the delegated Microsoft Graph permissions **Calendars.ReadWrite**, **User.Read** and
   **offline_access**.
6. Copy the **Application (client) ID** and the secret into **Calendar & video**.
{: .steps}

Microsoft client secrets expire, after 24 months at most. Put a reminder in your diary to create a new one and paste
it in before then, or every seller's connection stops working.
{: .tip}

Some organisations don't let their staff approve apps from publishers Microsoft hasn't verified. If sellers with work
accounts see *Need admin approval*, their IT administrator must approve your app, or you can verify yourself as a
publisher in Entra.

### Zoom

1. In the [Zoom App Marketplace](https://marketplace.zoom.us), click **Develop › Build App** and create a **General
   app** with **User-managed** OAuth.
2. Add the **Redirect URI** as the OAuth redirect URL, and add it to the allow list.
3. Under **Scopes**, add the scopes to create, update and delete meetings and to read the user.
4. Copy the client ID and secret into **Calendar & video**.
{: .steps}

Zoom only lets people outside your own Zoom account use an app once it is published on the Zoom App Marketplace, and
Zoom reviews apps before publishing them. Check Zoom's rules before you offer Zoom to all your sellers; Google Meet and
Teams don't have this step.
{: .important}

## Connect a calendar (sellers)

Once you've switched it on, sellers see a **Calendar & video** link in their account, under **Bookings**, on the
**Requests received** and **My listings** tabs, and next to the video choice in each listing's booking settings.

1. In their account menu, the seller opens **Bookings** and clicks **Calendar & video**.
2. Next to **Google Calendar** or **Outlook / Microsoft 365**, they click **Connect**.
3. They sign in with the provider and allow every permission asked.
4. Back on your site, the calendar shows **Connected** and the account name.
{: .steps}

A seller connects one calendar at a time: connecting Outlook disconnects Google, and the other way round, after a
warning. They can also connect **Zoom** next to their calendar. **Disconnect** removes the connection; events already
added stay in their calendar.

If access was withdrawn or has expired, for example because the seller removed your app in their Google or Microsoft
account, the calendar shows **Connect again**. Bookings carry on as usual, but aren't synced until they do.

### Choose a video meeting

On the same page, under **Video meeting**, the seller picks what to add to their bookings by the hour and sessions:
**No video meeting**, **Google Meet** (with Google Calendar connected), **Microsoft Teams** (with Outlook connected) or
**Zoom** (with Zoom connected), and clicks **Save**.

Each listing can choose otherwise: in the listing's booking settings (**Bookings › My listings › Set up bookings**),
**Video meeting** offers **My default** or any of the choices above. A listing that meets in person can say **No video
meeting** while the seller's online lessons get a link.

## What syncs which way

| From | To | What |
| --- | --- | --- |
| Your site | The seller's calendar | Each accepted booking becomes an event called *Booking #12: buyer's name – listing title*, with the dates, the total and the buyer's message. Bookings by the day or night are all-day events. A cancelled booking's event, and its Zoom meeting, are removed. |
| The seller's calendar | Your site | For bookings **by the hour and sessions** only: busy times in the next 60 days block those times on the listing. |

Busy times are read from the seller's calendar every few minutes, so a new appointment shows on the listing within
about 5 minutes. When a buyer requests a time and when the seller accepts it, the calendar is asked again, so a
clash is caught even then: the buyer sees *These times are not available any more. Please choose others.* and the
seller *Your connected calendar is busy at these times.*

Events marked as free, cancelled events, invitations the seller declined, and the events of your own site's
bookings don't count as busy.

If a calendar doesn't answer within a few seconds, the booking goes ahead without it: a slow provider never stops a
booking. Events and meetings that couldn't be written straight away are tried again 5 minutes later, then less and less often, up to 8 tries.

## Where the join link appears

- **In the acceptance emails:** the buyer's *booking-accepted* email and the seller's *booking-update* email get a
  **Video meeting** line with the link.
- **On the Bookings page:** each accepted booking shows **Video meeting** with a **Join the meeting** link, for both
  sides.
- **In the calendar event:** a Meet or Teams meeting is part of the event; a Zoom link is added to its description.

If the meeting takes a moment longer to create than the email, both sides get a separate email with the link
(*Video meeting link for booking #…*) a few minutes later.

## Limits

- **Only the primary calendar** is read and written. Other calendars of the same account are ignored.
- **Bookings by the day or night aren't blocked** by busy times: they are added to the calendar as all-day events,
  but a busy calendar doesn't stop them. Use **Blocked dates** in the listing's booking settings for those.
- **Video links are only for bookings by the hour and sessions**, not for day or night bookings.
- **Microsoft Teams needs a work or school account** with Teams. With a personal Outlook.com account, the event is
  added to the calendar without a meeting link.
- **Bookings can't be rescheduled.** To change the time, the booking is cancelled (its event is removed) and booked
  again.
- If a seller removes your app inside Zoom, their Zoom connection only shows **Connect again** the next time a
  meeting fails to be created.
- Rarely, when Zoom answers slowly, a spare unused Zoom meeting can be left in the seller's Zoom account. The booking
  always uses one link.

## Troubleshooting

| Message | What it means |
| --- | --- |
| *Bookings are off on this site* (admin page) | Switch on bookings, test drives or viewings first. |
| *Calendar sync is off. Turn it on here, then save.* | You opened the sellers' **Calendar & video** page while calendar sync is off, or while no provider has an app. Tick the box, add at least one app's keys and save. Until then sellers get *Page not found* there. |
| *This calendar can not be connected on this site.* | That provider shows **Not available**: add your app's keys. |
| *The connection was not allowed. Nothing was changed.* | The seller clicked **Cancel** on the provider's screen, or their organisation blocked the app. |
| *The provider did not allow offline access. Please try again and allow every permission asked.* | The seller unticked a permission. They connect again and allow everything. |
| *Connecting took too long or was started in another browser. Please try again.* | The seller took too long, or finished in another browser or tab. |
| A Google or Microsoft error about the redirect address | The **Redirect URI** registered in the app doesn't match the one on the **Calendar & video** page, character for character. |

## Related guides

- [Bookings and rentals](/bookings/) — make listings bookable by the day, night, hour or session.
- [Paid bookings](/paid-bookings/) — take payment online when buyers book.
- [Vehicles pack](/vehicles-pack/#book-a-test-drive) — test drives, which sync too.
- [Property pack](/property-pack/#book-a-viewing-and-open-houses) — viewings and open houses.
{: .cards}
