---
title:  How to install Yclas Self Hosted on Digital Ocean, VULTR or Linode
date:   2015-08-10 10:26:48
categories: Install
tags: [Install]
permalink: /digital-ocean-vultr-linode/
keywords: install, vps, server, self hosted, technical
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

## Creating the image / installing server 

**Introduction**

In this guide we will teach you how to install Yclas Self Hosted in a VPS. We will be covering, [Digital Ocean](https://www.digitalocean.com/?refcode=ebff5f6941b0), [VULTR](http://www.vultr.com/?ref=6814237) and [Linode](https://www.linode.com/)

**Requirements**

+ Apache 2+
+ PHP 5.6+
+ Short Tags
+ GD support
+ mod_rewrite
+ mcrypt
+ Gettext
+ Curl
+ MySQL 5+

**[Digital Ocean](https://www.digitalocean.com/?refcode=ebff5f6941b0)**

+ Ubuntu 14.04 Droplet
+ Create a non-root user with sudo privileges. You can follow steps 1-4 in the [Initial Server Setup with Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04/) guide

**[VULTR](http://www.vultr.com/?ref=6814237)**

Follow [this guide](https://www.vultr.com/docs/how-to-install-apache-mysql-and-php-on-ubuntu) to install LAMP.

**[Linode](https://www.linode.com/)**

Follow [this guide](https://www.linode.com/docs/websites/lamp/lamp-server-on-ubuntu-12-04-precise-pangolin) to install LAMP.

**[RoseHosting.com](https://www.rosehosting.com/)**

Follow [this guide](https://www.rosehosting.com/blog/how-to-install-open-classifieds-on-a-debian-8-vps/) to install it on Debian or contact their support team and they will install it for free.


## Creating user DB

To install Yclas Self Hosted, you will need a Database and a Username.

Log in to MySQL with the root account.

    mysql -u root -p

The system will prompt you for a password. Use your MySQL root password.

Now, create a database to use for Yclas. We will call it _openclassifieds_ in this example.

    CREATE DATABASE openclassifieds;

Next, create a database user and assign a password. You can replace username _ocuser_ and _password_ to your password.

    CREATE USER ocuser@localhost IDENTIFIED BY '_password_';  

Grant permission to access the database.

    GRANT ALL PRIVILEGES ON openclassifieds.* TO ocuser@localhost;

Now set the new user and reload the privileges.

    FLUSH PRIVILEGES;

Exit MySQL

    exit


## Install Yclas Self Hosted

+ Download **[install-yclas.php](https://raw.githubusercontent.com/yclas/yclas/master/install-yclas.php)**
+ Upload it to Apache's document root
+ Run **http://yourdomain.com/install-yclas.php**
+ Press **Download and Install**
+ Follow the steps
+ Log in to your **Admin Panel**, create some **Categories** and **Locations**
+ Working!

Watch this video for more detailed instructions.

<a href="https://www.youtube.com/watch?v=L2-b8r8DAfU" target="_blank"><img src="http://img.youtube.com/vi/L2-b8r8DAfU/0.jpg" 
alt="Yclas 1 file installation" width="480" height="360" border="10" /></a>
