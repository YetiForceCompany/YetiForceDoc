---
title: Wymagania Portalu YetiForce
description: Wymagania portalu klienta YetiForce dla systemu YetiForce (YetiForcePortal2)
keywords:
  - Portal
  - serwer
  - wymagania
  - Klient
  - YetiForce
  - środowisko
tags:
  - wymagania
  - portal
draft: true
---

YetiForce Portal stawia pewne wymagania serwerom WWW — dostosowanie serwera jest kluczowe dla prawidłowego działania systemu. Nieprawidłowa konfiguracja serwera jest najczęstszą przyczyną problemów.

Konfiguracja serwera dla Portalu jest bardzo podobna do wymagań dla systemu YetiForce ([Web server requirements for the system](/introduction/requirements/)), ale zawiera istotne różnice np. brak wymagań dla bazy danych.

## Zasoby/Sprzęt

Wymagania dla sprzętu są zależne od liczby aktywnych użytkowników i ilości danych, dlatego wymagają indywidualnego wyliczenia.

Minimalne wymagania:

- procesor z minimum dwoma rdzeniami,
- 2 GB pamięci RAM ,
- szybki dysk twardy (najlepiej SSD),
- szybkie połączenie sieciowe do systemu YetiForce

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

Zalecamy aby połączenie z serwerem, na którym znajduje się nasz system, było zawsze szyfrowane. Jeśli połączenie z serwerem nie zostało nawiązane za pomocą protokołu HTTPS, komunikacja może zostać podsłuchana lub zmieniona przez osoby postronne.

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
