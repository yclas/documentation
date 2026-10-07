---
title: Sign-up and login settings
description: Decide who can create an account, make members confirm their email address, restrict email domains and understand login limits.
section: users
order: 50
permalink: /registration-and-login/
redirect_from:
  - /allowed-email-domains/
  - /login-attempts-to-zero/
keywords: register, registration, sign up, signup, login, sign in, verify email, confirm email, email domains, allowed domains, blocked emails, disposable email, failed login attempts, locked out, forgot password, reset password
updated: 2026-10-07
---

Members sign up on your site's **Register** page and sign in on the **Login** page. People who post a listing without
an account get one automatically, using the email address they gave. This guide covers the settings that control
who may sign up, how they prove their email address is real, and what happens when someone gets their password wrong.

Most of these settings are in **Settings › General**, in the **Sign-ups** section.

## Sign-up settings

| Setting | What it does |
| --- | --- |
| **User Must Verify Email** | New members get an email with a confirmation link and can't sign in until they click it. |
| **Allowed Email Domains** | Only email addresses at these domains can sign up or sign in. Leave empty to allow everyone. |
| **Disallowed Email Domains** | Email addresses at these domains can't sign up or sign in. Works together with the [Black list](/activate-blacklist-works/) add-on, which must be on. |
| **Disallow Email Subdomains** | Blocks addresses on subdomains, such as `name@mail.example.com`, which spammers use a lot. Country domains like `name@example.co.uk` still work. |
| **Blocked Emails** | Messages from these exact addresses, one per line, are silently dropped by your contact forms. The sender sees a normal "Success" message. |

Change what you need and click **Save changes** in the bar at the bottom.

Write domains without spaces and separated by commas only: `university.edu,partner.org`. A space after the comma
stops the next domain from matching.
{: .tip}

### Confirm email addresses

Switch on **User Must Verify Email** when fake or mistyped addresses are a problem. With it on:

1. The member signs up and sees a message asking them to check their inbox (and spam folder).
2. Their account is created as **Unconfirmed**, and they get the confirmation email.
3. When they click the link, the account becomes **Active** and they're signed in.
{: .steps}

Until then, trying to sign in shows "Please verify your email before log in." Unconfirmed members are counted on the
[Users](/manage-users/) page. If someone never receives the email, set their **Status** to **Active** yourself, and
check [Emails aren't arriving](/troubleshooting-email-errors/).

The confirmation email is the **auth-verify-email** template; without verification, members get **auth-register**
instead. You can reword both in [Email templates](/automatic-emails-sent-to-users/).

### Only allow certain email domains

**Allowed Email Domains** turns your marketplace into a closed community without making it private: a university
marketplace that only accepts `@university.edu`, or a staff marketplace for one company.

<div class="warning" markdown="1">
The allowed list is checked when people sign in too, not only when they sign up. Members who joined earlier with
another address can't sign in after you set it, until you add their domain or change their email address. Your own
administrator address always works.
</div>

### Other checks on every new email address

Whatever you set above, Yclas also refuses addresses whose domain can't receive email. With the
[Black list](/activate-blacklist-works/) add-on on (the default for new sites), it also refuses throwaway addresses
from known disposable-email services.

## What else appears on the sign-up form

| Item | Where to set it up |
| --- | --- |
| Name, email, password and password confirmation | Always shown. |
| Your own extra questions | [User custom fields](/users-custom-fields/) with **Show on sign-up**. |
| A captcha | **Captcha** in **Listings › Settings**. See [reCAPTCHA](/set-recaptcha-website/). |
| An "I agree to the Terms of service" box | **Terms of Service** in **Listings › Settings**: choose the page members must accept. |
| Buttons to sign up with Facebook, Google or another provider | [Social login](/how-to-login-using-social-auth-facebook-google-twitter/). |
| Sign-up with a phone number | [Two-step login by SMS](/2-step-sms-authentication/). |

To stop new sign-ups altogether and add members yourself, make your site [private](/private-site/).

## Logging in

Members sign in with their email address and password. **Remember me** keeps them signed in on that device.

### Too many wrong passwords

To slow down people guessing passwords, Yclas blocks sign-in for a while after repeated failures on the same account:

| Failed attempts in a row | What happens |
| --- | --- |
| 3 or 4 | The member must wait a minute before trying again: "Login has been temporarily disabled due to too many unsuccessful login attempts. Please try again in a minute." |
| 5 or more | Sign-in is blocked for 24 hours after the last failed attempt: "…Please try again in 24 hours." |

A successful sign-in resets the count. To let a blocked member in straight away, either:

- ask them to use **Forgot password?** on the login page: the email they get contains a link that signs them in
  directly, so they can set a new password; or
- set a new password for them on the [Users](/manage-users/#change-a-members-password) page, which also clears the block.

### Forgotten passwords

**Forgot password?** on the login form asks for the member's email address and sends them a link (the
**auth-remember** email template). The link signs them in and opens the page where they choose a new password.

### Members who can't sign in at all

| What they see | Likely reason |
| --- | --- |
| "Wrong email or password" although the password is right | Their account is **Inactive**. |
| "Please verify your email before log in." | Their account is **Unconfirmed**. |
| "Email must contain a valid email domain" | Their domain isn't on your **Allowed Email Domains** list, is on the disallowed list, or is a disposable-email service. |
| They're signed out again straight away | Their account is marked as **Spam**. |

You can check and change all of these on the member's page in [Users](/manage-users/).

## Related guides

- [Two-step login with an authenticator app](/2-step-authentication/) — extra security for your team and members.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — keep fake accounts out.
- [Publishing options](/how-to-configure-publish-options/) — require an account to post, contact sellers or view listings.
- [Private site](/private-site/) — a members-only marketplace.
{: .cards}
