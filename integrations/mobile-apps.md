---
title: Your own iOS and Android apps
nav_title: Mobile apps
description: Get your marketplace its own branded app in the App Store, published under your name, with push notifications and links that open straight in the app.
section: integrations
order: 920
permalink: /mobile-apps/
keywords: app, mobile app, own app, branded app, my own app, ios, iphone, android, app store, apple app store, google play, play store, publish app, testflight, apple developer, team id, apple team id, fingerprint, sha-256, signing certificate, universal links, app links, deep links, assetlinks, apple-app-site-association, push notifications, get your app
updated: 2026-10-23
plans: Marketplace plan
---

With the **Marketplace** plan, your marketplace can have its own app in Apple's App Store, with your name, your icon
and your listings. It is published under your own Apple developer account, so it shows your business as the seller.
Members download it, sign in with their usual account and get notifications on their phone for new messages, offers
and approved listings.

The iPhone app comes first. The Android app comes later.
{: .note}

## How it differs from Add to home screen

[Add to home screen](/add-to-home-screen/) is free on every plan: visitors install your website on their phone from
the browser, with your icon. It needs no app store, but members have to find and install it themselves, and on
iPhone notifications only work once it's installed.

Your own app is a real app in the App Store: members find it by searching the store, it carries your listing, icon
and screenshots, and it sends notifications like any other app. You can use both.

## What's included and who does what

**Yclas does** the technical work: we build the app, prepare the App Store listing (name, texts, icon and
screenshots), upload each version, submit it to Apple for review and follow the review. When the app or its listing
changes, we build and submit a new version.

**You do** a few one-time steps with Apple that no one else can do for you:

- join the Apple Developer Program under your own name or your business's name (Apple charges a yearly fee for this);
- create two keys in your Apple account and save them on the **Get your app** page, so we can build and send
  notifications for your app;
- create the empty app record in App Store Connect, with the details the page gives you;
- after we submit the app, fill in Apple's **App Privacy** form once, with the answers the page gives you.

The **Get your app** page lists each step with the exact answers to copy, and shows your app's progress until it is
live in the store.

Talk to us through [Support](/use-yclas-support-system/) before you join the Apple Developer Program, so we can
confirm your site is ready and guide you through it.
{: .important}

## Switch it on

The apps are part of the Nova theme. On other plans, and during the Marketplace trial, the switch is locked and says
*Your own iOS and Android app is included in the Marketplace plan.*

1. In your admin panel, go to **Settings › General**.
2. In **Mobile apps**, switch on **iOS and Android apps**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

Once it's on and saved, the **Apple Team ID** and **Android signing certificate fingerprints** fields appear in the
same section, with a link to the push notification settings for your app.

Switching it on lets members' phones register for app notifications and turns on the links your app uses. Building
and publishing the app itself is a separate, one-time step: in your Yclas account, open [My sites](/my-sites/),
click **Settings** on your site, and click **Get your app** in **Mobile apps**.

If the switch says *Set by Yclas support for your site*, ask us through [Support](/use-yclas-support-system/) to
change it.

## Apple Team ID and Android fingerprints

These two fields let a link to your site, for example a listing someone shared, open in your app instead of the
browser, on phones that have the app installed. Apple calls these universal links, Android calls them app links.

| Setting | What it does |
| --- | --- |
| **Apple Team ID** | The ID of your Apple developer account, a short code of letters and numbers shown in your Apple Developer account. With it, links to your site open in your iPhone app. We fill it in for you while we set up your app, so you normally don't need to type it. |
| **Android signing certificate fingerprints** | The SHA-256 fingerprints of the keys your Android app is signed with, separated by commas. Same purpose as the Team ID, for Android. Leave it empty until you have an Android app; we'll give you the values. |

Until a field is filled in, links simply open your site in the browser, as they do today.

The **Apple Team ID** is the same setting used by **Sign in with Apple** (**Add-ons › Apple**). If you use both, they
share one value, so changing it in one place changes it in the other. See
[Registration and login](/registration-and-login/).
{: .note}

## What members get

- **Your marketplace in an app:** the app shows your Nova site as it looks on a phone, with your listings, search and
  messages, and a tab bar at the bottom: **Home**, **Search**, **Post**, **Messages** and **Profile**.
- **Notifications on their phone:** a new message, a new offer (*New offer from* and the member's name) and their
  listing going live (*Your listing "..." is live*). Tapping one opens the conversation or the listing.
- **Links that open in the app:** a listing link someone sends them opens in your app when they have it installed.
- **Their usual account:** members sign in with the same account they use on your website. Notifications are
  per phone: a member with two phones gets them on both, and signing out stops them on that phone.

App notifications come on top of the emails your site sends, and on top of
[web push notifications](/push-notifications/) in the browser.

## Good to know

- **Marketplace plan only.** If your site moves to another plan, or you switch the apps off, the app stops getting
  new versions and notifications, and links open in the browser again.
- **Nova only.** The **Mobile apps** section appears in **Settings › General** when your site uses the Nova theme.
- **Apple reviews every version.** Apple decides whether to accept the app; if they reject a version, we see why and
  you'll be told by email, as you are when it goes live.
- **Your listing and screenshots are prepared for you** from your site. If you'd like something changed, ask us
  through [Support](/use-yclas-support-system/).
- **Firebase Cloud Messaging** under **Add-ons** is for an app's notifications. Leave it empty unless we ask you to
  set it up.

## Related guides

- [Add to home screen](/add-to-home-screen/) — install your website on a phone like an app, free on every plan.
- [Push notifications](/push-notifications/) — notifications in members' browsers, on every plan.
- [Compare plans](/compare-plans/) — what the Marketplace plan includes.
- [My sites](/my-sites/) — your sites in your Yclas account, where you find **Get your app**.
- [Get help from Yclas support](/use-yclas-support-system/) — ask us to start your app.
{: .cards}
