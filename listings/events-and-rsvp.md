---
title: RSVP for events
description: Let members say "I'm going" on an event listing, limit the places with a waiting list, remind everyone the day before and download the attendee list.
section: listings
order: 240
permalink: /event-rsvp/
keywords: rsvp, events, event, i'm going, attendees, attendee list, guest list, places, capacity, waiting list, waitlist, reminder, event reminder, csv, export attendees, meet-up, club, community events, repeating event, recurring event, monthly event, 31st
updated: 2026-11-16
plans: Available on all plans
---

With RSVPs on, signed-in members can say **I'm going** on any event listing (a listing with an event date). The
organiser can limit the number of places: once they are taken, further members join a waiting list and get the next
free place by email. Everyone going is reminded the day before, and organisers see who is coming.

RSVPs are off until you switch them on. They work on every plan and with any site type, not only directory sites.

## Before you start

RSVPs need the event date field. If your site doesn't have one yet, go to **Listings › Custom Fields** and create a
field with the **Name** `eventdate` and the **Type** **Date** (see
[Sell event tickets](/sell-event-tickets-online/#set-it-up)), or use the **Directory** or **Community board** template
under **Start from a template**.

## Switch RSVPs on

1. Go to **Settings › General**.
2. In **Notifications**, switch on **RSVP for events**.
3. Click **Save changes**.
{: .steps}

Switching it on adds a **Places** field to your listing form. If you add the event date field later, save
**Settings › General** again with **RSVP for events** on and the **Places** field is added then.

If the switch is greyed out with *Set by Yclas support for your site*, our support team has set it for you: write to
us to change it.
{: .note}

## How members reply

An upcoming event's listing shows a box with how many people are going and, if there is a limit, how many places are
left. Below it:

- **I'm going** for a signed-in member. A visitor who isn't signed in sees a button to sign in first.
- **Join the waiting list** once every place is taken. The member sees their number on the list.
- **Cancel, I can't come** or **Leave the waiting list** once they have replied.

Only members with an active account can reply: a member who hasn't confirmed their email address yet, or whose
account is waiting for approval, sees a message saying why. Replies close once the event's date has passed.

## Limit the places

The organiser sets the number in the **Places** field when they post or edit the event. Leave it empty for no limit.

When every place is taken, the waiting list starts. The member waiting longest gets the next free place, and the
*A place is yours* email, as soon as:

- someone going cancels;
- the organiser raises the number of places, or empties the field (then everyone waiting gets a place);
- a member going is marked as spam or deleted (picked up within the hour).

## The reminder

Everyone going gets a *Tomorrow* email the day before the event, once. Reminders go out from 08:00 in your site's
time zone.

You can change the wording of both emails: go to **Email** and click **Open templates** in the **Email templates**
card. They are *event-rsvp-reminder* and *event-rsvp-place*, added the first time one of them is sent. See
[Email templates](/automatic-emails-sent-to-users/).

## The attendee list

The organiser opens the list from the **Attendee list** link in the box on their event's page. On the Nova theme,
members who organise events also have **Event replies** in their account menu.

As an administrator, go to **Settings › General** and click **Event replies →** under the switch. It lists every event
members replied to, with its date and the number going and on the waiting list. Click an event to open its list.

The **Attendee list** shows, for one date:

- each member's name, with a link to their profile, whether they are going or on the waiting list, and the date they
  replied;
- email addresses, but only for administrators and moderators. Organisers who aren't on your team see names only and
  can write to someone through their profile.

Click **Download as CSV** to get the list as a spreadsheet file.

## Repeating events

A repeating event (see [Repeating events](/sell-event-tickets-online/#repeating-events)) is one listing, but replies
are kept for each date:

- When the event moves on to its next date, the new date starts with nobody going.
- The attendee list shows the earlier dates with replies under **Other dates**.
- If the organiser moves an upcoming event to another day, its replies move with it, and the reminder goes out the
  day before the new date.

A monthly event on the 29th, 30th or 31st falls on the last day of shorter months and then goes back to its own day:
an event on 31 January moves to 28 February, then 31 March and 30 April. A yearly event on 29 February falls on 28
February and returns to the 29th in a leap year. The **Add to calendar** file follows the same dates.

## Good to know

- **Reminders depend on visits.** Your site runs its scheduled jobs when it gets visitors. If it has no visit between
  08:00 and midnight the day before an event, no reminder is sent for it.
- **Large events.** Reminders go out in small batches, so an event with a few thousand people going may not remind
  everyone. The attendee list and the CSV file show up to 5,000 replies.
- **Places changed outside the form.** A number of places changed by an import or the API reaches the waiting list
  within the hour, not at once.
- **Custom themes.** A theme with its own listing page template that doesn't include the standard event box shows no
  RSVP buttons.
- **Saving the same short date.** If an organiser of an event on the 31st saves the listing again while it shows the
  shortened date (for example 28 February), the event keeps its 31st. Choosing any other date starts from that date.
- **Ticketed events.** An event that needs a ticket shows the ticket button instead of **I'm going**.
- The number going isn't shown in the calendar or in the **Add to calendar** file.

## Related guides

- [Sell event tickets](/sell-event-tickets-online/) — the event date field, the calendar and repeating events.
- [Run a business directory](/directory-mode/) — the venue, event end date and repeat fields.
- [Email templates](/automatic-emails-sent-to-users/) — change the reminder's wording.
- [Custom fields](/how-to-create-custom-fields/) — add the event date field.
{: .cards}
