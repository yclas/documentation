---
layout: page
title:  "How to add map on the homepage?"
date:   2013-09-06 09:45:44
categories: HowTo
tags: HowTo
permalink: /how-to-add-map-on-the-homepage/
---
# How to add map on the homepage?

Here we present another cool thing that you can do on your site. It is possible to place a **full width Google map** at your homepage like this:

![2](http://open-classifieds.com/wp-content/uploads/2013/08/maps-home.png_preview_500x375.png)

<br>
To do it you need to use a **[premium theme](http://open-classifieds.com/market/)**. In theme options, go to the **header banner** and **paste this HTML**: 

    <iframe frameborder="0" noresize="noresize" height="620px" width="100%" src="http://**YOURDOMAIN**.com/map.html?height=600&amp;controls=0&amp;**zoom=11**&**lat=41.390359&lon=2.179031**"> </iframe>

In this code you can set the **zoom** (the higher number the closer location appears) and **latitude** and **longitude** of the location you want to put in center of the map as a default view. To find out about exact coordinates of any point you can use for example this **[tool](http://www.itouchmap.com/latlong.html)**.


![2](http://open-classifieds.com/wp-content/uploads/2013/08/option.png)

<br>
**Related post:**

[Why is my map widget not showing anything?]({{ site.baseurl }}/map-widget/)


<!--title: How to add map on the homepage?
link: http://open-classifieds.com/2013/09/06/how-to-add-map-on-the-homepage/
author: 
description: 
post_id: 9600
created: 2013/09/06 11:45:44
created_gmt: 2013/09/06 09:45:44
comment_status: open
post_name: how-to-add-map-on-the-homepage
status: publish
post_type: post-->