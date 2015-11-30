---
title:  "How to fix the Base URL?"
date:   2013-10-01 16:02:19
categories: Technical
tags: [Technical]
permalink: /how-to-fix-the-base-url/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Open-Classifieds!
</div>

To **fix the Base URL** follow the steps below: 

1. Enter the **MySQLi data**, using **phpMyAdmin** (for example) 
2. Go to the table **oc_config** 
3. Then search for general - **base_url** 
4. Modify it and **Save** the data 
5. **Delete cache** by deleting the contents of folder /oc/cache/* 

That should work ;) 

You can also refer to this [relevant topic](http://forums.open-classifieds.com/support/base-url.html#.U-igReN_vtw) opened at our forums.

