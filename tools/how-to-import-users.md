---
title: Import users from a CSV file
description: Create member accounts in bulk from a spreadsheet, with passwords, newsletter consent, a profile photo and user custom fields.
section: tools
order: 30
permalink: /how-to-import-users/
keywords: import users, members, csv, bulk, spreadsheet, migrate, accounts, profile picture, subscriber
updated: 2026-10-07
---

The user import creates member accounts from a spreadsheet. Use it to bring over the members of a club, a customer
list, or the users of a website you are moving to Yclas.

If your members also have listings, you may not need this: the [listing import](/how-to-import-ads/) creates the
seller of each listing automatically. Use the user import for people without listings, or to give imported sellers
their own password and profile details.

## Build the file

Save your spreadsheet as **CSV**, encoded as UTF-8. The first row must hold these column names, in lower case and in
this order:

```
name,email,password,subscriber,image_1
```

| Column | What to put in it |
| --- | --- |
| `name` | The member's name, as shown on their profile. Required. |
| `email` | Their email address, which they sign in with. Required. |
| `password` | The password they will sign in with. Leave it empty and Yclas creates a random one. |
| `subscriber` | `1` if they agreed to receive emails from your site (newsletters, alerts), `0` if not. Required. |
| `image_1` | The web address of a profile photo, starting with `https://`. Optional. |

### User custom fields

If you have [user custom fields](/users-custom-fields/), you can fill them in too. Add one column per field after
`image_1`, named `cf_` followed by the field name, for example `cf_company`. Include every user custom field your site
has, in the order they are listed, even ones you leave empty.

## Import the file

1. In the admin panel, go to **Tools** (or **Users › Import**).
2. In the **Import users** card, choose your file and click **Upload**.
3. Click **Process** and keep the page open until it reaches 100%.
4. Check the new accounts under **Users**.
{: .steps}

## What happens to each row

- A new account is created as an active member with the **User** role. To make someone a moderator or administrator,
  change their role afterwards under **Users**. See [Roles and permissions](/roles-work-classified-ads-script/).
- **No email is sent.** Members aren't told they have an account. Let them know yourself, for example with a
  [newsletter](/how-to-send-the-newsletter/), and point those without a password to **Forgot password** on the login
  page.
- **Existing members are not duplicated.** If the email already belongs to a member, no new account is made. Their
  `subscriber` choice and any custom field values in the file are applied to the existing account; their password is
  not changed.

<div class="important" markdown="1">
**Only import people who agreed to it.** Set `subscriber` to `1` only for people who have agreed to hear from you.
Emailing people who never signed up is against the law in many countries and is the quickest way to get your emails
marked as spam.
</div>

## Limits and gotchas

- Up to 10,000 rows and 1 MB per file. Split bigger lists.
- Uploading a new file replaces any rows still waiting to be processed, so process one file before uploading the next.
- An empty `name`, `email` or `subscriber` on any row makes the upload fail.
- If the header doesn't match, the error message lists the exact column names your site expects.
- Passwords in a CSV file are readable by anyone who sees the file. Delete the file once the import is done, or leave
  the column empty and let members choose their own password.

## Related guides

- [Import listings from CSV](/how-to-import-ads/) — listings and their sellers in one go.
- [Export users](/how-to-export-users/) — download your member list.
- [Manage users](/manage-users/) — edit, ban or delete members.
{: .cards}
