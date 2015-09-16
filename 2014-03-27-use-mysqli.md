---
layout: page
title:  "How to use MySQLi?"
date:   2014-03-27 14:17:20
categories: HowTo
tags: HowTo
permalink: /use-mysqli/
---
# How to use MySQLi?

_This guide is only for [Open-Classifieds](http://open-classifieds.com/)!_

**[MySQLi](https://en.wikipedia.org/wiki/MySQLi) is an improved driver to connect to MySQL databases**. Unluckily, not many software solutions out there take advantage of this. But Open Classifieds does ;)

The **MySQLi extension provides various benefits** with respect to its predecessor, the most prominent of which (according to the PHP website), are:

* An object-oriented interface
* Support for prepared statements
* Support for multiple statements
* Support for transactions
* Enhanced debugging support
* Embedded server support
* Powerful Functionality

If you installed with **Open Classifieds 2.1.4 or higher** you are already using MySQLi. There is nothing to do here - you are already using it.

If you updated at least to 2.1.4 you can start using this new driver. It's recommended since the old driver is deprecated and soon (I hope) will be removed.

**How To Switch to MySQLi?** 

1. Be sure you use at least **2.1.4** 
2. Open the file **/oc/config/database.php** with your favorite editor 
3. Search for the word ' **mysql** ' 
4. Replace it for ' **mysqli** ' 
5. **Save** the file 
6. Ready ;) 

As you can see it's pretty simple and absolutely transparent to all of you. 

<br>
PS: Thanks to this [Kohana module](https://github.com/Azuka/Kohana-Database-MySQLi) it was done easily.

<!--title: How to use MySQLi?
link: http://open-classifieds.com/2014/03/27/use-mysqli/
author: admin
description: 
post_id: 12500
created: 2014/03/27 15:17:20
created_gmt: 2014/03/27 14:17:20
comment_status: open
post_name: use-mysqli
status: publish
post_type: post-->
