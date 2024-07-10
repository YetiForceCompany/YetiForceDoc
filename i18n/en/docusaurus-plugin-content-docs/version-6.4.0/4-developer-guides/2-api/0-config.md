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

Aby określić jakiego rodzaju usługi będą aktywne nalezy dodać aplikacje o odpowiednim typie.

W panelu administracyjnym [Web service - Applications](/6.4.0/administrator-guides/integration/webservice-apps/) nalezy dodać usługi z których chcemy korzystać.

## Konfiguracja żywotność sesji

[config/Security.php](https://doc.yetiforce.com/code/classes/Config-Security.html#property_apiLifetimeSessionCreate)

```php
/** Maximum session lifetime from the time it was created (in minutes) */
public static $apiLifetimeSessionCreate = 1440;

/** Maximum session lifetime since the last modification (in minutes) */
public static $apiLifetimeSessionUpdate = 240;
```
