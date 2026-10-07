---
title: Roles and permissions
description: Let moderators, translators and other helpers into the parts of the admin panel they need, and nothing more.
section: users
order: 20
permalink: /roles-work-classified-ads-script/
keywords: roles, permissions, admin, administrator, moderator, translator, staff, team, access, privileges, delegate
updated: 2026-10-07
---

Every account on your marketplace has a role. The role decides which parts of the admin panel that person can open.
Roles let you hand work to other people, such as approving listings or translating the site, without giving them
the keys to your payments, settings and members.

## The four built-in roles

| Role | Who it's for | What it can do |
| --- | --- | --- |
| **user** | Every member who signs up | Their own account only: profile, listings, messages, favourites, orders and wallet. No admin panel. |
| **translator** | Someone who translates your site | Everything a user can do, plus **Settings › Translations**. |
| **moderator** | Someone who looks after listings and content | Everything a user can do, plus **Listings** (All listings and Moderation), **Categories**, **Locations**, **Blog**, **Design › Menu** and **Settings › Translations**. |
| **admin** | You and anyone you fully trust | Everything. |

New members always get the **user** role. Only an administrator can change it.

Moderators and translators can see the admin panel sidebar, but a link outside their permissions just tells them
they don't have access. Members with the **user** role who open the admin panel are sent to their own account pages.
{: .note}

## Give someone a role

1. Go to **Users** and find the person (they need an account first; ask them to sign up or click **Add user**).
2. Click **Edit**.
3. Choose the new **Role** and click **Submit**.
{: .steps}

The new permissions apply the next time the person signs in. If they're already signed in, ask them to sign out and
back in.

<div class="warning" markdown="1">
Be careful when you edit your own account. If you change your own role away from **admin** and you're the only
administrator, you lose access to the admin panel. See [Locked out of the admin panel](/accidentally-changed-admin-privilege-can-fix/)
if that happens.
</div>

## Create a custom role

When none of the built-in roles fits, for example a "support" person who may only see orders, create your own.

1. Go to **Users** and click **Roles**.
2. Click **New**, enter a **Name** and a **Description**, and click **Submit**.
3. In the list of roles, click **Edit** next to your new role.
4. Tick the areas this role may use (see below) and click **Update**.
5. Give the role to the right people as described above.
{: .steps}

You can also change what the **user**, **translator** and **moderator** roles may do in the same way. The **admin**
role can't be changed: it always has full access.

### How the permission list works

The edit page shows one box per part of the admin panel, named after its internal name. Each box has:

- a **name.\*** checkbox, which grants everything in that part (for example **ad.\*** grants all listing management),
- one checkbox per action, for finer control (for example only **index** to look but not edit).

In most cases tick the **.\*** box. Some of the names you'll use most:

| Permission | Part of the admin panel |
| --- | --- |
| **ad.\*** | All listings and Moderation |
| **category.\***, **location.\***, **fields.\*** | Categories, Locations, Custom Fields |
| **user.\*** | Users |
| **order.\*** | Orders |
| **pages.\***, **blog.\***, **faqs.\*** | Pages, Blog, FAQ |
| **menu.\***, **widget.\***, **theme.\*** | Design › Menu, Widgets, Themes and Custom CSS |
| **translations.\*** | Settings › Translations |
| **stats.\*** | Analytics |
| **profile.\***, **myads.\***, **mylistings.\***, **messages.\*** | The member's own account pages. Keep these ticked on every role. |

Settings pages, add-ons and integrations appear under their own short names (for example **general**, **payment**,
**blacklist**, **recaptcha**). Think twice before granting them: they control how your whole site works.
{: .warning}

Custom roles can't be deleted once created. If you no longer need one, move its members to another role and untick
all its permissions except the member account pages.
{: .note}

## Good practice

- Give each helper their own account. Never share your administrator login.
- Start with the smallest set of permissions and add more when they need it.
- Have at least two administrator accounts (for example yours and a second address you control), so one mistake
  can't lock you out.
- Moderators can't be marked as spam or caught by the black list, so check who you promote.

## Related guides

- [Manage users](/manage-users/) — find, edit and change the status of accounts.
- [Moderation](/how-ads-moderation-works/) — the work moderators usually do.
- [Language and translations](/how-to-change-language/) — the page translators use.
- [Locked out of the admin panel](/accidentally-changed-admin-privilege-can-fix/) — what to do if you lose admin access.
{: .cards}
