---
title:  How to Import Users
date:   2019-09-18 10:26:48
categories: Tools
tags: [Tools]
permalink: /how-to-import-users/
keywords: multiple users, insert, import tool, import feature, csv, sample file, upload, bulk
---
It's much easier to import users instead of inserting them one by one. Import tool for users is a new feature included in our [3.8.0 release](https://github.com/yclas/yclas/releases/tag/3.8.0/) as well as many other features.

## How to use it

Create a CSV file in utf8 with header (lower case):
name email password image_1

**name:** Name for user<br>
**email:** Email address of user<br>
**password:** Password of the user. Can be left empty and the system will generate a random password<br>

**Images:**

We allow to upload user profile images. Images allow remote images like [http://lorempixel.com/1200/800/people/](http://lorempixel.com/1200/800/people/s) or local, using as base your site root, for example /images/import/user1_pic1.png. The images will be downloaded, resized, thumbed, and deleted on completion.<br>
image_1

[**Download Sample CSV file**](https://cdn.rawgit.com/yclas/yclas/master/install/samples/import/users.csv).


You can use this easy import tool to add all of your users with a press of a button. You simply need to follow those steps:

+ Log into your **Admin Panel**
+ Go to **Extras** > **Import Users**
+ Click **Browse** to select your CVS file and then press **Upload**

<a href="//docs.yclas.com/images/import-users1.png" class="thumbnail gallery-item" data-gallery>
![import users1](//docs.yclas.com/images/import-users1.png)
</a>

+ Click **Process** on the right box.

<a href="//docs.yclas.com/images/import-users2.png" class="thumbnail gallery-item" data-gallery>
![import users2](//docs.yclas.com/images/import-users2.png)
</a>

Now, you can see the imported users on **Classifieds** -> **Users**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eDjSwmS3OKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


