---
title: YetiForce CLI
description: Description of the CLI (Command Line Interface) to support custom YetiForce operations
keywords:
  - interface
  - console
  - problems
  - CLI
  - YF
  - YetiForce
tags:
  - YFCLI
  - CLI
  - Console
preview: Cli.jpg
---

:::tip This functionality is available for YetiForce version `6.2.0` and later
:::

Description of the CLI (Command Line Interface) to support custom YetiForce operations.

![Eraser CLI](Cli.jpg)

## How to launch YetiForce CLI

Always launch the console from the main YetiForce system catalogue, that is, where the cli.php file is located.

:::tip
YetiForce CLI must always be launched on the operating system user who owns the YetiForce system files.
:::

Possible commands depending on the environment:

```bash
php cli.php
/usr/local/php74/bin/php74 cli.php
sudo -u yfprod php cli.php
```

## Help

Help available after adding the `-h` argument

```bash
php cli.php -h
```

![Help CLI](Help.png)

## Available YFCLI modules

import DocCardList from '@theme/DocCardList';

<DocCardList />
