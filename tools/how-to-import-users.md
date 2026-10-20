---
title: Import users from a CSV file
description: Create member accounts in bulk from a spreadsheet, with a profile photo and user custom fields, after checking a preview.
section: tools
order: 30
permalink: /how-to-import-users/
keywords: import users, import members, members, csv, bulk, spreadsheet, migrate, accounts, profile picture, user custom fields
updated: 2026-10-20
---

A users import creates member accounts from a spreadsheet. Use it to bring over the members of a club, a customer
list, or the users of a website you are moving to Yclas.

If your members also have listings, you may not need it: the [listing import](/how-to-import-ads/) creates the seller
of each listing automatically, and [Move your site to Yclas](/how-to-migrate-osclass-to-yclas/) brings over every
member of a site on Osclass, Flynax, LaraClassifier, WordPress or Yclas. Use a users file for people without
listings.

## Build the file

Save your spreadsheet as **CSV**, encoded as UTF-8, with the column names in the first row. Use these names and
Yclas matches them for you:

```
name,email,image_1
```

| Field | What to put in it |
| --- | --- |
| **Email** | The member's email address, which they sign in with. Rows without a valid email are skipped. |
| **Name** | Their name, as shown on their profile. Without it, the part of the email before the @ is used. |
| **Photo (URL)** | The web address of a profile photo, starting with `https://`. Optional. |

To fill in [user custom fields](/users-custom-fields/), add one column per field named `cf_` followed by the field
name, for example `cf_company`. You don't need a column for every field.

Passwords can't be imported, and a `password` or `subscriber` column is ignored. Every new member gets a random
password and sets their own with **Forgot password** on the login page.
{: .note}

## Import the file

1. In the admin panel, go to **Tools** and click **Start** in the **Move your site to Yclas** card. (**Import** on
   the **Users** page opens the same page.)
2. Under **Where are you moving from?**, choose **CSV file (listings or users)**. Choose your file and click
   **Upload and continue**.
3. On **Map columns and fields**, check that **This file has** says **Users** (Yclas picks it when the file has an
   email column and no category column), and that each field shows the right column. Click **Continue: preview**.
4. On **Review before importing**, check the number of users and the rows that will be skipped.
5. Click **Import 0 listings and … users** and keep the page open until it finishes.
6. Check the new accounts under **Users**.
{: .steps}

## What happens to each row

- A new account is created as an active member with the **User** role. To make someone a moderator or
  administrator, change their role afterwards under **Users**. See [Roles and permissions](/roles-work-classified-ads-script/).
- **No email is sent.** Members aren't told they have an account. Let them know yourself, for example with a
  [newsletter](/how-to-send-the-newsletter/), and point them to **Forgot password** on the login page.
- **Existing members are left as they are.** If the email already belongs to a member, no new account is made and
  nothing in their account changes.
- **The same email twice** in the file makes one account.

<div class="important" markdown="1">
**Only import people who agreed to hear from you.** Imported members count as subscribed to your site's emails, so
they receive the [newsletters](/how-to-send-the-newsletter/) you send to all users. Emailing people who never signed
up is against the law in many countries and is the quickest way to get your emails marked as spam.
</div>

## Limits and undo

- Up to 20,000 users per file and 25 MB. Split bigger lists.
- One import at a time: finish, cancel or undo an import before you upload the next file.
- **Undo this import** on **Tools › Move your site to Yclas** deletes the accounts the latest import created, for a
  week after it finished. Members who have signed in or used their account since keep it. See
  [Cancel or undo an import](/how-to-migrate-osclass-to-yclas/#cancel-or-undo-an-import).
- The uploaded file is deleted from your site when the import ends. Delete your own copy too if you no longer need
  it: it is personal data.

## Related guides

- [Import listings from a CSV file](/how-to-import-ads/) — listings and their sellers in one go.
- [Export users](/how-to-export-users/) — download your member list.
- [Manage users](/manage-users/) — edit, ban or delete members.
{: .cards}
