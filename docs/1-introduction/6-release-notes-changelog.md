---
title: Release notes | Changelog
description: List of changes included in released YetiForce versions.
keywords:
  - changes
  - release
  - what's new
tags:
  - release
  - changes
---

Below is a list of changes that were included in all the stable YetiForce versions released so far. The changelogs include descriptions of new functionalities, fixed bugs, and modifications of existing functionalities.

## [YetiForce 7.0.0](#changelog_to_70)

<details>
  <summary id="changelog_to_70">Changelog 6.5 > 7.0</summary>

```ini title="6.5.0 > 7.0.0"
REMOVED
Removed add-ons: YetiForce Vulnerabilities, YetiForce Map, YetiForce Address Search, YetiForce Password Security
Removed the "custom" operator from the condition builder
Removed inactive buttons from the administrator panel top bar
Dropped support for < php8.1

ADDED
Added a modern new layout
Added a new Reports module
Added a system configuration wizard during installation
Added support for PHP8.1 – PHP8.3
Added support for OAuth2
Added Azure AD integration (SSO)
Added new PBX integrations: BriaSoftphone & Genesys
Added Comarch Integration
Added Woocomerce integration
Added MongoDB as a storage option for the ModTracker module
Added the Google Maps provider
Added a text parser function for spelling gross amount
Added the ability to display a tax name instead of a tax rate in advanced block
Added additional currency conversion in inventory for 'CIT'
Added correction summary blocks to inventory block.
Added an option to change column lengths for existing fields
Added an option to move/copy widgets between dashboards
Added handler support for record deletion and status change events
Added the ability to filter by fields from the advanced block
Added support for double-clicking in the record list for quick/full editing
Added the ability to change colors for the status field in the calendar module
Added the meeting URL field to the ‘create deadline’ workflow task.
Added virtual fields
Added comment linking for newly added modules
Added advanced references relations
Added duplicate verification in the Reservation module
Added extra data sources in the Calendar
Added support for multiple signatures in the Mailbox
Added the map coordinates field
Added pagination to the email preview widget
Added the possibility of using filter sorting in the related list view
Added Mailbox data encryption
Added validation for exceeding the maximum number of characters in a comment
Added a button to copy the APP  ID

IMPROVED
Improved the installation process
Migrated from Chart.js to Apache ECharts
Transferred basic module parameters to the database
Improved the Extended inventory currency converter with the ability to select currency exchange dates
Improved Record Collectors
Improved the Outlook integration panel
Improved BriaSoftphone
Changed uitype for password/token fields
Moved advanced block UI calculations to backend
Improved map providers GUI configuration
Improved the saving process
Improved Extended currency exchange rate precision
Improved ConfReport
Improved phone fields
Improved API exception validation before saving the record
Improved the right side panel in calendar
Improved unit tests
Improved ModComments initial data table
Improved recurring events in the Calendar
Improved record status verification
Improved the quick detail modal view
Improved inventory data set
Improved the type of ServiceAccess fields
Improved the SMS provider in workflow
Improved the Record Automatic Assignment functionality
Improved MultiReference fields
Improved the type of multipicklist field tags
Improved attachments in some workflow actions
Improved the Map view
Improved Tokens
Improved Groups (added a new uitype and rebuilt the panel)
Improved permissions when changing record status
Improved the correction invoice PDF template
Updated dependent libraries
Changed downloading updates from YetiForce API instead of GitHub
Improved availability of add-ons
Improved downloading libraries
Improved mass adding documents
Improved the Gantt chart in the Projects module
Improved statuses in the Sales Invoices module
Improved browsing history
Improved the edit view of the inventory block
Improved default country for phone numbers

FIXED
Fixed validation errors
Fixed showing mail contents
Fixed field length validation
Fixed Icons in the user’s quick menu dropdown
Fixed the Coordinate updater cron task
Fixed some bugs in the Map modal view
Fixed displaying the tax name
Fixed the map providers configuration
Fixed setting whitelisted domains
Fixed dashboard history widget
Fixed displaying tax percent name and value in PDF
Fixed the groupLabel picklist length validation in advanced block
Fixed the group margin percent calculation in advanced block
Fixed minor bugs in Calendar
Fixed floating point values
Fixed importing records
Fixed getting user data
Fixed listing users in the calendar to active only
Fixed filtering by the date and time fields
Fixed encryption settings
Fixed the mechanism for specifying the mail type
Fixed Account names displayed on the map
Fixed the status field in the Vendor inquiries module
Fixed event handling (ChangeValueHandler)
Fixed listing available users
Fixed sending notifications to inactive users
Fixed currency updates
Fixed the validation of allowed number of characters
Fixed generated PDF files
Fixed numerous minor errors
Fixed a bug in the Working Hours settings
Fixed attachments in SMS messages
Fixed default discount and tax settings
Fixed relation with comments
Fixed importing and exporting of PDF templates
Fixed a bug in the "All users working hours" widget
Fixed mass archiving in the Documents module
Fixed percentage field validation
Fixed recurring Calendar events
Fixed adding working time using the widget
Fixed the runtime graph of the related module
Fixed selecting all records in the Calendar module
Fixed duplicate click event in the Marketplace
Fixed loading details and licenses of dependent libraries (CVE-2023-49508)
Fixed removing registration data from CLI
```

</details>

## [YetiForce 6.5](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.4.0_to_6.5.0/Changelog.txt)

<details>
  <summary>Changelog 6.4 > 6.5</summary>

```ini reference title="6.4.0 > 6.5.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.4.0_to_6.5.0/Changelog.txt
```

</details>

## [YetiForce 6.4](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.3.0_to_6.4.0/Changelog.txt)

<details>
  <summary>Changelog 6.3 > 6.4</summary>

```ini reference title="6.3.0 > 6.4.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.3.0_to_6.4.0/Changelog.txt
```

</details>

## [YetiForce 6.3](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.2.0_to_6.3.0/Changelog.txt)

<details>
  <summary>Changelog 6.2 > 6.3</summary>

```ini reference title="6.2.0 > 6.3.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.2.0_to_6.3.0/Changelog.txt
```

</details>

## [YetiForce 6.2](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.1.0_to_6.2.0/Changelog.txt)

<details>
  <summary>Changelog 6.1 > 6.2</summary>

```ini reference title="6.1.0 > 6.2.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.1.0_to_6.2.0/Changelog.txt
```

</details>

## [YetiForce 6.1](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.0.0_to_6.1.0/Changelog.txt)

<details>
  <summary>Changelog 6.0 > 6.1</summary>

```ini reference title="6.0.0 > 6.1.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.0.0_to_6.1.0/Changelog.txt
```

</details>

## [YetiForce 6.0](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.3.0_to_6.0.0/Changelog.txt)

<details>
  <summary>Changelog 5.3 > 6.0</summary>

```ini reference title="5.3.0 > 6.0.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.3.0_to_6.0.0/Changelog.txt
```

</details>

## [YetiForce 5.3](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.2.0_to_5.3.0/Changelog.txt)

<details>
  <summary>Changelog 5.2 > 5.3</summary>

```ini reference title="5.2.0 > 5.3.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.2.0_to_5.3.0/Changelog.txt
```

</details>

## [YetiForce 5.2](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.1.0_to_5.2.0/Changelog.txt)

<details>
  <summary>Changelog 5.1 > 5.2</summary>

```ini reference title="5.1.0 > 5.2.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.1.0_to_5.2.0/Changelog.txt
```

</details>

## [YetiForce 5.1](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.0.0_to_5.1.0/Changelog.txt)

<details>
  <summary>Changelog 5.0 > 5.1</summary>

```ini reference title="5.0.0 > 5.1.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%205.x.x/5.0.0_to_5.1.0/Changelog.txt
```

</details>

## [YetiForce 5.0](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%206.x.x/6.3.0_to_6.4.0/Changelog.txt)

<details>
  <summary>Changelog 4.4 > 5.0</summary>

```ini reference title="4.4.0 > 5.0.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.4.0_to_5.0.0/Changelog.txt
```

</details>

## [YetiForce 4.4](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.3.0_to_4.4.0/Changelog.txt)

<details>
  <summary>Changelog 4.3 > 4.4</summary>

```ini reference title="4.3.0 > 4.4.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.3.0_to_4.4.0/Changelog.txt
```

</details>

## [YetiForce 4.3](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.2.0_to_4.3.0/Changelog.txt)

<details>
  <summary>Changelog 4.2 > 4.3</summary>

```ini reference title="4.2.0 > 4.3.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.2.0_to_4.3.0/Changelog.txt
```

</details>

## [YetiForce 4.2](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.1.0_to_4.2.0/Changelog.txt)

<details>
  <summary>Changelog 4.1 > 4.2</summary>

```ini reference title="4.1.0 > 4.2.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.1.0_to_4.2.0/Changelog.txt
```

</details>

## [YetiForce 4.1](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.0.0_to_4.1.0/Changelog.txt)

<details>
  <summary>Changelog 4.0 > 4.1</summary>

```ini reference title="4.0.0 > 4.1.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%204.x.x/4.0.0_to_4.1.0/Changelog.txt
```

</details>

## [YetiForce 4.0](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.4.0_to_4.0.0/Changelog.txt)

<details>
  <summary>Changelog 3.4 > 4.0</summary>

```ini reference title="3.4.0 > 4.0.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.4.0_to_4.0.0/Changelog.txt
```

</details>

## [YetiForce 3.4](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.3.0_to_3.4.0/Changelog.txt)

<details>
  <summary>Changelog 3.3 > 3.4</summary>

```ini reference title="3.3.0 > 3.4.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.3.0_to_3.4.0/Changelog.txt
```

</details>

## [YetiForce 3.3](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.2.0_to_3.3.0/Changelog.txt)

<details>
  <summary>Changelog 3.2 > 3.3</summary>

```ini reference title="3.2.0 > 3.3.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.2.0_to_3.3.0/Changelog.txt
```

</details>

## [YetiForce 3.2](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.1.0_to_3.2.0/Changelog.txt)

<details>
  <summary>Changelog 3.1 > 3.2</summary>

```ini reference title="3.1.0 > 3.2.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.1.0_to_3.2.0/Changelog.txt
```

</details>

## [YetiForce 3.1](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.0.0_to_3.1.0/Changelog.txt)

<details>
  <summary>Changelog 3.0 > 3.1</summary>

```ini reference title="3.0.0 > 3.1.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%203.x.x/3.0.0_to_3.1.0/Changelog.txt
```

</details>

## [YetiForce 3.0](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.3.0_to_3.0.0/Changelog.txt)

<details>
  <summary>Changelog 2.3 > 3.0</summary>

```ini reference title="2.3.0 > 3.0.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.3.0_to_3.0.0/Changelog.txt
```

</details>

## [YetiForce 2.3](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.2.0_to_2.3.0/Changelog.txt)

<details>
  <summary>Changelog 2.2 > 2.3</summary>

```ini reference title="2.2.0 > 2.3.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.2.0_to_2.3.0/Changelog.txt
```

</details>

## [YetiForce 2.2](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.1.0_to_2.2.0/Changelog.txt)

<details>
  <summary>Changelog 2.1 > 2.2</summary>

```ini reference title="2.1.0 > 2.2.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.1.0_to_2.2.0/Changelog.txt
```

</details>

## [YetiForce 2.1](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.0.0_to_2.1.0/Changelog.txt)

<details>
  <summary>Changelog 2.0 > 2.1</summary>

```ini reference title="2.0.0 > 2.1.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%202.x.x/2.0.0_to_2.1.0/Changelog.txt
```

</details>

## [YetiForce 2.0](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.4.0RC_to_2.0.0/Changelog.txt)

<details>
  <summary>Changelog 1.4 RC > 2.0</summary>

```ini reference title="1.4.0RC > 2.0.0"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.4.0RC_to_2.0.0/Changelog.txt
```

</details>

## [YetiForce 1.4 RC](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.3.0RC_to_1.4.0RC/Changelog.txt)

<details>
  <summary>Changelog 1.3 RC > 1.4</summary>

```ini reference title="1.3.0 RC > 1.4.0 RC"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.3.0RC_to_1.4.0RC/Changelog.txt
```

</details>

## [YetiForce 1.3 RC](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.2.0RC_to_1.3.0RC/Changelog.txt)

<details>
  <summary>Changelog 1.2 RC > 1.3 RC</summary>

```ini reference title="1.2.0 RC > 1.3.0 RC"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.2.0RC_to_1.3.0RC/Changelog.txt
```

</details>

## [YetiForce 1.2 RC](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.1.0RC_to_1.2.0RC/Changelog.txt)

<details>
  <summary>Changelog 1.1 RC > 1.2 RC</summary>

```ini reference title="1.1.0 RC > 1.2.0 RC"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.1.0RC_to_1.2.0RC/Changelog.txt
```

</details>

## [YetiForce 1.1 RC](https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.0.0RC_to_1.1.0RC/Changelog.txt)

<details>
  <summary>Changelog 1.0 RC > 1.1 RC</summary>

```ini reference title="1.0.0 RC > 1.1.0 RC"
https://github.com/YetiForceCompany/UpdatePackages/blob/developer/YetiForce%20CRM%201.x.x/1.0.0RC_to_1.1.0RC/Changelog.txt
```

</details>
