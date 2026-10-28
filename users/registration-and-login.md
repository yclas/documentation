---
title: Sign-up and login settings
description: Decide who can create an account, make members confirm their email address, offer email sign-in links and understand login limits.
section: users
order: 50
permalink: /registration-and-login/
redirect_from:
  - /allowed-email-domains/
  - /login-attempts-to-zero/
keywords: register, registration, account type, private or business, sign up as business, magic link, email sign-in link, sign in without password, passwordless, sign in with apple, apple login, whatsapp button, telegram button, listing drafts, hide phone number, sign up, signup, login, sign in, verify email, confirm email, email domains, allowed domains, blocked emails, disposable email, failed login attempts, locked out, forgot password, reset password, can't log in, cannot login, can't sign in, login not working, users can't log in, members can't log in, new member, new members can't sign up, sign up not working, confirmation email not received, sign-in link not showing
updated: 2026-10-28
plans: Available on all plans
---

<div class="summary" markdown="1">
- These settings decide who can sign up, whether members confirm their email address, and what happens after wrong passwords.
- Most are in **Settings › General**, in the **Sign-ups** section.
- **Allowed email domains** is checked at sign-in too, so earlier members on other domains are locked out.
- Five wrong passwords in a row block sign-in for 24 hours; **Forgot password?** gets members back in.
</div>

Members sign up on your site's **Register** page and sign in on the **Login** page. People who post a listing without
an account get one automatically, using the email address they gave. This guide covers the settings that control
who may sign up, how they prove their email address is real, and what happens when someone gets their password wrong.

Most of these settings are in **Settings › General**, in the **Sign-ups** section.

## Sign-up settings

{% include figure.html src="panel/signup-settings.webp" alt="Settings › General, Sign-ups section: Verify email addresses, allowed and blocked email domains, block email subdomains and blocked email addresses" caption="Settings › General › Sign-ups." %}


| Setting | What it does |
| --- | --- |
| **Verify email addresses** | New members get an email with a confirmation link and can't sign in until they click it. |
| **Allowed email domains** | Only email addresses at these domains can sign up or sign in. Leave empty to allow everyone. |
| **Blocked email domains** | Email addresses at these domains can't sign up or sign in. Works together with the [Black list](/activate-blacklist-works/) add-on, which must be on. |
| **Block email subdomains** | Blocks addresses on subdomains, such as `name@mail.example.com`, which spammers use a lot. Country domains like `name@example.co.uk` still work. |
| **Blocked email addresses** | Messages from these exact addresses, one per line, are silently dropped by your contact forms. The sender sees a normal "Success" message. |

Change what you need and click **Save changes** in the bar at the bottom.

Write domains without spaces and separated by commas only: `university.edu,partner.org`. A space after the comma
stops the next domain from matching.
{: .tip}

### Confirm email addresses

Switch on **Verify email addresses** when fake or mistyped addresses are a problem. With it on:

1. The member signs up and sees a message asking them to check their inbox (and spam folder).
2. Their account is created as **Unconfirmed**, and they get the confirmation email.
3. When they click the link, the account becomes **Active** and they're signed in.
{: .steps}

Until then, trying to sign in shows "Please verify your email before log in." Unconfirmed members are counted on the
[Users](/manage-users/) page. If someone never receives the email, set their **Status** to **Active** yourself, and
check [Emails aren't arriving](/troubleshooting-email-errors/).

The confirmation email is the *auth-verify-email* template; without verification, members get *auth-register*
instead. You can reword both in [Email templates](/automatic-emails-sent-to-users/).

### Only allow certain email domains

**Allowed email domains** turns your marketplace into a closed community without making it private: a university
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
| *I am signing up as*: private, business or [your own account types](/account-types/#your-own-account-types) | **Ask the account type at sign-up** in **Settings › General › Business sellers**. See [Private and business accounts](/account-types/). |
| A captcha | **Captcha** in **Listings › Settings**. See [reCAPTCHA](/set-recaptcha-website/). |
| An "I agree to the Terms of service" box | **Terms of service** in **Listings › Settings**: choose the page members must accept. |
| Buttons to sign up with Facebook, Google or another provider | [Social login](/how-to-login-using-social-auth-facebook-google-twitter/). |
| A **Sign in with Apple** button | **Add-ons › Apple**, with an Apple Developer account. Shown in Nova and Atlantic Lite. |
| Sign-up with a phone number | [Two-step login by SMS](/2-step-sms-authentication/). |

To stop new sign-ups altogether and add members yourself, make your site [private](/private-site/).

## Logging in

Members sign in with their email address and password. **Remember me** keeps them signed in on that device.

### Email sign-in links

With **Email sign-in links** on, members can ask for an email with a one-time link instead of typing their
password: no password needed, which helps members who signed up long ago and forgot it. The link **Email me a sign-in
link instead** appears:

- on the login form of the Nova and Default themes, and of themes that use the Default login form;
- on the posting form of every theme, in the message *This email already has an account. Please log in to post with
  it.* that a visitor sees when they post with the email address of an existing account.

Themes with their own login form, such as Mercury and Atlantic Lite, don't show the link on the login page yet, only
in that posting message.

1. The member clicks **Email me a sign-in link instead** and enters their email address.
2. They open the email and click the link.
3. A page opens with a **Sign in** button. One click and they're signed in.
{: .steps}

Each link works once, for 15 minutes. The page asks for that one click so that email security scanners, which open
links on their own, can't use the link up. To stop misuse, one email address can ask for 3 links an hour. The answer
on screen is the same whether or not the address has an account, so nobody can use the form to find out who is a member.

To switch it on or off, go to **Settings › General**, section **Sign-in and contact** (see below), on any theme.
It's on for new sites and off on older ones until you switch it on. The email is the *auth-magiclink* template in [Email templates](/automatic-emails-sent-to-users/).

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
*auth-remember* email template). The link signs them in and opens the page where they choose a new password.

## Sign-in and contact options

**Settings › General** has a **Sign-in and contact** section with these switches. With the Nova theme you see all
five; with any other theme, only **Email sign-in links**. Change what you need and click **Save changes**.

{% include figure.html src="panel/signin-settings.webp" alt="Settings › General, Sign-in and contact section: email sign-in links, listing drafts, WhatsApp and Telegram buttons, phone numbers for signed-in visitors" %}


| Setting | What it does | New sites |
| --- | --- | --- |
| **Email sign-in links** | Members can ask for a one-time sign-in link by email instead of typing a password (see [above](#email-sign-in-links)). | On |
| **Listing drafts** | The posting form is saved as a draft while a signed-in seller types. If they leave, they find it in **My Listings** with a **Finish listing** button. | On |
| **WhatsApp button on listings** | Sellers can tick a box on the posting and edit forms to add a WhatsApp button to their listing, which opens a chat with the listing's phone number. | Off |
| **Telegram button on listings** | Sellers can add a Telegram button to their listing, using the Telegram username in their profile. | Off |
| **Phone numbers for signed-in visitors only** | Visitors see "Login to see phone number" instead of the seller's number until they sign in. | Off |

On a site created before these options arrived, all five start off.

About listing drafts:

- Drafts are private: only the seller sees them, in **My Listings**. They never appear on your site and don't count
  towards a seller's listing limit.
- **Finish listing** opens the normal posting form, filled in from the draft, so publishing follows all your usual
  rules (moderation, payment, captcha).
- Photos aren't saved in a draft: the seller adds them when they finish.
- A seller can keep up to 10 drafts. Drafts nobody has touched for 30 days are deleted automatically.

The WhatsApp and Telegram buttons and the drafts are drawn by Nova only. **Phone numbers for signed-in visitors only**
also applies to the Default theme's listing page and to the Yclas mobile apps.
{: .note}

## Members can't sign in

When a member tells you they can't sign in, ask what they see, then check the table:

| What they see | Likely reason and fix |
| --- | --- |
| "Wrong email or password" | Usually a mistyped or forgotten password: ask them to use **Forgot password?**. If the password is right, their account may be **Inactive**: set it to **Active** in [Users](/manage-users/). |
| "Please verify your email before log in." | The account is **Unconfirmed** because they haven't clicked the link in the confirmation email. Ask them to check their spam folder, or set their **Status** to **Active** yourself. |
| "Login has been temporarily disabled…" | Too many wrong passwords (see above). They can wait, use **Forgot password?**, or you can set a new password for them. |
| "Email must contain a valid email domain" | Their domain isn't on your **Allowed email domains** list, is on the disallowed list, or is a disposable-email service. |
| They're signed out again straight away | Their account is marked as **Spam**. Change it in [Users](/manage-users/) if that was a mistake. |
| They joined with Facebook or Google and have no password | They sign in with the same button. To use an email and password instead, they set a password with **Forgot password?**. |
| The password-reset or confirmation email never arrives | See [Emails aren't arriving](/troubleshooting-email-errors/). Meanwhile you can set their password or status yourself. |

You can see and change every member's status and password on their page in [Users](/manage-users/).

If **you** can't get into your own admin panel, see [Locked out of the admin panel](/accidentally-changed-admin-privilege-can-fix/).
{: .tip}

### New members can't sign up

- Make sure your site isn't in [maintenance mode](/how-to-activate-maintenance-mode/) or set to
  [private](/private-site/): both stop visitors from signing up.
- Check **Allowed email domains** and **Blocked email domains** above: a list that's too strict turns people away.
- If the captcha shows an error, see [reCAPTCHA](/set-recaptcha-website/#captcha-errors-when-posting-or-signing-up).

## Related guides

- [Two-step login with an authenticator app](/2-step-authentication/) — extra security for your team and members.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — keep fake accounts out.
- [Publishing options](/how-to-configure-publish-options/) — require an account to post, contact sellers or view listings.
- [Private and business accounts](/account-types/) — ask the account type at sign-up and decide who can post.
- [Private site](/private-site/) — a members-only marketplace.
{: .cards}
