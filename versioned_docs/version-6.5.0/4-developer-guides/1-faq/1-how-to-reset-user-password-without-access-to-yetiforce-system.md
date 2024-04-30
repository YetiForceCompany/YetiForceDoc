---
title: How to reset a user's password without access to the YetiForce system
description: How to reset a user's password without access to the application.
keywords:
  - reset
  - password
  - user
  - YetiForce
tags:
  - reset
  - password
  - user
---

This article describes how to quickly reset access to any YetiForce system user without browser access and how to reset all user passwords.

## 1. Password reset using a PHP script (available in version `4.3` and later)

## 1.1 Download the script

**Download the password reset script from the [repository](https://github.com/YetiForceCompany/YetiForceScripts/tree/master/PasswordReset).**

Depending on the triggering method, upload to the appropriate directory. In the example below, the CRM files are in the directory `/home/yfprod/html/`

```bash
wget -O /home/yfprod/html/PasswordReset.php https://raw.githubusercontent.com/YetiForceCompany/YetiForceScripts/master/PasswordReset/PasswordReset.php
```

The script must have the same privileges (owner) as the YetiForce files, in the example shown it is `yfprod`.

```bash
chown yfprod:yfprod /home/yfprod/html/PasswordReset.php
```

## 1.2 Enter user data

In the file, set the user's ID or name and the new password (the password should comply with the applicable guidelines).

If you do not enter the password, the system will generate it automatically.

```php
$userId = 1;
$userName = ''; //Nazwa użytkownika, opcjonalnie
$password = ''; //Hasło, opcjonalnie
```

## 1.3 Run the script

If you run the script through a browser, upload the file to the public directory (if webroot is set to this directory) and run the CRM address plus the script name, e.g. https://gitdeveloper.yetiforce.com/PasswordReset.php

If you run the script from the CLI level, upload the script to the main directory and run the file.

```bash
php /home/yfprod/html/PasswordReset.php
```

## 1.4 Summary

When the password is changed correctly, the script will display the user data and the new password.

```
Login: admin27038
Password: APcbCr4Bef
Full name: Administrator Yeti
```

If an error occurs, the system will show an error message, e.g.:

```
App\Exceptions\Security: Minimum password length 8 characters in /home/yfprod/html/modules/Vtiger/uitypes/Password.php:21
Stack trace:
#0 /home/yfprod/html/modules/Users/models/Record.php(233): Vtiger_Password_UIType->validate()
#1 /home/yfprod/html/modules/Users/models/Record.php(188): Users_Record_Model->getValuesForSave()
#2 /home/yfprod/html/modules/Users/models/Record.php(169): Users_Record_Model->saveToDb()
#3 /home/yfprod/html/PasswordReset.php(43): Users_Record_Model->save()
#4 {main}
Login: admin27038
Password: xxx
Full name: Administrator Yeti
```

## 2. Password reset using YetiForce CLI (available in version `6.2` and later)

YetiForce CLI is an alternative method of resetting passwords in the system.

## 2.1 Generate a new password

A full description can be found in [YetiForce CLI](/developer-guides/cli/Users#reset-user-password)

```bash
php cli.php -m Users -a resetPassword -l guest -c
```

## 2.2 Password as a parameter

```bash
php cli.php -m Users -a resetPassword -l guest -p p@ssw0rD
```

## 2. Reset all users' passwords using YetiForce CLI (available in version `6.2` and later)

It is possible to reset the access data of all users and send a new password to the e-mail addresses of the users with one command. A full description can be found [YetiForce CLI](/developer-guides/cli/Users#reset-all-user-passwords)

```bash
php cli.php -m Users -a resetAllPasswords
```
