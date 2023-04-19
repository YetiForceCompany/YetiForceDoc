---
title: How to install YetiForce on Debian 10
description: A simple manual on how to install and configure Debian 10 to work with YetiForce
keywords:
  - Debian
  - manual
  - installation
  - configuration
  - packages
  - YetiForce
tags:
  - installation
  - Debian
---

This tutorial presents LEMP installation and configuration for YetiForce on Debian 10 with NGINX/PHP-FPM 7.4/MariaDB server.

:::warning
This article assumes you have at least a basic understanding of Linux, and you know how to use the shell.
:::

Installation is quite simple and assumes you are working on the root account. If not, you may have to add `sudo` to the commands to gain `root` privileges.

:::tip
The full list of requirements for the YetiForce system is available here: [YetiForce requirements](/introduction/requirements/)
:::

## 1. Update all installed packages to the latest available versions

```bash
apt-get update -y
apt-get upgrade -y
```

## 2. Install required packages

```bash
apt-get install -y --no-install-recommends apt-utils curl openssl wget ca-certificates apt-transport-https lsb-release gnupg zip unzip cron mc htop p7zip-full
```

## 3. Add required repositories (package sources)

The default PHP version used in a given distribution does not always match the requirements, so we use an additional package source.

We recommend using https://deb.sury.org/, https://github.com/oerdnj/deb.sury.org as it has the latest versions and frequent PHP updates.

```bash
wget -q -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list
```

:::important Optional
If you want the latest version of the database engine then you can add an additional package repository from MariaDB.

```bash
apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
echo "deb [arch=amd64,arm64,ppc64el] https://ftp.osuosl.org/pub/mariadb/repo/10.6/debian $(lsb_release -sc) main" > /etc/apt/sources.list.d/mariadb.list
```

:::

## 4. Update newly added packages

```bash
apt-get update -y
```

## 5. Install MariaDB

```bash
apt-get install -y --no-install-recommends mariadb-server mariadb-client
```

## 6. Install PHP-FPM / NGINX

```bash
apt-get install -y --no-install-recommends nginx nginx-extras php7.4-fpm php7.4-mysql php7.4-curl php7.4-intl php7.4-gd php7.4-fpm php7.4-bcmath php7.4-soap php7.4-ldap php7.4-imap php7.4-xml php7.4-cli php7.4-zip php7.4-json php7.4-opcache php7.4-mbstring php7.4-imagick php7.4-apcu
apt-get -y autoclean
```

## 7. Create users, groups and configure the structure

For security reasons, create a separate user in the OS, which will limit the permissions for the application.

```bash
groupadd yfprod
useradd -g yfprod yfprod
usermod --shell /bin/bash yfprod
mkdir -p /home/yfprod/html/public_html
chown -R yfprod:yfprod /home/yfprod/
mkdir -p /var/log/php/
passwd yfprod
```

:::important Optional
Create a test environment

```bash
groupadd yftest
useradd -g yftest yftest
usermod --shell /bin/bash yftest
mkdir -p /home/yftest/html/public_html
chown -R yftest:yftest /home/yftest/
passwd yftest
```

:::

## 8. Configure NGINX

```bash
rm /etc/nginx/sites-available/default
rm /etc/nginx/sites-enabled/default
rm /var/www/html/index.nginx-debian.html
wget -O /etc/nginx/yetiforce.conf "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/nginx/yetiforce.conf"
wget -O /etc/nginx/sites-available/yfprod.conf "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/nginx/www.conf"
ln -s /etc/nginx/sites-available/yfprod.conf /etc/nginx/sites-enabled/
rm /etc/nginx/nginx.conf
wget -O /etc/nginx/nginx.conf "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/nginx/nginx.conf"
```

:::warning Note:
The [www.conf](https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/nginx/www.conf) GitHub file contains example domain names that should be changed. The example is presented on the development version, we recommend downloading the files for the system version that will be installed.
:::

:::important Optional
Creating a test environment requires changing the domain name

```bash
cp /etc/nginx/sites-available/yfprod.conf /etc/nginx/sites-available/yftest.conf
ln -s /etc/nginx/sites-available/yftest.conf /etc/nginx/sites-enabled/
```

:::

## 9. Configure PHP-FPM

```bash
rm /etc/php/7.4/fpm/pool.d/www.conf
wget -O /etc/php/7.4/fpm/pool.d/yfprod.conf "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/fpm/www.conf"
wget -O /etc/php/7.4/fpm/conf.d/yetiforce.ini "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/php/prod.ini"
cp /etc/php/7.4/fpm/conf.d/yetiforce.ini /etc/php/7.4/cli/conf.d/yetiforce.ini
sed -i 's/php_error/cli_error/g' /etc/php/7.4/cli/conf.d/yetiforce.ini
sed -i 's/html_errors = "On"/html_errors = "Off"/g' /etc/php/7.4/cli/conf.d/yetiforce.ini
sed -i 's/output_buffering = "On"/output_buffering = "Off"/g' /etc/php/7.4/cli/conf.d/yetiforce.ini
```

:::warning
The example is presented on the development version, we recommend downloading the files for the system version that will be installed, e.g. https://github.com/YetiForceCompany/YetiForceCRM/blob/6.4.0/tests/setup/fpm/www.conf

:::

:::important Opcjonalnie
Creating a test environment requires copying the file and replacing the `yfprod` with `yftest`

```bash
cp /etc/php/7.4/fpm/pool.d/yfprod.conf /etc/php/7.4/fpm/pool.d/yftest.conf
sed -i 's/yfprod/yftest/g' /etc/php/7.4/fpm/pool.d/yftest.conf
```

:::

## 10. Configure MariaDB

```bash
rm /etc/mysql/mariadb.conf.d/50-server.cnf
wget -O /etc/mysql/mariadb.conf.d/50-server.cnf "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/db/mysql.cnf"
```

:::warning
The example is presented on the development version, we recommend downloading the files for the system version that will be installed, e.g. https://github.com/YetiForceCompany/YetiForceCRM/blob/6.4.0/tests/setup/db/mysql.cnf
:::

**MariaDB is not secure by default**. You can secure it in two ways:

```
mysql_secure_installation
Enter current password for root (enter for none):OK, successfully used password, moving on...
You already have a root password set, so you can safely answer 'n'.
Change the root password? [Y/n] y
New password:
Re-enter new password:
Password updated successfully!
Reloading privilege tables..
... Success!
Remove anonymous users? [Y/n] y
... Success!
Disallow root login remotely? [Y/n] y
... Success!
Remove test database and access to it? [Y/n] y
- Dropping test database... ... Success!
- Removing privileges on test database... ... Success!
Reload privilege tables now? [Y/n] y
... Success!
Cleaning up...
All done!  If you've completed all of the above steps, your MariaDB installation should now be secure.
Thanks for using MariaDB!
```

Or secure it manually:

```bash
DB_ROOT_PASS=`openssl rand -base64 15`
DB_AND_USER1_NAME="yfprod"
DB_USER1_PASS=`openssl rand -base64 15`
echo "New root password: $DB_ROOT_PASS"
echo "New $DB_AND_USER1_NAME user password: $DB_USER1_PASS"
mysqladmin password "$DB_ROOT_PASS";
echo "UPDATE mysql.user SET Password=PASSWORD('$DB_ROOT_PASS') WHERE User='root';" | mysql --user=root;
echo "DELETE FROM mysql.user WHERE User='';" | mysql --user=root -p$DB_ROOT_PASS;
echo "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');" | mysql --user=root -p$DB_ROOT_PASS;
echo "DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%';" | mysql --user=root -p$DB_ROOT_PASS;
echo "FLUSH PRIVILEGES;" | mysql --user=root -p$DB_ROOT_PASS
```

Create a new user and database for YetiForce:

```bash
echo "CREATE DATABASE $DB_AND_USER1_NAME CHARACTER SET utf8 COLLATE utf8_general_ci;" | mysql --user=root -p$DB_ROOT_PASS;
echo "CREATE USER '$DB_AND_USER1_NAME'@'localhost' IDENTIFIED BY '$DB_USER1_PASS';" | mysql --user=root -p$DB_ROOT_PASS;
echo "GRANT ALL PRIVILEGES ON $DB_AND_USER1_NAME.* TO '$DB_AND_USER1_NAME'@'localhost';" | mysql --user=root -p$DB_ROOT_PASS;
echo "FLUSH PRIVILEGES;" | mysql --user=root -p$DB_ROOT_PASS
```

## 11. Configure CRON-a

```bash
wget -O /etc/cron.d/yf_crm "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/crons.conf"
```

## 12. Activate services

```bash
systemctl restart cron.service
systemctl restart mariadb.service
systemctl restart php7.4-fpm.service
systemctl restart nginx.service
```

## 13. Download YetiForce installer

```bash
cd /home/yfprod/html/
wget -O YetiForceCRM.zip https://github.com/YetiForceCompany/YetiForceCRM/releases/download/6.4.0/YetiForceCRM-6.4.0-complete.zip
unzip YetiForceCRM.zip
chown -R yfprod:yfprod /home/yfprod/html/
rm YetiForceCRM.zip
rm .user.ini
rm public_html/.user.ini
```

## 14. Install YetiForce

A complete description of the YetiForce installation can be found in the article: [Installation manual](introduction/installation-manual/)

## 15. Final remarks

:::warning
Once setup is complete, SSH access should be restricted to trusted IP or VPN addresses only.

We also recommend disabling root login directly via SSH and installing and configuring a firewall.
:::
