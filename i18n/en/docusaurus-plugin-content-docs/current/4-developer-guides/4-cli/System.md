---
title: System
description: Description of the YetiForce system management functions via CLI
keywords:
  - System
  - CLI
  - YetiForce
tags:
  - YFCLI
  - CLI
  - Console
preview: System.png
---

![System CLI](System.png)

### History of uploaded updates

```bash
php cli.php -m System -a history
```

### Update

```bash
php cli.php -m System -a update
```

Wgranie wszystkich dostępnych łatek (SecurityFix lub ServicePack)

```bash
php cli.php -m System -a update -t patches
```

![System CLI](System-1.png)

Aktualizacja systemu do kolejnej stabilnej wersji

```bash
php cli.php -m System -a update -t version
```

![System CLI](System-2.png)

### Check registration status

```bash
php cli.php -m System -a checkRegStatus
```

### Delete registration data

```bash
php cli.php -m System -a deleteRegistration
```

### Show active products

```bash
php cli.php -m System -a showProducts
```

### Reload modules

```bash
php cli.php -m System -a reloadModule
```

### Reload users privileges

```bash
php cli.php -m System -a reloadUserPrivileges
```
