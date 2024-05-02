---
title: YetiForce requirements
description: YetiForce webserver requirements
keywords:
  - serwer
  - requirements
  - system
  - YetiForce
  - LAMP
  - LEMP
  - environments
tags:
  - server
  - requirements
  - system
  - LAMP
  - LEMP
  - environments
preview: requirements.jpg
---

## Introduction

YetiForce CRM requires a proper web server configuration. It is a key element for the process of installation as well as for the system to be stable. Most professional web servers meet the requirements presented below. However, in case your server does not meet all the requirements, ask your administrator to adjust the configuration and send him a link to this article. If your administrator cannot change the configuration, it might be time to consider upgrading your server.

During the installation process, the system verifies the actual server configuration and shows the elements that are incorrect and require a change in parameters. Please note that the requirements presented below are not general and not for each installation, for more complex systems they should be verified and optimized individually.

:::tip
The most recent and complete configuration can be found on GitHub and in the module [Server Configuration](/administrator-guides/logs/server-configuration/) in the developer version:

- https://gitstable.yetiforce.com/index.php?parent=Settings&module=ConfReport&view=Index&block=14&fieldid=65
- https://github.com/YetiForceCompany/YetiForceCRM/tree/stable/tests/setup

:::

:::warning
The requirements vary depending on the version of YetiForce. Check the requirements for the version you are installing before you begin.

The requirements listed below are applicable for the following version: [![Latest Stable Version](https://poser.pugx.org/yetiforce/yetiforce-crm/v/stable)](https://packagist.org/packages/yetiforce/yetiforce-crm) ![release date](https://img.shields.io/github/release-date/YetiForceCompany/YetiForceCRM)
:::

## Possible issues

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Core server software (LAMP/LEMP)

- **Operating system - Debian, Ubuntu, RedHat, Mint** - works on most Linux distributions. We don't recommend the MS Windows operating system as well as MS Windows Server. Our system works well on Windows servers, however, it's not an optimal environment in terms of web applications.

  :::warning
  
  Due to security reasons, we recommend running each version of the YetiForce system (PROD and TEST) on a separate/dedicated user of the operating system (preferably on a separate server), e.g. yfprod, yftest. We do not recommend using one operating system user for several applications/websites.
  
  :::

- **Serwer WWW**

  - **Nginx `1.23` (recommended)** - works on earlier versions as well, however, the latest stable versions are recommended. You can also use alternative software as long as it is compatible.
  - **Apache `2.4`** - works on earlier versions as well (`2.1, 2.2, 2.3`), however, the latest stable versions are recommended. You can also use alternative software as long as it is compatible.

    :::warning
 
    The system does not work with the ModSecurity web server extension
    
    :::

- **Databases**

  - **MariaDB `10.6` (recommended)** - we recommend the latest stable versions. We don't recommend versions older than `10.1`.
  - **MySQL `5.7`, `8.0`** - earlier version (`5.6`) works as well, the latest stable versions are recommended. You can also use alternative software as long as it is compatible.

- **PHP `7.4` (recommended), `8.0`**, `8.1` (tests pending). The latest stable versions are recommended (eg. `7.4.x`).

## Database engine requirements (MariaDB/MySQL)

Configuration files eg. `/etc/my.cnf`, `/etc/mysql/my.cnf`, `/etc/mysql/conf.d/`, `my.ini`

- `SQL_MODE` should not contain `STRICT_TRANS_TABLE` i `ONLY_FULL_GROUP_BY`
- `ENGINE = InnoDB` should be available and enabled by default (disable --skip-innodb)

:::warning
Ze względów bezpieczeństwa zalecamy aby każda baza danych posiadała dedykowanego użytkownika, nie zalecamy używania użytkownika bazodanowego `root` do komunikacji z bazą danych.
:::

```ini
[client]
default-character-set  			= utf8

[mysql]
default-character-set  			= utf8

[mysqld]
default_storage_engine			= InnoDB
default-character-set  			= utf8
character-set-server 			= utf8
collation-server     			= utf8_general_ci
init-connect 					= 'SET NAMES utf8'
sql-mode 						= ''
#sql-mode						= "ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"
wait_timeout					= 600
connect_timeout					= 600
net_read_timeout				= 600
net_write_timeout				= 600
interactive_timeout				= 600
max_allowed_packet				= 128M
query_cache_size      	  		= 128M
innodb_default_row_format		= 'dynamic'
innodb_lock_wait_timeout		= 600
innodb_large_prefix 			= ON
innodb_file_per_table 			= ON
innodb_ft_min_token_size		= 2
innodb_stats_on_metadata		= OFF
innodb_open_files				= 1000
innodb_io_capacity				= 1000
ft_min_word_len 				= 2
table_open_cache				= 1000
table_definition_cache			= 1400
bulk_insert_buffer_size	= 16M

sort_buffer_size				= 4M
read_buffer_size				= 2M
read_rnd_buffer_size			= 1M
join_buffer_size 				= 16M
max_connections					= 100
innodb_flush_method				= O_DIRECT
```

:::important
MariaDB/MySQL configuration example:

- Latest stable version: https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/db/mysql.cnf
- Development version: https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/db/mysql.cnf

:::

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

- imap
- PDO
- pdo_mysql
- mysqlnd (MySQL Native Driver)
- openssl
- curl
- gd
- pcre
- xml
- json
- session
- dom
- zip
- mbstring
- soap
- fileinfo
- iconv
- intl
- SPL
- Reflection
- SimpleXML
- bcmath
- filter
- ctype
- hash

#### Optional

- exif - Library recommended for increasing security, allows you to work with image metadata
- ldap - Library required if LDAP/AD login is active
- OPcache - Improves PHP performance by storing compiled bytecode in shared memory
- apcu - Library that improves system efficiency, recommended when a large number of users is using the system or the system is under heavy load
- imagick - Library recommended for increasing security, it secures and verifies potentially dangerous image files
- pdo_sqlsrv - Library required if integration with Wapro ERP or Comarch is active

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
- User privileges directory `user_privileges/`
- Tabdata File `user_privileges/tabdata.php`
- Menu file `user_privileges/menu_0.php`
- User privileges file `user_privileges/user_privileges_1.php`
- Cache Directory `cache/`
- Address book directory `cache/addressBook/`
- Image Cache Directory `cache/images/`
- Import Cache Directory `cache/import/`
- Logs directory `cache/logs/`
- Session directory `cache/session/`
- Cache templates directory `cache/templates_c/`
- Cache upload directory `cache/upload/`
- Vtlib test directory `cache/vtlib/`
- Vtlib Test HTML Directory `cache/vtlib/HTML/`
- Cron modules directory `cron/modules/`
- Modules Directory `modules/`
- Storage Directory `storage/`
- Product Image Directory `storage/products/`
- User Image Directory `storage/users/`
- Contact Image Directory `storage/contacts/`
- MailView attachments directory `storage/OSSMailView/`
- Logo Directory `public_html/layouts/resources/Logo/`
- E-mail client `public_html/modules/OSSMail/`
- Third party libraries `public_html/libraries/`

### Issues with SELinux

:::warning
Permission issues occur frequently if SELinux is installed on the server and the enforcing mode is enabled. Note the parameters below:

- httpd_unified
- httpd_can_network_connect

https://www.nginx.com/blog/using-nginx-plus-with-selinux/

https://docs.nextcloud.com/server/latest/admin_manual/installation/selinux_configuration.html

https://www.getpagespeed.com/server-setup/nginx/nginx-selinux-configuration

```bash
sudo setsebool -P httpd_unified 1
sudo setsebool -P httpd_can_network_connect on
```

:::

## End user requirements

- OS - any OS that supports a web browser
- Display: 1280 × 800 (recommended)
- Browser compatible with `ES5` ([ECMAScript 5](https://caniuse.com/?search=es5)), and from YetiForce version 6.3 on `ES6` ([ECMAScript 6](https://caniuse.com/?search=es6))

### Supported browsers

Users should always have the latest version of any browsers they use because only the most recent versions support the newest web technologies. Below is a list of browsers, starting from the one that is the most recommended for YetiForce (Google Chrome) to the least recommended.

1. Google Chrome, Microsoft Edge
2. Firefox
3. Opera, Brave, Vivaldi
4. Apple Safari
5. Internet Explorer
6. Other

## Additional configuration using .htaccess

Some servers allow changing the configuration via the `.htaccess` file. We present some of the examples below.

#### Apache module

:::warning
The configuration below works only if Apache (eg. `httpd.conf`) is set to "AllowOverride Options" or "AllowOverride All"
:::

```apacheconf
<IfModule mod_php5.c>
	php_flag	log_errors				On
	php_flag	display_errors			Off
	php_value	error_log				cache/logs/phpError.log
	php_value	memory_limit			512M
	php_flag	output_buffering		On
	php_flag	zlib.output_compression	Off
	php_flag	file_uploads			On
	php_value	upload_max_filesize		100M
	php_value	post_max_size			50M
</IfModule>
## FastCGI module
<IfModule fcgid_module.c>
	FcgidIOTimeout		600
	FcgidConnectTimeout	600
	FcgidBusyTimeout	600
	FcgidIdleTimeout	600
</IfModule>
<IfModule mod_fcgid.c>
	IdleTimeout			600
	ProcessLifeTime		600
	IPCConnectTimeout	600
	IPCCommTimeout		600
	BusyTimeout			600
</IfModule>
```

## Additional configuration using user.ini

You can also quickly change the PHP configuration by creating a user.ini file in the main directory `$_SERVER['DOCUMENT_ROOT']`, right now it supports CGI/FastCGI. However, be careful because not all parameters can be configured this way (https://www.php.net/manual/en/configuration.changes.modes.php).

More information: https://secure.php.net/manual/en/configuration.file.per-user.php

Example:

<details>
  <summary>https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/.user.ini</summary>

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/.user.ini
```

</details>

## Requirements for system update

### MariaDB/MySQL

```ini
connect_timeout = 3600
connect_timeout = 3600
net_read_timeout = 3600
net_write_timeout = 3600
wait_timeout = 3600
wait_timeout = 3600
innodb_lock_wait_timeout = 3600
```

### PHP

```ini
max_execution_time = 3600
max_input_time = 3600
default_socket_timeout = 3600
```

### PHP FPM

```ini
pm.process_idle_timeout = 3600s
request_terminate_timeout = 3600
```

### NGINX

```nginx
server {
   ...
   client_body_timeout 3600;
   send_timeout 3600;

 location ~ \.php$ {
   ...
   fastcgi_send_timeout 3600;
   fastcgi_read_timeout 3600;
   keepalive_timeout 3600;
   proxy_connect_timeout 3600;
   proxy_send_timeout 3600;
   proxy_read_timeout 3600;
 }
 location ~ ^(.+\.php)(.*)$ {
   ...
   fastcgi_send_timeout 3600;
   fastcgi_read_timeout 3600;
   keepalive_timeout 3600;
   proxy_connect_timeout 3600;
   proxy_send_timeout 3600;
   proxy_read_timeout 3600;
 }
}
```
