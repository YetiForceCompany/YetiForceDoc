---
title: Access data to the YetiForce system
description: If you are a YetiForce user and you have a problem that you would like to report to us as part of SLA.
keywords:
  - data
  - access
  - problem
  - report
  - YetiForce
tags:
  - credentials
  - sla
---

If you are a YetiForce user and you have a problem that you would like to report to us as part of SLA, we need some basic information in order to quickly handle your issue:

## 1. Your system's URL

## 2. YetiForce credentials, that is the login and password to a user with administrator permissions

## 3. Access data to FTP or SFTP

Dostęp musi być z uprawnieniami do odczytu i zapisu plików, a mianowicie:

- server address
- port
- login (YetiForce system files owner)
- password
- encryption method (e.g.: FTP by TLS)
- path to where the system is located

The server configuration must always comply with the current configuration requirements that can be found [here](/introduction/requirements/). If your server fails to meet the requirements, it can cause system errors and debugging won't work. In order to verify the configuration, you can use the built-in tool, which is available [here](https://gitstable.yetiforce.com/index.phpparent=Settings&module=ConfReport&view=Index&block=14&fieldid=65).

## 4. Database access

- database address
- port
- login
- password

Access to the database must be possible for an external client, which means there must be external access to database or SSH access to tunnel the connection.

## 5. Optional - if access to your data requires VPN

Please specify the name of the program that you use to connect to the VPN and data used for its configuration (address, port, login, password and other information required by the program, e.g. certificate).

:::tip
Once we complete all the work, change your access data and deactivate external access in accordance with good security practices.
:::
