---
title: Jak zmienić domyślny widok modułu
description: Artykuł opisuje, w jaki sposób zmienić domyślny widok tylko dla jednego modułu w YetiForce CRM.
keywords:
  - domyślny
  - widok
  - modułu
  - YetiForce
tags:
  - domyślny
  - widok
  - modułu
preview: 2-how-to-change-default-module-view-1.jpg
---

Artykuł opisuje, w jaki sposób zmienić domyślny widok tylko dla jednego modułu w YetiForce CRM.

![2-how-to-change-default-module-view-1.jpg](2-how-to-change-default-module-view-1.jpg)

:::tip

Poniższy przykład dotyczy modułu Wydarzenia, ale można go zastosować do dowolnego modułu w YetiForce CRM.

Nazwę modułu można znaleźć w pasku adresu przeglądarki w paramerze `module`, gdy jesteśmy w danym module. Na przykład, jeśli adres URL zawiera `https://demo.yetiforce.com/index.php?module=Occurrences&view=List&mid=162&parent=52`, to nazwa modułu to `Occurrences`.

:::

## Jak zmienić domyślny widok modułu

Aby zmienić domyślny widok modułu, należy utworzyć plik konfiguracyjny w katalogu `config/Modules/__NAZWA_MODUŁU__.php` o nazwie odpowiadającej systemowej nazwie modułu, np. `config/Modules/Occurrences.php` dla modułu Wydarzenia.

W tym pliku należy zdefiniować statyczną właściwość `$defaultViewName`, która będzie zawierała nazwę domyślnego widoku, np.

```php
<?php

namespace Config\Modules;

class Occurrences
{
	public static $defaultViewName = 'Tiles';
}

```

## Lista dostępnych widoków

Aby sprawdzić, jakie widoki są dostępne w danym module, wystarczy wejść do widoku listy i kliknąć przycisk w lewym górnym rogu. W menu rozwijanym pojawi się lista dostępnych widoków, z których można wybrać interesujacy nas widok.

Następnie znaleźć w adresie URL parametr `view`, który będzie zawierał nazwę wybranego widoku. Na przykład, jeśli adres URL zawiera `https://demo.yetiforce.com/index.php?module=Occurrences&view=Tiles`, to nazwa widoku to `Tiles`.

![2-how-to-change-default-module-view-2.jpg](2-how-to-change-default-module-view-2.jpg)
