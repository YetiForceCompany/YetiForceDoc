---
title: YetiForce Portal requirements
description: YetiForce Customer Portal requirements for YetiForce system (YetiForcePortal2)
keywords:
  - Portal
  - serwer
  - wymagania
  - Customer
  - YetiForce
  - środowisko
tags:
  - wymagania
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

## Oprogramowanie bazowe dla serwera (LAMP/LEMP)

- **System operacyjny - Debian, Ubuntu, RedHat, Mint** - działa na większości dystrybucji linuksowych. Nie zalecamy systemu operacyjnego MS Windows, jak również MS Windows Server. Pomimo, że nasz system dobrze sobie radzi na serwerach Windows, to nie są one optymalne pod kątem działania aplikacji WWW.

- **Serwer WWW**

  - **Nginx `1.23` (rekomendowany)** - poprawnie działa również na wcześniejszych wersjach, jednakże zalecamy najnowsze stabilne wersje oprogramowania. Możesz również używać oprogramowania alternatywnego, ale kompatybilnego z tym oprogramowaniem.
  - **Apache `2.4`** - działa również na wcześniejszych wersjach (`2.1, 2.2, 2.3`), jednakże zalecamy najnowsze stabilne wersje oprogramowania. Możesz również używać oprogramowania alternatywnego, ale kompatybilnego z tym oprogramowaniem.

- **PHP `7.4` (rekomendowany), `8.0`**, `8.1` (w trakcie testów). Zalecamy używanie najnowszych stabilnych wersji oprogramowania (np. `7.4.x`).

## Wymagania dla PHP

Pliki konfiguracyjne, np. Pliki konfiguracyjne np. `/etc/php/8.0/fpm/php.ini`, `/etc/php/8.0/cli/php.ini`

```ini reference title="Latest stable version: github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/php/prod.ini"
https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/php/prod.ini
```

<details>
  <summary>Wersja deweloperska: github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/php/dev.ini</summary>

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/php/dev.ini
```

</details>

### Konfiguracja bibliotek zewnętrznych

#### Obowiązkowe

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

#### Opcjonalne

- OPcache - Poprawia wydajność PHP poprzez przechowywanie skompilowanego kodu bajtowego w pamięci współdzielonej
- apcu - Biblioteka przyspieszająca wydajność systemu, zalecana podczas pracy większej ilości użytkowników lub większego obciążenia systemu

#### Zabronione

- uopz - rozszerzenie powoduje zawieszanie i blokowanie systemu

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
Przykładowa konfiguracja FPM:

- Ostatnia stabilna wersja: https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/fpm/www.conf
- Wersja deweloperska: https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/fpm/www.conf

:::

## Serwer WWW

- Apache: https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/apache/.htaccess
- Nginx: https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/nginx

### Szyfrowanie HTTPS i HTTP2

We recommend encrypting the connection to the server where the system is located. Jeśli połączenie z serwerem nie zostało nawiązane za pomocą protokołu HTTPS, komunikacja może zostać podsłuchana lub zmieniona przez osoby postronne.

### Uprawnienia do folderów i plików

Uprawnienia do folderów i plików często są głównym źródłem problemów dla osób instalujących aplikacje na swoich serwerach VPS i serwerach dedykowanych. Wszystkie pliki i foldery CRM powinny mieć tego samego właściciela.

Zalecamy następującą konfigurację:

- pliki `644` (rw-r--r--)
- foldery `755` (rwxr-xr-x)

Konfiguracja powinna umożliwiać serwerowi WWW na pełne uprawnienia do plików, bez konieczności zmiany uprawnień na plikach i folderach. Należy pamiętać, że sama aplikacja podczas pracy wykonuje różne operacje takie jak odczyt, zapis, jak również tworzenie i usuwanie plików. Jeżeli nie wiesz jak prawidłowo skonfigurować uprawnienia, poproś o to swojego administratora, wysyłając mu link do tego artykułu.

- Configuration directory `config/`
- Application data directory `app_data/`
- Cache Directory `cache/`
- Logs directory `cache/logs/`
- Session directory `cache/session/`
- Cache templates directory `cache/layouts/`
