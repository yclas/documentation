---
title:  Converting Tables from MyISAM to InnoDB
date:   2016-10-27 11:27:04
categories: Technical
tags: [Technical]
permalink: /myisam-to-innodb/
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

MyISAM will be deprecated in future versions of MySQL and you may need to convert tables from MyISAM to InnoDB if you are running a version of Yclas self-hosted below 3.0.

If you want to move from MyIsam to innodb please **execute these SQLs:**

    ALTER TABLE oc2_visits ENGINE=InnoDB;
    ALTER TABLE oc2_users ENGINE=InnoDB;
    ALTER TABLE oc2_subscriptions ENGINE=InnoDB;
	ALTER TABLE oc2_subscribers ENGINE=InnoDB;
	ALTER TABLE oc2_roles ENGINE=InnoDB;
	ALTER TABLE oc2_reviews ENGINE=InnoDB;
	ALTER TABLE oc2_posts ENGINE=InnoDB;
	ALTER TABLE oc2_plans ENGINE=InnoDB;
	ALTER TABLE oc2_orders ENGINE=InnoDB;
	ALTER TABLE oc2_messages ENGINE=InnoDB;
	ALTER TABLE oc2_locations ENGINE=InnoDB;
	ALTER TABLE oc2_forums ENGINE=InnoDB;
	ALTER TABLE oc2_favorites ENGINE=InnoDB;
	ALTER TABLE oc2_crontab ENGINE=InnoDB;
	ALTER TABLE oc2_coupons ENGINE=InnoDB;
	ALTER TABLE oc2_content ENGINE=InnoDB;
	ALTER TABLE oc2_config ENGINE=InnoDB;
	ALTER TABLE oc2_categories ENGINE=InnoDB;
	ALTER TABLE oc2_ads ENGINE=InnoDB;
	ALTER TABLE oc2_access ENGINE=InnoDB;
	ALTER TABLE oc2_config CHANGE config_value config_value MEDIUMTEXT;
	ALTER TABLE oc2_content CHANGE description description MEDIUMTEXT;
	ALTER TABLE oc2_plans CHANGE description description MEDIUMTEXT;
	ALTER TABLE oc2_posts CHANGE description description MEDIUMTEXT;


