---
title: System
description: Przewodnik po podstawowych komendach administracyjnych systemu YetiForce
keywords:
  - System
  - CLI
  - YetiForce
  - Zarządzanie
  - Administracja
  - Konsola
  - YFCLI
tags:
  - YFCLI
  - aktualizacja systemu
  - bezpieczeństwo
  - CLI
  - dokumentacja
  - komendy administracyjne
  - moduły
  - rejestracja systemu
  - uprawnienia użytkowników
  - zarządzanie systemem
categories:
  - administracja
  - aktualizacje
  - bezpieczeństwo
  - CLI
  - moduły
  - rejestracja
  - Systemy
  - uprawnienia użytkowników
  - zarządzanie systemem
preview: System.png
---

# Zarządzanie systemem YetiForce przez konsolę

Ten przewodnik opisuje podstawowe komendy konsolowe służące do zarządzania systemem YetiForce. Wszystkie operacje wykonywane są przez wiersz poleceń (CLI), co pozwala na szybkie i efektywne zarządzanie systemem.

![System CLI](System.png)

## Historia aktualizacji systemu

Aby sprawdzić historię wszystkich zainstalowanych aktualizacji, użyj komendy:

```bash
php cli.php -m System -a history
```

## Aktualizacja systemu

Dostępne są różne rodzaje aktualizacji systemu:

### Standardowa aktualizacja

Podstawowa komenda do aktualizacji systemu:

```bash
php cli.php -m System -a update
```

### Instalacja poprawek bezpieczeństwa

Ta komenda zainstaluje wszystkie dostępne łatki bezpieczeństwa (SecurityFix) oraz pakiety serwisowe (ServicePack):

```bash
php cli.php -m System -a update -t patches
```

![System CLI](System-1.png)

Aktualizacja systemu do kolejnej stabilnej wersji

```bash
php cli.php -m System -a update -t version
```

![System CLI](System-2.png)

## Zarządzanie rejestracją systemu

### Sprawdzanie statusu rejestracji

Sprawdź aktualny status rejestracji systemu:

```bash
php cli.php -m System -a checkRegStatus
```

### Usuwanie danych rejestracyjnych

W razie potrzeby zresetowania rejestracji systemu:

```bash
php cli.php -m System -a deleteRegistration
```

### Wyświetlanie aktywnych produktów

Zobacz listę wszystkich aktywnych produktów w systemie:

```bash
php cli.php -m System -a showProducts
```

## Odświeżanie komponentów systemu

### Przeładowanie modułów

Odśwież wszystkie moduły systemu (przydatne po wprowadzeniu zmian w konfiguracji):

```bash
php cli.php -m System -a reloadModule
```

### Aktualizacja uprawnień użytkowników

Zaktualizuj uprawnienia wszystkich użytkowników w systemie:

```bash
php cli.php -m System -a reloadUserPrivileges
```

### Odświeżanie menu

Przeładuj strukturę menu w systemie:

```bash
php cli.php -m System -a reloadMenus
```
