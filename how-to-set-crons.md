---
title:  How to set crons
date:   2015-07-03 10:26:48
categories: Tools
tags: [Tools]
permalink: /how-to-set-crons/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

Cron is a program that enables users to execute commands automatically at a specific time. A common use for it on Yclas is generating the sitemap.

## How to set up your cron

Crons are enabled by default but you can disable it if you want.

<a href="//docs.yclas.com/images/crontab3.png" class="thumbnail gallery-item" data-gallery>
![cron](//docs.yclas.com/images/crontab3.png)
</a>

## How to edit or add New Crontab

<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This part is only for advanced users.
</div>

**Steps:**

Login to your Panel, **Extras** -> **Crontab** and click the **Edit** button next to the crotab you want to update.

<a href="//docs.yclas.com/images/crontab.png" class="thumbnail gallery-item" data-gallery>
![cron](//docs.yclas.com/images/crontab.png)
</a>

If you want to **add a New Crontab**, click **New** on **Tools** -> **Crontab**.

<a href="//docs.yclas.com/images/crontab1.png" class="thumbnail gallery-item" data-gallery>
![cron](//docs.yclas.com/images/crontab1.png)
</a>

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



