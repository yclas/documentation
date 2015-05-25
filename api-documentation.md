---
layout: page
title:  API Documentation for classifieds
date:   2015-05-21
categories: HowTo
tags: api,development
permalink: /api-documentation/
---
# API V1 Documentation
_Note: If you are using Open Classifieds you need at least version 2.5.0_

# WORK IN PROGRESS
Available for OC 2.5.0

----------
<!-- MarkdownTOC -->

- [About](#about)
    - [REST](#rest)
    - [Routes](#routes)
    - [Output](#output)
    - [Result filtering, sorting & searching](#result-filtering-sorting--searching)
    - [Issues and bug reports](#issues-and-bug-reports)
- [Authentication](#authentication)
    - [API Key of your installation](#api-key-of-your-installation)
    - [User API Token](#user-api-token)
- [Non Authenticated Resources](#non-authenticated-resources)
    - [Categories](#categories)
    - [Category info](#category-info)
    - [Locations](#locations)
    - [Location info](#location-info)
    - [Get all Custom fields ads meta](#get-all-custom-fields-ads-meta)
    - [Get all Custom fields users meta](#get-all-custom-fields-users-meta)
- [Authenticated by API Key Resources](#authenticated-by-api-key-resources)
    - [Login User](#login-user)
    - [Remember Password](#remember-password)
    - [Browse/Search Advertisememts](#browsesearch-advertisememts)
    - [Get Advertisement](#get-advertisement)
    - [Get User info](#get-user-info)
- [Authenticated by User Key Resources](#authenticated-by-user-key-resources)
    - [Edit Profile](#edit-profile)
    - [Edit Profile Picture](#edit-profile-picture)
    - [Post Advertisememt](#post-advertisememt)
    - [Edit Advertisement](#edit-advertisement)
    - [Delete Advertisement](#delete-advertisement)
    - [Get all Favorite Advertisememt](#get-all-favorite-advertisememt)
    - [Favorite Advertisememt](#favorite-advertisememt)
    - [Delete Favorite Advertisememt](#delete-favorite-advertisememt)
    - [Meessage Advertisememt](#meessage-advertisememt)
    - [Message User](#message-user)
    - [Get all Messages](#get-all-messages)
    - [Get Message](#get-message)

<!-- /MarkdownTOC -->



## About

This is the official API Documentation for Yclas and Open Classifieds. With this API you will be able to extend the usage of your site, for example with native iOS and Android APPS. Only available for Open Classifieds 2.5.0 and all Yclas installations.

Contact us if you are interested to purchase the native mobile APPS [here](http://open-classifieds.com/contact).


### REST
This API uses REST as principle. Allowed methods are GET,POST, PUT and DELETE.

Best practices and inspiration by [Vinay](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) and [Simon](http://simonguest.com/2013/07/05/designing-a-web-api-for-mobile-apps/). Used [kohana-restful-api](https://github.com/SupersonicAds/kohana-restful-api) as code base.


### Routes

We use routes similar to a crud system but they are mapped to actions internally.

Base route:
`api/v1/<controller>(/<action>(/<id>))(.<format>`
 
Parameters between () are optional.

Example:
    `PUT /api/v1/categories/update/3`

Is the same as:
    `PUT /api/v1/categories/3`

Mapping of actions:

- GET => index 
- PUT => update 
- POST => create 
- DELETE => delete

In case you do not specify an action and you are using and ID, we swap the values internally.

### Output
The API supports different outputs. By default all will be returned as JSON but other outputs are available such:

- JSON
- CSV
- XML
- HTML

Example of usage:

- `GET /api/v1/categories/3.xml` get category 3 data as XML
- `GET /api/v1/categories/3.json` get category 3 data as JSON
- `GET /api/v1/categories/3` get category 3 data as JSON
- `GET /api/v1/category.csv` get all categories as CSV

### Result filtering, sorting & searching
This are sent as parameter (Post or Query) to the endpoint.

#### Filter
You can pass any field we indicate in the documentation, ex:

`GET /api/v1/category?id_category_parent=1&has_image=1`
This gets the categories that the parent is = 1 and have image.

Allowed operators `>=` (greater or equal), `<=` (less or equal), `!=` (different than) and `__between`.

To user the operator `__between` the value needs to be comma separated, and the field needs to get appended `__between` ex:
`GET /api/v1/listing?price__between=100,303`

This will filter ads with field `price` bigger or equal than 100 and smaller or equal to 303.

#### Sorting
Sorting: Similar to filtering, a generic parameter sort can be used to describe sorting rules. The sort parameter takes in list of comma separated fields, each with a possible unary negative to imply descending sort order. 
Let's look at some examples:

- `GET /api/v1/listing?sort=-published` - Retrieves a list of tickets in descending published date
- `GET /api/v1/listing?sort=-published,title` - Retrieves a list of ads in descending order of published date and by title of the add

#### Searching
Besides filtering on some endpoints you will be allowed to make a search using the `q` parameter.

`GET /api/v1/listing?q=something+to+search`

#### Pagination
You can paginate any result by using the params page (number of page) and items_per_page (elements to display).

`GET /api/v1/listing?q=something+to+search&page=3&items_per_page=10`

We return `X-Total-Count` header with the total amount of elements found and a header `link` with next,prev,last,first links.


#### Limiting fields returned
Limiting which fields are returned by the API

`GET /api/v1/listing?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at`


**Remember: You can use all this parameters together!**

`GET /api/v1/listing?q=something+to+search&status>=1&id_category=77&sort=-title,price&page=3&items_per_page=10`


### Issues and bug reports

Please use [GitHub](https://github.com/open-classifieds/openclassifieds2/issues/new) to report any issue you may face.

----------

## Authentication

This API uses 3 different kind of endpoints. 2 are authenticated and 1 does not require any kind.

### API Key of your installation

In order to use some api endpoint you will be required to have an API Key of your site.

To get it:
1. Login at your classifieds site
2. Paste in your browser  `/oc-panel/Config/update/api_key`
4. Copy the config_value

That's your api_key for your site.


### User API Token

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

To use this resources/endpoints you will need a an API Key that you get [here](#authentication).

### Login User

Using this method we will get an Auth Key for hte user to perform other actions on the API.
#### End Point

`GET /api/v1/auth`

#### Query Params

- email
- password
- api_key

#### Example

`GET /api/v1/auth?email=neo22s@gmail.com&password=1234&apikey=SsrLIhDSmXjCHmp9SsrLIhDSmXjCHmp9`

#### Result

### Remember Password

### Browse/Search Advertisememts

### Get Advertisement

### Get User info

----------

## Authenticated by User Key Resources

To use this resources/endpoints you will need a user token that you get [here](#authentication).

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