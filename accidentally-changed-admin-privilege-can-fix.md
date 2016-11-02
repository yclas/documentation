---
title:  "I accidentally changed my admin privilege, how can I fix that?"
date:   2014-05-21 11:27:04
categories: Technical
tags: [Technical]
permalink: /accidentally-changed-admin-privilege-can-fix/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

I was playing around with the user roles and accidentally changed the admin role to "1" instead of "10" on my admin account. Now I can't do anything as I don't have any admin permissions at all.

**If that happened to you here is the fix:** 

1. Login to your **cPanel** at your hosting 
2. Go to **phpMyAdmin** 
3. Select your **Openclassifieds database** 
4. Go to table **oc2_users** 
5. Search for your user and change the **id_role** to "**10**". 

![Fixing user roles](//open-classifieds.com/wp-content/uploads/2014/05/Fixing-user-roles.png)

What is more, if you forgot your password and somehow the " **Forgot my password** " function wasn't working, you could fix that by registering a new user and following the above mentioned steps to make the **new user admin**.

Let us know what guide you want next and we will write it for you and include it to our FAQ section, simply post a comment in the section below.

Regards from Yclas team.

