---
layout: page
title:  "How to fix the Base URL?"
date:   2013-10-01 16:02:19
categories: HowTo
tags: HowTo
permalink: /how-to-fix-the-base-url/
---
# How to fix the Base URL?

_This guide is only for [Open-Classifieds](http://open-classifieds.com/)!_

To **fix the Base URL** follow the steps below: 

1. Enter the **MySQLi data**, using **phpMyAdmin** (for example) 
2. Go to the table **oc_config** 
3. Then search for general - **base_url** 
4. Modify it and **Save** the data 
5. **Delete cache** by deleting the contents of folder /oc/cache/* 

That should work ;) 

You can also refer to this [relevant topic](http://forums.open-classifieds.com/support/base-url.html#.U-igReN_vtw) opened at our forums.


<!--title: How to fix the Base URL?
link: http://open-classifieds.com/2013/10/01/how-to-fix-the-base-url/
author: admin
description: 
post_id: 9933
created: 2013/10/01 18:02:19
created_gmt: 2013/10/01 16:02:19
comment_status: open
post_name: how-to-fix-the-base-url
status: publish
post_type: post-->