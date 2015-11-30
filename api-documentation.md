---
title:  API Documentation for classifieds
date:   2015-05-21 19:53:00
categories: HowTo
tags: [Development]
permalink: /api-documentation/
toc: false
---
_Note: If you are using Open Classifieds you need at least version 2.5.0 works on all sites of Yclas.com_


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
- [Public Resources](#public-resources)
    - [Categories](#categories)
    - [Locations](#locations)
    - [Custom fields ads](#custom-fields-ads)
    - [Custom fields category](#custom-fields-category)
    - [Custom fields users](#custom-fields-users)
- [Authenticated by API Key Resources](#authenticated-by-api-key-resources)
    - [Create User](#create-user)
    - [Login User](#login-user)
    - [Listings](#listings)
    - [List Users](#list-users)
    - [User info](#user-info)
- [Authenticated by User Key Resources](#authenticated-by-user-key-resources)
    - [Profile](#profile)
    - [Advertisement](#advertisement)
    - [Favorites](#favorites)
    - [Messages](#messages)

<!-- /MarkdownTOC -->



## About

This is the official API Documentation for Yclas and Open Classifieds. With this API you will be able to extend the usage of your site, for example with native iOS and Android APPS. Only available for Open Classifieds 2.5.0 or newer and all Yclas installations.

Contact us if you are interested to purchase the native mobile APPS [here](http://open-classifieds.com/contact).


### REST
This API uses REST as principle. Allowed methods are GET,POST, PUT and DELETE.

Best practices and inspiration by [Vinay](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) and [Simon](http://simonguest.com/2013/07/05/designing-a-web-api-for-mobile-apps/). Used [kohana-restful-api](https://github.com/SupersonicAds/kohana-restful-api) as code base.

NOTE: You may need to [disable mod_security](http://www.inmotionhosting.com/support/website/modsecurity/disable-mod-security-via-modsec-manager) to receive DELETE or PUT methods. 

### Routes

We use routes similar to a crud system but they are mapped to actions internally.

Base route:
`/api/v1/<controller>(/<action>(/<id>))(.<format>`
 
Parameters between () are optional.

Example:
    `POST /api/v1/categories/update/3`

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

`GET /api/v1/listings?price__between=100,303`

This will filter ads with field `price` bigger or equal than 100 and smaller or equal to 303.

#### Sorting
Sorting: Similar to filtering, a generic parameter sort can be used to describe sorting rules. The sort parameter takes in list of comma separated fields, each with a possible unary negative to imply descending sort order. 
Let's look at some examples:

- `GET /api/v1/listings?sort=-published` - Retrieves a list of tickets in descending published date
- `GET /api/v1/listings?sort=-published,title` - Retrieves a list of ads in descending order of published date and by title of the add

#### Searching
Besides filtering on some endpoints you will be allowed to make a search using the `q` parameter.

`GET /api/v1/listings?q=something+to+search`

#### Pagination
You can paginate any result by using the params page (number of page) and items_per_page (elements to display).

`GET /api/v1/listings?q=something+to+search&page=3&items_per_page=10`

We return `X-Total-Count` header with the total amount of elements found and a header `link` with next,prev,last,first links.


#### Limiting fields returned
Limiting which fields are returned by the API

`GET /api/v1/listings?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at`


**Remember: You can use all this parameters together!**

`GET /api/v1/listings?q=something+to+search&status>=1&id_category=77&sort=-title,price&page=3&items_per_page=10`


### Issues and bug reports

Please use [GitHub](https://github.com/open-classifieds/openclassifieds2/issues/new) to report any issue you may face.

----------

## Authentication

This API uses 3 different kind of endpoints. 2 are authenticated and 1 does not require any kind.

**We highly recommend usage of HTTPS to make all the request encripted and safer.**

### API Key of your installation

In order to use some api endpoint you will be required to have an API Key of your site.

To get it:

1. Login at your classifieds site
2. Go to Settings->General
3. Check for API Key, thats your code you will need to make requests

That's your `api_key` for your site to use in further requests. Ex:

`GET /api/v1/listing/3?apikey=ajdnasjdlk_iym`


If you have OC 2.5.1 or lower to get the api_key:

1. Login at your classifieds site
2. Paste in your browser  `/oc-panel/Config/update/api_key`
3. Copy the config_value


### User API Token

Some of the API points are user based actions, so we need the specific API key `user_token` of the user in order to login the user for the request and filter the results.

To get it:

1. Use [Login User](#login-user) end point using your `apikey`
2. Store `user_token` somewhere safe
3. Any future request include `user_token=asndadnasdm` to authenticate the user

Example:

`DELETE /api/v1/favorites/5?user_token=adjkdfnkji_iuie13`

----------

## Public Resources

This API endpoints do not require any kind of authentication, therefore are public.

### Categories

Retrieve all the categories, you can filter, sort etc.  Theres no pagination here.

`GET /api/v1/categories`

Example, get categories with deep = 1 , those that are to display on home page:

`GET /api/v1/categories?parent_deep=1`

Display all the siblings of a category

`GET /api/v1/categories?id_category_parent=2`

Get single category info. This includes all the fields of the category + siblings + thumb and parents of the category.

`GET /api/v1/categories/3`

Extra: Retrieve all the categories using different array format.

`GET /api/v1/categories/all`

### Locations

Retrieve all the locations, you can filter, sort etc.  Theres no pagination here.

`GET /api/v1/locations`

Example, get locations with deep = 1 , those that are to display on home page:

`GET /api/v1/locations?parent_deep=1`

Display all the siblings of a location

`GET /api/v1/locations?id_location_parent=2`

Get single category info. This includes all the fields of the location + siblings + thumb the location.

`GET /api/v1/locations/3`

Extra: Retrieve all the locations using different array format.

`GET /api/v1/locations/all`

### Custom fields ads

This is meta information regarding extra fields for the Advertisement. Will return all the custom fields for all the categories.

`GET /api/v1/customfields/ads`

For a specific ad:

`GET /api/v1/ads/6` in the array `customfield`.

`GET /api/v1/listings/6` in the array `customfield`.


### Custom fields category

If we want the custom fields of an ad for a specific category we can use the id_category:

`GET /api/v1/customfields/category/6`

OR

`GET /api/v1/categories/6` in the array `customfield`.

### Custom fields users

This is meta information regarding extra fields for the user. This returns all the custom fields the user can have.

`GET /api/v1/customfields/users`

----------

## Authenticated by API Key Resources

To use this resources/endpoints you will need a an API Key that you get [here](#authentication).

We use the parameter `apikey` to send this information.

### Create User

Used to register a new user.

`POST /api/v1/auth`

**Params**

- name
- email
- password (optional, if not set we will generate one)

**Result**

We return an array with the user information. You need to use `user_token`.

In case of error message will be returned. 401.

### Login User

Using this method we will get an Auth Key for hte user to perform other actions on the API.

`GET /api/v1/auth` OR `POST /api/v1/auth/login`

**Query Params**

- email
- password
- apikey
- device_id (optional, used for push notifications on mobile apps with GCM)

**Example**

`GET /api/v1/auth?email=someemail@gmail.com&password=1234&apikey=SsrLIhDSmXjCHmp9SsrLIhDSmXjCHmp9`

**Result**

We return a `user` array that we will use all the authenticated api request based on this on `user_token`. Store it somewhere safe. This key is unique per user.

`"user_token":"06f8bbb8c7da102e5decf0820fb0d6c0b282d637"`

In case user not found, or not apikey provided we will returnt the correct message and HTTP status.

- `{"code":401,"error":"Wrong Api Key"}`
- `{"code":401,"error":"Wrong user name or password"}`


### Listings

This returns published ads.

`GET /api/v1/listings`

Example, get published ads of user 5 in category 7, sorted by created date:

`GET /api/v1/listings?id_user=5&id_category=7&sort=-created`

Get ads closer to the user using latitude and longitude

`GET /api/v1/listings?longitude=41.4075167&latitude=2.204625299999975&sort=distance`

This will add an extra value return named `distance` which will return the Km to the add from the location.

Example with more parameters, pagination, sorted etc...

`GET /api/v1/listings?q=something+to+search&id_category=77&sort=-title,price&page=3&items_per_page=10`


*Remember* we return the pagination and total count on headers

Returns the info of a single Ad, only if published.

`GET /api/v1/listings/3`

### List Users

Returns a list of users.

`GET /api/v1/users/`

You can filter, sort and has pagination.

### User info

Public information of user.

`GET /api/v1/users/5`


----------

## Authenticated by User Key Resources

To use this resources/endpoints you will need a `user_token` that you get [here](#authenticated-by-user-key-resources). 

This will identify the user for any request.

### Profile

**Edit Profile**

`PUT /api/v1/profile`

Possible params:

- name
- email
- description
- password
  

**Edit Profile Picture**

`POST /api/v1/profile/picture`

Requires parameter `profile_image`.

Returns TRUE is succeded, message if not.

**Delete Profile Picture**

`DELETE /api/v1/profile/picture_delete`

Returns TRUE is succeded, FALSE if not.

### Advertisement

#### User Advertisements

`GET /api/v1/ads`

Will return the ads of the user loged in. Perfect to list them so he can edit etc..

#### New Advertisement

`POST /api/v1/ads`

**Params**

- id_user
- id_category
- id_location (optional)
- title
- description
- address (optional)
- price (optional)
- phone (optional)
- website (optional)
- stock (numeric optional)
- latitude (optional)
- longitude (optional)

**Return**

If all is good you get:

`{
message: "Advertisement is posted. Congratulations!"
checkout_url: ""
}`

Message is what we need to show the client, since it's different in each site.
checkout_url, in case this is set is the URL we need to open for the client to pay.

You should validate data before posting, but theres a validation error:

`
{
code: 500
error: "Category must not be empty - Title must not be empty - "
}
`

#### Edit Advertisement

Edit ad number 5
`PUT /api/v1/ads/5`

**Params**

- id_category
- id_location (optional)
- title
- description
- address (optional)
- price (optional)
- phone (optional)
- website (optional)
- stock (numeric optional)
- latitude (optional)
- longitude (optional)

**Return**

If all is good you get:

`{
message: "Advertisement is posted. Congratulations!"
checkout_url: ""
}`

Message is what we need to show the client, since it's different in each site.
checkout_url, in case this is set is the URL we need to open for the client to pay.

You should validate data before posting, but theres a validation error:

`
{
code: 500
error: "Category must not be empty - Title must not be empty - "
}

#### Add image Advertisement

`POST /api/v1/ads/image/ID_AD`

**Params**

- image

Will add the image, adding it as last in order.

#### Delete image Advertisement

`DELETE /api/v1/ads/delete_image/ID_AD`

**Params**

- num_image

#### Delete Advertisement

Actually does not deletes the Ad formt he database it deactivates it.

`DELETE /api/v1/ads/5`

Returns TRUE or FALSE

### Favorites

**Get all Favorite Advertisement**

`GET /api/v1/favorites`

Will return us the info of the favorites for the user. ID_AD when was created and the title to use it to display it ;)

**Favorite Advertisement**

We use the ID_AD to delete the favorite, aswell to create it.

Favorite ad 5

`POST /api/v1/favorites/5`

Delete favorite for ad 6

`DELETE /api/v1/favorites/6`

### Messages

The messsages are already filteres by the user_token. Only his messages will be visible.

**Get all Messages**

`GET /api/v1/messages`

Returns all the messages (threads) for the users ordered by update. Result may include id_ad = NULL, if that is the case its a direct message to the user not to an Advertisement.

You can filter by params:

- id_ad
- id_user_from
- status (0= not read, 1= read)

Examples:


This are the messages received to Advertisement 5 from older to newer.

`GET /api/v1/messages?id_ad=5&sort=-created`

This will get the threads started by user 3.

`GET /api/v1/messages?id_user_from=3`

Show unread messages ordered by when was created/replied. (see unread shortcut), not recommended.

`GET /api/v1/messages?id_user_to=2&status=0&sort=-created`

Pagination also available. [Read more here](#pagination).

**Get Unread Messages**

Shortcut: This will return the threads that user has not read yet. We filter by id_user_to and status=0.

`GET /api/v1/messages/unread`

Allows filters, sorting and pagination.

**Get Thread Messages**

IMPORTANT: The ID we use to retrieve all the thread is always id_message_parent , not id_message.

`GET /api/v1/messages/5`

Returns all the messages for that threat. Marks all of them as read if he is the destinatary the first time we read. Ordered by date asc.


**Send Message**

Every time they contact a user / ad a new thread is created. Only reply will attach to the previous one.

Will return the message as array if succeded or FALSE if there was any error.

Message to Advertisement:

`POST /api/v1/messages`

Params

- id_ad
- message
- price (optional)

Direct Message User:

`POST /api/v1/messages`

Params

- id_user
- message

Reply Message:

`POST /api/v1/messages`

Params

- id_message_parent (id of the thread)
- message
- price (optional)