---
title: Push notifications
description: Show signed-in members an on-screen notification when your site emails them or they get a new message, using Pusher, and what happened to native app notifications.
section: integrations
order: 120
permalink: /push-notifications/
redirect_from:
  - /native-apps/
keywords: notifications, push, pusher, real time, live, popup, new message, alert, google cloud messaging, gcm, firebase, native app, mobile app, android, ios
updated: 2026-10-07
---

With Pusher connected, members who are signed in and have your marketplace open get a notification in the corner of
the screen the moment something happens: a new private message, or an email your site has just sent them, such as a
reply to their listing. They don't have to check their inbox to know.

## How it works

[Pusher](https://pusher.com) is a service that delivers messages to browsers in real time. When your site sends an
email to a member, it also sends Pusher a short notice for that member, and Pusher passes it on to any tab where
they have your site open. The notification shows:

- for a new private message (with [Messaging](/how-to-use-messaging-system/) on): *You got a new message.* with a
  **Read more** link to their messages;
- for any other email: the first words of the email and *Please check your email*.

Notifications stay on screen until the member closes them. Members who aren't on your site at that moment don't see
anything, but they still get the email as usual.

These are notifications inside your website, not phone notifications: they don't appear when the browser is closed.
{: .note}

## Set up Pusher

1. Create a free account at [pusher.com](https://pusher.com) and create a **Channels** app. Choose the cluster
   (region) closest to your members.
2. Open the app's **App Keys** page. You need the **app_id**, **key**, **secret** and **cluster**.
3. In your admin panel, go to **Integrations** and open **Pusher**.
4. Tick **Enable Pusher** and fill in **App ID**, **Key** and **Secret**, and choose the same **Cluster** as your
   Pusher app.
5. Click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Enable Pusher** | Turns notifications on or off. When it's ticked, the other fields are required. |
| **App ID**, **Key**, **Secret** | Connect your site to your Pusher app. Keep the secret private. |
| **Cluster** | The region of your Pusher app, for example **eu** or **mt1** (US East). It must match the app, or nothing arrives. |

To test it, sign in to your site as a member in one browser, and from another account send that member a message.

Pusher's free plan has a daily message limit. Each email your site sends to a signed-in member uses one message,
which is plenty for most marketplaces. Pusher's dashboard shows your usage.
{: .tip}

## Native apps and Google Cloud Messaging

Native Android and iOS apps for Yclas marketplaces aren't part of the current plans. The **Google Cloud Messaging**
integration sent phone notifications to those apps, through a Google service that Google has since shut down, so it
no longer sends anything. You can leave its API key empty. If you have questions about apps,
[contact support](/use-yclas-support-system/).

To give members an app-like experience today, switch on [Add to home screen](/add-to-home-screen/): they can install
your marketplace on their phone from the browser.

## Related guides

- [Messaging between members](/how-to-use-messaging-system/) — private messages on your site.
- [Add to home screen](/add-to-home-screen/) — install your marketplace like an app.
- [Email templates](/automatic-emails-sent-to-users/) — the emails that trigger notifications.
{: .cards}
