---
title: Kontrola dostępu do systemu
description: Ograniczenie dostępu do danych jest kluczowe z perspektywy organizacji
keywords:
  - kontrola
  - dostępu
  - rekordów
  - YetiForce
tags:
  - kontrola
  - dostępu
  - rekordów
---

W systemie YetiForce organizację najczęściej przechowują wrażliwe i poufne dane dotyczące klientów oraz dotyczące własnej organizacji. Bezpieczny dostęp do aplikacji jest kluczowy z perspektywy bezpieczeństwa, dlatego sprawdź w jaki sposób zadbaliśmy o bezpieczeństwo.

## Logika bezpieczeństwa dostępu do systemu

### Uwierzytelnianie standardowe

Uwierzytelnianie standardowe polega na wprowadzeniu przez użytkownika loginu [identyfikacja] i hasła, w celu upewnienia się przez system, czy użytkownik o podanym loginie i haśle powinien zostać uwierzytelniony. Jeżeli dane są poprawne, zostanie zalogowany do systemu .

### Uwierzytelnienie 2FA

Jeżeli użytkownik ma aktywowane uwierzytelnienie 2FA, wówczas po uwierzytelnieniu standardowym a przed zalogowaniem się do systemu pojawi się drugie okno, w którym należy wprowadzić wygenerowany kod z aplikacji lub urządzenia 2FA. Nieprowadzenie kodu spowoduje, że użytkownik nie zostanie poprawnie zalogowany.

### Uwierzytelnianie LDAP

Użytkownik może mieć określone logowanie za pomocą usługi LDAP, wówczas uwierzytelnianie nie odbywa się w systemie YetiForce lecz w usłudze zewnętrznej LDAP, która zwraca wynik uwierzytelnienia w postaci true/false. Jeżeli użytkownik zostanie poprawnie uwierzytelniony a jego login zgadza się z loginem w systemie YetiForce [identyfikacja], wówczas zostanie on również uwierzytelniony w aplikacji.

### Uwierzytelnienia niestandardowe

System pozwala na wykorzystanie innych metod uwierzytelnienia standardowego lub dodatkowego np. w postaci urządzeń fizycznych Yubikey. Niestety niektóre mechanizmy wymagają integracji z infrastrukturą firmy [np. wysyłanie sms-ów, wewnętrzna aplikacja do kodów jednorazowych] a więc są to opcje dodatkowo płatne.

### Autoryzacja

Po poprawnej identyfikacji oraz uwierzytelnieniu, system automatycznie weryfikuje funkcjonalności i dane do których ma uprawnienia uwierzytelniony użytkownik. W zależności od uprawnień każdy uwierzytelniony użytkownik może widzieć inne funkcjonalności systemu [każdy element systemu może być określony dla użytkownika np. każdy użytkownik może widzieć inne menu, inne funkcjonalności oraz inne dane].

## Mechanizmy zabezpieczające

### Unikalność identyfikatorów

W systemie YetiForce w tablicy z użytkownikami są dwa identyfikatory, pierwszym identyfikatorem jest `id` czyli unikalny identyfikator numeryczny, który dla każdego użytkownika tworzy unikalną wartość a już raz przydzielona wartość nie może zostać w przyszłości przydzielona do innego użytkownika. Drugim unikalnym identyfikatorem jest login, którym posługuje się użytkownik do logowania. System posiada zabezpieczenie, które nie pozwoli na przydzielenie wcześniej istniejącego loginu nowemu użytkownikowi.

Unikalność identyfikatorów pozwala na weryfikację działań poszczególnych użytkowników nawet wówczas, gdy zostali oni usunięci z systemu i przeciwdziała pomyłkom identyfikacyjnym.

### Niezależność identyfikatoru od uprawnień w aplikacji

Identyfikator w żaden sposób nie określa uprawnień w aplikacji, ponieważ są one nadawane niezależnie. Nawet jeżeli użytkownik posiada w nazwie słowo "administrator" albo został przydzielony do roli "administrator" nie oznacza to jakichkolwiek uprawnień administracyjnych.

### Blokowanie i usuwanie użytkownika

System pozwala na szybkie blokowanie użytkownika poprzez zmianę statusu na użytkowniku z aktywnego na nieaktywny. Dodatkowo usunięcie użytkownika w systemie powoduje, że użytkownik przestanie istnieć w bazie użytkowników, ale jego identyfikator systemowy `id` oraz login pozostaną w systemie i nie będą mógłby zostać użyte dla nowych użytkowników.

Jeżeli w systemie istnieje profil ograniczony [który zmniejsza to do czego użytkownik ma dostęp] wówczas można w szybki sposób zmieniając rolę, przypisać użytkownikowi inny [ograniczony] dostęp do danych i funkcjonalności.

### Wielokrotne nieudane logowanie

W systemie jest dostępne narzędzie, które pozwala na wykrywanie nieudanych logowań użytkowników oraz ich blokowanie na określony czas, jeżeli przekroczą póle niedozwolonych logowań. Dodatkowo jeżeli w aplikacji zdefiniowano powiadomienia mailowe, wówczas administrator otrzyma powiadomienie o każdej blokadzie. Domyślnie system blokuje IP na 15 minut po wykoniu 10 nieudanych próbach. Parametry te można modyfikować w panelu administracyjnym.

### Ukrywanie nieistniejących użytkowników

System został tak zaprojektowany, aby w przypadku logowania na użytkownika który istnieje w aplikacji oraz użytkownika który nie istnieje czas odpowiedzi był taki sam. Dzięki takiemu zabezpieczeniu, nie jest możliwe wykrycie, czy login użytkownik jest używany w systemie.
