---
title: YetiForce credentials
description: If you are a YetiForce user and you have a problem that you would like to report to us as part of SLA.
keywords:
  - data
  - access
  - problem
  - report
  - YetiForce
tags:
  - dane dostępowe
  - sla
---

If you are a YetiForce user and you have a problem that you would like to report to us as part of SLA, we need some basic information in order to quickly handle your issue:

#### 1. Your system's URL

#### 2. Access data to the YetiForce system

:::important
Please provide access to a user with administrator permissions.
:::

- login
- password

#### 3. Access data to FTP or SFTP

Access must include permissions to read and write files, namely:

- server address
- port
- login (YetiForce system files owner)
- password
- encryption method (e.g.: FTP by TLS)
- path to where the system is located

The server configuration must always comply with the current configuration requirements that can be found [here](/introduction/requirements/). If your server fails to meet the requirements, it can cause system errors and debugging won't work. In order to verify the configuration, you can use the built-in tool, which is available [here](https://gitstable.yetiforce.com/index.phpparent=Settings\&module=ConfReport\&view=Index\&block=14\&fieldid=65).

#### 4. Database access

- database address
- port
- login
- password

Access to the database must be possible for an external client, which means there must be external access to database or SSH access to tunnel the connection.

#### 5. VPN - Optional

:::warning
Applies only if access to your data requires a VPN
:::

Please specify the name of the program that you use to connect to the VPN and data used for its configuration (address, port, login, password and other information required by the program, e.g.

:::tip
Once we complete all the work, change your access data and deactivate external access in accordance with good security practices.
:::
