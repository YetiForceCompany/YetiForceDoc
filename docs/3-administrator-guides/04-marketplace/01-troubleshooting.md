---
title: Rozwiązywanie problemów z nieaktywnymi lub niedziałającymi dodatkami
description: Poniższy artykuł wyjaśnia rozwiązywanie problemów nieaktywnych lub nieprawidłowo działających dodatków zakupionych w Marketplace.
keywords:
  - YetiForce
  - Rozwiązywanie problemów
  - dodatki
  - nieaktywne
  - zakupione
tags:
  - Rozwiązywanie problemów
---

Poniższy artykuł opisuje proces rozwiązywania problemów w przypadku, gdy zakupiony w Marketplace dodatek nie jest aktywny lub nie działa prawidłowo.

## Zaktualizuj status rejestracji

Do prawidłowego działania sklepu oraz zakupionych w nim dodatków konieczne jest poprawne zarejestrowanie systemu YetiForce CRM. Jeśli mimo prawidłowej rejestracji Twój system nadal oczekuje na akceptację, możesz odświeżyć jej status klikając na przycisk `Sprawdź status` w panelu [`Konfiguracja systemu → Firma → Dane firmy`](/administrator-guides/company/company-details/#sprawdź-status).

- Więcej informacji o rejestracji systemu znajdziesz w poradniku: [ Jak zarejestrować YetiForce](/administrator-guides/company/company-details/#jak-zarejestrować-yetiforce).
- W przypadku problemów z rejestracją pomoc znajdziesz w poradniku: [ Problem z rejestracją systemu](/administrator-guides/company/problems-with-system-registration/).

## Sprawdź, czy masz najnowszą wersję YetiForce oraz wszystkie poprawki

Aktualizacje naprawiają błędy zgłoszone przez naszą społeczność oraz naszych pracowników, dlatego ważne jest aktualizowanie systemu na bieżąco.

- Więcej informacji o procesie aktualizacji YetiForce znajdziesz w artykule [Aktualizacja systemu](/administrator-guides/logs/updates/).
- Listę poprawek możesz znaleźć na naszym repozytorium GitHub w zakładce [Releases](https://github.com/YetiForceCompany/YetiForceCRM/releases).

## Sprawdź konfigurację serwera.

Błędna konfiguracja serwera ma wpływ na działanie całego systemu. Nieprawidłowości w konfiguracji mogą powodować wiele różnych problemów, między innymi problemy z pobraniem informacji o aktualnych subskrypcjach.

:::important

Więcej informacji o konfiguracji serwera znajdziesz w artykułach: [Wymagania YetiForce dla serwera](/introduction/requirements/) i [Logi - serwer - konfiguracja](/administrator-guides/logs/server-configuration).

:::

## Włącz logi

Uruchom logi PHP, systemu YetiForce, oraz serwera i sprawdź, czy działa komunikacja z serwerem yetiforce.com. Ważne jest, aby włączyć logi PHP, aby system mógł rejestrować komunikaty o błędach.

:::important

Więcej informacji o logach znajdziesz w artykule [Debugowanie](/developer-guides/debug).

:::

## Skontaktuj się z pomocą techniczną YetiForce i prześlij logi

Jeśli mimo wykonania powyższych kroków nadal występują problemy z dodatkami możesz napisać do nas wiadomość email na adres sla@yetiforce.com i **prześlij wszystkie poniższe informacje**:

- [APP ID](/administrator-guides/app-id/)
- wersja systemu
- pełne logi, zgodnie z artykułem [Debugowanie](/developer-guides/debug)
- załącz [raport konfiguracji serwera](/administrator-guides/logs/server-configuration/#pobierz-konfigurację)
- załącz zrzut ekranu produktów zakupionych w Marketplace
- załącz zrzut ekranu [wgranych aktualizacji](/administrator-guides/logs/updates/#czynności-podczas-aktualizacji)

Zalecamy, aby dane dostępowe przesyłać szyfrowaną pocztą (PGP/GPG). Lista wymaganych danych znajduje się w artykule [Dane dostępowe do systemu YetiForce. ](/developer-guides/github/access-data-to-YetiForce-system)
