---
title:  "How to Modify Yclas Self Hosted Themes (child themes)"
date:   2014-09-26 10:26:48
categories: Technical
tags: Technical, Appearance, Themes, SelfHosted
permalink: /customize-yclas-themes/
keywords: custom, child theme, license
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

![ChildThemes](//open-classifieds.com/wp-content/uploads/2014/09/1280x847xnotebook.jpg.pagespeed.ic.wAisV5pKA-.jpg)

<br>

**Note: This guide is for advanced users**

When creating a classifieds website you may want to apply a couple of changes to the design, which is why we added child themes to our classified script. This means you can make these changes using the same Yclas license you have for your premium theme.

Child themes enable you to create a theme that takes all the files from your premium theme except for the files that you modified. So, lets say, for example, that you modified your homepage and changed the background color of your child theme, then the child theme will take all the other files from the parent theme. This way, whenever there is a new update your child theme, it will take all the updated files from the parent theme when it's updated, except for the files that you modified.

This guide is the third of its kind after the first guide on [understanding Yclas themes]({{ site.baseurl }}/understanding-yclas-themes) and second guide on [how to modify or create yclas themes]({{ site.baseurl }}/modify-create-theme/). I recommend you read those two guides as well if you want to modify your site with our classifieds script.

## Why use child themes in a classifieds script

There are a couple of reasons why you should use child themes when applying modifications:

1. When you modify an existing theme and a new release with an update to that theme comes out it's very complex to update that theme. But a child theme would be updated automatically when the parent one is updated.
2. It is the best way to start learning how to customize yclas themes.
3. Child themes use the same license as their parent theme
4. It will save you development time

## How to use child themes

* Go to your FTP or file manager, navigate to /themes/
* Create a new folder there with a name you choose for your child theme
* Navigate to the parent theme that you want to do modifications on
* Copy the init.php file and paste it in your child theme folder
* Paste the below code in the top of your init.php file
* Login to your admin panel
* Activate your child theme

**Here is an example of what you will see on your child theme init.php file:**
    
    
    /**
    * Theme Name: ChildTheme
    * Description: Our latest great theme with 14 different styles/color schemes included and multiple options of configuration. 
    * Tags: HTML5, Responsive, Mobile, Premium, Admin Themes, Advanced Configuration, prettyPhoto, Slider.
    * Version: 1.6 
    * Author: Chema chema@open-classifieds.com
    * License: Commercial 
    * Parent Theme: kamaleon
    */
    
    Theme::$parent_theme = 'kamaleon';
    
<br>
Note that child themes only work with the PRO version because they use the same license , if you don't have a PRO license yet get it now **[here](https://yclas.com/self-hosted.html)**

<iframe width="854" height="480" src="https://www.youtube.com/embed/z5V6EPxfyyE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


