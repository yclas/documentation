---
title: Forum moderation and polls
description: Pin and lock forum topics, keep forums for members only, let people report posts and follow topics, and ask your members a question with a simple poll.
section: content
order: 45
permalink: /forum-moderation-polls/
keywords: forum, pin topic, sticky topic, pinned, lock topic, close topic, locked, members only forum, private forum, hidden forum, report post, report topic, follow topic, unfollow, stop emails, topic notifications, poll, polls, vote, voting, survey, show of hands, poll widget, announcement poll
updated: 2026-11-16
plans: Available on all plans
---

These tools help you run the [forum](/add-forums-section/) and hear from your members:

- **Pin** a topic so it stays first in its forum, and **Lock** it so nobody can reply.
- Make a forum **Members only**.
- Let people **Report** a topic or a reply.
- Let members **Follow** a topic, or stop its emails.
- Ask a question with a **poll**, under an announcement or in a widget.

Pin, lock, follow and polls need no switch: they're there once the forum is on (polls once you create one). Members-only
forums are off until you set them on a forum, and reporting posts follows the **Report a member** switch.

## The bar above each topic

On every topic, a signed-in member sees a small bar with:

- **Follow this topic** or **Stop emails about this topic**;
- **Report**, when reporting is on;
- **Pin** / **Unpin** and **Lock** / **Unlock**, for administrators and moderators.

Visitors who aren't signed in see the bar only to read that a topic is pinned or locked, or to report it.

## Pin and lock topics

Administrators and moderators can pin and lock from the topic itself:

1. Open the topic on your site while signed in.
2. Click **Pin** or **Lock** in the bar above it.
{: .steps}

Or from the admin panel: go to **Forum**, open the topic, and in **Pin and lock** tick **Pinned** or **Locked**, then
click **Save**.

- A **pinned** topic comes first in its forum's topic list.
- A **locked** topic says "This topic is locked. No new replies can be added." Administrators and moderators can still
  reply.

## Members-only forums

1. Go to **Add-ons › Forums** and click the forum.
2. Tick **Members only**.
3. Click **Save**.
{: .steps}

Only signed-in members then see the forum, its sub-forums and their topics. Visitors don't find them in the forum
list, the forum search, the RSS feed or the [digest email](/email-digest/). A visitor who opens one is asked to sign
in, then taken back to it. The RSS feed and the digest leave these topics out for everyone, because they're the same
for every reader.

A sub-forum of a members-only forum is members only too; its form says "This forum is already members only, because
the forum above it is."

"Member" here means a signed-in account that is Active, plus administrators and moderators. Accounts waiting for
approval or for their email confirmation don't count.

## Report a topic or a reply

When **Report a member** is on (**Settings › General › Members**, see
[Member safety and privacy](/member-safety-privacy/)), a **Report** link shows above each topic, and next to each
reply in the Default and Nova themes.

The person reporting answers "Why are you reporting this post?", can add what is wrong with it, and clicks **Send
report**. Visitors who aren't signed in fill in a captcha.

Reports wait in **Reports › Reported members** with the other member reports. The report shows the post's text and
an **Edit or remove it** link to the post in your admin panel. Dismiss it, close it with a note, or deactivate the
author's account.

## Follow a topic

Members already get an email when someone replies to a topic they started or replied to. Now any signed-in member
can click **Follow this topic** to get those emails too, or **Stop emails about this topic** to stop them, even for
their own topics.

If **Email preferences for users** is on (**Settings › General › Notifications**), members who turned off message
emails don't get forum reply emails either.

## Polls

A poll is a quick show of hands: a date for the next meeting, which idea to do first. Each signed-in, active member
votes once, and a vote can't be changed. Visitors who aren't signed in see "Sign in to vote". Every poll says it is a
simple poll, not a formal or legally binding vote.

### Create a poll

1. In the admin panel, go to **Email**, open **Announcements**, and click **Polls**.
2. Click **New poll**.
3. Write the **Question**, and the **Answers**, one on each line (2 to 10).
4. Optionally choose a **Last day to vote**. Members can vote through that day. Leave it empty for a poll that stays
   open.
5. In **Results**, choose **A member sees them after voting** or **Everyone sees them only after the last day** (this
   needs a last day). After the last day, everyone who can see the poll sees the results.
6. In **Show under an announcement**, choose an announcement, or **None: only in the "Poll" widget**.
7. Leave **Show this poll** on and click **Save**.
{: .steps}

Only administrators can open the Polls page. It lists each poll with where it shows, whether it is open or closed,
and its number of votes. You always see the results there.

Switching **Show this poll** off hides the poll from everyone and keeps its votes. **Remove poll** deletes it and its
votes.

### Where polls show

- **Under an announcement**: on the announcements page and where the announcement is pinned on the home page. Only
  people who can see the announcement can see the poll.
- **In a widget**: go to **Design › Widgets**, add the **Poll** widget, choose the **Poll to show**, and optionally a
  **Title displayed**. See [Widgets](/overview-of-widgets/).

## Good to know

- Themes with their own forum pages (other than Default and Nova) get the bar above the topic and all the rules, but
  not the **Pinned** and **Locked** marks in the topic list, the **Report** link next to each reply, or a hidden reply
  form on a locked topic (a reply there is refused with a message).
- Forum pages a visitor opened before you made a forum members only can stay in the page cache for up to a day.
- A visitor's cached page can show a poll as open for up to a day after it closed; votes are refused all the same.
- If an announcement with a poll is removed, the poll is hidden from everyone but your team until you open the poll
  and save it again.
- An announcement's email and push notification don't mention its poll.
- On the forum home, a parent forum's "last message" can still come from a members-only sub-forum.
- A removed account's votes stay in the counts.
- These pages are in English for now; translations follow.

## Related guides

- [Forum](/add-forums-section/) — switch the forum on and create forums.
- [Member safety and privacy](/member-safety-privacy/) — reporting and blocking members.
- [Widgets](/overview-of-widgets/) — place the Poll widget.
{: .cards}
