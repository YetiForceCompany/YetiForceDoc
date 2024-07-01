---
title: Jak zainstalować YetiForce na Debian 10
description: Prosta instrukcja instalacji i konfiguracji systemu operacyjnego Debian 10 dla systemu YetiForce
keywords:
  - Debian
  - instrukcja
  - instalacji
  - konfiguracja
  - pakiety
  - YetiForce
tags:
  - instalacji
  - Debian
---

Instrukcja przedstawia proces instalacji i konfiguracji platformy LEMP dla YetiForce na Debian 10 z serwerem NGINX/PHP-FPM 7.4/MariaDB.

:::warning
W artykule zakładamy, że masz przynajmniej podstawową wiedzę o Linux i wiesz jak korzystać z powłoki shell.
:::

Instalacja jest całkiem prosta i zakłada, że pracujesz na koncie root. Jeśli nie, może być konieczne dodanie `sudo` poleceń, aby uzyskać uprawnienia `root`.

:::tip
Pełna lista wymagań dla systemu YetiForce jest na stronie: [Wymagania systemu YetiForce](/introduction/requirements/)
:::

## 1. Aktualizacja wszystkich zainstalowanych pakietów do najnowszych dostępnych wersji

```bash
apt-get update -y
apt-get upgrade -y
```

## 2. Zainstaluj wymagane pakiety

```bash
apt-get install -y --no-install-recommends apt-utils curl openssl wget ca-certificates apt-transport-https lsb-release gnupg zip unzip cron mc htop p7zip-full
```

## 3. Dodaj wymagane repozytoria (źródła pakietów)

Domyślna wersja PHP używana w danej dystrybucji nie zawsze jest zgodna z wymaganiami, dlatego używamy dodatkowego źródła pakietów.

Zalecamy używanie https://deb.sury.org/, https://github.com/oerdnj/deb.sury.org zawiera najnowsze wersje oraz częste aktualizacje PHP.

```bash
wget -q -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list
```

:::important Opcjonalnie
Jeśli chcesz mieć najnowszą wersję silnika bazy danych, to możesz dodać dodatkowe repozytorium pakietów od MariaDB.

```bash
apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
echo "deb [arch=amd64,arm64,ppc64el] https://ftp.osuosl.org/pub/mariadb/repo/10.6/debian $(lsb_release -sc) main" > /etc/apt/sources.list.d/mariadb.list
```

:::

## 4. Aktualizacja nowo dodanych pakietów

```bash
apt-get update -y
```

## 5. Instalacja MariaDB

```bash
apt-get install -y --no-install-recommends mariadb-server mariadb-client
```

## 6. Instalacja PHP-FPM / NGINX

```bash
apt-get install -y --no-install-recommends nginx nginx-extras php7.4-fpm php7.4-mysql php7.4-curl php7.4-intl php7.4-gd php7.4-fpm php7.4-bcmath php7.4-soap php7.4-ldap php7.4-imap php7.4-xml php7.4-cli php7.4-zip php7.4-json php7.4-opcache php7.4-mbstring php7.4-imagick php7.4-apcu
apt-get -y autoclean
```

## 7. Tworzenie użytkowników, grup oraz konfiguracja struktury

Ze względów bezpieczeństwa tworzymy oddzielnego użytkownika w OS, dzięki temu ograniczamy uprawniania dla aplikacji.

```bash
groupadd yfprod
useradd -g yfprod yfprod
usermod --shell /bin/bash yfprod
mkdir -p /home/yfprod/html/public_html
chown -R yfprod:yfprod /home/yfprod/
mkdir -p /var/log/php/
passwd yfprod
```

:::important Opcjonalnie
Utworzenie środowiska testowego

```bash
groupadd yftest
useradd -g yftest yftest
usermod --shell /bin/bash yftest
mkdir -p /home/yftest/html/public_html
chown -R yftest:yftest /home/yftest/
passwd yftest
```

:::

## 8. Konfiguracja NGINX

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

:::warning
Plik [www.conf](https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/nginx/www.conf) z github zawiera przykładowe nazwy domen i należy je zmienić. W przykładzie jest użyta wersja deweloperska, zalecamy aby pobrać pliki dla wersji CRM, która będzie instalowana.
:::

:::important Opcjonalnie
Utworzenie środowiska testowego, wymaga zmiany nazwy domeny

```bash
cp /etc/nginx/sites-available/yfprod.conf /etc/nginx/sites-available/yftest.conf
ln -s /etc/nginx/sites-available/yftest.conf /etc/nginx/sites-enabled/
```

:::

## 9. Konfiguracja PHP-FPM

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
W przykładzie jest użyta wersja deweloperska, zalecamy aby pobrać pliki dla wersji systemu, która będzie instalowana np. https://github.com/YetiForceCompany/YetiForceCRM/blob/6.4.0/tests/setup/fpm/www.conf

:::

:::important Opcjonalnie
Tworzenie środowiska testowego wymaga skopiowania pliku i zastąpienia `yfprod` `yftest`

```bash
cp /etc/php/7.4/fpm/pool.d/yfprod.conf /etc/php/7.4/fpm/pool.d/yftest.conf
sed -i 's/yfprod/yftest/g' /etc/php/7.4/fpm/pool.d/yftest.conf
```

:::

## 10. Konfiguracja MariaDB

```bash
rm /etc/mysql/mariadb.conf.d/50-server.cnf
wget -O /etc/mysql/mariadb.conf.d/50-server.cnf "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/db/mysql.cnf"
```

:::warning
W przykładzie jest użyta wersja deweloperska, zalecamy aby pobrać pliki dla wersji systemu, która będzie instalowana np. https://github.com/YetiForceCompany/YetiForceCRM/blob/6.4.0/tests/setup/db/mysql.cnf
:::

**MariaDB nie jest domyślnie bezpieczna**. Możesz to zrobić na dwa sposoby:

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

Lub ręcznie wprowadzić zabezpieczenia:

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

Utwórz nowego użytkownika i bazę danych dla YetiForce:

```bash
echo "CREATE DATABASE $DB_AND_USER1_NAME CHARACTER SET utf8 COLLATE utf8_general_ci;" | mysql --user=root -p$DB_ROOT_PASS;
echo "CREATE USER '$DB_AND_USER1_NAME'@'localhost' IDENTIFIED BY '$DB_USER1_PASS';" | mysql --user=root -p$DB_ROOT_PASS;
echo "GRANT ALL PRIVILEGES ON $DB_AND_USER1_NAME.* TO '$DB_AND_USER1_NAME'@'localhost';" | mysql --user=root -p$DB_ROOT_PASS;
echo "FLUSH PRIVILEGES;" | mysql --user=root -p$DB_ROOT_PASS
```

## 11. Konfiguracja CRON-a

```bash
wget -O /etc/cron.d/yf_crm "https://raw.githubusercontent.com/YetiForceCompany/YetiForceCRM/developer/tests/setup/crons.conf"
```

## 12. Uruchamianie usług

```bash
systemctl restart cron.service
systemctl restart mariadb.service
systemctl restart php7.4-fpm.service
systemctl restart nginx.service
```

## 13. Pobranie instalatora systemu YetiForce

```bash
cd /home/yfprod/html/
wget -O YetiForceCRM.zip https://github.com/YetiForceCompany/YetiForceCRM/releases/download/6.4.0/YetiForceCRM-6.4.0-complete.zip
unzip YetiForceCRM.zip
chown -R yfprod:yfprod /home/yfprod/html/
rm YetiForceCRM.zip
rm .user.ini
rm public_html/.user.ini
```

## 14. Instalacja systemu YetiForce

Pełny opis instalacji systemu YetiForce znajduje się w artykule: [Instalacja systemu YetiForce](/introduction/installation-manual#jak-zainstalować-system-yetiforce)

## 15. Uwagi końcowe

:::warning
Po zakończeniu konfiguracji dostęp do SSH powinien zostać ograniczony tylko do zaufanych adresów IP lub VPN.

Zalecamy również wyłączenie możliwości logowania się na użytkownika root bezpośrednio przez SSH oraz instalację i konfigurację firewall.
:::
