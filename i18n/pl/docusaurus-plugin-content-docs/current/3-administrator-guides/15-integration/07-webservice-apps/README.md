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

Dokumentacja dostępnych metod i możliwości API znajduje się w artykule [Developer documentation → API → Webservice standard](/developer-guides/api/WebserviceStandard)

![WebserviceStandard.jpg](WebserviceStandard.jpg)

### Dane dostępowe

Dostęp do usługi `Webservice Standard` wymaga utworzenia aplikacji z nazwą użytkownika i hasłem, które jest wymagane do komunikacji z API.

![WebserviceStandard-login-pass.jpg](WebserviceStandard-login-pass.jpg)

Nazwa i hasło musi być umieszczona w nagłówku uwierzytelniania podstawowego (`Authorization: Basic`) dla całej komunikacji z API.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

:::tip

Przykład generowania nagłówka `Authorization: Basic`

```php
 base64_encode($name . ':' . $password)
```

:::

Kolejnym elementem bezpieczeństwa wymaganym do działa API jest umieszczenie klucza API w nagłówku `X-API-KEY` dla całej komunikacji z API.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
X-API-KEY: VMUwRByXHSq1bLW485ikfvcC97P6gJs2
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

Klucz jest generowany po utworzeniu aplikacji i można go skopiować za pomocą przycisku <span class="fas fa-copy u-cursor-pointer"></span> kopiującego klucz do schowka.

![WebserviceStandard-api-key.jpg](WebserviceStandard-api-key.jpg)

### Authentication

Powyższe klucze są unikalne dla danej aplikacji która się łączy z systemem YetiForce. Aby było możliwe pobieranie i wysyłane danych trzeba określić poziom uprawnień z jakimi będzie działać API. W tym celu została utworzona metoda [Users/Login](/developer-guides/api/WebserviceStandard#tag/Users/operation/1ac849ff510b6b65243b46ffb9e48a9b) która umożliwia autoryzację i utworzenie sesji. Dzięki temu będzie można wywoływać metody które wymagają odpowiedniego poziomu uprawnień do wykonania danej operacji.

Zarządzanie danymi dostępowymi jest opisane w panelu [Administrator documentation → Integration → Web service - Users](/administrator-guides/integration/webservice-users/).

Token autoryzacyjny należy umieścić w nagłówku `X-TOKEN` dla całej komunikacji z API.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
X-TOKEN: 64e56d9eaff876342e61055e338e10dc844634de5aaea6901b7c005c7c5fc6d0
X-API-KEY: VMUwRByXHSq1bLW485ikfvcC97P6gJs2
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

### YetiForce RestApi SDK

Zostało utworzone podstawowe SDK dla komunikacji z YetiForce RestApi, kod można znaleźć na github pod adresem https://github.com/YetiForceCompany/YetiForceScripts/tree/master/YetiREST

Przykładowy skrypt pokazujący wywołanie kluczowych metod API.

```php reference
https://github.com/YetiForceCompany/YetiForceScripts/blob/master/YetiREST/index.php#L34-L68
```
