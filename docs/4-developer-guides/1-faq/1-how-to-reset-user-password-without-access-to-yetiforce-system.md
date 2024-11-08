---
title: Jak zresetować hasło użytkownika bez dostępu do systemu YetiForce
description: Jak zresetować hasło użytkownika bez dostępu do aplikacji.
keywords:
  - reset
  - hasło
  - użytkownik
  - YetiForce
tags:
  - reset
  - hasło
  - użytkownik
---

Ten artykuł opisuje, jak szybko zresetować dostęp dla dowolnego użytkownika systemu YetiForce bez dostępu do przeglądarki i jak zresetować wszystkie hasła użytkowników.

## 1. Resetowanie hasła przy użyciu skryptu PHP (dostępne w wersji `4.3` i późniejszych)

## 1.1 Pobierz skrypt

**Pobierz skrypt resetowania hasła z [repozytorium](https://github.com/YetiForceCompany/YetiForceScripts/tree/master/PasswordReset).**

W zależności od metody wywołania wgraj skrypt do odpowiedniego katalogu. W poniższym przykładzie pliki systemu znajdują się w katalogu `"/home/yfprod/html/"`

```bash
wget -O /home/yfprod/html/PasswordReset.php https://raw.githubusercontent.com/YetiForceCompany/YetiForceScripts/master/PasswordReset/PasswordReset.php
```

Skrypt musi być na tych samych uprawnianiach (właściciel) co pliki systemu, w pokazanym przykładzie to jest `"yfprod"`.

```bash
chown yfprod:yfprod /home/yfprod/html/PasswordReset.php
```

## 1.2 Wprowadź dane użytkownika

W pliku ustaw ID użytkownika lub jego nazwę oraz nowe hasło (hasło powinno być zgodne z obowiązującą w firmie polityką bezpiecznych haseł).

Jeśli nie wprowadzisz hasła, system wygeneruje je automatycznie.

```php
$userId = 1;
$userName = ''; //Nazwa użytkownika, opcjonalnie
$password = ''; //Hasło, opcjonalnie
```

## 1.3 Uruchom skrypt

Jeśli uruchomisz skrypt przez przeglądarkę, wgraj plik do katalogu publicznego (jeśli webroot jest ustawiony na ten katalog) i uruchom adres CRM oraz nazwę skryptu, np. https://demo.yetiforce.com/PasswordReset.php

Jeśli uruchomisz skrypt z poziomu CLI, wgraj skrypt do katalogu głównego i uruchom plik.

```bash
php /home/yfprod/html/PasswordReset.php
```

## 1.4 Podsumowanie

Gdy hasło zostanie poprawnie zmienione, skrypt wyświetli dane użytkownika i nowe hasło.

```
Login: admin27038
Password: APcbCr4Bef
Full name: Administrator Yeti
```

Jeśli wystąpił błąd, system wyświetli komunikat o błędzie, np.:

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

## 2. Resetowanie hasła przy użyciu YetiForce CLI (dostępne w wersji `6.2` i późniejszych)

YetiForce CLI jest alternatywną metodą resetowania hasła w systemie.

## 2.1 Wygeneruj nowe hasło

Pełny opis można znaleźć w [YetiForce CLI](/developer-guides/cli/Users#reset-user-password)

```bash
php cli.php -m Users -a resetPassword -l guest -c
```

## 2.2 Hasło jako parametr

```bash
php cli.php -m Users -a resetPassword -l guest -p p@ssw0rD
```

## 2. Zresetuj hasła wszystkich użytkowników używając YetiForce CLI (dostępne w wersji `6.2` i późniejszych)

Jest możliwość zresetowania danych dostępowych wszystkim użytkownikom i wysłania nowego hasła na adresy mail użytkowników za pomocą jednego polecenia. Pełny opis można znaleźć w [YetiForce CLI](/developer-guides/cli/Users#reset-all-user-passwords)

```bash
php cli.php -m Users -a resetAllPasswords
```
