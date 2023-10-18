---
title: Configuration
description: How to properly configure the API in YetiForce
keywords:
  - Webservice
  - API
  - RestAPI
  - configuration
  - YetiForce
tags:
  - Webservice
  - API
  - Rest API
  - Configuration
---

## Aktywacja

W pliku [config/Api.php](https://doc.yetiforce.com/code/classes/Config-Api.html#property_enabledServices) należy ustawić aktywne usługi `$enabledServices`

```php
/** List of active services. Available: dav, webservice */
public static $enabledServices = ['webservice'];
```

## Utworzenie aplikacji API

W panelu administracyjnym [Web service - Applications](administrator-guides/integration/webservice-apps/) nalezy dodać usługi z których chcemy korzystać.

## Konfiguracja żywotność sesji
