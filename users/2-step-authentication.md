---
title: Two-step login with an authenticator app
description: Protect your admin account and let members protect theirs with a six-digit code from an authenticator app.
section: users
order: 70
permalink: /2-step-authentication/
keywords: two-step, 2-step, two-factor, 2fa, mfa, authenticator, google authenticator, microsoft authenticator, authy, verification code, qr code, security, totp
updated: 2026-10-07
---

Two-step login asks for a second proof after the password: a six-digit code from an authenticator app on the
member's phone. The code changes every 30 seconds, so a stolen password alone is no longer enough to get into an
account. We strongly recommend it for every administrator and moderator account.

Any standard authenticator app works, such as Google Authenticator, Microsoft Authenticator, Authy or a password
manager with one-time codes.

Two-step login is optional for each person: members switch it on for their own account. Turning the feature on for
your site only makes the option available.

## Turn the feature on for your site

On new sites it's already on. To check:

1. In the admin panel, go to **Integrations** and open **Google Authenticator**.
2. Tick **Enable Google Authenticator**.
3. Click **Save**.
{: .steps}

A **2 Step Authentication** section now appears on everyone's **Edit profile** page.

## Set it up on an account

Do this for your own administrator account first:

1. Sign in on your site's front end and open **Edit profile** from your account menu.
2. In the **2 Step Authentication** section, open your authenticator app, add an account and scan the QR code.
3. Click **Enable**.
4. Type the six-digit code your app shows into **Verification Code** and click **Verify**.
{: .steps}

You'll see "2 Step Authentication Enabled". If the code is refused, check your phone's clock is set automatically and
try the newest code.

Members follow the same steps. You may want to explain them on an FAQ page.

## Signing in with two-step login

1. Enter your email and password as usual.
2. On the **2 Step Authentication** page, open your authenticator app, type the current code for your site and click
   **Verify**.
{: .steps}

The code is asked for again each time you sign in after signing out.

## Turn it off or recover an account

- **On your own account:** open **Edit profile** and click **Disable** in the **2 Step Authentication** section.
- **For a member who lost their phone:** go to **Users**, edit the member, open **Advanced**, empty the
  **google_authenticator** field and click **Submit**. They can sign in with their password and set up two-step login
  again.

Once two-step login is on, the profile section shows a text key under the QR code (**Google Authenticator Code**).
Keep it somewhere safe, such as your password
manager. With it you can add the account to a new phone without anyone's help.
{: .tip}

<div class="warning" markdown="1">
If you're the only administrator and lose your phone, nobody on your site can clear your code for you. Keep the text
key safe, or create a second administrator account. As a hosted customer you can also ask
[Yclas support](/use-yclas-support-system/) to help.
</div>

## Switching the feature off for the whole site

Unticking **Enable Google Authenticator** stops asking everyone for codes and hides the section from profiles. Members'
setups are kept: if you switch it on again, members who had it set up are asked for codes again.

## Related guides

- [Two-step login by SMS](/2-step-sms-authentication/) — codes by text message instead of an app.
- [Sign-up and login settings](/registration-and-login/) — login limits and password resets.
- [Roles and permissions](/roles-work-classified-ads-script/) — keep admin access to the people who need it.
{: .cards}
