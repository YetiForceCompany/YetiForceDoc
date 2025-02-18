---
title: Wapro ERP
description: Integration with the Asseco Wapro ERP system
keywords:
  - Wapro
  - ERP
  - Integration
  - YetiForce
  - Settings
tags:
  - Wapro
  - ERP
  - Integration
  - Settings
preview: wapro-erp.jpg
---

## Wapro ERP Requirements and Activation

![wapro-erp.jpg](wapro-erp.jpg)

### Could not find required PDO_SQLSRV library

If you see the message below, it means you do not have the `PDO Microsoft SQL Server Driver for PHP` extension installed

![Wapro-active-2.png](wapro-erp.jpg)

The extension is required for integration with Wapro ERP, which enables communication with the Microsoft SQL Server database.

### PDO_SQLSRV Installation

More information: https://docs.microsoft.com/en-us/sql/connect/php/installation-tutorial-linux-mac

#### Possible errors

`SQLSTATE[08001]: [Microsoft][ODBC Driver 17 for SQL Server]TCP Provider: Error code 0x2746`

If the above message appears when adding access to the database, please read the description of the solution to this problem:

https://github.com/microsoft/msphpsql/issues/1021

### Activation

![Wapro-active-3.png](Wapro_active_3.png)

The above message is displayed when the configuration required for integration has not been uploaded or has been disabled/changed.

During activation, the following changes will be made to the system:

- WAPRO ERP ID fields are created in the modules where the data is synchronized
- The Discount Summation Type field is created
- Tables with configuration and logs are created
- A CRON task is added
