---
title: Manage users
description: Find any member, see what they post, change their details, role or password, and deal with spammers and old accounts.
section: users
order: 10
permalink: /manage-users/
keywords: users, members, accounts, search, edit user, role, status, inactive, ban, spam, delete user, change password, add user, unconfirmed
updated: 2026-10-07
---

The **Users** page lists everyone who has an account on your marketplace: members who signed up, people who posted a
listing (an account is created for them automatically), and your own team. From here you can look anyone up, change
their details, reset their password, and stop spammers.

Open it from **Users** in the admin panel sidebar.

## The Users page at a glance

At the top, four counters give you a quick health check:

| Counter | What it counts |
| --- | --- |
| **Total users** | Every account, with how many joined in the last 30 days. |
| **Sellers** | Members who have posted at least one listing. |
| **Unconfirmed** | Members who signed up but haven't confirmed their email address yet. |
| **Spam** | Accounts marked as spam, with a link to the **Black list**. |

Below the counters, tabs filter the list by status: **All**, **Active**, **Unconfirmed**, **Inactive** and **Spam**
(a tab only appears when at least one account has that status).

The buttons at the top right take you to the other user tools:

- **Roles** — what each kind of account may do in the admin panel. See [Roles and permissions](/roles-work-classified-ads-script/).
- **User fields** — extra profile fields. See [User custom fields](/users-custom-fields/).
- **Import** and **Export CSV** — see [Import users](/how-to-import-users/) and [Export users](/how-to-export-users/).
- **Add user** — create an account yourself.

## Find a member

- Type in **Search name or email…** and press Enter. You can also search by a member's ID number.
- Use **Any role** to show only administrators, moderators, translators or normal users. The number next to each role
  is how many accounts have it.
- Sort with the menu on the right: **Newest**, **Oldest**, **Last active**, **Name A–Z** or **Most logins**.

Each row shows the member's role, how many listings they have (click the number to see them), when they were last
active, their status and the date they joined. The list shows 50 members per page.

## Edit a member

Click a member's name or **Edit**. The edit page has their account details on the left and shortcuts to their
listings, orders and reviews on the right.

1. Change what you need: name, email, description, phone, address, **Status**, **Role** or any
   [user custom field](/users-custom-fields/).
2. Click **Submit**.
{: .steps}

Technical details such as login counts, tokens and payment-account IDs are tucked away under **Advanced**. You rarely
need them; leave them alone unless support asks you to change one.

### What each status means

| Status | What happens |
| --- | --- |
| **Active** | Normal account: can sign in, post and send messages, and has a public profile. |
| **Unconfirmed** | Signed up but hasn't clicked the confirmation link yet (only when [email verification](/registration-and-login/#confirm-email-addresses) is on). Can't sign in until confirmed. |
| **Inactive** | Can't sign in (the login form says the email or password is wrong). Their public profile is hidden. |
| **Spam** | Is signed out straight away and can't use the account. With the [Black list](/activate-blacklist-works/) on, their email address also can't post or send messages. |

Changing a member's status doesn't change their listings. To hide a deactivated member's listings too, open
**Listings** from the row's menu and deactivate or delete them there.
{: .note}

A member stuck on **Unconfirmed** who never got the confirmation email can be let in by setting their **Status** to
**Active** and clicking **Submit**.
{: .tip}

## Change a member's password

Administrators can set a new password for any member, which is the quickest fix when someone is locked out.

1. Open the member (or choose **Change password** from the **⋯** menu on their row).
2. In the **Change password** box, type the new password in **New password** and **Repeat password**.
3. Click **Save**.
{: .steps}

The member receives an email with the new password, and any temporary login block from too many wrong passwords is
lifted. Ask them to change it to one of their own from their profile.

## Other actions in the ⋯ menu

| Action | What it does |
| --- | --- |
| **Listings** | Opens All listings filtered to this member. |
| **Orders** | Opens Orders filtered to this member. |
| **Add money** | Adds credit to the member's balance. Only shown when the [eWallet](/ewallet/) is on. |
| **Change password** | Goes to the password box described above. |
| **Mark as spam** | Sets the account to **Spam**. You'll be asked to confirm. |
| **Delete** | Deletes the account for good. You'll be asked to confirm. |

**Mark as spam** and **Delete** aren't offered on your own account, and administrators, moderators and translators
can't be marked as spam.

## Mark a member as spam

Marking a member as spam is the right tool for someone who posts junk: it's reversible and, with the
[Black list](/activate-blacklist-works/) on, it stops them coming back with the same email address.

You can mark an account as spam from the Users page, or by marking one of their listings as spam in
[All listings](/how-to-manage-advertisements/), which marks the poster too. Their existing listings stay as they
are, so remove or mark those as well.

To undo it, set the member's **Status** back to **Active**, or remove them from the Black list.

## Delete a member

Deleting is permanent and removes much more than the account:

- all their listings, with their photos and reviews,
- their profile pictures, favourites, reviews, orders, forum posts and newsletter subscription.

<div class="warning" markdown="1">
Deleted accounts and everything above can't be recovered. If you only want someone gone from your site, set their
**Status** to **Inactive** or mark them as spam instead: you can change your mind later and their order history is kept.
</div>

## Add a member yourself

1. Click **Add user**.
2. Fill in at least **Name**, **Email** and **Password**, and pick a **Role** and **Status** (new accounts are
   **Active** if you leave the status empty).
3. Click **Submit**.
{: .steps}

No welcome email is sent when you create an account this way, so let the person know their password yourself. To
add many people at once, use [Import users](/how-to-import-users/).

You can't sign in as another member from the admin panel. To see what a member sees, create a test account with the
same role.
{: .tip}

## Related guides

- [Roles and permissions](/roles-work-classified-ads-script/) — give your team access to parts of the admin panel.
- [Sign-up and login settings](/registration-and-login/) — who can register, email confirmation and login limits.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — every anti-spam tool in one place.
- [Member profiles](/member-profiles/) — what visitors see on a member's public page.
{: .cards}
