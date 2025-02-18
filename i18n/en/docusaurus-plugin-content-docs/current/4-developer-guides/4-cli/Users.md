---
title: Users
description: Description of the YetiForce system management functions via CLI
keywords:
  - Users
  - CLI
  - YetiForce
tags:
  - YFCLI
  - CLI
  - Console
preview: Users.png
---

![Users CLI](Users.jpg)

### Reset user password

```bash
php cli.php -m Users -a resetPassword
```

![Users CLI](Users-1.jpg)

Możliwe parametry

![Users CLI](Users-3.png)

### Disable 2FA or LDAP auth

```bash
php cli.php -m Users -a passwordAuth
```

![Users CLI](Users-2.jpg)

### Reset all user passwords

```bash
php cli.php -m Users -a resetAllPasswords
```

![Users CLI](Users-4.png)
