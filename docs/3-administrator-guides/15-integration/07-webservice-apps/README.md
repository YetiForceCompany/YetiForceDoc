---
title: Webservice - Aplikacje
description: Webservice - Aplikacje
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

Dokumentacja dostępnych metod i możliwości API można znaleźć w następującym artykule: [Dokumentacja programisty→ API → Webservice standard](/developer-guides/api/WebserviceStandard)

![WebserviceStandard.jpg](WebserviceStandard.jpg)

### Dane dostępowe

Dostęp do usługi `Webservice Standard` wymaga utworzenia aplikacji z nazwą użytkownika i hasłem, niezbędnych do komunikacji z API.

![WebserviceStandard-login-pass.jpg](WebserviceStandard-login-pass.jpg)

Nazwa użytkownika i hasło muszą być umieszczone w nagłówku podstawowego uwierzytelniania (`Authorization: Basic`) dla całej komunikacji API.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

:::tip

Przykład generowania nagłówka - `Authorization: Basic`

```php
 base64_encode($name . ':' . $password)
```

:::

Następnym zabezpieczeniem wymaganym do prawidłowego działania API jest umieszczenie klucza API w nagłówku `X-API-KEY` dla całej komunikacji API.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
X-API-KEY: VMUwRByXHSq1bLW485ikfvcC97P6gJs2
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

Klucz generowany jest po utworzeniu aplikacji i można go skopiować do schowka klikając przycisk <kbd><span class="fas fa-copy u-cursor-pointer"></span></kbd>.

![WebserviceStandard-api-key.jpg](WebserviceStandard-api-key.jpg)

### Uwierzytelnianie

Klucze są unikalne dla każdej aplikacji, która łączy się z systemem YetiForce. Aby móc pobierać i wysyłać dane, musisz określić poziom uprawnień dla API. W tym celu utworzono metodę [Users/Login](/developer-guides/api/WebserviceStandard#tag/Users/operation/1ac849ff510b6b65243b46ffb9e48a9b), która pozwala na autoryzację i tworzenie sesji. Umożliwia to wywoływanie metod, które wymagają określonego poziomu uprawnień do wykonywania operacji.

Opis zarządzania danymi dostępowymi znajduje się tutaj: [Dokumentacja Administratora → Integracja → Webservice - Użytkownicy](/administrator-guides/integration/webservice-users/).

Token autoryzacji powinien być umieszczony w nagłówku `X-TOKEN` dla całej komunikacji API.

```http
POST /webservice/WebservicePremium/Users/Login HTTP/1.1
X-TOKEN: 64e56d9eaff876342e61055e338e10dc844634de5aaea6901b7c005c7c5fc6d0
X-API-KEY: VMUwRByXHSq1bLW485ikfvcC97P6gJs2
Authorization: Basic cGFydG5lcjpwYXJ0bmVy
```

### YetiForce RestApi SDK

Podstawowy SDK został utworzony do komunikacji z YetiForce RestAPI, kod można znaleźć w naszym repozytorium GitHub: https://github.com/YetiForceCompany/YetiForceScripts/tree/master/YetiREST

Przykładowy skrypt pokazujący sposób wywoływania kluczowych metod API:

```php reference
https://github.com/YetiForceCompany/YetiForceScripts/blob/master/YetiREST/index.php#L34-L68
```
