---
title: Cleaner
description: Opis czyszczenia tymczasowych danych w systemie YetiForce za pomocą CLI
keywords:
  - Cleaner
  - CLI
  - YetiForce
tags:
  - YFCLI
  - CLI
  - Console
preview: Cleaner.png
---

![Cleaner CLI](Cleaner.png)

### Delete all logs

```bash
php cli.php -m Cleaner -a logs
```

![Cleaner CLI](Cleaner-logs.png)

### Delete all sessions

```bash
php cli.php -m Cleaner -a session
```

### Cache data

```bash
php cli.php -m Cleaner -a cacheData
```

### Cache files

```bash
php cli.php -m Cleaner -a cacheFiles
```
