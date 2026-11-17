---
title: Members-only content, groups and documents
nav_title: Members only and groups
description: Decide who counts as a member, keep categories, pages and posts for members, open categories to chosen groups only, and share PDF documents with everyone, members or groups.
section: users
order: 125
permalink: /members-groups-documents/
keywords: members only, members-only, member content, who counts as a member, every approved account, membership plan, members-only category, hidden category, members-only post, members-only page, closed community, club, association, chapter, committee, groups, member groups, category access, who may post, who may see, member tags, document library, documents, pdf, minutes, bylaws, newsletters, private documents, download
updated: 2026-11-16
plans: Available on all plans (Groups and the document library on Professional and Marketplace)
---

Clubs, associations and other communities often keep part of their site for members: a category of listings, a
blog post, a page of rules, the minutes of the last meeting. Yclas lets you decide who counts as a member, mark
categories, blog posts and pages **Members only**, open a category to chosen groups only, and keep a library of PDF
documents.

Everything on this page is off until you switch it on. The rest of your site stays open as before. To close the
whole site to visitors who aren't signed in, use [Private site](/private-site/) as well.

## Who counts as a member

1. Go to **Settings › General**.
2. In **Members**, choose **Who counts as a member**:
   - **Sellers on a membership plan** (the default): only accounts with a running [membership plan](/membership-plans/).
   - **Every approved account**: anyone signed in with an active account. You don't need membership plans.
3. Click **Save changes**.
{: .steps}

With **Every approved account** and **Approve new members** switched on (in **Sign-ups**), a new account becomes a
member only once you approve it.

With **Sellers on a membership plan**, once one of your plans has **Members-only content** switched on (see
[Listing levels](/membership-plans/#listing-levels)), only members on such plans count.

Your administrators and moderators always see everything. Sellers always see their own listings, and authors their
own posts.

The **Members only** switches on categories, blog posts and pages appear while membership plans are on, or while
**Every approved account** is chosen.
{: .note}

## Members-only categories

A members-only category, with its subcategories, is hidden from everyone who isn't a member: its listings are left
out of category pages, search, the home page, the map, the calendar, RSS, the API and the sitemap. Visitors who
aren't signed in are asked to sign in. Only members can post in it.

1. Go to **Listings › Categories** and open the category.
2. In **Members only**, switch on **Only members see this category**.
3. Click **Save**.
{: .steps}

A subcategory of a members-only category is members only too: its page says *The parent category is members only,
so this one is too.*

## Members-only blog posts

1. Go to **Blog** and open the post, or create one.
2. Switch on **Members only**.
3. Save the post.
{: .steps}

Everyone else doesn't see the post in the blog, its feed, search or the blog widgets. Its address shows only the
title and how to join, and search engines are asked not to index it. See [Blog](/how-to-create-a-blog/).

## Members-only pages

In the page editor, under **Publish**, switch on **Members only** (see [Pages](/how_to_add_pages/)). On a
multilingual site the switch applies to the page in every language: marking one language's copy closes them all, and
a new translation of the page is members only too.

Members-only pages are left out of your sitemap. Visitors who aren't members see what the page is about and a link
to your plans or to sign in.

Fields marked **Members only** in **Listings › Custom Fields** can't be used as a search filter or sort by visitors
who aren't members, so nobody can find out the hidden values by filtering.

## Groups

*Professional and Marketplace plans.*

Groups decide who may post in each category, and who may see its listings. A group is one of these:

- visitors who aren't signed in;
- a [role](/roles-work-classified-ads-script/);
- approved business accounts, or an [account type](/account-types/);
- your members (as set in **Who counts as a member**);
- the members you gave the same tag on their page under **Users**: every tag is a group, such as a committee, a
  chapter or a class.

### Set up groups

1. Go to **Settings › General**. In **Members**, click **Set up** next to **Groups**.
2. On the **Groups** page, click **Edit** next to a category.
3. Under **Who may post in this category** and **Who may see this category**, choose **Everyone (no rule)**,
   **Only these groups:** with the groups ticked, or **Same as the parent category**.
4. Click **Save**, and do the same for each category you want to limit.
5. Back on the **Groups** page, switch on **Use groups** and click **Save**.
{: .steps}

You can prepare the rules first: they apply only once **Use groups** is on. A category without its own rule follows
its parent. For everyone outside the chosen groups, the category's listings are left out of category pages, search,
the home page, the map, RSS, the API and the sitemap, and its pages show "not found". Admins and moderators may always
post and see everywhere.

If your plan stops including Groups, the rules you set keep applying, so nothing hidden opens by itself. Switch
**Use groups** off on the **Groups** page to open the categories again.
{: .note}

## Document library

*Professional and Marketplace plans.*

The document library turns one category into a place for your documents: minutes, rules, newsletters, forms. Only
your administrators post in it. Each entry holds up to 20 PDF files of up to 10 MB each, and each file is for
everyone, for members only, or for the groups you choose.

### Switch it on

1. Go to **Listings › Categories** and create a category for the library, for example *Documents*. Its
   subcategories can serve as folders.
2. Go to **Settings › General**. In **Members**, switch on **Document library**.
3. In **Library category**, choose that category.
4. Click **Save changes**.
{: .steps}

### Add documents

1. Post a listing in the library category, for example *Minutes 2026*.
2. Open the listing's edit page. In the **Documents** box, type a **Title** and choose the **PDF file**.
3. Choose who can download it: **Everyone**, **Members only**, or **Only these groups** with the groups ticked (this
   choice appears while **Use groups** is on).
4. Click **Upload**. Repeat for each document.
{: .steps}

Visitors see the documents in a **Documents** box on the entry's page. A document for members or for groups is
stored privately: it opens only for someone allowed to download it, through a link that is valid for a few minutes.
Visitors who aren't signed in are asked to sign in first.

A document for **Everyone** gets a public file address, like the documents of the [equipment pack](/equipment-pack/).
If the library category itself is members only or limited to groups, **Everyone** isn't offered: documents are then
for the people who see the category.

## Good to know

- **Cached pages.** If Cloudflare caches your site's pages, visitors who aren't signed in can still get the earlier
  copy of a category, post or page for up to a day after you mark it **Members only**.
- **Documents attached before a category was closed.** PDF documents attached to listings before their category
  became members only (or limited to groups) keep their public file address. Remove them and attach them again to
  store them privately.
- **Memberships switched off.** With **Sellers on a membership plan** chosen and membership plans switched off,
  nobody counts as a member: members-only categories and blog posts are then seen by your team only, and
  **Settings › General › Members** warns you. Members-only pages and fields are shown to everyone again in that case.
  Choose **Every approved account** or open them to change this.
- **Custom themes.** A few custom themes that list blog posts on their home page themselves can still show a
  members-only post's title there.
- **Forums** have their own members-only setting. See [Forums](/add-forums-section/).

## Related guides

- [Membership plans](/membership-plans/) — plans, listing levels and members-only fields.
- [Private site](/private-site/) — close the whole site to visitors who aren't signed in.
- [Account types](/account-types/) — account types you can use as groups.
- [Roles](/roles-work-classified-ads-script/) — roles you can use as groups.
- [Pages](/how_to_add_pages/) — create and edit pages.
- [Blog](/how-to-create-a-blog/) — write blog posts.
{: .cards}
