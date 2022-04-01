---
title: "Modifying Litecart Themes"
date: 2022-04-01T07:25:55-06:00
draft: true
---

I recently started using [Litecart](https://litecart.net), a light-weight, fast and open-source  e-commerce platform with an incredible amount of flexibility and configurability.

There's a set of free [themes](https://www.litecart.net/en/addons?category_id=11&query=&type=free) too.

After installing one called the [Boomstore Theme](https://www.litecart.net/en/addons/354/boomstore-theme) I noticed a few errors in the logs that get emailed to me from time to time:

* Notice: Undefined variable: catalog_only_mode in ~/includes/templates/boomstore.catalog/views/box_product.inc.php on line 128
* Notice: Undefined index: listing_type in ~/includes/templates/boomstore.catalog/pages/category.inc.php on line 34

I changed a couple of files (namely `category.inc.php` and `box_product.inc.php`) to fix those errors while running **Litecart* v2.3.5.
{{< img src="beyond-compare-boomstore-zip.png" alt="Beyond Compare Boomstore Theme">}}
