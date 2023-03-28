---
title: Reset hasła użytkownika bez dostępu do systemu YetiForce
description: Jak zresetować hasło użytkownika systemu YetiForce bez dostępu do aplikacji.
keywords:
  - reset
  - hasła
  - użytkownika
  - YetiForce
tags:
  - reset
  - hasła
  - użytkownika
---

Jak można szybko zresetować dostęp do dowolnego użytkownika systemu YetiForce bez dostępu przez przeglądarkę?

Jak szybko zresetować wszystkie hasła użytkowników?

Istnieje kilka sposobów na szybki reset hasła, poniżej pokażemy te najprostsze i najszybsze.

## 1. Reset hasła za pomocą skryptu PHP (dostępne od wersji `4.3`)

## 1.1 Pobieramy skrypt

Skrypt do resetu hasła pobieramy z repozytorium https://github.com/YetiForceCompany/YetiForceScripts/tree/master/PasswordReset

W zależności od metody wywołania wgrywamy do odpowiedniego katalogu. W poniższym przykładzie katalog główny systemu znajduje się w katalogu `/home/yfprod/html/`

```bash
wget -O /home/yfprod/html/PasswordReset.php https://raw.githubusercontent.com/YetiForceCompany/YetiForceScripts/master/PasswordReset/PasswordReset.php
```

Skrypt musi być na tych samych uprawnianiach (właściciel) co pliki systemu YetiForce, w pokazanym przykładzie to jest `yfprod`.

```bash
chown yfprod:yfprod /home/yfprod/html/PasswordReset.php
```

## 1.2 Wprowadzamy dane użytkownika

W pliku ustawiamy ID użytkownika lub jego nazwę oraz hasło na jakie ma być zmienione hasło (hasło powinno być zgodne z obowiązującymi wytycznymi).

Jeśli nie wprowadzimy hasła system wygeneruje je automatycznie.

```php
$userId = 1;
$userName = ''; //Nazwa użytkownika, opcjonalnie
$password = ''; //Hasło, opcjonalnie
```

## 1.3 Uruchamiamy skrypt

Jeśli uruchamiamy skrypt przez przeglądarkę, to plik należy wgrać do katalogu public (jeśli web root jest ustawiony na ten katalog) i uruchomić adres systemu plus nazwa skryptu np. https://gitdeveloper.yetiforce.com/PasswordReset.php

Jeśli uruchamiamy skrypt z poziomu CLI, to skrypt wgrywamy do katalogu głównego i uruchamiamy plik.

```bash
php /home/yfprod/html/PasswordReset.php
```

## 1.4 Podsumowanie

Gdy zostanie prawidłowo zmienione hasło skrypt wyświetli dane użytkownika oraz nowe hasło.

```
Login: admin27038
Password: APcbCr4Bef
Full name: Administrator Yeti
```

Gdy wystąpi błąd system pokaże komunikat błędu np.

```
App\Exceptions\Security: Minimum password length 8 characters in /home/yfprod/html/modules/Vtiger/uitypes/Password.php:21
Stack trace:
#0 /home/yfprod/html/modules/Users/models/Record.php(233): Vtiger_Password_UIType->validate()
#1 /home/yfprod/html/modules/Users/models/Record.php(188): Users_Record_Model->getValuesForSave()
#2 /home/yfprod/html/modules/Users/models/Record.php(169): Users_Record_Model->saveToDb()
#3 /home/yfprod/html/PasswordReset.php(43): Users_Record_Model->save()
#4 {main}
Login: admin27038
Password: xxx
Full name: Administrator Yeti
```

## 2. Reset hasła za pomocą YetiForce CLI (dostępne od wersji `6.2`)

Inną metodą zmiany resetu hasła jest YetiForce CLI.

## 2.1 Generowanie nowego hasła

Pełny opis znajduje się w artykule [YetiForce CLI](/developer-guides/cli/Users#reset-user-password)

```bash
php cli.php -m Users -a resetPassword -l guest -c
```

## 2.2 Hasło jako parametr

```bash
php cli.php -m Users -a resetPassword -l guest -p p@ssw0rD
```

## 2. Reset hasła wszystkich użytkowników za pomocą YetiForce CLI (dostępne od wersji `6.2`)

Jest możliwość zresetowania danych dostępowych wszystkim użytkownikom i wysłanie nowego hasła na adresy mail użytkowników za pomocą jednego polecenia. Pełny opis znajduje się w artykule [YetiForce CLI](/developer-guides/cli/Users#reset-all-user-passwords)

```bash
php cli.php -m Users -a resetAllPasswords
```
