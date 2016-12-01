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
As we have posted in our **[blog](http://open-classifieds.com/2014/02/12/elastic-email-review/)** earlier, you could now have **[ElasticEmail ](https://elasticemail.com/account#/open-classifieds)** integrated into your e-mailing function in Yclas. You would do that for multiple reasons. Some of them could be: your server can't send e-mails, e-mails not reaching users' inbox or you want to trace the e-mails you're sending.

### How it works

Here are the simple steps you need to do to have it integrated into your website: 

1. Set up an **[ElasticEmail](http://j.mp/elasticemailoc)** account 
2. Go to your panel, **Settings** -> **Email** -> **ElasticEmail**, switch **ElasticEmail** to **Enabled**.
3. Enter your account email address in **API Key** field and your account password in **Public Account ID**. You can find these details in your ElasticEmail account https://elasticemail.com/account#/settings -> SMTP/API. 
4. Enter the **name of the list** that you want users to be automatically subscribed after they register. ElasticEmail provides instructions on [how you can create a list](https://elasticemail.com/support/user-interface/contacts/lists/create-new).
5. Press **Save**.

<a href="//docs.yclas.com/images/elasticemail.png" class="thumbnail gallery-item" data-gallery>
![How to Configure Elastic Email on Yclas]({{site.baseurl}}/images/elasticemail.png) 
</a>

Now every e-mail you send using admin panel will be sent through your ElasticEmail account. 

Regards
