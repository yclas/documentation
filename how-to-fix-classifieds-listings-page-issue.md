---
title:  "How to fix classifieds listings page issue?"
date:   2014-06-11 13:23:15
categories: Technical
tags: [Technical]
permalink: /how-to-fix-classifieds-listings-page-issue/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Open-Classifieds!
</div>

Since last release 2.1.8 there was an issue with the classifieds listings page, if you click on the 2nd page it would redirect you to the homepage, we fixed this issue for 2.2 but for those of you who want to get the fix right now you can follow those steps: 

- Log into your FTP or file manager 
- Navigate to **/oc/ko323/system/classes/kohana/** 
- Replace the file route.php with **[this one](https://raw.githubusercontent.com/open-classifieds/openclassifieds2/2.1.7/oc/ko322/classes/kohana/route.php )** (right click the link and click "save as") 

Once you do this your website will work perfectly.


