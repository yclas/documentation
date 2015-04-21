---
layout: page
title:  "I accidentally changed my admin privilege, how can I fix that?"
date:   2014-05-21 11:27:04
categories: HowTo
tags: HowTo
permalink: /accidentally-changed-admin-privilege-can-fix/
---
# I accidentally changed my admin privilege, how can I fix that?

I was playing around with the user roles and accidentally changed the admin role to "1" instead of "10" on my admin account. Now I can't do anything as I don't have any admin permissions at all.

**If that happened to you here is the fix:** 

1. Login to your **cPanel** at your hosting 
2. Go to **phpMyAdmin** 
3. Select your **Openclassifieds database** 
4. Go to table **oc2_users** 
5. Search for your user and change the **id_role** to "**10**". 

![Fixing user roles](http://open-classifieds.com/wp-content/uploads/2014/05/Fixing-user-roles.png)

What is more, if you forgot your password and somehow the " **Forgot my password** " function wasn't working, you could fix that by registering a new user and following the above mentioned steps to make the **new user admin**.

Let us know what guide you want next and we will write it for you and include it to our FAQ section, simply post a comment in the section below.

Regards from Open Classifieds team.


<!--title: I accidentally changed my admin privilege, how can I fix that?
link: http://open-classifieds.com/2014/05/21/accidentally-changed-admin-privilege-can-fix/
author: Kinan
description: 
post_id: 17049
created: 2014/05/21 13:27:04
created_gmt: 2014/05/21 11:27:04
comment_status: open
post_name: accidentally-changed-admin-privilege-can-fix
status: publish
post_type: post-->
