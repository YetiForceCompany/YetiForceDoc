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

- More information about registration can be found in the [How to register YetiForce?](/administrator-guides/company/company-details/#how-to-register-yetiforce) manual.
- In case of problems with registration you can find help in the [Problems with registration guide](/administrator-guides/company/problems-with-system-registration/).

## Check if YetiForce is up to date and fully patched.

Updates fix issues reported by the community and our employees that's why it's crucial to keep your system up to date.

- More information about the update process can be found in the [System update](/administrator-guides/logs/updates/) article.
- A complete list of patches can be found in the [Releases](https://github.com/YetiForceCompany/YetiForceCRM/releases) tab in our GitHub repository.

## Check server configuration.

Misconfiguration of the server impacts the whole system and can lead to a variety of unpredictable problems, including issues with obtaining information about active subscriptions and purchases.

:::important

More information about server requirements and configuration can be found in the following articles: [YetiForce requirements](/introduction/requirements/) and [Server - configuration](/administrator-guides/logs/server-configuration).

:::

## Enable logs

Enable PHP, system, and web server logs and make sure the communication with yetiforce.com server is working. It's important to enable PHP logs so that the system can record error messages.

:::important

More information can be found in the [Debugging](/developer-guides/debug) guide.

:::

## Contact YetiForce support and provide logs

If your issues persist you can contact us by sending an email and providing **all the information below**:

- [APP ID](/administrator-guides/app-id/)
- system version
- full logs according to the [Debugging](/developer-guides/debug) article
- attach [server configuration report](/administrator-guides/logs/server-configuration/#download-configuration)
- screenshot of products purchased from Marketplace
- screenshot of [installed updates](/administrator-guides/logs/updates/#activities-during-the-update)

We recommend using encryption (PGP/GPG) to send us your credentials. The list of all required information can be found in the [Access data to the YetiForce CRM system article.](/developer-guides/github/access-data-to-YetiForce-system) ](/developer-guides/github/access-data-to-YetiForce-system) ](/developer-guides/github/access-data-to-YetiForce-system)
