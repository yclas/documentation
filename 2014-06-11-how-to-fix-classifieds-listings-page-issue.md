---
layout: page
title:  "How to fix classifieds listings page issue?"
date:   2014-06-11 13:23:15
categories: HowTo
tags: HowTo
permalink: /how-to-fix-classifieds-listings-page-issue/
---
# How to fix classifieds listings page issue?


Since last release 2.1.8 there was an issue with the classifieds listings page, if you click on the 2nd page it would redirect you to the homepage, we fixed this issue for 2.2 but for those of you who want to get the fix right now you can follow those steps: 

- Log into your FTP or file manager 
- Navigate to **/oc/ko323/system/classes/kohana/** 
- Replace the file route.php with **[this one](https://raw.githubusercontent.com/open-classifieds/openclassifieds2/2.1.7/oc/ko322/classes/kohana/route.php )** (right click the link and click "save as") 

Once you do this your website will work perfectly.


<!--title: How to fix classifieds listings page issue?
link: http://open-classifieds.com/2014/06/11/how-to-fix-classifieds-listings-page-issue/
author: Kinan
description: 
post_id: 18024
created: 2014/06/11 15:23:15
created_gmt: 2014/06/11 13:23:15
comment_status: open
post_name: how-to-fix-classifieds-listings-page-issue
status: publish
post_type: post-->
