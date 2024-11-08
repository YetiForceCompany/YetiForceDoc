---
title: Dane dostępowe do systemu YetiForce
description: Jeśli jesteś użytkownikiem YetiForce i masz problem, który chcesz zgłosić nam jako część SLA.
keywords:
  - dane
  - dostępowe
  - problem
  - zgłoszenie
  - YetiForce
tags:
  - dane dostępowe
  - sla
---

Jeśli jesteście użytkownikami systemu YetiForce i macie problem, które chcecie do nas zgłosić w ramach SLA, to dla przyśpieszenia obsługi takiego zgłoszenia, potrzebujemy kilka podstawowych danych, opisanych poniżej:

#### 1. Adres URL Twojego systemu

#### 2. Dane dostępowe do system YetiForce

:::important
Użytkownik musi mieć uprawnienia administratora.
:::

- login
- hasło

#### 3. Dane dostępowe do FTP lub SFTP

Dostęp musi zawierać uprawnienia do odczytu i zapisu plików, a mianowicie:

- adres serwera
- port
- login (właściciel plików systemowych YetiForce)
- hasło
- sposób szyfrowania danych (np.: FTP przez TLS)
- ścieżka pod którą znajduje się system

Konfiguracja serwera zawsze musi być zgodna z aktualnymi wymogami konfiguracyjnymi opisanymi na [stronie](/introduction/requirements/). Niezgodność może powodować błędy w funkcjonowaniu systemu, dodatkowo nie będą działać mechanizmy debugowania. Do weryfikacji konfiguracji można wykorzystać narzędzie wbudowane w systemie i dostępne pod adresem https://demo.yetiforce.com/index.phpparent=Settings&module=ConfReport&view=Index&block=14&fieldid=65

#### 4. Dostęp do bazy danych

- adres bazy danych
- port
- login
- hasło

Dostęp do bazy danych musi być możliwy przez klienta zewnętrznego, czyli musi być dostęp do bazy z zewnątrz lub musimy mieć dostęp do SSH aby tunelować połączenie.

#### 5. VPN - Opcjonalny

:::warning
Dotyczy tylko jeśli dostęp do Twoich danych wymaga VPN
:::

Prosimy dodatkowo o podanie nazwy programu potrzebnego do połączenia z VPN oraz dane do konfiguracji tego programu (adres, port, login, hasło, oraz inne informacje wymagane przez konkretny program, jak np. certyfikat).

:::tip
Po realizacji przez nas zlecenia dane dostępowe należy zmienić a dostęp z zewnątrz należy wyłączyć zgodnie z dobrymi praktykami bezpieczeństwa.
:::
