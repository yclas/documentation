---
title:  Overview of theme Auction
date:   2018-04-19 11:00:31
categories: Themes
tags:
- Themes
- Appearance
permalink: /overview-auction-theme/
keywords: theme options, layout, style, appearance, auction
---
<a href="https://yclas.com/domain/demo?theme=auction"><strong>See the demo <i class="fa fa-arrow-right" aria-hidden="true"></i>
</strong></a>
<br><br>

<a href="//docs.yclas.com/images/auction.png" class="thumbnail gallery-item" data-gallery>
<img src="//docs.yclas.com/images/auction.png">
</a>

**Auction** is a theme with some extra functionality than the other themes and is specialized on auctions.

Sellers can list an item and choose the listing duration. The bidding opens at a price the seller specifies when it ends the bidder with the highest bid wins. 


## Activate Auction theme on your site

1. Login to your Admin panel.
2. Go to **Appearance** on left hand menu.
3. Choose **Themes**.
4. Search for **Auction** and click on **Activate**.
5. Done!

## Configuration

Once the Auction theme is activated, you will be asked to auto-configure it. It's highly recommended to press "Yes" in order to achieve the desired functionality.

<a href="{{ site.baseurl }}/images/auction-config.png" class="thumbnail gallery-item" data-gallery>
![auction config]({{ site.baseurl }}/images/auction-config.png)
</a>

In case you press "No" or you think the theme is not properly configured, try one of the following:

1. Re-activate the theme by activating a different theme first and then Auction

2. Run this on your browser: _yourdomain.com_**?theme-config=1**

3. Do the following changes in your panel:

+ Create custom field: Name: **auction_days** , Type: **Number** , Required: **Yes**
+ Settings -> Plugins -> enable "Messaging System"
+ Settings -> Payment -> PayPal -> disable "Buy Now button"
+ Settings -> Advertisement -> Display Options -> enable "Price on contact form"
+ Settings -> Advertisement -> Advertisement Fields -> enable "Price"

## How it works

The following  will explain all the steps from the time a seller lists an item until the auction ends.

The seller visits your site and fills the "Publish New" form. The required fields are: Title, Category, Location (if enabled by the admin), Description, Price and Auction Days. The Auction Days field needs to be filled with a number (integer). For example, if it's filled with the number 7, the auctions ends 7 days from the time the ad was published. Note that ads with the Price or Auction Days fields empty will not be displayed in your site.  

<a href="{{ site.baseurl }}/images/auction-new-form.png" class="thumbnail gallery-item" data-gallery>
![auction config]({{ site.baseurl }}/images/auction-new-form.png)
</a>

The ad is now published and potential buyers can place their bid by visiting the ad page.

<a href="{{ site.baseurl }}/images/auction-bid-form.png" class="thumbnail gallery-item" data-gallery>
![auction config]({{ site.baseurl }}/images/auction-bid-form.png)
</a>

The seller will get notified for every bid. 

<a href="{{ site.baseurl }}/images/auction-bid-message.png" class="thumbnail gallery-item" data-gallery>
![auction config]({{ site.baseurl }}/images/auction-bid-message.png)
</a>

<a href="{{ site.baseurl }}/images/auction-bid-message2.png" class="thumbnail gallery-item" data-gallery>
![auction config]({{ site.baseurl }}/images/auction-bid-message2.png)
</a>

When the auction ends the ad will automatically gets marked as deactivated. This way bidders cannot bid to this ad anymore and the seller can contact the bidder who won the auction.

## Theme Options

### Color

Choose the color scheme that will style your website.

<div class="row">
	<div class="col-sm-4">
		<strong>Default</strong>
		<a href="{{ site.baseurl }}/images/auction-color-default.png" class="thumbnail gallery-item" data-gallery>
			<img src="{{ site.baseurl }}/images/auction-color-default.png">
		</a>
	</div>
	<div class="col-sm-4">
		<strong>Orange</strong>
		<a href="{{ site.baseurl }}/images/auction-color-orange.png" class="thumbnail gallery-item" data-gallery>
			<img src="{{ site.baseurl }}/images/auction-color-orange.png">
		</a>
	</div>
	<div class="col-sm-4">
		<strong>Red</strong>
		<a href="{{ site.baseurl }}/images/auction-color-red.png" class="thumbnail gallery-item" data-gallery>
			<img src="{{ site.baseurl }}/images/auction-color-red.png">
		</a>
	</div>
</div>
<div class="row">
	<div class="col-sm-4">
		<strong>Green</strong>
		<a href="{{ site.baseurl }}/images/auction-color-green.png" class="thumbnail gallery-item" data-gallery>
			<img src="{{ site.baseurl }}/images/auction-color-green.png">
		</a>
	</div>
	<div class="col-sm-4">
		<strong>Blue</strong>
		<a href="{{ site.baseurl }}/images/auction-color-blue.png" class="thumbnail gallery-item" data-gallery>
			<img src="{{ site.baseurl }}/images/auction-color-blue.png">
		</a>
	</div>
	<div class="col-sm-4">
		<strong>Orange-Blue</strong>
		<a href="{{ site.baseurl }}/images/auction-color-orange-blue.png" class="thumbnail gallery-item" data-gallery>
			<img src="{{ site.baseurl }}/images/auction-color-orange-blue.png">
		</a>
	</div>
</div>

### Layout

+ **Display breadcrumb**: Enable to show breadcrumb on the top of each page

<a href="{{ site.baseurl }}/images/auction-breadcrumb.png" class="thumbnail gallery-item" data-gallery>
	<img src="{{ site.baseurl }}/images/auction-breadcrumb.png">
</a>

+ **Header tool bar gets fixed in the top**: If enabled, the top menu will always be visible and on the top of the page while scrolling the page down.

+ **Search bar on header**: Enable to have a search bar on the header of the website.

+ **Where you want the sidebar to appear**: Select where to place the Sidebar, Left or Right. Choose None if you don't want to have Sidebar.

+ **Hide header and footer on single ad and user profile page**: Removes the header, breadcrumbs and footer on single ad and user profile page. Enable to show the user profile page like “your store”.  


### Homepage

+ **Numbers of ads to display on homepage. Recommended 30.**: Select the number of ads that will be displayed in the homepage slider. Since each slide includes 6 ads, we recommended to enter 30 or a number that is divided by 6. On mobile each slide shows 2 ads.

+ **Homepage site slogan**: Enter the homepage Slogan. It's displayed above the header Search Bar.

+ **Homepage site description**: Enter the site description. It's displayed above the header Search Bar and below the site slogan.

<a href="{{ site.baseurl }}/images/auction-home-slogan.png" class="thumbnail gallery-item" data-gallery>
	<img src="{{ site.baseurl }}/images/auction-home-slogan.png">
</a>

+ **Show latest closed auctions on homepage**: Enable to show the Closed Auctions section in the homepage. 

<a href="{{ site.baseurl }}/images/auction-closed.png" class="thumbnail gallery-item" data-gallery>
	<img src="{{ site.baseurl }}/images/auction-closed.png">
</a>

+ **Display highest bidder username in the homepage**: If enabled, the name of the highest bidder will be displayed at the bottom of each ad in the Latest Auction and Closed Auctions sections. 


### Listing

+ **Infinite scroll**: Auctions will be loading automatically whenever the user scrolls down in the listings page.

+ **Default state for list/grid in listing**: Choose the default way you want the ads to be viewed by users when in listing view.

+ **Display slider in listing**: Enable to activate a slider in the listing pages with the latest ads of the certain category.

+ **Display listing slider on mobile devices**: Enable if you want to have the listing slider displayed on mobile screens. If enabled, each slide shows 2 ads.

+ **Display highest bidder username in the listing page**: If enabled, the name of the highest bidder will be displayed at the bottom of each ad in the listing slider and listing page ads.

### Ad details page

+ **Show best bidder and number of bids**: Choose what information you want to show in each listing page next to the price.

+ **Show Bids history in pop-up**: Choose how you want to show the Bid History, or choose None to disable the option. If enabled, Bid History button will be available in each listing page. Pressing the button will show a pop up with all the bids and bidders.

+ **Show/hide phone number in the ad page**: If enabled, users will need to press on the seller phone number to reveal it.

<br>
<br>

{% include themes-include.html %}

<br>
**Related post:**

* [Configuration of premium themes]({{ site.baseurl }}/configuration-of-premium-themes)
* [Overview of theme Jobdrop]({{ site.baseurl }}/overview-jobdrop-theme)
* [Overview of theme Pinclass]({{ site.baseurl }}/overview-pinclass-theme)
* [Overview of theme Splash]({{ site.baseurl }}/overview-splash-theme)
* [Overview of theme Yummo]({{ site.baseurl }}/overview-yummo-theme)
