---
title: Web service - Applications
description: Web service - Applications
keywords:
  - YetiForce
  - System
  - Web service
  - Webservice
  - REST
  - API
  - Webservice Standard
tags:
  - Webservice
  - API
  - REST
  - Webservice Standard
preview: webservice-apps-1.jpg
---

![webservice-apps-1.jpg](webservice-apps-1.jpg)

## Webservice Standard

Documentation of available methods and API capabilities can be found in the following article: [Developer documentation → API → Webservice standard](/developer-guides/api/WebserviceStandard)

![WebserviceStandard.jpg](WebserviceStandard.jpg)

### Credentials

Access to the `Webservice Standard` service requires creating an application with a username and password, necessary to communicate with the API.

![WebserviceStandard-login-pass.jpg](WebserviceStandard-login-pass.jpg)

The username and password must be placed in the header of the basic authentication (`Authorization: Basic`) for the entire API communication.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

:::tip

Header generation example - `Authorization: Basic`

```php
 base64_encode($name . ':' . $password)
```

:::

The next security measure required for the API to work is placing the API key in the `X-API-KEY` header for the entire API communication.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
X-API-KEY: VMUwRByXHSq1bLW485ikfvcC97P6gJs2
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

The key is generated after the application is created, and it can be copied to the clipboard by clicking the <kbd><span class="fas fa-copy u-cursor-pointer"></span></kbd> button.

![WebserviceStandard-api-key.jpg](WebserviceStandard-api-key.jpg)

### Authentication

The keys are unique for each application that connects to the YetiForce system. In order to be able to download and send data, you need to specify the level of permissions for the API. For this purpose, the [Users/Login](/6.4.0/developer-guides/api/WebserviceStandard#tag/Users/operation/1ac849ff510b6b65243b46ffb9e48a9b) method was created, which allows authorization and creation of a session. This allows you to call methods that require a certain level of permissions to perform operations.

A description of credential management can be found here: [Administrator documentation → Integration → Web service - Users](/administrator-guides/integration/webservice-users/).

The authorization token should be placed in the `X-TOKEN` header for the entire API communication.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
X-TOKEN: 64e56d9eaff876342e61055e338e10dc844634de5aaea6901b7c005c7c5fc6d0
X-API-KEY: VMUwRByXHSq1bLW485ikfvcC97P6gJs2
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

### YetiForce RestApi SDK

Basic SDK has been created for communication with YetiForce RestAPI, the code can be found in our GitHub repository: https://github.com/YetiForceCompany/YetiForceScripts/tree/master/YetiREST

An example script showing how to call key API methods:

```php reference
https://github.com/YetiForceCompany/YetiForceScripts/blob/master/YetiREST/index.php#L34-L68
```
