---
title:  "How to add locations?"
date:   2013-08-22 07:00:53
categories: Classifieds
tags: [Classifieds]
permalink: /how-to-add-locations/
keywords: location, country, city, place, county, state, region, province, sub, import, new, add, create, parent, geolocation, geoname
---
**Locations** makes it possible to segregate ads by place or city. Thanks to this users can narrow their search ads within their geographical territory.

<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> Warning:</strong> We do not recommend adding more than 1000 locations if you use shared hosting. Otherwise, your website will work very slow.
</div>

<a href="{{ site.baseurl }}/images/add-locations.png" class="thumbnail gallery-item" data-gallery>
![How to add locations 1](//docs.yclas.com/images/add-locations.png)
</a>

## How to add locations

### Geonames

**Steps:**

1. Login to your admin panel.
2. Choose **Classifieds** -> **Locations**.
3. Select **Import Geonames Locations**.

<a href="{{ site.baseurl }}/images/import-geolocations.png" class="thumbnail gallery-item" data-gallery>
![How to add locations 1](//docs.yclas.com/images/import-geolocations.png)
</a>

<a href="{{ site.baseurl }}/images/import-geolocations-2.png" class="thumbnail gallery-item" data-gallery>
![How to add locations 1](//docs.yclas.com/images/import-geolocations-2.png)
</a>

This is probably the easiest and fastest way to add multiple locations. What you have to do is to choose a location (Continent, Country, State/Province, County/Region or City) and press **Import** to import its sub-locations. <br>
For example, if you choose:<br>
Continent = Europe<br>
Country = Spain<br>
State/Province = Catalonia<br>
and then click Import, it will add Barcelona, Girona, Lleidia and Tarragona to your locations. 

Then, you can add the sub-locations of a location. <br>
If you have added Barcelona in your locations, click **Browse** on the right of this location. <br>
Then choose:<br>
Continent = Europe<br>
Country = Spain<br>
State/Province = Catalonia<br>
County/Region = Barcelona<br>
and click "Import" to add all the sub-locations of Barcelona.

<iframe width="800" height="450" src="https://www.youtube.com/embed/oFTUt04JKPM" frameborder="0" allowfullscreen></iframe>

### Quick Creator

<a href="{{ site.baseurl }}/images/quick-creator-locations.png" class="thumbnail gallery-item" data-gallery>
![How to add locations 1]({{site.baseurl}}/images/quick-creator-locations.png)
</a>

At the quick location creator, add the name of the location, hit **enter** on your keyboard and when you have done, press the '**Send**' button as explained in the following screenshot. 

<a href="{{ site.baseurl }}/images/quick-location-creator.png" class="thumbnail gallery-item" data-gallery>
![How to add locations 1]({{site.baseurl}}/images/quick-location-creator.png)
</a>

### Manual method

   1\. Go to **Panel**, choose **Classifieds** > **Locations** on the left sidebar <br>
   2\. Press '**New location**' button<br>
   3\. Fill **in the fields:**

  + **Name:** Choose a name for the location that will be displayed, eg. city or city quarter. Basically, this field is the most important, the rest is kind of optional.<br>
  + **Parent:** Choose under one of the existing main locations, where the new location will be displayed. Choosing the Home Location while make it the main location. Locations can be easily moved to other parent locations.<br>
  + **Seoname:** A seoname will be auto-generated based on the name, but you can change it if you want it to be different.
  + **Description:** You can add a few words about the place.

It's possible to add manually the Latitude and Longitude of the location or enter the name of the location and find latitude & longitude automatically.

4\. Press **SUBMIT**

<a href="{{ site.baseurl }}/images/new-location.png" class="thumbnail gallery-item" data-gallery>
![How to add locations 2]({{site.baseurl}}/images/new-location.png)
</a>

After submitting, you should get this message:

_"Success. Location created"_.

Continue creating new locations if necessary amd remember to **delete cache** after finishing to see the changes. To delete cache go to: **Extra** > **Tools** > **Cache** and press the button **Delete all**.

New locations now will be available to choose in **Publish New Advertisement** form and visible in **'Locations' widget**.

### Import Locations

You can also add locations by importing them. Use [this example file](https://docs.google.com/uc?id=0B60e9iwQucDwa2VjRXAtV0FXVlk&export=download) to create yours and simply import locations into your website. For more information, follow [this guide.](http://docs.yclas.com/use-import-tool-categories-locations/#import-locations)

## How to add sub-locations

With our 2.4.0 release you can add sub-locations fast and easy. All you have to do is to click **Browse** next a location to insert sub-locations in that location.

<a href="{{ site.baseurl }}/images/import-geolocations-2.png" class="thumbnail gallery-item" data-gallery>
![How to add locations 2]({{site.baseurl}}/images/sub-locations.png)
</a>

## How to manage locations

Like before: go to **Panel**, choose **Classifieds** > **Locations** on the left sidebar. 

Managing them is very easy. If you want to move locations and change their order you just need to drag and drop selected one to the chosen place.

To change something, e.g. name or description of the location, you can click the **Edit** button.

To **delete** press the button with trash bin. Note that when you delete parent locations inside of it, it will be moved to level up - to the parent of the deleted location.


<iframe width="800" height="450" src="https://www.youtube.com/embed/pRQX37mxC68" frameborder="0" allowfullscreen></iframe>


## Locations widget

The location widget gives you additional options. To activate it, go to **Panel** and choose **Apperance** > **Widgets** on the left sidebar. Choose **'Locations' widget** from the list and click **CREATE**. Choose a name to the widget's title and select if you want to display it in a sidebar or in the footer. You can also keep it **Inactive**. Thanks to this widget, navigation among locations is easier. A list of them will be displayed at all times at the side or at the bottom of the page

<br>
**Related posts:**

  * [How to add categories and manage them?]({{ site.baseurl }}/how-to-add-categories)
  * [How to use import tool for categories and locations?]({{ site.baseurl }}/use-import-tool-categories-locations)
  
