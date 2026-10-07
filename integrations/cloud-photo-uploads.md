---
title: Files from Google Drive and Dropbox
nav_title: Google Drive and Dropbox files
description: What the File Dropbox and File Google Drive custom fields do, how to connect them, and their current limits, with a more reliable alternative.
section: integrations
order: 60
permalink: /cloud-photo-uploads/
keywords: dropbox, google drive, google picker, file, attachment, document, pdf, upload file, custom field, digital download, chooser
updated: 2026-10-07
---

Two custom field types let members attach a file to their listing from their cloud storage instead of uploading it:
**File Dropbox** and **File Google Drive**. The member picks a file in a Dropbox or Google window, and the listing
page shows a **Download** button for it. They were made for things like a PDF brochure, a floor plan or a CV.

They are not for listing photos: photos are uploaded in the posting form as usual. See
[Photos](/how-to-configure-image-settings/).

## Current limits

<div class="warning" markdown="1">
Both fields have limits you should know before you rely on them:

- **Dropbox:** the link saved with the listing is a temporary download link, which Dropbox stops serving after a few
  hours. After that, the **Download** button on the listing no longer works.
- **Google Drive:** the field doesn't currently save the file the member picks, so the listing ends up without a
  file. Google also shows members a warning screen, because the connection asks for full access to their Drive.

Until these are improved, we recommend the alternative below.
</div>

## A reliable alternative: a URL field

1. Go to **Listings › Custom Fields** and click **New field**.
2. Choose the type **URL** and a label such as "Brochure (link)". Add a tooltip such as "Paste a share link from
   Google Drive, Dropbox or OneDrive".
3. Choose the categories it applies to and click **Create field**.
{: .steps}

Members upload the file to their own cloud storage, create a link that anyone can view, and paste it in. The listing
shows it as a link, and it keeps working as long as the member keeps the file shared.

## Connect Dropbox

If you still want to use the Dropbox field:

1. Go to the [Dropbox App Console](https://www.dropbox.com/developers/apps) and create an app with **Scoped access**.
2. In the app's settings, add your marketplace's domain under **Chooser / Saver / Embedder domains**.
3. Copy the **App key**.
4. In your admin panel, go to **Integrations**, open **Dropbox** and paste it into **Dropbox App Key**.
5. Click **Save**.
6. Add a custom field of type **File Dropbox**. In **Values**, list the file extensions members may pick, separated by
   commas, for example `.pdf,.docx`.
{: .steps}

In the posting form the field shows a **Choose from Dropbox** button.

## Connect Google Picker

The Google Drive field needs a project in the [Google Cloud console](https://console.cloud.google.com/) with the
**Google Picker API** and **Google Drive API** enabled, an API key and an OAuth client ID for your domain. Paste them
into **Google Picker API Key** and **Google Picker Client ID** in **Integrations › Google Picker**, then add a custom
field of type **File Google Drive**. Given the limits above, test it thoroughly before offering it to members.

## Related guides

- [Custom fields](/how-to-create-custom-fields/) — every field type and its options.
- [Cloudinary video uploads](/cloudinary/) — let members upload a video.
- [Sell digital downloads](/sell-digital-goods/) — sell files to buyers.
{: .cards}
