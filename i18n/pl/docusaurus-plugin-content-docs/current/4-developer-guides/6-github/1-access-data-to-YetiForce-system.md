---
title: Dane dostępowe do systemu YetiForce
draft: true
---

Jeśli jesteście użytkownikami systemu YetiForce i macie problem, które chcecie do nas zgłosić w ramach SLA, to dla przyśpieszenia obsługi takiego zgłoszenia, potrzebujemy kilka podstawowych danych, opisanych poniżej:

1. adres pod którym działa system YetiForce
2. dane dostępowe do system YetiForce czyli login i hasło (użytkownik musi mieć uprawnienia administratora).
3. dane dostępowe do FTP / SFTP, musi to być właściciel plików system YetiForce (z uprawnieniami do odczytu i zapisu plików), czyli:
   - adres serwera
   - port
   - login
   - hasło
   - sposób szyfrowania danych (np.: FTP przez TLS)
   - ścieżka pod którą jest CRM

Konfiguracja serwera zawsze musi być zgodna z aktualnymi wymogami konfiguracyjnymi opisanymi na [stronie](/introduction/requirements/). Niezgodność może powodować błędy w funkcjonowaniu systemu, dodatkowo nie będą działać mechanizmy debugowania. Do weryfikacji konfiguracji można wykorzystać narzędzie wbudowane w systemie i dostępne pod adresem https://gitstable.yetiforce.com/index.phpparent=Settings&module=ConfReport&view=Index&block=14&fieldid=65

4. Dane dostępowe do bazy danych, czyli:
   - adres bazy danych
   - port
   - login
   - hasło

Dostęp do bazy danych musi być możliwy przez klienta zewnętrznego, czyli musi być dostęp do bazy z zewnątrz lub musimy mieć dostęp do SSH aby tunelować połączenie.

5. Opcjonalnie - jeśli dostęp do Twoich danych wymaga VPN'a - prosimy dodatkowo o podanie nazwy programu potrzebnego do połączenia z VPN oraz dane do konfiguracji tego programu (adres, port, login, hasło, oraz inne informacje wymagane przez konkretny program, jak np. certyfikat).

:::tip
Po realizacji przez nas zlecenia dane dostępowe należy zmienić a dostęp z zewnątrz należy wyłączyć zgodnie z dobrymi praktykami bezpieczeństwa.
:::
