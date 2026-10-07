---
title: Forum
description: Add a community forum to your marketplace, organise it into forums and sub-forums, and moderate topics and replies.
section: content
order: 40
permalink: /add-forums-section/
redirect_from:
  - /how-to-view-and-edit-forum-topics/
  - /showcase-how-to-build-a-forum-with-oc/
keywords: forum, forums, community, topic, topics, reply, replies, discussion, board, moderate, rss
updated: 2026-10-07
---

The forum turns your marketplace into a community. Members start topics, reply to each other and come back to
follow the conversation, which keeps them on your site between purchases. It works well for niche markets where
people share know-how: classic cars, horses, farming equipment, collectibles.

The forum lives at `/forum`. You create the forums (the boards topics are filed under), members write the topics
and replies, and you moderate from the admin panel.

## Switch the forum on and create your forums

1. In the admin panel, go to **Addons**.
2. Open **Forums** and click **Enable**. The page then shows a **Forums** list.
3. Click **New Forum**.
4. Fill in the forum's **Name** and **Description**, choose a **Parent forum** if it belongs inside another one, and
   click **Save**.
5. Repeat for each forum you want.
{: .steps}

Members can't post until at least one forum exists. Start with a handful, such as *General*, *Buying advice*,
*Show and tell* and *Site feedback*, and add more as conversations grow.

### Forum settings

| Setting | What it does |
| --- | --- |
| **Name** | The forum's name, shown on `/forum` and in the topic form. |
| **Parent forum** | **None** for a top-level forum, or the forum this one sits inside. |
| **Description** | A line or two on what belongs in the forum, shown on the forums page. |
| **SEO name** | The forum's address, `/forum/seo-name`. Made from the name if you leave it empty. |

### Reorder or remove forums

On **Addons › Forums**, drag forums to change their order or to move one inside another; the order is saved when you
drop it. Click a forum to edit it. Editing a forum also lets you delete it.

## How members use the forum

| Who | What they can do |
| --- | --- |
| Visitors | Read every forum, topic and reply, and search the forum. |
| Signed-in members | Start a topic with **New Topic** (title, forum and text) and reply with **Reply** under any topic. |
| Members who took part in a topic | Get an email when someone else replies to it. |

Rules that apply to every topic and reply:

- Titles need at least 5 characters; the text of a topic or reply between 5 and 1,000 characters.
- If [captcha](/set-recaptcha-website/) is switched on for your site, members fill it in before posting.
- Words on your [banned words list](/activate-blacklist-works/) are blocked or replaced, as in listings.
- If you use Akismet (see [Fight spam](/how-to-avoid-spam-in-my-site/)), posts it flags as spam are refused.
- Topics and replies are published straight away; there is no approval queue, so moderate after the fact.

If **Notify Me on New Listing** is switched on in **Email** settings, you also get an email each time a new topic
is started. The emails use the *new-forum-answer* [email template](/automatic-emails-sent-to-users/).

## Moderate topics and replies

While the forum is on, **Forum** appears in the sidebar under **Manage**. It lists every topic and reply, newest
first, with search by title and filters by forum and status.

1. Go to **Forum** in the sidebar.
2. Find the post with the search box or the forum and status filters.
3. Edit it to change its title, text, forum or address, or untick it to deactivate it. Deactivated posts disappear
   from the forum but are kept.
4. Delete it if it should go for good.
{: .steps}

While you browse the forum signed in as an administrator, an **Edit** button next to each topic and reply takes you
straight to it.

Replies are listed too, with the start of their text as the title. Deactivating a topic hides the whole thread.
{: .note}

## Forum addresses and feeds

| Address | What it shows |
| --- | --- |
| `/forum` | All forums. |
| `/forum/forum-seo-name` | The topics in one forum, with the date of each topic's last message and its number of replies. |
| `/forum/forum-seo-name/topic-address.html` | A topic and its replies. |
| `/rss/forum.xml` | RSS feed of new topics in all forums. |
| `/rss/forum/forum-seo-name.xml` | RSS feed of one forum. |

While you haven't built your own [menu](/modify-top-menu/), the Nova theme adds **Forums** to the top menu. With a
custom menu, add a link to `/forum` yourself.

## Turn the whole site into a forum

Some owners use Yclas mainly as a forum or a community board. If that's your plan, rename the words on your site
with [Translations](/how-to-change-language/) (for example "listing" to "post" and "category" to "board"), and keep
the listing form short in [Publishing options](/how-to-configure-publish-options/).

## Related guides

- [Messaging between members](/how-to-use-messaging-system/) — private conversations instead of public ones.
- [Blacklist and banned words](/activate-blacklist-works/) — keep the forum clean.
- [Email templates](/automatic-emails-sent-to-users/) — change the reply notification.
- [Add-ons](/addons/) — every optional feature you can switch on.
{: .cards}
