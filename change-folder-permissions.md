---
title:  "How to change folder permissions"
date:   2014-01-10 09:04:54
categories: Technical
tags: [Technical]
permalink: /change-folder-permissions/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Open-Classifieds!
</div>

Open Classifieds requires some folders to be writable. 

This is useful if you are getting an error of folder not writable, or you cant upload pictures, or cache corrupted...etc. 

Please be sure that at least these folders have correct permissions and ownership: 

* /oc/cache
* /oc/logs
* /images

Example how to do it: 
        
    sudo chmod -R /var/ww/openclassifieds/oc/cache
    sudo chown -R www-data:www-data  /var/ww/openclassifieds/oc/cache

    
I recommend giving to the entire folder 755 permissions and correct ownership. 

Cleaning cache if there's an error: 
    
    sudo rm -f /var/ww/openclassifieds/oc/cache
    
    
