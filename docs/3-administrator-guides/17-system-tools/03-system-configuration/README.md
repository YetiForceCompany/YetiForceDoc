---
title: System - Configuration
description: System - Configuration
keywords:
  - YetiForce
  - System
  - Configuration
  - Relation
tags:
  - Configuration
  - Relation
preview: main.jpg
---

## Main configuration

This panel allows you to configure general system settings regarding its appearance and behavior for all users of the system.

![main.jpg](main.jpg)

- **Maximum upload size (`upload_max_filesize`: 100 MB)** - this parameter determines the maximum size of files uploaded to the system. This size cannot exceed 100MB.
- **Default module** - this parameter determines which module the users will see after logging into the system.
- **Maximum text length the list view** - this parameter determines the maximum length of the text visible in the list view
- **Maximum entries per page the list view** - this parameter determines the maximum number of records that will be visible in the list view
- **Layout** - “Default”
- **Show breadcrumbs menu** - checkbox; if ticked, the breadcrumb menu is shown at the top of the screen
- **Maximum length of characters for title**- this parameter defines the maximum number of characters that can be entered in the "Title" field
- **Minimum cron frequency [min]** - this parameter specifies the CRON triggering frequency in minutes.
- **Maximum number of records in mass edition** - this parameter defines the maximum number of records that can be modified using the mass editing tool.
- **Enable closing of the modal window by clicking on the background** - checkbox; specifies whether pop-up windows will be closed by clicking on the background or only by the <kbd>🗙</kbd> button in the corner of the window.
- **Maximum length for href tag**
- **Show language selection on the login page** - checkbox; allows you to enable or disable the language selection list
- **Show layout selection on the login page** - checkbox; allows you to specify whether the layout selection list will be available on the login screen.

## Relation

This panel controls the appearance of related record tabs visible in record view.

One of the most prominent advantages of YetiForce is the possibility to customize nearly every single element in the system. This option is also available for related module tabs visible in record view. If you would like to change the appearance of the tabs in your system, the following instruction presents a set of paramenters you can use.

![Relation.jpg](Relation.jpg)

The panel is easy to use, it's enough to select the settings you would like to change and press the <kbd>Save</kbd> button at the bottom of the screen. This functionality will help you customize the following elements:

### Show related modules names in tabs

☑ - If checked, the module names will be displayed on the tabs in record view, as shown below::

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - If unchecked, the module names will not be displayed, as shown below:

![related-modules-names-off.jpg](related-modules-names-off.jpg)

### Show related modules icon in tabs

☑ - If checked, the module icons will be displayed on the tabs in record view, as shown below:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - If unchecked, the module icons will not be displayed, as shown below:

![related-modules-icon-off.jpg](related-modules-icon-off.jpg)

### Show record count in tabs of related modules

☑ - If checked, the number of records in the related modules will be displayed on the tabs in record view, as shown below:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - If unchecked, the number of records in the related modules will not be displayed, as shown below:

![related-modules-count-off.jpg](related-modules-count-off.jpg)

### Maximum length of a comment visible on the related record

Defines the length of comments visible in some relations, for example in the "Products and Services" tab in Account module records.
Depending on the value set, the comments will appear as shown below:

- length 10

![maximum-length-10.jpg](maximum-length-10.jpg)

- length 50

![maximum-length-50.jpg](maximum-length-50.jpg)

### Separate action buttons for changing additional data

Controls the visibility of a button used to change additional data in the `Members` tab in the records added to the Occurrences module (`Marketing → Occurrences`)

☑ - If checked, the button will be visible directly in the members list view, as shown below:

![separate-action-on.jpg](separate-action-on.jpg)

☐ - If unchecked, the button will only be visible if you click the settings button <kbd>:wrench:</kbd> on the members list, as shown below:

![separate-action-off.jpg](separate-action-off.jpg)

## Performance

![Performance.jpg](Performance.jpg)
