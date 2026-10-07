---
title: Black list and banned words
description: Stop spammers from coming back once you've caught them, refuse throwaway email addresses, and block or mask the words spam listings use.
section: users
order: 110
permalink: /activate-blacklist-works/
keywords: black list, blacklist, blocklist, spam, spammer, mark as spam, ban user, disposable email, banned words, bad words, profanity filter, word filter, censor
updated: 2026-10-07
---

The **Black list** add-on remembers the spammers you've caught. Once a member is marked as spam, their email address
can't be used to post listings or contact anyone on your site again. It also turns away sign-ups from throwaway
email services. **Banned words** works on content instead: it masks or refuses listings that contain words you choose.

## How marking as spam works

You can mark someone as spam in two ways:

- in **All listings**, mark one of their listings as spam (the poster is marked too), or
- in **Users**, choose **Mark as spam** from the **⋯** menu on their row.

What happens next depends on whether the Black list is on:

| | Black list off | Black list on |
| --- | --- | --- |
| The account's status | **Spam** | **Spam** |
| Signed in on your site | Signed out straight away, and can't use the account | Same |
| Public profile | Hidden | Hidden |
| Posting a listing with that email address, even without signing in | Still possible | Refused |
| Sending messages or using contact forms with that email address | Still possible | Refused |
| Sign-ups and logins from disposable-email services | Allowed | Refused |
| Your **Disallowed Email Domains** list | Not applied | Applied |
| Posters whose listing [Akismet](/how-to-avoid-spam-in-my-site/#set-up-akismet) flags | Listing refused | Listing refused and poster marked as spam |

Administrators, moderators and translators can never be marked as spam.

Marking a member as spam doesn't touch their existing listings. Mark those as spam too, or delete them, from
**All listings**.
{: .note}

## Turn the Black list on or off

New sites have it on. To check:

1. Go to **Addons** and open **Black list**.
2. Click **Enable** (if it shows **Disable**, it's already on).
{: .steps}

## See and manage blacklisted members

The **Black list** page lists every member marked as spam, with their name and email address. The same members are
in the **Spam** tab on the [Users](/manage-users/) page.

To give someone a second chance, click **Delete** next to them on the Black list page. Despite the name, this
doesn't delete the member: it removes them from the black list and sets their account back to **Active**. You can
also set their **Status** to **Active** on their page in **Users**.

## Banned words

Banned words catch spam by its content: the payment scams, gambling links and miracle cures that keep coming back
with new accounts. You'll find them in **Listings › Settings**, in the **Banned words** section.

1. In **Banned Words**, type the words or phrases to catch, separated by commas: `western union,casino,moneygram`.
2. In **Banned Words Replacement**, type what to show instead, for example `***`.
3. Switch on **Validate Banned Words** to refuse new listings that contain a banned word, instead of masking it.
4. Click **Save changes**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Banned Words** | The words and phrases to catch, separated by commas. Matching ignores upper and lower case. |
| **Banned Words Replacement** | Replaces each banned word in listing titles and descriptions, and in forum posts, when they're saved. |
| **Validate Banned Words** | Refuses a new listing (and a new forum topic) whose title or description contains a banned word, so the poster has to change it. |
| **Banned Words Among Each Word** | Also replaces banned words found inside longer words. Without it, only whole words are replaced. |

### Things to know

- Replacement applies when a listing is posted or edited; listings already on your site are only changed the next
  time they're saved.
- **Validate Banned Words** checks new listings only. Someone who edits a live listing to add a banned word gets it
  masked instead of refused.
- The validation check is case-sensitive and also matches inside longer words: with `cash` banned, "cashmere" is
  refused but "Cash" isn't. Add the common spellings of each word.
- Be careful with **Banned Words Among Each Word** and short words: banning `ass` would also mask "class" and "glass".
- Don't end the list with a comma, and avoid punctuation such as dots, brackets or slashes inside banned words: they
  can make the filter mask far more than you intended.

## Related guides

- [Fight spam](/how-to-avoid-spam-in-my-site/) — all the anti-spam tools together.
- [Manage users](/manage-users/) — statuses, spam and deleting accounts.
- [Sign-up and login settings](/registration-and-login/) — allowed and disallowed email domains.
- [Manage listings](/how-to-manage-advertisements/) — mark listings as spam.
{: .cards}
