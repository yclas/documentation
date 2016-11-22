---
title:  "How to modify cache time?"
date:   2014-03-05 15:18:22
categories: Technical
tags: [Technical]
permalink: /modify-cache-time/
keywords: cache, file, apc, apcu, memcache
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

**Before you read:** This post is a bit more technical, but I will try to keep it as simple as possible. 

Thanks to the **Cache** we are able to **serve more hits in your web without scaling your system**. That means **cheaper hosting**, a lot **more page views** and **faster page loading** !

### How works?

Every time your web server needs some dynamic information we send a query to the database server. It then does a search in all its data and returns the values to the web server.

This is normally **the most expensive operation** an application will do, so why repeat the same query many times when we already know the results?

The cache will store these results in a place, where it's easy to find, so we can use it later.

**An example** Just think that you go to a huge library and they tell you to search all the books written between 1923 and 1984 that contains the word "advertisement".

That will take you a lot of time, right?

You will write down in a paper every match and next time someone asks you for that information you wont need to go to the library and you will have the results in seconds.

That's the cache!!

### Where is it implemented?

**Yclas**, is **highly cached optimized**, all the queries to the DB are cached during a period of time, we have even parts of HTML generated (fragments) so that it will load much faster. That's why many times we ask you to clean the cache...I know we are quite annoying.

### How can I change the duration?

You need to edit the file **/oc/config/cache.php** and where it says `'default_expire' => 3600,` replace the number with any other value in seconds. By default we set it to one hour duration, so you can easily increase it, it may work better in some cases. 

### How can I disable it?

You can, but I do not recommend this, just set the duration to **"o".**

### I want real time!!

Do not set it to "o" please!! just put 10 seconds at least, that means only 6 times per minute the server will actually get a hit. 

### I want to use other cache

As you can see, in that file we have a default value: `'default' => 'file',`

This means the cache is stored in the HD of your hosting. This has some advantages and disadvantages...be careful not to run out of space at your hosting. HD normally are really slow (although now with SSD disks it's getting better), so the best option would be to store it in memory.

If your hosting has APC cache just replace the previous line with: `'default' => 'apc',` 

This will work immediately and you will see everything is even faster. APC works in the memory of the server...which makes it lightning fast!

If you need to check other configs like memcache, please check this guide of [Kohana](http://kohanaframework.org/3.2/guide/api/Cache).

**Comic: How Database Cache Works** ![how dtabase cache works](//cstrips.bitstrips.com/0Q6XW_CHFVVS.png)

