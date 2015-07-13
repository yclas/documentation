---
layout: page
title:  How to set crons
date:   2015-07-03
categories: HowTo
tags: HowTo
permalink: /how-to-set-crons/
---
# How to set crons

_This guide is only for [Open-Classifieds](http://open-classifieds.com/)!_

Cron is a program that enables users to execute commands automatically at a specific time. A common use for it on Open Classifieds is generating the sitemap.

## How to set up your cron

Set up your cron at your hosting / cPanel, every minute (*/5 * * * *)

    /usr/bin/php -f /home/user/public_html/oc/modules/common/modules/cron/cron.php

Or

    wget -O http://yourdomain.com/cron/run/now
    

You can find these commands on your Panel, **Tools** -> **Crontab**.

![cron](http://docs.yclas.com/images/crontab3.png)

## How to edit or add New Crontab

_This guide is only for advanced users._

**Steps:**

Login to your Panel, **Tools** -> **Crontab** and click the **Edit** button next to the crotab you want to update.

![cron](http://docs.yclas.com/images/crontab.png)

If you want to **add a New Crontab**, click **New** on **Tools** -> **Crontab**.

![cron](http://docs.yclas.com/images/crontab1.png)

![cron](http://docs.yclas.com/images/crontab2.png)

*The function needs to be a static method.

+ **Name:** The name of the crontab.
+ **Period:** When this command will be executed. 
+ **Callback:** The command you want to execute.
+ **Params:** The parameters the function receives.
+ **Description:** Description of the crontab.
+ **Date Started:** Date and time the last execution started.
+ **Date Finished:** Date and time the last execution finished.
+ **Date Next:** Date and time of the next execution.
+ **Times Executed:** How many times this crontab executed.
+ **Output:** The message returns. 
+ **Running:** Checked if crontab is running.
+ **Active:** Checked if crontab is active.



