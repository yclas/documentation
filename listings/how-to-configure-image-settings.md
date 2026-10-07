---
title: Photos
description: Set how many photos sellers can add, which formats and sizes are accepted, how photos are resized, and how sellers choose the main photo.
section: listings
order: 130
permalink: /how-to-configure-image-settings/
redirect_from:
  - /how-to-mark-image-as-primary/
keywords: photos, images, pictures, upload, number of images, size, megabytes, format, jpeg, png, webp, gif, quality, width, height, thumbnail, resize, nude, primary, main photo, cover
updated: 2026-10-07
---

Good photos sell. Yclas resizes every photo sellers upload so that pages load quickly, while keeping them large
enough to look sharp. Photo settings live in two places:

- **How many** photos a listing can have: **Listings › Settings › Form fields › Number of Images**.
- **What** sellers may upload and how photos are processed: **Media › Listing photos**.

## Number of photos per listing

1. Go to **Listings › Settings**.
2. In **Form fields**, set **Number of Images**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

Your Yclas plan sets the maximum (*Your plan allows up to N.*); if you enter more, the plan's maximum is saved. Set 0
to remove photos from the posting form altogether, for example on a jobs board.

## Upload and resize settings

1. In the admin panel, click **Media** in the sidebar.
2. Go to the **Listing photos** section.
3. Change the settings and click **Save changes** in the bar at the bottom.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Allowed Image Formats** | Tick the formats sellers may upload: JPEG, JPG, PNG, WebP, GIF. Keep at least JPEG/JPG and PNG ticked: they are what phones and computers produce. |
| **Max. Image Size** | The largest file a seller can upload, in MB, up to 12 MB. |
| **Image Quality** | How strongly photos are compressed when they are saved, from 1 to 100 %. Around 80–90 % looks good and keeps files small. |
| **Image Width** | Photos wider than this (in pixels) are scaled down. |
| **Image Height** | Photos taller than this are scaled down. Leave it empty (**Auto**) to only limit the width and keep every photo's proportions. |
| **Thumb Width** / **Thumb Height** | The size of the small version of photos used in lists of listings. |
| **Disallow Nude Pictures** | Checks each upload and rejects photos that look like nudity. The seller sees *… Seems a nude picture so you cannot upload it*. |

### What happens to an uploaded photo

1. It is checked against the allowed formats, the maximum size and, if switched on, the nudity check.
2. It is turned the right way up (phones often save photos sideways).
3. If you use a [watermark](/how-to-add-a-watermark/), the watermark is added.
4. If it is larger than **Image Width** or **Image Height**, it is scaled down, keeping its proportions.
5. It is saved as a JPEG at your **Image Quality** and stored in Yclas's cloud storage.
{: .steps}

Changes to these settings apply to photos uploaded from now on. Photos already on your site keep the size and
quality they were saved with.
{: .note}

Because every photo is saved as a JPEG, transparent backgrounds in PNG files become solid and animated GIFs stop
moving. That's fine for product photos; use the [image library](/how-to-manage-uploaded-images/) for logos and
graphics in your pages.
{: .tip}

## The main photo

The first photo of a listing is its main (cover) photo: it is the one shown in lists, search results and on the
home page. On the posting form, *the first one is the cover*.

To choose another one later, the seller (or you) edits the listing and, under **Manage Images**, clicks
**Make Primary** under the photo they want. Photos can also be deleted there with **Delete**, and new ones added with
**Add image**.

## Good to know

- You don't need to set up any storage: listing photos are stored and delivered from cloud storage for you.
- If uploads fail with *Is not valid format*, check that the format is ticked in **Allowed Image Formats**. iPhones
  may send HEIC photos, which aren't accepted; most phones convert them to JPEG when uploading through the browser.
- Sellers can also pick photos from Google Drive or Dropbox if you set that up: see
  [Upload photos from Google Drive and Dropbox](/cloud-photo-uploads/).
- The **Image library** at the top of the **Media** page holds the images you insert in pages and emails, not listing
  photos. See [Media library](/how-to-manage-uploaded-images/).

## Related guides

- [Watermark your photos](/how-to-add-a-watermark/) — stamp your site name on every photo.
- [How members post a listing](/how-members-post-listings/) — the photo step of the form.
- [Plans and billing](/plans-and-billing/) — photo limits per plan.
{: .cards}
