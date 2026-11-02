---
title: Send your properties to Rightmove and Zoopla
nav_title: UK property portals
description: Make a Rightmove and Zoopla BLM file of your live property listings, at a private address or uploaded to the portal by FTP every day.
section: listings
order: 1135
permalink: /uk-property-portals/
keywords: rightmove, zoopla, onthemarket, uk property portals, property portal, blm, blm file, blm feed, rightmove datafeed, rightmove feed, zoopla feed, branch id, ftp, ftps, ftp upload, upload properties, estate agent, letting agent, postcode, uk postcode, property export, idealista, kyero, send properties to portals
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- With the [property pack](/property-pack/) on, your live property listings can go to Rightmove and Zoopla as a BLM file, the format they import.
- Two ways out, both off until you turn them on: a private **file address**, and an **upload every day by FTP**.
- You need an account with the portal first. It gives you a branch id and the FTP details.
- Listings without a UK postcode are left out, because the portals refuse them.
</div>

Rightmove and Zoopla, the UK's largest property portals, import agents' properties from a BLM file (their "datafeed"
format, version 3). Your site can make that file from your live property listings and send it to the portal once a
day, so the properties on the portal match your site without anyone typing them in twice.

The file is for an estate or letting agent who lists on the portal: the portal deals with the agent, not with
your marketplace. Use it for your own agency, or set it up for an agency that runs its listings on your site.

## What you need

- **The property pack on.** The section only shows while it is (see [Switch the pack on](/property-pack/#switch-the-pack-on)).
- **UK postcodes.** Each listing needs a UK postcode, in a postcode field (*Postcode*, *Postal code*, *Zip*…) or in
  its address. Listings without one are left out.
- **A portal account.** Rightmove and Zoopla only take files from agents with an account, which they charge for. The
  portal gives you a **branch id** and, for uploads, an **FTP server**, **user name** and **password**. Ask your
  portal contact for the details of a "BLM datafeed" or "feed upload".
- **Prices in pounds.** The portals read every price as pounds (£). Prices are sent as they are on your site, so if
  your site's currency isn't GBP, the section says so in bold.

Everything here is off by default. With it off, nothing runs and your listings stay on your site only.

## Set it up

1. Go to **Tools** and click **Start** in the **Move your site to Yclas** card.
2. Scroll to **UK portals (Rightmove, Zoopla)**, under **Send your properties to portals**.
3. Enter the **Branch id** the portal gave you.
4. Tick **File address on**, **Upload every day by FTP**, or both (see below which one you need).
5. For the upload, fill in the **FTP server**, **FTP user name** and **FTP password**, and the **FTP folder** only
   if the portal asked for one.
6. Click **Save**. The file is built in the background: refresh the page after a minute or two.
7. With the upload on, click **Upload now** to test it, then refresh the page to see the result under **Last upload**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Branch id** | The branch id the portal gave you, at most 11 characters. It goes in every listing's reference and in the file's name. |
| **File address on** | A private address with your BLM file, for a portal or feed service that fetches it. |
| **Upload every day by FTP** | Once a day, the file goes to the portal's FTP server as `<branch id>_<number>.zip`. |
| **FTP server** | The server the portal gave you, for example `ftp.example.com`. Add `:port` if it isn't 21 (990, or 1024 and above). |
| **FTP user name** and **FTP password** | The login the portal gave you. The password is stored encrypted and never shown again: the field says *Saved. Type a new one only to replace it.* |
| **FTP folder** | Only if the portal asked for one. |
| **Plain FTP (not encrypted)** | Uploads use FTPS (encrypted FTP). Tick this only if the portal says its server takes plain FTP. |

## File address or FTP upload?

Most portals, Rightmove and Zoopla included, ask agents to **upload** the file to their FTP server. Use
**Upload every day by FTP** for them. Each upload is a zip file named after your branch id and a number from 01 to 99,
which goes back to 01 after 99.

The **file address** is for a portal or feed service that fetches the file from you instead. Once it is on, the
section shows **BLM file address**. Give it only to that service: anyone with the address can read the file. To stop
an address that got out, click **New address** and confirm: the old one stops working, and you give the new one to the
service.

You can use both. Either way, the file is built once a day, when you save the settings, and when you click
**Rebuild now**. The address always serves the last file built.

Every file holds all your live property listings, and the portals treat a listing that's missing from it as
withdrawn. A listing you remove from your site, or one that's left out (see below), comes off the portal after the
next upload.
{: .important}

## Rebuild now and Upload now

- **Rebuild now** (while the file address is on) builds the file again straight away, for example after you've
  fixed some postcodes. Refresh the page a minute or two later.
- **Upload now** (while the upload is on) builds the file and uploads it straight away, instead of waiting for the
  daily upload. Use it to test your FTP details. Refresh the page a minute or two later to see the result.

Both run in the background, so you can leave the page.

## What the status lines mean

| What you see | What it means |
| --- | --- |
| **Last upload** › *Uploaded: … uploaded with N listings.* | The last upload worked: the file's name and how many listings it held. |
| **Last upload** › *Failed:* and a reason | The last upload didn't reach the portal. See [Troubleshooting](#troubleshooting). |
| *N listings left out (no UK postcode).* | These listings weren't in the file. Add a UK postcode to them. |
| *Built … with N listings.* | When the file at the address was last built, and how many listings it holds. |
| *Not built yet: it is built in the background…* | The first file is on its way. Refresh the page in a minute or two. |
| *The build started … failed:* or *did not finish.* | Building the file failed. Click **Rebuild now**; if it fails again, [contact support](/use-yclas-support-system/). The daily build waits an hour before trying again by itself. |

## What goes into the file

For each listing: its reference (your branch id and the listing's number), the address and postcode, a display
address (the street without its house number, the town and the first half of the postcode), the price, sale or let
(with monthly or weekly rent, and furnished or not, for lettings), the property type, bedrooms, bathrooms, up to 10
key features, a short summary, the description, up to 50 photos and up to 5 [floor plans](/property-pack/#floor-plans).

The key features come from your property fields: bedrooms, bathrooms, size in sq ft and m², plot, energy rating
(*EPC rating C*), furnished, parking, pets and the year built. The portals want at least three, so a listing with
fewer also gets its property type, *For sale* or *To let*, and its town.

The property type is matched to the portal's list from your type field (or the category name): for example
*semi-detached*, *detached*, *terraced*, *flat*, *apartment*, *bungalow* or *land*. A type it doesn't recognise,
such as a plain *House*, is sent as "not specified", which the portals accept.

### Which listings are left out

- Listings that aren't live: unpublished, expired or sold ones.
- Listings that aren't properties: only listings with a property type, bedrooms, bathrooms or a size filled in go in.
- **Listings without a UK postcode**, which the portals refuse. The page counts them.
- Anything over 5,000 listings in one file.

Fields you made private are never sent. Sites keep only the energy rating's letter, so no EPC chart or certificate is
sent: the rating goes in a key feature instead.

## Validate your first file with the portal

Rightmove and Zoopla only give their full file specification and their checking tool to registered partners, so
before you rely on the daily upload, ask your portal contact to check your first file. Upload it with **Upload now**,
or send them the file address, and ask whether every field comes through as they expect. Each portal has its own
onboarding team for new feeds.
{: .important}

## Troubleshooting

| Message | What to do |
| --- | --- |
| *The branch id is the one the portal gave you: letters and digits only, at most 11.* | Check the branch id for spaces or other characters. |
| *The FTP server is a host name, e.g. ftp.example.com…* | Enter the server's name only, with `:port` if needed. Ports 21, 990 or 1024 and above work. |
| *To upload by FTP, fill in the FTP server and user name the portal gave you.* or *…the FTP password…* | Fill in the missing detail and save. |
| *The FTP server … could not be found.* | Check the server's name for typos. |
| *Could not connect to …* | Check the server and port. If it still fails, ask the portal whether its server takes connections from outside. |
| *The FTP server refused the user name or password.* | Type the password again (it replaces the saved one) and check the user name with the portal. |
| *This server can't use FTPS…* | Encrypted uploads aren't available right now. Tick **Plain FTP (not encrypted)** only if the portal says its server takes plain FTP; otherwise [contact support](/use-yclas-support-system/). |
| *The FTP folder … is not there.* | Check the folder with the portal, or leave it empty. |
| *The FTP server did not accept the file.* | The folder may be read-only for your user. Ask the portal. |
| *An upload is already running.* | Wait a minute or two and refresh the page. |
| Fewer properties on the portal than on your site | Check the *left out (no UK postcode)* count, and that the listings have a property detail filled in. |

FTPS keeps the password and file encrypted on the way, but it can't check the portal server's certificate. Use the
FTP details your portal gave you, and change the password if you think it got out.
{: .note}

## Other portals and idealista

For portals outside the UK, the property pack has its own feed in the Kyero format, which most European portals
read. It is in the same place: **Send your properties to portals**, just above the UK portals section, with
**Turn the feed on**. See the [property pack](/property-pack/).

idealista has no public import format. To list your properties there, ask idealista's sales team for an import code.
idealista then reads a partner feed, and the Kyero feed is commonly accepted for this: ask them whether they can take
your Kyero feed address.

## Related guides

- [Property pack](/property-pack/) — floor plans, viewings, agency pages and the Kyero feed.
- [Property and jobs packs](/property-and-jobs-packs/) — the property fields.
- [Business sellers](/business-sellers/) — business accounts for agencies.
- [Listing feeds](/listing-feeds/) — product, job and vehicle feeds for Google, job boards and Meta.
{: .cards}
