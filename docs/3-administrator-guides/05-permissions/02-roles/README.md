---
title: Role
description: Wbudowany moduł ról umożliwia odwzorowanie struktury organizacyjnej firmy w systemie YetiForce.
keywords:
  - firma
  - struktura organizacyjna
  - role
  - ustawienia
  - YetiForce
tags:
  - role
  - struktura
preview: role-1.jpg
---

W systemie YetiForce dostępny jest moduł Ról, który pozwala odwzorować strukturę organizacyjną firmy – nawet bardzo złożoną. Aby skonfigurować role, przejdź do "Konfiguracja systemu" → "Uprawnienia" → "Role".

Przykładowa struktura może wyglądać następująco: na górze znajduje się prezes, pod nim dyrektor, następnie kilku kierowników, a pod każdym z nich pracownicy. W systemie nie ma ograniczeń co do liczby poziomów w strukturze.

## Drzewo ról

![role-1.jpg](role-1.jpg)

Moduł `Role` łączy użytkowników z profilami, z których dziedziczą uprawnienia do modułów, narzędzi i akcji.

## Dodawanie roli

![role-add.jpg](role-add.jpg)

Tworząc rolę, możesz precyzyjnie określić uprawnienia dla użytkowników przypisanych do tej roli. Najważniejsze możliwości to:

1. Ustalanie, kto może być właścicielem rekordu (globalnie dla całego systemu).
2. Ustalanie, kto może być osobą współdzielącą rekord (globalnie).
3. Przypisanie do jednego lub wielu profili (uprawnienia są sumowane).
4. Blokada zmiany właściciela rekordu (wtedy nowo utworzony rekord zawsze ma przypisanego właściciela z tej roli, bez możliwości zmiany).

Dla uprawnień z punktów 1 i 2 możesz wybrać jeden z poniższych mechanizmów:

- Tylko ja - użytkownik, który jest zalogowany
- Użytkownicy posiadający podrzędną rolę
- Użytkownicy posiadający podrzędną rolę lub tą samą rolę co ja
- Wszyscy użytkownicy
- Z panelu przydziału rekordów

W zależności od wybranej opcji, podczas tworzenia rekordu dostępna będzie odpowiednia lista użytkowników lub grup do przypisania. Ostatnia opcja pozwala na dowolną konfigurację w niezależnym panelu.

Dodatkowo, w roli można ustawić parametry dotyczące dziedziczenia uprawnień:

1. Czy udostępnić listę rekordów powiązanych z rekordem, do którego mamy dostęp?
2. Czy udostępnić podgląd rekordów powiązanych?
3. Na jakiej podstawie mają być przyznawane uprawnienia do rekordów powiązanych:
   - Właściciel rekordu
   - Osoby współdzielące
   - Dostęp do rekordu
   - Wyjątki zasad dostępu

Te ustawienia pozwalają na dostęp do powiązanych danych zgodnie z hierarchią – np. mając dostęp do klienta, możesz mieć dostęp do jego dokumentów, komentarzy czy faktur, nawet jeśli nie masz do nich bezpośrednich uprawnień.

Możesz także włączyć opcję edycji rekordów powiązanych, których nie jesteś właścicielem – system pozwoli na edycję, jeśli uprawnienia wynikają z powiązania z innym rekordem.

W roli można określić również poziom dostępu do wyszukiwarki i danych, które można wyszukiwać, np.:

- Moduły dostępne do wyszukiwania bez uprawnień
- Możliwość zaawansowanego wyszukiwania

Możliwe jest także wyłączenie podglądu kalendarzy innych użytkowników (z poziomu graficznego interfejsu).

Opcja "Automatyczny przydział rekordów" pozwala na automatyczne rozdzielanie rekordów w systemie, co jest szczególnie przydatne przy dużej liczbie leadów lub szans sprzedażowych.
