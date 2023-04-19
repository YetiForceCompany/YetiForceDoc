---
title: Debug
description: How to debug YetiForce
keywords:
  - Debug
  - YetiForce
tags:
  - Debug
preview: 4-debug.jpg
---

YetiForce is a very advanced system that has thousands of files and hundreds of dependencies, and the numbers are growing each day. That's why to be able to analyze problems within the system, many logging mechanisms have been created and if there is a need they can be activated in a corresponding place. There are other ways to approach and analyze errors, but they are not listed in this article because they may require an advanced level of programming or are specific for a particular environment and implemented functionalities.

![Debug](4-debug.jpg)

## Introduction

It is necessary to understand a problem in such a way that helps to find its cause. Otherwise, you can waste a lot of time. Various technologies are debugged in different locations (e.g. HTML, CSS, JS, AJAX -it's best to debug them in the browser). Various tools should be used for debugging, such as XDebug, server logs, application logs. For the browsers, it is recommended to use Google Chrome. Sometimes it is necessary to add something unusual to the code, so it will display an error in a corresponding place. A good idea might be to perform simple network tests to eliminate issues between the server and user's browser.

## Log file paths

- cache/logs/phpError.log - general PHP error logs. Log visibility is determined by a few indirect factors, e.g. web server configuration
- cache/logs/errors.log - PHP error logs controlled by the system
- cache/logs/system.log - primary logs for debugging the system, recorded information depends on the selected level of recording
- cache/logs/davException.log - error logs for DAV integration
- cache/logs/davDebug.log - debugging logs for DAV integration
- cache/logs/webserviceDebug.log - debugging logs for API/webservice
- cache/logs/webserviceErrors.log - error logs for API/webservice
- cache/logs/viewer-debug.log - debugging logs for data displaying layer - Smarts
- cache/logs/smtp - mail logs for smtp
- cache/logs/ldap - mail logs for ldap
- cache/logs/imap - mail logs for imap
- cache/logs/session - mail logs for session
- cache/logs/sql - mail logs for sql
- cache/logs/update.log - error logs for system updater

**If the files described above do not exist, they will be created after enabling logs (as long as the application has adequate permissions in the file system).**

## YetiForce system logs

In order to enable log files recording, you need to set the [`LOG_TO_FILE`](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_LOG_TO_FILE) value to `true` in [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php); then set the appropriate level of recording changes [`LOG_LEVELS`](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_LOG_LEVELS).

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L20-L27
```

**Debugging levels (from least to most showing):**

- error
- warning
- info
- trace
- profile

**Possible value variants:**

- ['error']
- ['error', 'warning', 'info', 'trace', 'profile']
- 'All'
- 3

Logs will be registered in the following file: `cache/logs/system.log`. The `cache/logs/` directory needs to have write permissions.

## PHP logs

To start analyzing problems or errors in the system, log recording and displaying server messages should be enabled. **Without this change, the system will not be able to inform you about issues** with, e.g., short script execution time. In the php.ini configuration, set the values of `log_errors` and `display_errors` to `On`. If the configuration allows you to override PHP parameters, use `.htaccess` [Additional configuration with .htaccess](/pl/introduction/requirements/#additional-configuration-using-htaccess). Before starting debugging, it is important to check in the panel [`Administrator documentation → Logs → Server - configuration`](/administrator-guides/logs/server-configuration) that the described parameters are correctly set.

## MySQL logs

Errors in SQL queries are logged by [YetiForce system logs](#yetiforce-system-logs), with error level `error`.

## Smarty logs

Configuration file: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L71-L75
```

## `Roundcube` email client debugging

Configuration file: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

Roundcube allows you to debug various elements:

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L114-L145
```

## DAV integration debugging

Configuration file: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

The parameter enables an additional plugin which is used to log/save all data received and sent by the server to the `cache/logs/davDebug.log` file.

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L105-L109
```

## Summary

### YetiForce system logs - critical

```php
public static $LOG_TO_FILE = true;
public static $LOG_LEVELS = ['error'];
public static $LOG_TRACE_LEVEL = 9;
public static $DEBUG_CRON = true;
public static $SMARTY_ERROR_REPORTING = E_ALL & ~E_NOTICE;
public static $JS_DEBUG = true;
public static $DAV_DEBUG_EXCEPTIONS = true;
public static $DAV_DEBUG_PLUGIN = true;
public static $apiLogException = true;
public static $MAILER_DEBUG = true;
```

### php.ini

```ini
error_reporting = E_ALL
html_errors = On
log_errors = On
display_errors = On
display_startup_errors = On
error_log = __php__log_path__/php_error.log
```

### nginx vhost

```ini
error_log  __nginx__log_path__/nginx_error.log notice;
proxy_intercept_errors on;
fastcgi_intercept_errors on;
```

### PHP (php-fpm.conf)

```ini
[global]
error_log = __nginx__log_path__/fpm_error.log.log

[www]
php_flag[display_errors] = on
php_admin_flag[log_errors] = true
```
