---
title:  Vagrant configuration for Open-Classifieds
date:   2015-09-18 16:23:51
categories: Development
tags: [Development]
permalink: /vagrant-configuration/
---
The following guide contains the Vagrant configuration for Open-Classifieds.

### What is installed

+ Official Ubuntu Server 14.04 LTS (Trusty Tahr) builds

+ Apache2

+ PHP 5.6
  * cURL
  * GD
  * mysqli
  * mcrypt

+ MySQL 5.5

+ Installation file for the latest Open-Classifieds


### Instructions

1. [Download](http://www.vagrantup.com/downloads) and [install](https://docs.vagrantup.com/v2/installation/index.html) Vagrant

2. [Download](https://www.virtualbox.org/wiki/Downloads) and install VirtualBox

3. Clone repo:

        git clone https://github.com/open-classifieds/vagrant
    
        cd vagrant/

4. Boot the environment:

        vagrant up

5. To prove that it is running, you can SSH into the machine: (Optional)

        vagrant ssh

6. Once the machine it's running, load this on your browser and follow the instructions to install Open Classifieds:

        http://reoc.lo:4567/install-openclassifieds.php

  During the Open-Classifieds installation process, for DB Configuration use:<br>
  _Database name_: **openclassifieds** <br>
  _User name_: **root** <br>
  _Password_: **1234**

7\. To destroy the virtual machine and remove all traces of the guest machine from your system, run: 

        vagrant destroy




