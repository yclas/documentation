---
title:  How to configure Google Map Settings
date:   2015-05-25 10:26:48
categories: Advertisement
tags: 
- Advertisement
- Settings
permalink: /how-to-configure-Google-Map-Settings/
keywords: api key, maps
---
If you use Google Maps on your website, users will be able to share the location of their advertisement in order to attract more viewers. If you don't know how to integrate Google Maps please follow [this guide]({{ site.baseurl }}/integrating-google-maps-classifieds-website).

Yclas gives you the option to set the Google Map Zoom level and the default coordinates for Map latitude and longitude.

## Configure Google Maps

**Steps:**

1. Go on **Panel**, **Settings** -> **Advertisement** -> **Google Maps**.
2. Fill the fields.
3. Click **SAVE**.

<a href="//docs.yclas.com/images/googlemapsettings.png" class="thumbnail gallery-item" data-gallery>
![google map settings](//docs.yclas.com/images/googlemapsettings.png)
</a>

+ **Google Maps API Key**: [Get your API Key](#get-your-api-key).
+ **Google map style**: Custom Google Maps styling.
+ **Google map zoom level**: Google map default zoom level. It will be applied on the map in the Publish New page and Ad page.
+ **Map latitude coordinates**: Google map default latitude coordinates. It affects the map in the Publish New page.
+ **Map longitude coordinates**: Google map default longitude coordinates. It affects the map in the Publish New page.
+ **Auto locate distance**: Sets maximum distance of closest suggested locations to the visitor.

## Get your API Key

1. Go to [Google developer's console](https://console.developers.google.com) page to get your API Key.
2. Choose **Create a Project** and click **Continue**.
3. Enter a **Name** for the API and on **Accept requests from these HTTP referrers (web sites)** enter _yourdomain.com/*_ and click **Create**.
4. Copy the API Key into your admin panel, **Settings** -> **Advertisement** -> **Google Maps** and click **Save**.
5. Then back to the APIs Console, click **Library** on the left menu, under **Google Maps APIs** find and enable:

+ **Google Static Maps API**
+ **Google Maps Geocoding API**
+ **Google Maps JavaScript API**
+ **Google Maps Directions API**
+ **Google Maps Geolocation API**
+ **Google Places API Web Service**
+ **Google Maps Distance Matrix API**


<a href="//docs.yclas.com/images/google-api-key.png" class="thumbnail gallery-item" data-gallery>
![google map settings](//docs.yclas.com/images/google-api-key.png)
</a>

<a href="//docs.yclas.com/images/google-api-key2.png" class="thumbnail gallery-item" data-gallery>
![google map settings](//docs.yclas.com/images/google-api-key2.png)
</a>

<br>
**Related posts:**

+ [How to add an Interactive Map?]({{ site.baseurl }}/how-to-add-interactive-map)
+ [How to add map on the homepage?]({{ site.baseurl }}/how-to-add-map-on-the-homepage)