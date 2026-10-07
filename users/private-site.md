---
title: Private site (members only)
description: Close your marketplace to the public so only members you've added can see it, with a request-access form for everyone else.
section: users
order: 120
permalink: /private-site/
keywords: private site, members only, closed community, intranet, staff marketplace, club, request access, invite only, login required, hide site
updated: 2026-10-07
---

A private site is visible only to signed-in members. Everyone else sees a landing page with a login form and a
**Request Access** button, and nobody can sign up on their own: you decide who gets an account.

It suits closed communities: a marketplace for a company's staff, a school, a club or a group of trade partners.

## Make your site private

1. Go to **Settings › General**.
2. In **Access & privacy**, switch on **Private Site**.
3. Optionally choose a page in **Private Site Landing Page Content** (see below).
4. Click **Save changes**.
{: .steps}

Open your site in a private browser window to see what visitors now get.

## What visitors see

Signed-out visitors get the private-site landing page on every address of your site, including listings, search
and the sign-up page. It shows:

- your site name and "This is a private website, you need to login to see the content!", or the page you chose in
  **Private Site Landing Page Content**;
- a login form with **Email**, **Password** and **Remember me**;
- a **Request Access** button.

Search engines get the same page, marked so it isn't indexed, so your listings drop out of search results.

### Write your own landing page

The default message is short. To explain what your community is and who may join:

1. Create a page in **Pages** with a title and the text you want, for example "Members' marketplace of the
   Riverside Sailing Club". See [Pages](/how_to_add_pages/).
2. Choose it in **Settings › General › Private Site Landing Page Content** and click **Save changes**.
{: .steps}

## Add members

On a private site you create every account yourself:

- one at a time with **Add user** on the [Users](/manage-users/#add-a-member-yourself) page, or
- many at once with [Import users](/how-to-import-users/).

No welcome email is sent when you add someone, so tell them their email and password yourself, and ask them to
change the password from their profile.

## Access requests

When a visitor clicks **Request Access** and sends their name and email address, you receive an email titled
"Access Request" at your site's notification address (see [Email settings](/general-email-configuration/)). Reply to
it to say yes or no, and create the account if you accept. Requests from addresses that already have an account are
refused with "User already exists".

## Things to know

- **Password resets:** members can't use **Forgot password?** while they're signed out, because that page is
  private too. If someone forgets their password, set a new one for them in **Users** (they get it by email).
- **Links in emails:** links in your site's emails that normally sign members in automatically only work after the
  member has signed in.
- **Social login and phone login** aren't offered on the private landing page.
- **Signed-in members** of every role can see and use the whole site as normal: post listings, send messages and so on.

## Private site or maintenance mode?

- **Private site** keeps the site open to signed-in members of every role. Use it for a permanent members-only marketplace.
- **[Maintenance mode](/how-to-activate-maintenance-mode/)** hides the site from everyone except administrators and
  moderators. Use it while you build or make big changes.

If you only want to hide listing details or the contact form from visitors, you don't need a private site: use
**Require Login to View Listing** or **Require Login to Contact** in **Listings › Settings**. See
[Listing page and form fields](/how-to-manage-advertisement-fields/).
{: .tip}

## Related guides

- [Manage users](/manage-users/) — add and manage members.
- [Sign-up and login settings](/registration-and-login/) — or limit sign-ups to certain email domains instead.
- [Pages](/how_to_add_pages/) — write the landing page text.
{: .cards}
