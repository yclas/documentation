---
title:  How to configure SMTP
date:   2015-11-09 11:11:00
categories: Email
tags:
- Email
- Settings
permalink: /smtp-configuration/
keywords: email, smtp, ssl, tls send, receive, server, gmail, outlook, yahoo, zoho, office365, live, mailgun, amazon ses, sendpulse
---

<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> For efficient email delivery, we highly recommend using a specialized SMTP service like <strong>Zoho</strong>, <strong>Mailgun</strong>, <strong>SendPulse</strong> or <strong>Amazon SES</strong>
</div>

To have a good deliverabilty of your emails you need to use your own email domain such as info@YOURDOMAIN.com and not something like mywebsite@gmail.com. Using free SMTP serivces like Gmail, Outlook or Yahoo it's a bad idea since there's lot of limitations on the amount of emails you can send. Please do not use them.

You can  easily use you own domain to send emails by using [Zoho for free]({{ site.baseurl }}/host-email-with-your-domain). or many domain name companies offer paid email hosting . 

It's now mandatory to have the site working using SMTP or [Elasticemail](https://docs.yclas.com/configure-elasticemail-yclas/). This guide explains how to set up the SMTP configuration of your website.

Go to **Settings** -> **Email Settings** -> **SMTP Configuration** and specify or enable:

+ **Smtp active**: Enable this to activate SMTP
+ **Smtp Secure**: Enable if the SMTP connection needs to occur over ssl
+ **Smtp host**
+ **Smtp port**
+ **Smtp auth**: If SMTPAuth should be used
+ **Smtp user**
+ **Smtp password**

When you finish with the configuration, click **SAVE**


## Zoho

1\. Create an account on [Zoho.com](https://www.zoho.com/signup.html)<br>
2\. [Follow the instructions]({{ site.baseurl }}/host-email-with-your-domain) to verify your domain, add users (email accounts) and create groups.<br>
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

## Mailgun

1\. Create an account on [Mailgun.com](https://www.mailgun.com/smtp)<br>
2\. Obtain your SMTP credentials on your [domains tab](https://app.mailgun.com/app/domains).<br>
3\. Verify your domain by following [this guide](https://documentation.mailgun.com/en/latest/quickstart-sending.html#verify-your-domain).<br>
4\. Proceed to **Mail Client Configuration** -> **Outgoing/SMTP** to find the configuration for your website SMTP:

+ **Smtp active**: ON
+ **Smtp Secure**: SSL
+ **Smtp host**: smtp.mailgun.org
+ **Smtp port**: 465
+ **Smtp auth**: ON
+ **Smtp user**: _[your Default SMTP Login](https://app.mailgun.com/app/domains)_
+ **Smtp password**: _password_

## SendPulse

1\. Create an account on [SendPulse.com](https://sendpulse.com/prices/smtp)<br>
2\. Obtaining your SMTP credentials on your SMTP settings.<br>
![SMTPSettings](https://1335865630.rsc.cdn77.org/images/En-knowledge_base/Mailpoet/pulse-smtp-en-min.png)<br>
3\. Proceed to **Mail Client Configuration** -> **Outgoing/SMTP** to find the configuration for your website SMTP:

+ **Smtp active**: ON
+ **Smtp Secure**: SSL
+ **Smtp host**: smtp-pulse.net
+ **Smtp port**: 465
+ **Smtp auth**: ON
+ **Smtp user**: _mail@domain.com_
+ **Smtp password**: _password_

## Amazon Simple Email Service

1\. Create an account on [AWS](https://aws.amazon.com/ses/)<br>
2\. Obtain your SMTP credentials by following [this guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html).<br>
3\. Proceed to **Mail Client Configuration** -> **Outgoing/SMTP** to find the configuration for your website SMTP:

+ **Smtp active**: ON
+ **Smtp Secure**: TLS
+ **Smtp host**: _Enter the SMTP endpoint for the AWS Region in which you use Amazon SES. For a list of endpoints, see [Amazon SES Endpoints](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html#region-endpoints)._
+ **Smtp port**: 587
+ **Smtp auth**: ON
+ **Smtp user**: _SMTP user name_
+ **Smtp password**: _SMTP password_

## Gmail

If you are using a Gmail account use the information provided below:

If your website is using SSL (https://):

+ **Smtp active**: ON
+ **Smtp Secure**: SSL
+ **Smtp host**: smtp.gmail.com
+ **Smtp port**: 465
+ **Smtp auth**: ON
+ **Smtp user**: _email address (example@gmail.com)_
+ **Smtp password**: _gmail account password_

If your website is using TLS (http://):

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

**Important! Settings -> Email settings -> Notify Email must match your Smtp user**

## Yahoo

+ **Smtp active**: ON
+ **Smtp Secure**: TLS
+ **Smtp host**: smtp.mail.yahoo.com
+ **Smtp port**: 587
+ **Smtp auth**: ON
+ **Smtp user**: _email address (example@yahoo.com)_
+ **Smtp password**: _password_

<br>
**Related posts:**

+ [Host your email with your custom domain using Zoho Mail]({{ site.baseurl }}/host-email-with-your-domain)
+ [How to Configure ElasticEmail on Yclas]({{ site.baseurl }}/configure-elasticemail-yclas)
+ [Troubleshooting Email errors]({{ site.baseurl }}/troubleshooting-email-errors)
