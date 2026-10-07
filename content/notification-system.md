---
title: Listing alerts and notifications
description: Let visitors subscribe to new listings in a category, location and price range, see who subscribed, and show on-screen notifications to signed-in members.
section: content
order: 110
permalink: /notification-system/
keywords: alerts, listing alerts, saved search, subscribe, subscribers, subscription, notify, notification, new listing email, pusher, pop-up, real-time
updated: 2026-10-07
---

Your marketplace can tell people about new listings and new emails in three ways:

- **Listing alerts.** Visitors subscribe to new listings in the categories, location and price range they care
  about, and get an email as soon as a matching listing goes live. This is the most useful of the three.
- **The [email digest](/email-digest/).** A daily, weekly or monthly round-up of all new listings.
- **On-screen notifications.** A small pop-up on your site telling a signed-in member that you've just emailed them,
  powered by the Pusher service.

## Listing alerts

### Let visitors subscribe

Visitors subscribe with the **Subscribe** widget. Add it to your site:

1. Go to **Design › Widgets**.
2. Add the **Subscribe** widget to an area, such as the sidebar, the footer or the post-a-listing page.
3. Set it up (see the table) and save.
{: .steps}

| Widget setting | What it does |
| --- | --- |
| **Subscribe title displayed** | The heading above the form. |
| **Categories** | **TRUE** lets visitors pick one or more categories. With **FALSE**, they subscribe to every category. |
| **Locations** | **TRUE** lets visitors pick a location. With **FALSE**, they subscribe to every location. |
| **Price** | **TRUE** shows a price range slider. |
| **Minimum Price**, **Maximum Price** and **Increment Step** | The ends of the price slider and how far each step moves. |

The visitor enters their email address, makes their choices, fills in the captcha if your site uses one, and
clicks **Subscribe**. If they don't have an account yet, one is created for them with that email address.

Each category a visitor picks becomes a separate alert. See [Widgets](/overview-of-widgets/) for adding and
arranging widgets.

### Which listings trigger an alert

When a listing goes live (straight away, or when you approve it in moderation), everyone with a matching alert gets
the *ads-subscribers* email with the listing's title and a link to it. A listing matches an alert when:

- its category is the alert's category, or a subcategory of it, or the alert covers every category;
- its location is the alert's location, or inside it, or the alert covers every location;
- its price is inside the alert's price range, or the alert has no upper price, or the listing has no price.

Only members whose account is active and who are **Subscribed to emails** in their profile receive alerts. On a
[multilingual site](/how-to-activate-multilingual-mode/) with a **language** [user custom field](/users-custom-fields/),
each member gets the alert in their own language.

Change the wording of the alert in [Email templates](/automatic-emails-sent-to-users/) (key *ads-subscribers*).

### See your subscribers

Go to **Subscribers** in the sidebar (under **Manage**). The page shows how many alerts and different people you
have, how many alerts were added in the last 30 days, and the most wanted category and location.

The list shows each alert: the subscriber, the category and location they want (**Any category**, **Anywhere**),
their price range and the date. You can:

- search by email or name, and filter by category and location;
- remove an alert with **Remove this alert** (the person stops getting those emails);
- download the list with **Export CSV**;
- write to your subscribers with **Send a newsletter** (see [Newsletters](/how-to-send-the-newsletter/)).

The most wanted categories and locations tell you what buyers are waiting for. Share that with sellers, or promote
those categories to bring in matching listings.
{: .tip}

### How members manage their alerts

Members find their alerts under **Subscriptions** in their account menu, with the category, location and price
range of each. They can delete one alert, or all of them at once with the unsubscribe button at the top of the
list. Signed-in members also see an **Unsubscribe** button in the Subscribe widget.

## On-screen notifications with Pusher

With Pusher connected, a member who is signed in on your site sees a pop-up when your site sends them an email,
with the first words of the email and a reminder to check their inbox. For new messages in
[messaging](/how-to-use-messaging-system/), the pop-up says they have a new message and links to their inbox.

Pusher is a separate service with a free plan. To connect it:

1. Create an account at pusher.com and create a **Channels** app.
2. In the app's **App Keys**, note the app ID, key, secret and cluster.
3. In your admin panel, go to **Integrations** and open **Pusher**.
4. Tick **Enable Pusher**, fill in **App ID**, **Key**, **Secret** and **Cluster**, and click **Save**.
{: .steps}

Pop-ups only reach members who have your site open at that moment. They're a nice extra, not a replacement for
email.
{: .note}

## Related guides

- [Email digest](/email-digest/) — a regular round-up of new listings.
- [Widgets](/overview-of-widgets/) — place the Subscribe widget.
- [Email templates](/automatic-emails-sent-to-users/) — reword the alert email.
- [Newsletters](/how-to-send-the-newsletter/) — write to your members yourself.
{: .cards}
