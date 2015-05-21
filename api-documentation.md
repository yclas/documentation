---
layout: page
title:  API Documentation for classifieds
date:   2015-05-21
categories: HowTo
tags: api,development
permalink: /api-documentation/
---
# API V1 Documentation
----------

# WORK IN PROGRESS
Available for OC 2.5.0

----------

## About

Only available from OC 2.5.0 and all Yclas installations.

Best practices and inspiration by [Vinay](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) and [Simon](http://simonguest.com/2013/07/05/designing-a-web-api-for-mobile-apps/). Used [kohana-restful-api](https://github.com/SupersonicAds/kohana-restful-api) as code base.

### REST

### Routes

### Output

### Issues and bug reports

Please use [GitHub](https://github.com/open-classifieds/openclassifieds2/issues/new) to report any issue you may face.

----------

## Authentication

### Get API Key

### Get User API Token

----------

## Non Authenticated Resources

### Categories
Retrieve all the categories.

### Category info
This includes all the fields of the category + siblings and parents of the category + custom fields ads.

### Locations
Retrieve all the locations.

### Location info
This includes all the fields of the location + siblings and parents of the location .

### Get all Custom fields ads meta

### Get all Custom fields users meta


----------

## Authenticated by API Key Resources

To use this resources/endpoints you will need a an API Key that you get [here](#Authentication).

### Login User

### Remember Password

### Browse/Search Advertisememts

### Get Advertisement

### Get User info

----------

## Authenticated by User Key Resources

To use this resources/endpoints you will need a user token that you get [here](#Authentication).

### Edit Profile

### Edit Profile Picture

### Post Advertisememt

### Edit Advertisement

### Delete Advertisement

### Get all Favorite Advertisememt

### Favorite Advertisememt

### Delete Favorite Advertisememt

### Meessage Advertisememt

### Message User

### Get all Messages

### Get Message
This will get the answers to a message thread