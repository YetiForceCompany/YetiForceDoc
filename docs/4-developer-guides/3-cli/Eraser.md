---
title: Usuwanie danych | Eraser data
description: Opis usuwania danych w systemie YetiForce za pomocą CLI
keywords:
  - Eraser
  - CLI
  - YetiForce
tags:
  - YF CLI
  - CLI
  - Konsola
preview: Eraser-0.jpg
---

Moduł `Usuwanie danych` dostępny od wersji `6.4.146`

![Eraser CLI](Eraser-0.jpg)

### ModTracker - Delete the history of non-existent entries

```bash
php cli.php -m Eraser -a mtNonExist
```

![Eraser CLI](Eraser-1.jpg)

### ModTracker - Delete all entries

```bash
php cli.php -m Eraser -a mtAll
```

![Eraser CLI](Eraser-1.jpg)

### User data - Delete all entries

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
