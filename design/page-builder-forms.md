---
title: Forms in the page builder
description: Add a contact or enquiry form to any page you design, choose its fields, let visitors attach a CSV or Excel file, and get every message by email.
section: design
order: 1135
permalink: /page-builder-forms/
keywords: form, forms, contact form, enquiry form, inquiry form, form section, page builder form, custom form, fields, file upload, attach a file, attachment, csv, excel, xlsx, spreadsheet, inventory file, stock list, application form, sign-up form, partner form, where do form messages go, form not sending, thank you message
updated: 2026-11-17
plans: Starter, Professional and Marketplace plans, and the free trial
---

The **Form** section of the [AI page builder](/ai-page-builder/) puts a contact or enquiry form on any page you
design: a *Contact us* box on the home page, a quote request, an application or a *Become a partner* form. You choose
the fields. Every message is emailed to you; nothing is stored on your site.

Like the rest of the page builder, forms are on the **Starter**, **Professional** and **Marketplace** plans and the
free trial, and work with the **Nova** theme.
{: .note}

## Add a form

1. Open the **AI page builder** and go to the page you want.
2. Click **Add section** and choose **Form**.
3. Click the new section to change it (see below).
4. **Publish** your design.
{: .steps}

You can also ask the AI designer, for example *"add a form where shops can apply to sell with us, with name, email,
phone and their stock list"*.

The form only sends once the design is published. Until then, a visitor who tries it is told *This form works once
your design is published.*
{: .important}

## Change the form

| Setting | What it does |
| --- | --- |
| **Heading** | The title above the form. |
| **Fields** | The questions, up to 10 (see below). Drag them to change the order, or use **Add item**. |
| **Button** | The text on the send button. Empty: *Send*. |
| **Send messages to** | The email address that gets the messages. Empty: your **Contact form email**, or your **Sender email** if that is empty too (**Settings › Email**). Only you can change this, not the AI. |
| **Thanks** | What the visitor sees once the message is sent. Empty: *Thank you! Your message has been sent.* |
| **Layout** | **Stacked** (one field under another) or **Two columns**. |

Each field has a **Label**, a **Type**, **Required** (the visitor must fill it in) and, for some types, a
**Placeholder** (the grey example text inside the box).

| Type | The visitor |
| --- | --- |
| **Text** | Types a short answer. |
| **Email** | Types an email address, which is checked. The first email field becomes the *reply-to* of the message, so you can answer with your email's **Reply** button. |
| **Phone** | Types a phone number, which is checked. |
| **Textarea** | Types a longer message, up to 5,000 characters. |
| **Select** | Picks one choice from a list. Type the choices in **Options**, separated by commas, up to 30. |
| **Checkbox** | Ticks a box, such as *I agree to be contacted*. Make it required to make them tick it. |
| **File** | Attaches one CSV or Excel file (see below). |

A form with no fields asks for **Name**, **Email** and **Message**.

## Let visitors attach a file

Choose the type **File** for a field when you need a spreadsheet from the visitor, such as a shop's stock list or a
price list.

- Visitors can attach one **CSV** (`.csv`) or **Excel** (`.xlsx`) file, up to **7 MB**. The form shows this under the
  field. Other kinds of files, including old `.xls` files, are refused.
- The file comes with the message, as an attachment. It isn't kept on your site.
- A form can have one **File** field.

The message tells you the file *was sent by a visitor to your website and has not been checked*. Open it only if you
expected it.
{: .warning}

If your site sends email in a way that can't carry attachments, the message still arrives, without the file, and
says so. Sites using the Yclas default email, SMTP, Elastic Email or Mailgun send the file. See
[Email settings](/general-email-configuration/).

## What you receive

Each message arrives with the subject *New message from your website:* followed by the form's heading (or your site
name), every answer under its label, and the address of the page it was sent from.

## Spam protection

Every form is protected without you doing anything:

- a hidden field that only bots fill in, and a check that turns away forms sent within a few seconds; bots are told
  it worked, and nothing is sent;
- the captcha, when **Captcha** is on in **Listings › Settings** (see [Captcha](/set-recaptcha-website/));
- your site's blocked email addresses and Akismet, as on your contact page (see [Fight spam](/how-to-avoid-spam-in-my-site/));
- at most 10 messages every 10 minutes from one visitor's internet address. With a file, at most 3 every 10 minutes
  from one address, and 20 an hour for your whole site.

## If messages don't arrive

| What the visitor sees | What to do |
| --- | --- |
| *This form can't send messages yet. Please use the contact page.* | Nowhere to send them: fill in **Send messages to**, or your **Contact form email** in **Settings › Email**. |
| *Your message could not be sent. Please try again later.* | Your site's email failed. See [Emails aren't arriving](/troubleshooting-email-errors/). |
| *This form works once your design is published.* | Publish the design. |
| *This form is no longer on the site.* | The page was open while you removed the form; nothing to fix. |

If the visitor saw the thank-you message but nothing reached you, look in your spam folder and see
[Emails go to spam](/emails-go-to-spam/).

## Related guides

- [AI page builder](/ai-page-builder/) — design your pages and add sections.
- [Contact page](/how-to-add-text-contact-page/) — your site's standard contact form.
- [Email settings](/general-email-configuration/) — where your site's emails come from.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — every tool against spam.
{: .cards}
