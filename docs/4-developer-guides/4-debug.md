---
title: Debug
description: Jak prawidłowo debugować system YetiForce
keywords:
  - Debug
  - YetiForce
tags:
  - Debug
preview: 4-debug.jpg
---

YetiForce to bardzo zaawansowany system, posiada kilkanaście tysięcy plików i setki zależności a codziennie jest tego coraz więcej. Dlatego aby móc analizować problemy w systemie, zostało stworzonych wiele mechanizmów logujących, które w zależności od potrzeb, w odpowiednim miejscu aktywujemy. Istnieją również inne metody analizowania błędów, lecz nie są one tutaj wymienione, ponieważ albo wymagają zaawansowanego poziomu programowania albo są specyficzne dla środowiska i wdrożonych funkcjonalności.

![Debug](4-debug.jpg)

## Wstęp

Należy pamiętać, że debugowanie to nie zera i jedynki, lecz pewnego rodzaju stan umysłu 😀 Należy rozumieć na tyle problem, aby wiedzieć, gdzie zacząć szukać przyczyny, w przeciwnym wypadku możemy stracić wiele cennego czasu. Różne technologie debuguje się w różnych miejscach (np. HTML, CSS, JS, AJAX najlepiej debugować w przeglądarce). Do debugowania należy używać różnych narzędzi: przeglądarka - najlepiej Google Chrome, XDebug, logi serwera, logi aplikacji a czasem trzeba dodać coś niekonwencjonalnego do kodu, aby ten wyświetlił nam błąd w odpowiednim miejscu lub wykonać proste testy sieciowe, by wyeliminować problemy pomiędzy serwerem a przeglądarką użytkownika.

## Ścieżki plików z logami

- cache/logs/phpError.log - ogólne logi błędów PHP-a. Oczywiście czy logi tam się pojawią zależy od kilku czynników pośrednich np. konfiguracji serwera WWW.
- cache/logs/errors.log - logi błędów PHP kontrolowane przez system YetiForce
- cache/logs/system.log - główne logi dla debugowania systemu YetiForce, w zależności od odpowiednio ustawionego poziomu rejestruje informacje
- cache/logs/davException.log - logi błędów dla integracji dla DAV
- cache/logs/davDebug.log - logi debugowania dla integracji dla DAV
- cache/logs/webserviceDebug.log - logi debugowania dla API/webserwis-ów
- cache/logs/webserviceErrors.log - logi błędów dla API/webserwis-ów
- cache/logs/viewer-debug.log - logi debugowania dla warstwy wyświetlającej dane czyli Smartów
- cache/logs/smtp - logi poczty dla smtp
- cache/logs/ldap - logi poczty dla ldap
- cache/logs/imap - logi poczty dla imap
- cache/logs/session - logi poczty dla session
- cache/logs/sql - logi poczty dla sql
- cache/logs/update.log - logi błędów dla mechanizmu aktualizacji systemu

Gdy pliki opisane powyżej nie istnieją, to po włączeniu logów zostaną one utworzone (o ile aplikacja ma odpowiednie uprawnienia w systemie plików).

## Logi systemu YetiForce

Aby włączyć rejestrowanie logów do pliku należy w pliku [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php) ustawić wartość `true` dla parametru [`LOG_TO_FILE`](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_LOG_TO_FILE), następnie należy ustawić odpowiedni poziom rejestrowania zmian [`LOG_LEVELS`](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_LOG_LEVELS).

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L20-L27
```

Poniżej poziomy debugowania (od najmniej pokazującego do najwięcej):

- error
- warning
- info
- trace
- profile

Możliwe warianty wartości:

- ['error']
- ['error', 'warning', 'info', 'trace', 'profile']
- 'All'
- 3

Logi będą rejestrowane w następującym pliku: `cache/logs/system.log`. Katalog `cache/logs/` musi mieć uprawnienia do zapisu dla użytkownika na którym działa serwer WWW.

## Logi PHP

Aby rozpocząć analizę problemów lub błędów występujących w systemie należy włączyć zapis logów i wyświetlanie komunikatów serwera. **Bez tej zmiany system nie będzie w stanie informować nas o występujących problemach** z np. krótkim czasem wykonywania skryptu. W konfiguracji php.ini należy ustawić wartości `log_errors` i `display_errors` na `On`. Jeśli konfiguracja umożliwia nadpisywanie parametrów PHP to za pomocą `.htaccess` [Dodatkowa konfiguracja z użyciem .htaccess](/pl/introduction/requirements/#dodatkowa-konfiguracja-z-użyciem-htaccess). Ważne aby przez rozpoczęciem debugowania sprawdzić w panelu [`Dokumentacja administratora → Logi → Serwer - konfiguracja`](/administrator-guides/logs/server-configuration) opisane parametry są poprawnie ustawione.

## Logi MySQL

Błędy w zapytanych SQL są rejestrowane przez [Logi systemu YetiForce](#logi-systemu-yetiforce), o poziomie błędu `error`.

## Logi Smarty

Plik konfiguracyjny: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L71-L75
```

## Debugowanie poczty `Roundcube`

Plik konfiguracyjny: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

W Roundcube możemy debugować różne elementy:

```php reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php#L114-L145
```

## Debugowanie integracji DAV

Plik konfiguracyjny: [config/Debug.php](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/config/Debug.php)

Parametr włącza dodatkowy plugin który służy do logowania/zapisywania wszystkich danych otrzymywanych i wysyłanych przez serwer do pliku `cache/logs/davDebug.log`.

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
