---
title: Users
description: This module allows you to manage users (standard and administrative) in the YetiForce system. This allows you to decide who has access and at what level.
keywords:
  - Users
  - Settings
  - YetiForce
tags:
  - Users
preview: user_list.jpg
---

The Users module allows you to manage all system users—both standard and administrative. This allows you to precisely define who has access to the system and what permissions they have.

## User List

![user_list.jpg][user_list.jpg]

The following tools are available in the user list:

1. **Mass Edit** – allows you to make changes for multiple users at once.
2. **Mass Password Reset** – Useful when you need to change passwords for multiple users at once.
3. **Import i eksport użytkowników** – pozwala łatwo przenosić użytkowników między różnymi systemami.
4. **Adding User** – allows you to manually add a new user to the system.

## Create a user

![user_add.jpg][user_add.jpg]

When adding a user, please complete all required fields (marked with an asterisk) and configure information such as currency, time zone, number formatting, and language.

The most important field in terms of permissions is the `Role` which defines the scope of access to data in the system. We recommend not using the `administrator` account on a daily basis – administrative permissions should be used solely for system management.

The system has a mechanism that forces periodic password changes and supports two-factor authentication (2FA).

## Import users

![user_import.jpg][user_import.jpg]

The system allows you to import users. Please note that the format of the imported data must match the format of the data exported from the system.
