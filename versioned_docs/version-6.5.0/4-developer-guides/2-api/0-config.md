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

## Activation

Set active services `$enabledServices` in the [config/Api.php](https://doc.yetiforce.com/code/classes/Config-Api.html#property_enabledServices) file:

```php
/** List of active services. Available: dav, webservice */
public static $enabledServices = ['webservice'];
```

## Create an API app

To determine what kind of services are to be active, add applications of the relevant type.

Add the services you want to use in the [Web service - Applications](administrator-guides/integration/webservice-apps/) admin panel.

## Session lifetime configuration

[config/Security.php](https://doc.yetiforce.com/code/classes/Config-Security.html#property_apiLifetimeSessionCreate)

```php
/** Maximum session lifetime from the time it was created (in minutes) */
public static $apiLifetimeSessionCreate = 1440;

/** Maximum session lifetime since the last modification (in minutes) */
public static $apiLifetimeSessionUpdate = 240;
```
