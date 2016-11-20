---
title:  "How to use MySQLi?"
date:   2014-03-27 14:17:20
categories: Technical
tags: [Technical]
permalink: /use-mysqli/
keywords: mysql, database
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

**[MySQLi](https://en.wikipedia.org/wiki/MySQLi) is an improved driver to connect to MySQL databases**. Unluckily, not many software solutions out there take advantage of this. But Yclas does ;)

The **MySQLi extension provides various benefits** with respect to its predecessor, the most prominent of which (according to the PHP website), are:

* An object-oriented interface
* Support for prepared statements
* Support for multiple statements
* Support for transactions
* Enhanced debugging support
* Embedded server support
* Powerful Functionality

If you installed with **Yclas Self Hosted 2.1.4 or higher** you are already using MySQLi. There is nothing to do here - you are already using it.

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

