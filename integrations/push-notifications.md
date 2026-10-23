---
title: Push notifications
description: Send members browser and phone notifications for new messages, search alerts and their listings, even when your site is closed, and show on-screen pop-ups with Pusher.
section: integrations
order: 120
permalink: /push-notifications/
redirect_from:
  - /native-apps/
keywords: notifications, push, push notifications, web push, browser notifications, phone notifications, notify, alert, new message, search alert, pusher, real time, live, popup, firebase, fcm, google cloud messaging, gcm, native app, mobile app, android, ios, iphone
updated: 2026-10-20
---

With **web push notifications**, members get a notification on their computer or phone the moment something happens
on your marketplace: someone replied to them, a new listing matches their alert, or their listing was approved. It
works even when your site isn't open, like an app's notifications, and members choose what they get.

Web push notifications are on every plan and work with every theme. New sites have them on; on older sites they
are off until you switch them on.

## Switch web push on

1. Go to **Settings › General**.
2. In **Notifications**, switch on **Web push notifications**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

Saving finishes the setup on your site; there is nothing else to configure. If the switch says *Set by Yclas support
for your site*, ask us through **Support** to change it.

## Test it on your own browser

1. Go to **Add-ons** and open **Web push notifications** (it is under the **Notifications** tab). The page says
   *Web push notifications are on.*
2. In **Test it**, click **Turn on notifications in this browser** and allow notifications when your browser asks.
3. Click **Send me a test notification**.
{: .steps}

A *Test notification* appears, saying *Web push works on* and your site's name. The page also shows how many of
your browsers have notifications on.

## What members see

Members are never asked on their first visit. After a signed-in member sends a message, uses a contact form or
signs up for listing alerts, the next page asks once: *Turn on notifications?*, with **Turn on notifications** and
**Not now**. If they choose **Not now**, they aren't asked again for 30 days.

Members can switch notifications on or off at any time, and choose what they get, in their account:

- **Nova:** account menu › **Edit profile** › **Notifications**.
- **Other themes:** the **Notifications** panel on their profile page.

| Notify me about | When it is sent |
| --- | --- |
| **Messages** | Someone sends them a message or replies to them. See [Messaging](/how-to-use-messaging-system/). |
| **Search alerts** | A new listing matches one of their [listing alerts](/notification-system/) or [saved searches](/saved-searches/). |
| **Listing updates** | Their listing is approved in [Moderation](/how-ads-moderation-works/), or is about to expire. |

Tapping a notification opens the message or listing. Emails are sent as usual: notifications come on top.

## Good to know

- **Browsers:** Chrome, Edge, Firefox and Safari, on computers and Android phones.
- **iPhone and iPad:** notifications only work once the member has added your site to their home screen. Switch on
  [Add to home screen](/add-to-home-screen/) so your site can be installed, and members are shown how.
- **Members must be signed in** to turn notifications on, and they are per browser: a member who uses a phone and a
  computer turns them on in both. Up to 10 browsers per member are kept.
- **Signing out** turns notifications off in that browser, so a shared computer doesn't keep showing someone's
  messages.
- A phone that is off or offline for more than a day doesn't get the notifications it missed.
- The prompt and the members' settings appear in Nova and in the themes built on the default theme. A few older
  themes don't show them.

## On-screen pop-ups with Pusher

[Pusher](https://pusher.com) is an outside service that shows a pop-up in the corner of the screen to members who are
signed in and have your site open, the moment your site emails them:

- for a new private message (with [Messaging](/how-to-use-messaging-system/) on): *You got a new message.* with a
  **Read more** link to their messages;
- for any other email: the first words of the email and *Please check your email*.

Pop-ups stay on screen until the member closes them. Unlike web push, they only reach members who have your site open
at that moment. You can use both.

To set it up:

1. Create a free account at [pusher.com](https://pusher.com) and create a **Channels** app. Choose the cluster
   (region) closest to your members.
2. Open the app's **App Keys** page. You need the **app_id**, **key**, **secret** and **cluster**.
3. In your admin panel, go to **Add-ons** and open **Pusher**.
4. Tick **Enable Pusher** and fill in **App ID**, **Key** and **Secret**, and choose the same **Cluster** as your
   Pusher app.
5. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Enable Pusher** | Turns pop-ups on or off. When it's ticked, the other fields are required. |
| **App ID**, **Key**, **Secret** | Connect your site to your Pusher app. Keep the secret private. |
| **Cluster** | The region of your Pusher app, for example **eu** or **mt1** (US East). It must match the app, or nothing arrives. |

To test it, sign in to your site as a member in one browser, and from another account send that member a message.

Pusher's free plan has a daily message limit. Each email your site sends to a signed-in member uses one message,
which is plenty for most marketplaces. Pusher's dashboard shows your usage.
{: .tip}

## Your own iPhone app

The **Marketplace** plan includes your own branded iPhone app on the App Store, published under your own Apple
account. We build it, prepare the App Store listing and submit each version for review; you do a few one-time steps
with Apple. An Android app comes later. To get started, ask us through [Support](/use-yclas-support-system/). See
[Your own iOS and Android apps](/mobile-apps/) for the details.

In **Settings › General**, Nova has a **Mobile apps** section with the **iOS and Android apps** switch. On other plans,
and during the Marketplace trial, it's locked with *Your own iOS and Android app is included in the Marketplace plan.*

The **Firebase Cloud Messaging** card under **Add-ons** is for sending notifications to an app. Leave it empty unless
we ask you to set it up for your app.

## Related guides

- [Add to home screen](/add-to-home-screen/) — install your marketplace like an app, needed for notifications on iPhone.
- [Listing alerts and notifications](/notification-system/) — the alerts that trigger notifications.
- [Messaging between members](/how-to-use-messaging-system/) — private messages on your site.
- [Email templates](/automatic-emails-sent-to-users/) — the emails your site sends.
{: .cards}
