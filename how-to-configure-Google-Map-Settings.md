---
title:  How to configure Google Map Settings
date:   2015-05-25 10:26:48
categories: Advertisement
tags: [Advertisement]
permalink: /how-to-configure-Google-Map-Settings/
---
If you use Google Maps on your website, users will be able to share the location of their advertisement in order to attract more viewers. If you don't know how to integrate Google Maps please follow [this guide]({{ site.baseurl }}/integrating-google-maps-classifieds-website).

Open Classifieds gives you the option to set the Google Map Zoom level and the default coordinates for Map latitude and longitude.

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
+ **Google map zoom level**: Google map default zoom level.
+ **Map latitude coordinates**: Google map default latitude coordinates.
+ **Map longitude coordinates**: Google map default longitude coordinates.
+ **Auto locate distance**: Sets maximum distance of closest suggested locations to the visitor.

## Get your API Key

1. Go to [this](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend&keyType=CLIENT_SIDE&reusekey=true) page to get your API Key.
2. Choose **Create a Project** and click **Continue**.
3. Enter a **Name** and your website URL on **Accept requests from these HTTP referrers (web sites)** and click **Create**.
4. Copy the API Key into your admin panel, **Settings** -> **Advertisement** -> **Google Maps** and click **Save**.
5. Then back to the APIs Console, click **Overview** on the left menu, find and enable **Google Static Maps API** under Google Maps APIs.

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