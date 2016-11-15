---
title:  "How do I create a MySQL database?"
date:   2014-02-24 09:43:18
categories: Install
tags: 
- Install
- Technical
permalink: /create-mysql-database/
keywords: mysqli, install
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

If you want to install Yclas Self Hosted, besides the required PHP, you will need a **MySQL server** with a database and a user name.

100% of managed hosting providers come with some sort of automation for this. If yours doesn't, check our [hosting](http://open-classifieds.com/hosting/) offer.

To make your life easier, I am just collecting some videos, done by users, explaining this process in different panels.

## CPanel

<a href="https://www.youtube.com/watch?v=YbIn--iNmKE" target="_blank"><img src="http://img.youtube.com/vi/YbIn--iNmKE/0.jpg" 
alt="Create A MySQL Database with cPanel - EASY tutorial" width="480" height="360" border="10" /></a>

<br>
**To set up a database using the MySQL Database Wizard:**

1. In the **New Database** field, enter a name for the database.
2. Click **Next Step**.
3. In the **Username** field, enter a name for the user allowed to manage the database.
4. In the **Password** field, type the user’s password.
5. The password must be 7 letters or shorter.
6. For help generating a strong password, click the **Password Generator** button.
7. Retype the password in the **Password** (Again) field.
8. Click **Create User**.
9. Select the privileges you wish to grant the user, or select **ALL PRIVILEGES**.
10. Click **Next Step**.
11. Next, **cPanel** will display a message stating that the database and user account were successfully set up.

## Plesk

<a href="https://www.youtube.com/watch?v=ZTEc5epNvI0" target="_blank"><img src="http://img.youtube.com/vi/ZTEc5epNvI0/0.jpg" 
alt="How to create a MySQL database in Plesk 11" width="480" height="360" border="10" /></a>

<br>

## DirectAdmin

<a href="https://www.youtube.com/watch?v=7QGVQau-gCI" target="_blank"><img src="http://img.youtube.com/vi/7QGVQau-gCI/0.jpg" 
alt="Creating a MySQL database in DirectAdmin" width="480" height="360" border="10" /></a>

<br>

## ISPConfig

<a href="https://www.youtube.com/watch?v=6XosdMzU2pQ" target="_blank"><img src="http://img.youtube.com/vi/6XosdMzU2pQ/0.jpg" 
alt="Server Management - Creating Database" width="480" height="360" border="10" /></a>

<br>

## MySQL (advanced users)

**Step 1:** **Login to MySQL** ( you will need an account ) 
        
    user@server:~$ mysql -u mysql_user -p
    Enter password:

**Step 2:** Create the **Database**
    
    mysql > create database db_name;

**Step 3:** **Verify** that it's there
    
    mysql > show databases;

**Step 4: Create the User**
    
    mysql > create user db_user;

**Step 5:** Grant privileges while assigning the password 
    
    mysql > grant all on db_name.* to 'db_user'@'localhost' identified by 'db_password';

*Note: The _localhost_ field usually doesn't have to be edited, but you can set it to the specific address. 

The above example grants **All privileges**, obviously. But you will likely want to limit privileges under many circumstances. These parameters include **Select, Insert,** and **Delete**.

Choose all that apply and separate by comma: 
    
    mysql > grant select, insert, delete on db_name.* to 'db_user'@'localhost' identified by 'db_password';

via [lanexa.net](http://www.lanexa.net/2011/08/create-a-mysql-database-username-password-and-permissions-from-the-command-line/) 

Hope that was useful! If you want to know, **[how to use MySQLi]({{ site.baseurl }}/use-mysqli)** properly read our article about this topic.

