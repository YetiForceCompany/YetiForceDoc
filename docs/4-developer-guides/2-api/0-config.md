---
title: Konfiguracja
description: Jak prawidłowo skonfigurować API w YetiForce
keywords:
  - Webservice
  - API
  - RestAPI
  - konfiguracja
tags:
  - Webservice
  - API
  - Rest API
  - Konfiguracja
preview: configuration-1.jpg
---

## Konfiguracja

W celu skonfigurowania połączenia API należy najpierw wygenerować klucz API oraz utworzyć użytkownika do autoryzacji.

### Generowanie klucza API

Pierwszym krokiem w celu podłączenia się do API jest wygenerowanie klucza API (`API Key`). W tym celu w sekcji administracyjnej należy wybrać z lewego menu `Integracja`, a następnie `Web service - aplikacje`.

![step 1](configuration-1.jpg)

W celu dodania nowego klucza API wybieramy `Dodaj klucz` w prawej górnej części ekranu.

![step 2](configuration-2.jpg)

Pojawi się okno dodawania nowego klucza API:

![step 3](configuration-3.jpg)

#### Nazwa

- dowolna nazwa ułatwiająca identyfikację tworzonego wpisu

#### Hasło

- ciąg znaków wykorzystywany do uwierzytelniania

#### Status

- odznaczenie pola wyboru spowoduje, że klucz API nie będzie aktywny

#### Typ

- określa jakich funkcjonalności będzie dotyczył API Key

#### Dozwolone adresy IP

- Pusta wartość - dostęp ze wszystkich serwerów.
- Jeśli adresy IP zostaną wprowadzone (oddzielone przecinkami), to dostęp do API będzie dozwolony tylko z tych adresów IP.
- Przykład: `x.x.x.x, y.y.y.y`

#### Publiczny adres URL

- Adres URL będzie używany do wysyłania powiadomień e-mail, w których treści można będzie wykorzystać adres URL (np. reset hasła w Portalu Klienta, link do podglądu rekordu w Portalu Klienta)

### Utworzenie użytkownika

Kolejnym krokiem jest utworzenie danych walidacyjnych do API. W tym celu w sekcji administracyjnej z lewego menu wybieramy `Integracja ➞ Web service - użytkownicy`.

![step 4](configuration-4.jpg)

Użytkownika będziemy dodawać dla konkretnego rodzaju usługi, dlatego w pierwszej kolejności wybieramy odpowiednią zakładkę.

![step 5](configuration-5.jpg)

W celu dodania nowego użytkownika wybieramy przycisk <kbd>Dodaj rekord</kbd>. Pojawi się wówczas okno modalne, w którym będziemy mogli skonfigurować dostępy.

![step 6](configuration-6.jpg)

![step 7](configuration-7.jpg)

#### Serwer

- wybieramy klucz API, który będzie powiązany z tworzonym użytkownikiem

#### Status

- określamy, czy dany użytkownik jest aktywny

#### Hasło

- ciąg znaków wykorzystywany do autoryzacji

#### Typ

- podstawa uprawień do rekordów

#### Kontakt

- opcjonalny w zależności od wybranego `Typu` uprawień do rekordów

#### Profil uprawnień

- użytkownik, na którym bazują uprawnienia do akcji i danych

#### Metoda uwierzytelniania i Metoda uwierzytelniania 2FA

- określa szczegóły odnośnie uwierzytelniania użytkownika

Po utworzeniu klucza API i użytkownika możemy przystąpić do nawiązania połączenia przez API. Jak to zrobić, zostało opisane w artykule: [Pierwsze połączenie API](/developer-guides/api/first-connect)
