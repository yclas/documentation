---
layout: page
title:  How to install Open Classifieds on Digital Ocean, VULTR or Linode
date:   2015-08-10
categories: HowTo
tags: HowTo
permalink: /digital-ocean-vultr-linode/
---
# How to install Open Classifieds on Digital Ocean, VULTR or Linode

## [How to install Open Classifieds on Digital Ocean](#digitalocean) <br>[How to install Open Classifieds on VULTR](#vultr) <br>[How to install Open Classifieds on Linode](#linode)


# <a name="digitalocean"></a>How to install Open Classifieds on [Digital Ocean](https://www.digitalocean.com/?refcode=ebff5f6941b0)



# 1 - Creating the image / installing server 

### Introduction

Open Classifieds is an Open Source (GPL v3) project that lets you easily create your own fully customizable classifieds site. OC can be used to create car/auto sales, job search board, buying & selling real estate and almost anything you can think of. Thousands of web developers trust Open Classifieds to run their big classifieds websites.

## 1.1 [Digital Ocean](https://www.digitalocean.com/?refcode=ebff5f6941b0)

### Requirements

+ Apache 2+
+ PHP 5.5+
+ Short Tags
+ GD support
+ mod_rewrite
+ mcrypt
+ Gettext
+ Curl
+ MySQL 5+

### Prerequisites

+ Ubuntu 14.04 Droplet
+ Create a non-root user with sudo privileges. You can follow steps 1-4 in the [Initial Server Setup with Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04/) guide

## 1.2 [VULTR](http://www.vultr.com/?ref=6814237)

You can follow [this guide](https://www.vultr.com/docs/how-to-install-apache-mysql-and-php-on-ubuntu) to install LAMP.

## 1.3 [Linode](https://www.linode.com/)

You can follow [this guide](https://www.linode.com/docs/websites/lamp/lamp-server-on-ubuntu-12-04-precise-pangolin) to install LAMP.


# 2 - Creating user DB

To install Open-Classifieds, you will need a Database and a Username. Follow [this link](http://docs.yclas.com/create-mysql-database/) to know how to create a MySQL Database.

Log in to MySQL with the root account.

    mysql -u root -p

The system will prompt you for a password. Use your MySQL root password.

Now, create a database to use for Open Classifieds. We will call it _openclassifieds_ in this example.

    CREATE DATABASE openclassifieds;

Next, create a database user and assign a password. You can replace username _ocuser_ and _password_ to your password.

    CREATE USER ocuser@localhost IDENTIFIED BY '_password_';  

Grant permission to access the database.

    GRANT ALL PRIVILEGES ON openclassifieds.* TO ocuser@localhost;

Now set the new user and reload the privileges.

    FLUSH PRIVILEGES;

Exit MySQL

    exit


# <a name="installation"></a>[3 - Install Open Classifieds](#installation)

+ Download **[install-openclassifieds.php](https://raw.githubusercontent.com/open-classifieds/openclassifieds2/master/install-openclassifieds.php)**
+ Upload it to Apache's document root
+ Run **http://yourdomain.com/install-openclassifieds.php**
+ Press **Download and Install**
+ Follow the steps
+ Log in to your **Admin Panel**, create some **Categories** and **Locations**
+ Working!

Watch this video for more detailed instructions.

<a href="https://www.youtube.com/watch?v=L2-b8r8DAfU" target="_blank"><img src="http://img.youtube.com/vi/L2-b8r8DAfU/0.jpg" 
alt="Open classifieds 1 file installation" width="480" height="360" border="10" /></a>


