---
title:  "How to Configure ElasticEmail on Yclas?"
date:   2014-02-12 22:03:48
categories: Email
tags: 
- Email
- Settings
permalink: /configure-elasticemail-yclas/
keywords: email, send, receive, elasticemail, smtp, automatic emails
---
As we have posted in our **[blog](http://open-classifieds.com/2014/02/12/elastic-email-review/)** earlier, you could now have **[ElasticEmail ](https://elasticemail.com/account#/open-classifieds)** integrated into your e-mailing function in Yclas. You can do that for multiple reasons, and some of them could be: your server can't send e-mails, e-mails not reaching users' inbox or you want to trace the e-mails you're sending.

### How it works

Here are the simple steps you need to do to have it integrated into your website: 

1. Set up an **[ElasticEmail](http://j.mp/elasticemailoc)** account 
2. Go to your panel, **Settings** -> **Email** -> **ElasticEmail**, switch **ElasticEmail** to **Enabled**.
3. Go to your ElasticEmail account https://elasticemail.com/account#/settings -> SMTP/API and copy the **API Key** and **Public Account ID**, paste to your website admin panel, **Settings** -> **Email** -> **ElasticEmail** and press **Save**.
4. Enter the **name of the list** that you want users to be automatically subscribed after they register. ElasticEmail provides instructions on [how you can create a list](https://elasticemail.com/support/user-interface/contacts/lists/create-new).
5. Press **Save**.

<a href="//docs.yclas.com/images/elasticemail.png" class="thumbnail gallery-item" data-gallery>
![How to Configure Elastic Email on Yclas]({{site.baseurl}}/images/elasticemail.png) 
</a>

Now, every e-mail you send using the admin panel will be sent through your ElasticEmail account. 

Regards.
