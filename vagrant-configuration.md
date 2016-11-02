---
title:  Vagrant configuration for Yclas Self Hosted
date:   2015-09-18 16:23:51
categories: Development
tags: [Development]
permalink: /vagrant-configuration/
---
The following guide contains the Vagrant configuration for Yclas Self Hosted.

### What is installed

+ Official Ubuntu Server 14.04 LTS (Trusty Tahr) builds

+ Apache2

+ PHP 5.6
  * cURL
  * GD
  * mysqli
  * mcrypt

+ MySQL 5.5

+ Installation file for the latest Yclas Self Hosted


### Instructions

1. [Download](http://www.vagrantup.com/downloads) and [install](https://docs.vagrantup.com/v2/installation/index.html) Vagrant

2. [Download](https://www.virtualbox.org/wiki/Downloads) and install VirtualBox

3. Clone repo:

        git clone https://github.com/open-classifieds/vagrant.git
    
        cd vagrant/

4. Boot the environment:

        vagrant up

5. To prove that it is running, you can SSH into the machine: (Optional)

        vagrant ssh

6. Run: (if you have followed the step 5, type _exit_ before the following command)

        sudo vim /etc/hosts

    and add those lines at the beggining of the file:

        192.168.50.4  reoc.lo

7. Once the machine it's running, load this on your browser:

        http://reoc.lo/install-yclas.php

8. To destroy the virtual machine and remove all traces of the guest machine from your system, run: 

        vagrant destroy

Vagrant fails to remove temp files, so run this after vagrant destroy the virtual machine:

    sudo rm -f d20* vagrant20*


During the Yclas Self Hosted installation process, for DB Configuration use:<br>
_Database name_: **openclassifieds** <br>
_User name_: **root**<br> 
_Password_: **1234**




