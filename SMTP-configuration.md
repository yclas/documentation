---
title:  How to configure SMTP
date:   2015-11-09 11:11:00
categories: Email
tags: 
- Email
- Settings
permalink: /smtp-configuration/
keywords: email, smtp, ssl, tls send, receive, server, gmail, outlook, yahoo, zoho, office365, live
---
It's now mandatory to have the site working using SMTP or [Elasticemail](https://docs.yclas.com/configure-elasticemail-yclas/).  This guide explains how to set up the SMTP configuration of your website.

Go to **Settings** -> **Email Settings** -> **SMTP Configuration** and specify or enable:

+ **Smtp active**: Enable this to activate SMTP
+ **Smtp Secure**: Enable if the SMTP connection needs to occur over ssl
+ **Smtp host**
+ **Smtp port**
+ **Smtp auth**: If SMTPAuth should be used
+ **Smtp user**
+ **Smtp password**

When you finish with the configuration, click **SAVE**

## Gmail

If you are using a gmail account use the information provided below:

Using SSL:

+ **Smtp active**: ON
+ **Smtp Secure**: SSL
+ **Smtp host**: smtp.gmail.com
+ **Smtp port**: 465
+ **Smtp auth**: ON
+ **Smtp user**: _email address (example@gmail.com)_
+ **Smtp password**: _gmail account password_

Using TLS:

+ **Smtp active**: ON
+ **Smtp Secure**: TLS
+ **Smtp host**: smtp.gmail.com
+ **Smtp port**: 587
+ **Smtp auth**: ON
+ **Smtp user**: _email address (example@gmail.com)_
+ **Smtp password**: _gmail account password_

## Outlook

+ **Smtp active**: ON
+ **Smtp Secure**: TLS
+ **Smtp host**: smtp-mail.outlook.com
+ **Smtp port**: 587
+ **Smtp auth**: ON
+ **Smtp user**: _email address (example@outlook.com)_
+ **Smtp password**: _password_

## Yahoo

+ **Smtp active**: ON
+ **Smtp Secure**: TLS
+ **Smtp host**: smtp.mail.yahoo.com
+ **Smtp port**: 587
+ **Smtp auth**: ON
+ **Smtp user**: _email address (example@yahoo.com)_
+ **Smtp password**: _password_

## Zoho

1\. Create an account on [Zoho.com](https://www.zoho.com/signup.html)<br>
2\. Follow the instructions to Verify your domain, Add users (email accounts) and Create groups.<br>
3\. On the step **Configure Email Delivery**, you need to login to your domain name provider panel and add the following DNS records:

- Type: **MX**
- Host Name: **@**
- Address: **mx.zoho.com**
- Priority: **10**

and 

- Type: **MX**
- Host Name: **@**
- Address: **mx2.zoho.com**
- Priority: **20**

4\. Proceed to **Mail Client Configuration** -> **Outgoing/SMTP** to find the configuration for your website SMTP:

Using SSL:

+ **Smtp active**: ON
+ **Smtp Secure**: SSL
+ **Smtp host**: smtp.zoho.com
+ **Smtp port**: 465
+ **Smtp auth**: ON
+ **Smtp user**: _(example@zoho.com, or your own domain's email address)_
+ **Smtp password**: _password_

Using TLS:

+ **Smtp active**: ON
+ **Smtp Secure**: TLS
+ **Smtp host**: smtp.zoho.com
+ **Smtp port**: 587
+ **Smtp auth**: ON
+ **Smtp user**: _(example@zoho.com, or your own domain's email address)_
+ **Smtp password**: _password_

<br>
**Related posts:**

+ [Host your email with your custom domain using Zoho Mail]({{ site.baseurl }}/host-email-with-your-domain)
+ [How to Configure ElasticEmail on Yclas]({{ site.baseurl }}/configure-elasticemail-yclas)