---
title: Usuwanie danych
description: Opis usuwania danych w systemie YetiForce za pomocą CLI
keywords:
  - Wyczyść
  - CLI
  - YetiForce
tags:
  - YFCLI
  - CLI
  - Konsola
preview: Eraser-0.jpg
---

::tip Ta funkcja jest dostępna dla YetiForce w wersji `6.4.146` i później  
:::

![Eraser CLI](Eraser-0.jpg)

### Śledzenie zmian - Usuń historię nieistniejących wpisów

```bash
php cli.php -m Eraser -a mtNonExist
```

![Eraser CLI](Eraser-1.jpg)

### Śledzenie zmian - Usuń wszystkie wpisy

```bash
php cli.php -m Eraser -a mtAll
```

![Eraser CLI](Eraser-1.jpg)

### Dane użytkownika - Usuń wszystkie wpisy

Mechanizm usuwa dane z wszystkich modułów z pominięciem poniższych:

- MultiCompany
- OSSEmployees
- BankAccounts
- EmailTemplates
- SMSTemplates
- IStorages
- MailAccount

```bash
php cli.php -m Eraser -a userEntries
```

![Eraser CLI](Eraser-2.jpg)
