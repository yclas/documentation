---
title:  How to set login attempts to 0
date:   2015-07-01 10:26:48
categories: Technical
tags: [Technical]
permalink: /login-attempts-to-zero/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Open-Classifieds!
</div>

There are some times when you either forget or misstype your password. Almost all of the web services that require a login have a specified number of consecutive invalid login attempts allowed. After that number of attempts you are restricted from further login attempts for a certain time period.

![login attempts](http://docs.yclas.com/images/loginattempts1.png)

If your website is made with the Open-Classifieds script then it works as below:

+ After 3 Failed Login attempts: _Login has been temporarily disabled due to too many unsuccessful login attempts. Please try again in a minute._

+ After 5 Failed Login attempts: _Login has been temporarily disabled due to too many unsuccessful login attempts. Please try again in 24 hours._

If you have access to phpmyadmin, there is nothing to worry about! **Follow these steps to set login attempts to 0:**

1. Go to phpmyadmin from the cPanel of your hosting.
2. On the database of your website, choose the table named 'oc2_users'.
3. Find the user you want and change the value of the field 'failed_attempts' to '0' (zero).

![login attempts1](http://docs.yclas.com/images/loginattempts.png)

Now you are allowed to login to your website!

<br>
  **Related posts:**
  
* [How do I create a MySQL database?]({{ site.baseurl }}/create-mysql-database)
* [I accidentally changed my admin privilege, how can I fix that?]({{ site.baseurl }}/accidentally-changed-admin-privilege-can-fix)


