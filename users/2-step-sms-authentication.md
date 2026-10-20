---
title: Two-step login by SMS
description: Send members a one-time code by text message when they sign in, let them register and log in with their phone number, and make them confirm the number first.
section: users
order: 80
permalink: /2-step-sms-authentication/
keywords: sms, text message, two-step, 2-step, two-factor, 2fa, one-time code, otp, phone login, phone register, mobile number, 2factor, twilio, clickatell, confirm phone number, verify phone number, phone not confirmed, send me a code
updated: 2026-10-20
---

SMS authentication texts a one-time code to a member's mobile phone. Once it's on, it does three things:

- **Two-step login:** members who have a mobile number on their profile must type the code they receive each time
  they sign in.
- **Phone login:** the login page offers **Phone Login**, so members can sign in with their number and a code
  instead of a password.
- **Phone register:** the sign-up page offers **Phone Register**: new members enter their number, confirm it with a
  code, then give their name and email address.

Text messages are sent through an SMS service you sign up to and pay for yourself, per message:
[2Factor](https://2factor.in) or [Twilio](https://www.twilio.com). Check its coverage and prices for the countries
your members are in before you switch this on.

Prefer the free [authenticator-app method](/2-step-authentication/) if you only want two-step login. SMS suits
markets where members expect to log in with their phone number.
{: .tip}

## Set it up

Choose one of the two services. Switching one on makes it the service your site uses.

### With 2Factor

1. Create an account at 2Factor and copy your **API key** from its dashboard.
2. In the admin panel, go to **Add-ons** and open **2Factor** (type its name in **Search add-ons…**).
3. Switch on **Enable SMS verification**.
4. Paste your key into **API key**.
5. Click **Save**.
{: .steps}

### With Twilio

1. In your Twilio account, copy your **Account SID** and **Auth Token**, and buy or choose a phone number that can
   send SMS.
2. In the admin panel, go to **Add-ons** and open **Twilio**.
3. Switch on **Enable phone sign-in and SMS verification through Twilio**.
4. Fill in **Account SID**, **Auth Token** and **From number** (in international format, such as `+447700900123`).
5. Click **Save**.
{: .steps}

Once you've saved the **Auth Token**, the field stays empty: leave it blank to keep the saved token.

### Then set your country

Go to **Settings › General** and, under **Regional**, choose your main **Country**. Its dialling code becomes the
default in every phone field, which saves members typing it. Click **Save changes**.

## What changes for members

- On **Edit profile**, the phone field becomes **Mobile phone number** and is required, with the note "Used for SMS
  authentication."
- Members with a valid mobile number get a code by SMS after entering their password, and must type it on the
  **2 Step SMS Authentication** page to finish signing in.
- Members without a number sign in with their password only, until they add one.

Test it with your own account first: add your mobile number to your profile, sign out and sign in again.
{: .note}

## Members confirm their phone number

A number typed on a profile could belong to anyone. So, before a number can be used with **Phone Login**, the member
has to prove it's theirs:

1. After saving a new or changed number on their profile, the member sees *Confirm your phone number to sign in
   with it.* with a **Send me a code** link.
2. On the **Confirm your phone number** page, they click **Send me a code**.
3. They type the code from the SMS. Their number is now confirmed.
{: .steps}

- Every time the number on an account changes, by the member, by you in [Users](/manage-users/) or through an import,
  it needs confirming again. Saving the same number again keeps it confirmed.
- Numbers confirmed with a code on **Phone Register** are confirmed already, and numbers that were on accounts
  before this check arrived count as confirmed.
- If someone signs up with **Phone Register** using a number that another account had only typed, without
  confirming it, the number moves to the new account. A confirmed number is never taken away.
- On sites without SMS authentication, a phone number is just a contact number and nothing needs confirming.

## Codes and limits

To stop people running up your SMS bill, every code follows the same rules:

- a code works for 10 minutes and for 5 tries; after that the member asks for a new one;
- one number can get a new code once a minute, and 3 codes an hour;
- one internet connection can ask for 5 codes an hour, and your whole site sends at most 30 an hour and 150 a day.

Opening or reloading a code page doesn't send another SMS.

## 2Factor settings

| Setting | What it does |
| --- | --- |
| **Enable SMS verification** | Switches on SMS codes, phone login and phone register with 2Factor. |
| **API key** | Your 2Factor key. Required to send the codes. |
| **Sender ID** | Optional, under **Transactional SMS**. The sender name your extra notification messages come from; 2Factor has to approve it. |
| **Subscription payment template** | Optional. The name of a 2Factor message template sent when a member's [membership](/membership-plans/) payment is received. |
| **Expiring subscription template** | Optional. The template sent 2 days before a member's membership expires. |
| **Featured listing payment template** | Optional. The template sent when payment for a [featured listing](/how-to-create-featured-plan/) is received. |

The transactional messages are only sent to members with a phone number, and only once you've created matching
templates in your 2Factor account. Leave these fields empty if you don't need them.

## Tips and limits

- Each code costs you one SMS. Phone login and phone register send a code every time, so keep an eye on your SMS
  balance; when it runs out, members with a number on their profile can't finish signing in.
- If a member changes phone number and can't receive codes, edit them in **Users**, correct or empty the **Phone**
  field and click **Submit**.
- Older sites that were set up with Clickatell keep their existing configuration, but Clickatell can no longer be set
  up from the admin panel. Use 2Factor or Twilio for new set-ups.

## Related guides

- [Two-step login with an authenticator app](/2-step-authentication/) — the free alternative.
- [Sign-up and login settings](/registration-and-login/) — the rest of the sign-up and login options.
- [Manage users](/manage-users/) — edit a member's phone number.
{: .cards}
