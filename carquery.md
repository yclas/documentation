---
title:  Vehicle Data
date:   2018-01-04 11:27:04
categories: Custom Fields
tags: 
- Custom Fields
- Classifieds
permalink: /vehicle-data/
keywords: cars, CarQuery, vehicle, model, make, year, trim, dropdowns, vans, trucks, brands
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong>  This feature is available on our 3.4.0 release and for all sites hosted at <a href="https://yclas.com">Yclas.com</a>
</div>

Vehicle Data can be used in a car dealer website, a marketplace or any classifieds website where people can buy and sell cars. This is a new and important feature because it lets the owners of the websites and their users to list and search for vehicles without having to maintain and update the vehicle information (_year_, _model_ and _make_). Also, new cars and models will be automatically available.

## Quick configuration

1. Login to your admin panel
2. Go to **Classifieds -> Custom Fields** and press **Templates**.
3. Select **Type: Car** and choose the categories you want the fields to be applied in the input below. Leave the categories input empty if you want the fields to be applied to all the categories of your website.
4. Press **Create**

This action will automatically enable _CarQuery_ on Settings -> General -> CarQuery and create all the custom fields related to a car dealer website: forsaleby, adtype, year, make, model, othermake, kilometers, bodytype, transmission, drivetrain, color, fueltype and type.

## Manual configuration

### Enable CarQuery

1. Login to your admin panel
2. Go to **Settings -> General -> CarQuery**
3. Enable **CarQuery** and press **Save**

<a href="//docs.yclas.com/images/car-enable.png" class="thumbnail gallery-item" data-gallery>
![car-enable]({{ site.baseurl }}/images/car-enable.png)
</a>

### Create the custom fields

**Year**

1. Go to **Classifieds -> Custom Fields**
2. Press **New Field**
3. Enter **year** in the _Name_ input and in the _Type_ input, choose **Select**. This is important in order to have the desired functionality.
4. Fill the other fields.
5. Press **Create**

<a href="//docs.yclas.com/images/car-year.png" class="thumbnail gallery-item" data-gallery>
![car-year]({{ site.baseurl }}/images/car-year.png)
</a>

**Make**

1. Go to **Classifieds -> Custom Fields**
2. Press **New Field**
3. Enter **make** in the _Name_ input and in the _Type_ input, choose **Select**. This is important in order to have the desired functionality.
4. Fill the other fields.
5. Press **Create**

<a href="//docs.yclas.com/images/car-make.png" class="thumbnail gallery-item" data-gallery>
![car-make]({{ site.baseurl }}/images/car-make.png)
</a>

**Model**

1. Go to **Classifieds -> Custom Fields**
2. Press **New Field**
3. Enter **model** in the _Name_ input and in the _Type_ input, choose **Select**. This is important in order to have the desired functionality.
4. Fill the other fields.
5. Press **Create**

<a href="//docs.yclas.com/images/car-model.png" class="thumbnail gallery-item" data-gallery>
![car-model]({{ site.baseurl }}/images/car-model.png)
</a>


## How it works

Now CarQuery is enabled and the required fields are created. You, the car dealers/owners or the person who publish the car information will find three dropdown menus in the "publish new" page: "Year", "Make" and "Model". First, select a year and then select the manufacturer from the "Make" options.

1. **Year:** when you select a year, the software automatically retrieves the car manufacturers of that year and makes them available in the "Make" dropdown menu.
2. **Make:** select the manufacturer to make all of its models available in the "Model" dropdown menu.
3. **Model:** select the model of the car. 

<a href="//docs.yclas.com/images/car-new.png" class="thumbnail gallery-item" data-gallery>
![car-new]({{ site.baseurl }}/images/car-new.png)
</a>


<a href="//docs.yclas.com/images/car-single.png" class="thumbnail gallery-item" data-gallery>
![car-single]({{ site.baseurl }}/images/car-single.png)
</a>





