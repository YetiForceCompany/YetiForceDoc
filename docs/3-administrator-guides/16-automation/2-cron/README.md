---
title: CRON | Harmonogram
description: Informacje dotyczące mechanizmu CRON i sposobie jego uruchomienia
keywords:
  - CRON
  - crontab
  - włącz
  - automatyzacja
  - CLI
  - unix
tags:
  - CRON
  - CLI
  - automatyzacja
preview: cron-1.jpg
---

CRON to uniksowy demon zajmujący się okresowym wywoływaniem innych programów. Posługuje się on tabelami CRONTAB do przechowywania informacji jakie zadanie ma uruchamiać. Dzięki niemu system YetiForce automatycznie wykonuje różne zadania poprzez uruchamianie ich w tle.

![cron](cron-1.jpg)

## Jak uruchomić CRON?

CRON można włączyć w kilku prostych krokach:

### Linux

#### Edytuj CRONTAB za pomocą polecenia

```bash
crontab -u www-data -e
```

Dodaj następującą linię:

```bash
*/2 * * * * sh __YETIFORCE_PATH__/cron/cron.sh > __YETIFORCE_PATH__/cache/logs/cron.log 2>&1
```

`__YETIFORCE_PATH__` jest pełną ścieżką bezwzględną do folderu systemu YetiForce, np. /var/www/yetiforce.

:::note

Jeżeli powyższy sposób nie działa na użytej dystrybucji serwera Linux możesz edytować bezpośrednio plik /etc/crontab lub utworzyć nowy plik /etc/cron.d/yetiforce i dodać jeden z poniższych wpisów:

```bash
*/2 * * * * www-data sh __YETIFORCE_PATH__/cron/cron.sh > __YETIFORCE_PATH__/cache/logs/cron.log 2>&1
```

```bash
*/2 * * * * php __YETIFORCE_PATH__/cron.php > __YETIFORCE_PATH__/cache/logs/cron.log 2>&1
```

```bash
*/2 * * * * cd __YETIFORCE_PATH__; /usr/local/bin/php -f cron.php > __YETIFORCE_PATH__/cache/logs/cron.log 2>&1
```

:::

:::warning

- skrypt musi być uruchamiany przez użytkownika z takimi samymi uprawnieniami jak właściciel plików systemowych.
- w CRONTAB może być dodane tylko jedno zadanie CRON'a dla systemu YetiForce.

:::

#### Uprawnienia

Zmień uprawnienia pliku `__YETIFORCE_PATH__`/cron/cron.sh na `744`, aby prawo do jego wykonywania miał tylko właściciel.

![cron](cron-2.png)

#### Ścieżka PHP

Sprawdź poprawność ustawień ścieżki do PHP w pliku `cron.sh`.

Plik `cron.sh` znajduje się w lokalizacji: `__YETIFORCE_PATH__`/cron/cron.sh. Domyślnie wskazuje on na aliasowaną nazwę "php".

```bash
export USE_PHP=php
```

Jeżeli serwer ma aliasowany PHP w poprawnej wersji nie musisz nic robić. Zweryfikujesz to poprzez wywołanie komendy:

```bash
php -v
```

Jeżeli PHP nie jest aliasowany lub serwer ma zainstalowane wiele wersji PHP i chcesz wskazać na konkretną - ustaw w pliku `cron.sh` dokładną ścieżkę do PHP, np.:

```bash
export USE_PHP=/usr/local/php83/bin/php83
```

:::warning
Zwróć uwagę na poprawność ścieżki do PHP, która może być inna dla różnych serwerów.
:::

![cron](cron-3.png)

Zwróć uwagę, aby plik miał zakończenia linii w formacie Unix (LF).

![cron](cron-4.png)

### Windows

Ze względu na brak oficjalnego wsparcia nie zaleca się używania systemu Windows jako serwera dla YetiForce.

### Alternatywne sposoby wywołania zadań harmonogramu YetiForce (niezalecane)

#### W przypadku braku CRON na serwerze Linux

Jeżeli używany serwer Linux nie obsługuje mechanizmu CRON, alternatywnie zadania harmonogramu można uruchamiać poprzez adres URL.

```text
https://`YETIFORCE_URL`/cron.php?app_key=xxxx
```

#### W przypadku problemów z wyzwalaniem CRON z CLI

Jeżeli serwer Linux obsługuje CRON, ale występuje problem z działaniem skryptu `cron.sh`, to w CRONTAB można dodać jedną z poniższych przykładowych konfiguracji wywołań:

```bash
*/2 * * * * curl -s https://YETIFORCE_URL/cron.php?app_key=xxxx
```

lub

```bash
*/2 * * * * /usr/bin/lynx -source https://YETIFORCE_URL/cron.php?app_key=xxxx
```

lub

```bash
*/2 * * * * /usr/bin/wget -O - -q -t 1 https://YETIFORCE_URL/cron.php?app_key=xxxx
```

`app_key` to klucz znajdujący się w pliku `config/Main.php` w zmiennej `$application_unique_key`.

![cron](cron-5.png)
