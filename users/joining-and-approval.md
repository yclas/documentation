---
title: Member approval, invitations and single sign-on
description: "Decide who joins your community: approve every new account yourself, invite people by email, let visitors of a private site ask to join, and let members sign in with your organisation's account."
section: users
order: 55
permalink: /joining-and-approval/
keywords: approve members, member approval, approve new members, waiting for approval, pending accounts, moderate sign-ups, reject member, invite members, invitation, invite by email, request access, private site, closed community, join request, single sign-on, sso, openid connect, oidc, microsoft entra id, azure ad, google workspace, okta, auth0, keycloak, company login
updated: 2026-11-16
plans: Member approval and invitations on all plans. Single sign-on on the Professional and Marketplace plans (and older plans).
---

A community often wants to know who comes in. Yclas gives you four ways to control it, and you can combine them:

- **Approve new members**: every account people make themselves waits until you approve it.
- **Invite members**: send personal sign-up links by email; invited people get in straight away.
- **Request Access** on a [private site](/private-site/): with approval on, a visitor's request becomes an account
  waiting for your decision.
- **Single sign-on**: members and your team sign in with your organisation's account (Microsoft Entra ID, Google
  Workspace, Okta or any OpenID Connect provider).

Approval and single sign-on are off until you switch them on. The **Invite members** button is always there on the
**Users** page.

## Approve new members

1. Go to **Settings › General**.
2. In **Sign-ups**, switch on **Approve new members**.
3. Click **Save changes**.
{: .steps}

From then on, every account someone makes on your site starts as **Waiting for approval**. That person:

- sees "Thank you. Your account is waiting for approval by the site team. We will email you as soon as it is
  approved." after signing up, and again if they try to sign in;
- gets an email saying their request was received;
- can't sign in, post, message or buy as a member until you approve them.

You get an email for each new account at the **Sender email** of your [Email settings](/general-email-configuration/)
(only if one is set), and the dashboard's attention list shows **New members to approve**.

These accounts are **not** held: accounts you or your team create in **Users**, accounts you import, people who
accept an invitation, and new accounts made by single sign-on (see below).

### Approve or reject

1. Go to **Users** and open the **Waiting for approval** tab (it shows while at least one account is waiting).
2. Click **Approve** or **Reject** on the person's row.
{: .steps}

- **Approve**: the account becomes Active and the person gets an email with a link that signs them in and lets them
  choose a password.
- **Reject**: after you confirm, the person is told by email and the account is removed. An account that already
  has a listing or an order is kept as **Inactive** instead, so nothing is lost; it can't sign in.

The four approval emails (request received, approved, rejected, and the one you get) use the
*member-approval-received*, *member-approval-approved*, *member-approval-rejected* and *member-approval-new*
templates. Each is created the first time it is needed, and you can then reword it in
[Email templates](/automatic-emails-sent-to-users/).

### With email verification

If **Verify email addresses** is also on, approval comes first. Approving makes the account **Unconfirmed** and sends
the usual confirmation email; the member signs in once they click its link. A waiting account never gets a link
that signs it in.

### Posting and buying while approval is on

- Posting a listing needs a signed-in account. Visitors who click to post are sent to the sign-in page with "Please
  sign in to post. New accounts are approved by the site team first."
- Paying lets nobody skip the queue. A visitor who buys without an account gets a waiting account like everyone
  else. The order is kept, and they reach it once you approve them. Look for them on **Users › Waiting for approval**.

## Invite members

1. Go to **Users** and click **Invite members**.
2. In **Email addresses**, paste the addresses, one per line or separated by commas. Up to 100 at a time.
3. Click **Send invitations**.
{: .steps}

Each person gets an email with a personal link. It works once, for 14 days. It opens a **Join** page where they
choose their **Name** and a **Password** and click **Create my account**. Their account is Active straight away, even
with **Approve new members** and **Verify email addresses** on.

- Addresses that already have an account are skipped. If that account is waiting for approval, it is approved
  instead (as if you clicked **Approve**).
- Inviting the same address again replaces the earlier link.
- **Open invitations**, below the form, lists the links not used yet with when they were sent and when they expire.
  Click **Cancel** to stop a link working.
- Invitation links work on a private site too.

The emails use the *member-invite* template, which you can reword in
[Email templates](/automatic-emails-sent-to-users/). It is created the first time you send invitations.

## Request Access on a private site

On a [private site](/private-site/), visitors see a **Request Access** button. What it does depends on approval:

| Approve new members | What a request does |
| --- | --- |
| Off | Emails you the person's name and address, as before. You create the account yourself. |
| On | Creates an account for the person, waiting on **Users › Waiting for approval**. Approving it emails them a link to sign in and choose a password. |

With approval on, the visitor always sees the same thank-you message, whether or not their address already has an
account, so the form can't be used to find out who is a member. One address can send 3 requests an hour. The form
asks for your site's captcha when it uses Turnstile or the picture captcha (see [Captcha](/set-recaptcha-website/)).

## Single sign-on (OpenID Connect)

With single sign-on, the sign-in page shows a "Sign in with" button for your organisation's provider. Passwords keep
working.

1. Go to **Settings › General**.
2. In **Sign-ups**, click **Set up** next to **Single sign-on**.
3. At your provider, create a "web" application using OpenID Connect, and add the **Redirect URI** shown on the page
   as its redirect (callback) address.
4. Fill in **Provider name** (shown on the button), **Issuer URL**, **Client ID** and **Client secret**.
5. In **Who can sign in**, enter your **Allowed email domains**. Switch on **Create accounts automatically** if
   people signing in for the first time should get an account, and choose the **Role for new accounts**.
6. Switch on **Show the single sign-on button** and click **Save**.
{: .steps}

Good to know:

- For Microsoft Entra ID, use the tenant ID in the issuer, not "common". For Google, the issuer is
  `https://accounts.google.com`.
- **Create accounts automatically** needs at least one allowed email domain. Without it, only people who already
  have an account with the same email can sign in.
- New accounts never get the administrator role. A role that can open the admin panel needs **Yes, new accounts may
  get a team role** as well; without it, new accounts are plain users.
- **Panel roles must use single sign-on** is part of the Enterprise plan only.

### Single sign-on and approval

- A new account made by single sign-on is not held: your organisation's directory vouches for it.
- An account already waiting for approval is let in, and leaves the queue, when the person signs in with single
  sign-on, but only if **Allowed email domains** is filled in or your provider is your organisation's own. Public
  Google sign-in with no allowed domains lets nobody skip the queue.

## Good to know

- **Forgot password?** and Google or Facebook sign-in are still not reachable on a private site. Set a new password
  for a member in [Users](/manage-users/) if they're locked out.
- Links in your site's own emails (confirm your email, sign-in links) now work for signed-out visitors on a private
  site.
- The private site's landing page doesn't show the single sign-on button. Members can open `/oc-panel/auth/sso` to
  sign in with it.
- With reCAPTCHA as your captcha, **Request Access** shows no captcha; the limit of 3 requests an hour per address is
  the only guard.
- A newsletter sign-up on a site with approval on creates a waiting account.
- The invitation page shows your site's header and menus to the invitee, also on a private site.
- Approved accounts don't get the eWallet sign-up reward, unless email verification is on (they get it when they
  confirm their email).
- These pages are in English for now; translations follow.

## Related guides

- [Sign-up and login settings](/registration-and-login/) — email verification, allowed and blocked domains.
- [Private site](/private-site/) — close your site to everyone but members.
- [Manage users](/manage-users/) — find, edit and add members.
- [Email templates](/automatic-emails-sent-to-users/) — reword the approval and invitation emails.
{: .cards}
