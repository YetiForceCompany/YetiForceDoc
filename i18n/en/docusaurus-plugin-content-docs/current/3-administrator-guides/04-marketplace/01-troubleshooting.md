---
title: Troubleshooting inactive and malfunctioning addons
description: The article below explains troubleshooting inactive or malfunctioning addons purchased in the Marketplace.
keywords:
  - YetiForce
  - Troubleshooting
  - add-ons
  - inactive
  - purchased
tags:
  - Troubleshooting
---

The article below explains troubleshooting inactive or malfunctioning addons purchased in the Marketplace.

## Update the registration status

YetiForce must be correctly registered in order for the Marketplace and purchased addons to work properly. Jeśli mimo prawidłowej rejestracji Twój system nadal oczekuje na akceptację, możesz odświeżyć jej status klikając na przycisk `Sprawdź status` w panelu [`Konfiguracja systemu → Firma → Dane firmy`](/administrator-guides/company/company-details/#sprawdź-status).

- Więcej informacji o rejestracji systemu znajdziesz w poradniku: [ Jak zarejestrować YetiForce](/administrator-guides/company/company-details/#jak-zarejestrować-yetiforce).
- In case of problems with registration you can find help in the [Problems with registration guide](/administrator-guides/company/problems-with-system-registration/).

## Check if YetiForce is up to date and fully patched.

Updates fix issues reported by the community and our employees that's why it's crucial to keep your system up to date.

- More information about the update process can be found in the [System update](/administrator-guides/logs/updates/) article.
- A complete list of patches can be found in the [Releases](https://github.com/YetiForceCompany/YetiForceCRM/releases) tab in our GitHub repository.

## Check server configuration.

Błędna konfiguracja serwera ma wpływ na działanie całego systemu. Nieprawidłowości w konfiguracji mogą powodować wiele różnych problemów, między innymi problemy z pobraniem informacji o aktualnych subskrypcjach.

:::important

More information about server requirements and configuration can be found in the following articles: [YetiForce requirements](/introduction/requirements/) and [Server - configuration](/administrator-guides/logs/server-configuration).

:::

## Włącz logi

Enable PHP, system, and web server logs and make sure the communication with yetiforce.com server is working. It's important to enable PHP logs so that the system can record error messages.

:::important

More information can be found in the [Debugging](/developer-guides/debug) guide.

:::

## Contact YetiForce support and provide logs

If your issues persist you can contact us by sending an email and providing **all the information below**:

- [APP ID](/administrator-guides/app-id/)
- system version
- full logs according to the [Debugging](/developer-guides/debug) article
- załącz [raport konfiguracji serwera](/administrator-guides/logs/server-configuration/#pobierz-konfigurację)
- screenshot of products purchased from Marketplace
- załącz zrzut ekranu [wgranych aktualizacji](/administrator-guides/logs/updates/#czynności-podczas-aktualizacji)

We recommend using encryption (PGP/GPG) to send us your credentials. The list of all required information can be found in the [Access data to the YetiForce CRM system article.](/developer-guides/github/access-data-to-YetiForce-system) ](/developer-guides/github/access-data-to-YetiForce-system) ](/developer-guides/github/access-data-to-YetiForce-system)
