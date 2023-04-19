---
title: YetiForce Portal requirements
description: YetiForce Customer Portal requirements for YetiForce system (YetiForcePortal2)
keywords:
  - Portal
  - server
  - requirements
  - Customer
  - YetiForce
  - environments
tags:
  - requirements
  - portal
---

YetiForce Portal places certain requirements on web servers - their customization is crucial for the proper functioning of the system. Incorrect server configuration is the most common cause of various problems.

The web server requirements for the Portal are very similar to the system ones ([Web server requirements for the system](/introduction/requirements/)) but they include some significant differences, for example, there are no database requirements.

## Resources/Hardware

These requirements depend on the number of active users and amount of data, and therefore they need to be adjusted individually.

Minimal requirements:

- CPU with at least 2 cores
- 2 GB RAM
- fast hard drive (preferably SSD)
- fast network connection to system YetiForce

## Core server software (LAMP/LEMP)

- **Operating system - Debian, Ubuntu, RedHat, Mint** - works on most Linux distributions. We don't recommend the MS Windows operating system as well as MS Windows Server. Our system works well on Windows servers, however, it's not an optimal environment in terms of web applications.

- **Serwer WWW**

  - **Nginx `1.23` (recommended)** - works on earlier versions as well, however, the latest stable versions are recommended. You can also use alternative software as long as it is compatible.
  - **Apache `2.4`** - works on earlier versions as well (`2.1, 2.2, 2.3`), however, the latest stable versions are recommended. You can also use alternative software as long as it is compatible.

- **PHP `7.4` (recommended), `8.0`**, `8.1` (tests pending). The latest stable versions are recommended (eg. `7.4.x`).

## PHP requirements

Configuration files np. `/etc/php/8.0/fpm/php.ini`, `/etc/php/8.0/cli/php.ini`

```ini reference title="Latest stable version: github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/php/prod.ini"
https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/php/prod.ini
```

<details>
  <summary>Development version: github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/php/dev.ini</summary>

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/php/dev.ini
```

</details>

### External library configuration

#### Mandatory

- openssl
- curl
- pcre
- json
- session
- mbstring
- fileinfo
- iconv
- intl
- bcmath
- filter
- ctype
- hash

#### Optional

- OPcache - Improves PHP performance by storing compiled bytecode in shared memory
- apcu - Library that improves system efficiency, recommended when a large number of users is using the system or the system is under heavy load

#### Forbidden

- uopz - Causes the system to freeze

### FPM

```ini
php_admin_value[error_log] = /var/log/php_fpm_errors.log
clear_env = no
request_terminate_timeout = 600
pm.process_idle_timeout = 600s;
pm.max_requests = 5000
catch_workers_output = yes
```

:::important
FPM configuration example:

- Latest stable version: https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/fpm/www.conf
- Development version: https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/fpm/www.conf

:::

## Webserver

- Apache: https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/apache/.htaccess
- Nginx: https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/nginx

### HTTPS & HTTP2 encryption

We recommend encrypting the connection to the server where the system is located. If the connection to the server is not established via HTTPS, the communication can be intercepted or altered by third parties.

### Permissions to folders and files

Permissions to folders and files are often the most common source of problems for people who install an application on VPS and dedicated servers. There should be the same owner for all application files and folders.

We recommend the following configuration:

- files `644` (rw-r--r--)
- folders `755` (rwxr-xr-x)

The configuration should allow the uploaded files to have full read and write access at the browser level, without changing the file and folder permissions. It is necessary to remember that when the application is running, it also performs various operations such as reading and writing, as well as creating and deleting files. If you don't know how to configure the permissions, ask your administrator to do it and send them a link to this article.

- Configuration directory `config/`
- Application data directory `app_data/`
- Cache Directory `cache/`
- Logs directory `cache/logs/`
- Session directory `cache/session/`
- Cache templates directory `cache/layouts/`
