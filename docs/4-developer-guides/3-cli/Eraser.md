---
title: Data Eraser
description: Description of how to remove data from YetiForce using CLI
keywords:
  - Eraser
  - CLI
  - YetiForce
tags:
  - YFCLI
  - CLI
  - Console
preview: Eraser-0.jpg
---

The `Data Eraser` module is available from version `6.4.146`

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

The mechanism removes data from all the modules, excluding:

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
