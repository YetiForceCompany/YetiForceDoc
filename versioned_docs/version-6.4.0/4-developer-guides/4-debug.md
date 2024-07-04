---
title: Debugowanie
description: Jak poprawnie debugować YetiForce
keywords:
  - Debug
  - YetiForce
tags:
  - Debug
preview: 4-debug.jpg
---

YetiForce jest bardzo zaawansowanym systemem, w którym znajdują się tysiące plików i setki zależności, a liczby te rosną każdego dnia. Dlatego, aby móc analizować problemy w systemie, zostało stworzonych wiele mechanizmów logujących, które w zależności od potrzeb, można aktywować w odpowiednim miejscu. Istnieją też inne sposoby analizy błędów, ale nie są one wymienione w niniejszym artykule, ponieważ mogą wymagać zaawansowanego poziomu programowania lub być specyficzne dla konkretnego środowiska i wdrożonych funkcji.

![Debugowanie](4-debug.jpg)

## Wprowadzenie

Konieczne jest zrozumienie problemu w taki sposób, aby można było znaleźć jego przyczynę. W przeciwnym razie można stracić dużo czasu. Różne technologie są debugowane w różnych lokalizacjach (np. HTML, CSS, JS, AJAX - najlepiej debugować je w przeglądarce). Do debugowania należy używać różnych narzędzi, takich jak XDebug, dzienniki serwerów, dzienniki aplikacji. Zalecamy korzystanie z przeglądarki Google Chrome. Czasem trzeba dodać coś niekonwencjonalnego do kodu, aby ten wyświetlił nam błąd w odpowiednim miejscu. Dobrym pomysłem może być przeprowadzenie prostych testów sieciowych w celu wyeliminowania problemów pomiędzy serwerem a przeglądarką użytkownika.

## Ścieżki plików logów

- cache/logs/phpError.log - general PHP error logs. Widoczność logów jest określona przez kilka czynników pośrednich, np. konfigurację serwera WWW
- cache/logs/errors.log - logi błędów PHP kontrolowane przez system
- cache/logs/system.log - główne logi dla debugowania systemu, w zależności od odpowiednio ustawionego poziomu rejestruje informacje
- cache/logs/davException.log - logi błędów dla integracji dla DAV
- cache/logs/davDebug.log - logi debugowania dla integracji DAV
- cache/logs/webserviceDebug.log - logi debugowania dla API/webservice
- cache/logs/webserviceErrors.log - logi błędów dla API/webservice
- cache/logs/viewer-debug.log - logi debugowania dla warstwy wyświetlającej dane, czyli Smartów
- cache/logs/smtp - logi poczty dla smtp
- cache/logs/ldap - logi poczty dla ldap
- cache/logs/imap - logi poczty dla imap
- cache/logs/session - logi poczty dla session
- cache/logs/sql - logi poczty dla sql
- cache/logs/update.log - logi błędów dla mechanizmu aktualizacji systemu

**Jeśli pliki opisane powyżej nie istnieją, zostaną utworzone po włączeniu logów (zakładając, że aplikacja ma odpowiednie uprawnienia w systemie plików).**

## Logi systemu YetiForce

Aby włączyć rejestrowanie logów, ustaw wartość [`LOG_TO_FILE`](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_LOG_TO_FILE) na `true` w [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php); następnie ustaw odpowiedni poziom rejestrowania zmian [`LOG_LEVELS`](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_LOG_LEVELS).

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L20-L27
```

**Poziomy debugowania (od najmniej pokazującego do najwięcej):**

- error
- warning
- info
- trace
- profile

**Możliwe warianty wartości:**

- ['error']
- ['error', 'warning', 'info', 'trace', 'profile']
- 'All'
- 3

Logi będą rejestrowane w następującym pliku: `cache/logs/system.log`. Katalog `cache/logs/` musi mieć prawa do zapisu.

## Logi PHP

Aby rozpocząć analizowanie problemów lub błędów w systemie, należy włączyć rejestrowanie logów i wyświetlanie komunikatów serwera. **Bez tej zmiany system nie będzie w stanie informować o problemach** z np. krótkim czasem wykonania skryptu. W konfiguracji php.ini ustaw wartości `log_errors` i `display_errors` na `On`. Jeśli konfiguracja pozwala na nadpisanie parametrów PHP, użyj `.htaccess` [Dodatkowa konfiguracja z .htaccess](/introduction/requirements/#dodatkowa-konfiguracja-z-użyciem-htaccess). Przed rozpoczęciem debugowania, ważne jest sprawdzenie w panelu [`Dokumentacja Administratora → Logi → Serwer - konfiguracja`](/administrator-guides/logs/server-configuration) czy opisane parametry są poprawnie ustawione.

## Logi MySQL

Błędy w zapytaniach SQL są rejestrowane przez [logi systemu YetiForce](#yetiforce-system-logs), z poziomem błędu `error`.

## Logi Smarty

Plik konfiguracyjny: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L71-L75
```

## Debugowanie `Roundcube`

Plik konfiguracyjny: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

Roundcube pozwala na debugowanie różnych elementów:

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L114-L145
```

## Debugowanie integracji DAV

Plik konfiguracyjny: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

Parametr włącza dodatkową wtyczkę, która jest używana do logowania/zapisywania wszystkich danych otrzymanych i wysłanych przez serwer do pliku `cache/logs/davDebug.log`.

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L105-L109
```

## Podsumowanie

### Logi systemu YetiForce - krytyczne

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
