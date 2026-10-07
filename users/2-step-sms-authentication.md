---
title: Two-step login by SMS
description: Send members a one-time code by text message when they sign in, and let them register and log in with their phone number.
section: users
order: 80
permalink: /2-step-sms-authentication/
keywords: sms, text message, two-step, 2-step, two-factor, 2fa, one-time code, otp, phone login, phone register, mobile number, 2factor, clickatell
updated: 2026-10-07
---

SMS authentication texts a one-time code to a member's mobile phone. Once it's on, it does three things:

- **Two-step login:** members who have a mobile number on their profile must type the code they receive each time
  they sign in.
- **Phone login:** the login page offers **Phone Login**, so members can sign in with their number and a code
  instead of a password.
- **Phone register:** the sign-up page offers **Phone Register**: new members enter their number, confirm it with a
  code, then give their name and email address.

Text messages are sent through [2Factor](https://2factor.in), an SMS service you sign up to and pay for yourself,
per message. Check its coverage and prices for the countries your members are in before you switch this on.

Prefer the free [authenticator-app method](/2-step-authentication/) if you only want two-step login. SMS suits
markets where members expect to log in with their phone number.
{: .tip}

## Set it up

1. Create an account at 2Factor and copy your **API key** from its dashboard.
2. In the admin panel, go to **Integrations** and open **2Factor**.
3. Tick **Enable 2 Step SMS Authentication**.
4. Paste your key into **2Factor API Key**.
5. Click **Save**.
6. Go to **Settings › General** and, under **Regional**, choose your main **Country**. Its dialling code becomes the
   default in every phone field, which saves members typing it. Click **Save changes**.
{: .steps}

## What changes for members

- On **Edit profile**, the phone field becomes **Mobile phone number** and is required, with the note "Used for SMS
  authentication."
- Members with a valid mobile number get a code by SMS after entering their password, and must type it on the
  **2 Step SMS Authentication** page to finish signing in.
- Members without a number sign in with their password only, until they add one.

Test it with your own account first: add your mobile number to your profile, sign out and sign in again.
{: .note}

## Settings reference

| Setting | What it does |
| --- | --- |
| **Enable 2 Step SMS Authentication** | Switches on SMS codes, phone login and phone register. |
| **2Factor API Key** | Your 2Factor key. Required while SMS authentication is on. |
| **Sender Id** | Optional, under **Transactional SMS**. The sender name your extra notification messages come from; 2Factor has to approve it. |
| **Subscription Payment Template Name** | Optional. The name of a 2Factor message template sent when a member's [membership](/membership-plans/) payment is received. |
| **Expiring Subscription Template Name** | Optional. The template sent when a member's membership expires in two days. |
| **Featured Ad Payment Template Name** | Optional. The template sent when payment for a [featured listing](/how-to-create-featured-plan/) is received. |

The transactional messages are only sent to members with a phone number, and only once you've created matching
templates in your 2Factor account. Leave these fields empty if you don't need them.

## Tips and limits

- Each code costs you one SMS. Phone login and phone register send a code every time, so keep an eye on your 2Factor
  balance; when it runs out, members with a number on their profile can't finish signing in.
- If a member changes phone number and can't receive codes, edit them in **Users**, correct or empty the **Phone**
  field and click **Submit**.
- Older sites that were set up with Clickatell keep their existing configuration, but Clickatell can no longer be set
  up from the admin panel. Use 2Factor for new set-ups.

## Related guides

- [Two-step login with an authenticator app](/2-step-authentication/) — the free alternative.
- [Sign-up and login settings](/registration-and-login/) — the rest of the sign-up and login options.
- [Manage users](/manage-users/) — edit a member's phone number.
{: .cards}
