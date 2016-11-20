---
title:  "How roles work with our classified ads script?"
date:   2014-06-04 15:12:27
categories: Users
tags: [Users]
permalink: /roles-work-classified-ads-script/
keywords: admin, moderator, moderation, translator, translation, user, normal user, profile, role, account, access, permission
---
At some stage after the development of your classifieds website, you will need to **delegate other people to do some work** for you, from translation and content creation to moderation and website administration.

With our open source classifieds script you could do that easily! Let's do an example of setting things up for a person, whom we will delegate to create content on our classifieds website.

<a href="{{ site.baseurl }}/images/roles.png" class="thumbnail gallery-item" data-gallery>
![Roles1]({{ site.baseurl }}/images/roles.png)
</a>

1. First go to your classifieds website **Admin Panel** 
2. Go to **Users** > **Roles** 
3. Create a **New Role** and press **Submit** 

<br><br>

<a href="{{ site.baseurl }}/images/roles1.png" class="thumbnail gallery-item" data-gallery>
![Roles2]({{ site.baseurl }}/images/roles1.png)
</a>

<br><br>

4\. **Edit** the newly created role 
5\. You will find a long list of **privileges**, pick the ones you need to give access to and press **Update** Have the person helping you can **create a new user** or you can create one for him. 

1. Go to **Users** > **Users** in your **Admin Panel** 
2. Edit his account 
3. Change his role to the new one you created 
4. Done! <br><br>

<a href="{{ site.baseurl }}/images/roles2.png" class="thumbnail gallery-item" data-gallery>
![Roles3]({{ site.baseurl }}/images/roles2.png)
</a>

Normal **user** has access to:

- messages.*
- myads.*
- profile.*

<br>
**Translator** can access:

- content.*
- messages.*
- myads.*
- profile.*
- translations.*

<br>
**Moderator** can access:

- blog.*
- category.*
- content.*
- location.*
- menu.*
- messages.*
- myads.*
- profile.*
- translations.*

<br>
**Admin** can access all the areas.


If you would like to know more about Yclas visit our FAQ section [here](http://docs.yclas.com/).


