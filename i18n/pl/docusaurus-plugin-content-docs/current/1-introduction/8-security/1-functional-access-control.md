---
title: Kontrola dostępu do funkcji systemu
description: Jednym z kluczowych elementów bezpieczeństwa YetiForce jest kontrola dostępu do funkcji, narzędzi i działań dostępnych w systemie.
keywords:
  - kontrola
  - dostępu
  - funkcjonalność
  - YetiForce
tags:
  - kontrola
  - dostępowe
  - funkcjonalność
---

Jednym z kluczowych elementów bezpieczeństwa systemu YetiForce jest kontrola dostępu do funkcji, narzędzia i działania na poziomie użytkownika i administratora. Domyślnie sprawdzany jest dostęp do wszystkich elementów systemowych, takich jak moduły, narzędzia, przyciski lub akcje.

## Logika dostępu do funkcji

### Podział funkcjonalności

System YetiForce oferuje swoim użytkownikom bogaty wybór narzędzi, w tym najważniejsze funkcje, które są modułem (np. konta, faktury, notowania, pulpit nawigacyjny). W każdym module istnieje wiele wspólnych elementów, tj.:

- Akcje
- Narzędzia
- Widoki
- Filtry
- Pola / słowniki
- Widżety

Do każdego elementu systemu, można zdefiniować uprawnienia np. czy pole jest widoczne dla użytkownika lub czy może używać filtru. Dodatkowo w systemie mamy dwa rodzaje słowników, jeden z nich zawiera możliwość określania uprawnień do wartości w ten sposób możemy kontrolować proces zmiany na rekordzie uwzględniając jaka rola może zmieniać jakie statusy np. dział techniczny może zmieniać zgłoszenia i nadać status "do weryfikacji" a dział kontroli może zmienić na status "zweryfikowano do zamknięcia". Jest to jeden ze sposobów realizacji zasady “separation of duties”.

### Dostęp do modułów, akcji, pól

Dostęp do modułu, akcji, pola określa się na poziomie profilu, zo oznacza, że użytkownik przypisany do określonej roli, dziedziczy profile, które w roli zostały ustawiony. Przypisanie profilu do użytkownika nie następuje bezpośrednio lecz pośrednio poprzez przypisanie do roli.

Na profilu można określać ogólne uprawnienia na warstwie modułu tj.:

- Podgląd
- Tworzenie
- Edycja
- Usuwanie

Jeżeli użytkownik otrzyma uprawnienia do przeglądania/edytowania w module, to oznacza że rekordy do których ma i uprawnienia będzie mógł przeglądać i edytować ale nie będzie mógł ich usuwać czy też tworzyć nowe. Profile nie nadają uprawnień do danych/rekordów lecz tylko do funkcjonalności, narzędzi i akcji.

Dodatkowo w każdy module możemy przydzielać uprawnienia do pól określając trzy stany [ukryte, tylko odczyt, zapis] co pozwala na zmniejsza uprawnień do pola i operacji na tym. Niektóre pola tj. systemowe lub domyślnie wymagane nie mogą mieć zmienianych uprawnień ponieważ zostały one narzucone przez producenta [można to zmienić programistycznie].

Oprócz uprawnień do pól, możemy przydzielać uprawnienia do narzędzi [masowa edycji, wysyłka maili, wysyłka sms-ów, import/eksport itd.] co oznacza, że mamy pełną kontrolę nad tym z jakich narzędzi może korzystać użytkownik końcowy.

### Dostęp do filtrów

Dostęp do filtrów jest określany bezpośrednio na filtrze każdy użytkownik, który tworzy filtr jest jego właścicielem, dodatkowo administrator może oznaczyć filtr jako publiczny oraz przydzielić poszczególnym osobom dostęp do filtru. Uprawnienia do tworzenia i edycji filtrów wynikają bezpośrednio z uprawnień zdefiniowanych na profilu.

### Dostęp do widoków

Dostęp do widoków jest częściowo automatyczny a częściowo konfigurowalny, dla widoków globalnych [np. lista, lista z podglądem, podsumowanie, szczegóły itd.] uprawnienia definiuje się globalnie dla całej organizacji, natomiast dla pozostałych widoków [np. tworzenie rekordu, edycja rekordu, szybkie tworzenie] uprawnienia wynikają bezpośrednio z profilu.

### Dostęp do widżetów

Dostęp do widżetów jest określany na trzech warstwach [pulpit, moduł, rekord] ale tylko na dwóch pierwszych warstwach możemy przypisywać kto jakie widżety widzi i w jaki sposób może nimi zarządzać, natomiast widżety na trzeciej warstwie są automatycznie kontrolowane przez system i dostępne dla każdego która ma dostęp do rekordu [przy czym system nie pokazuje widżetów dla modułów do których nie mamy uprawnień].

Bardzo ważną cechą widżetów jest to, że nie pokazują one nic, do czego użytkownik nie ma uprawnień. Jeżeli nawet utworzymy widżet, który pokazuje wszystkie dane w module, to inny użytkownik który ma ten sam widżet dostępny, będzie w nim widział tylko te dane do których ma rzeczywiście dostęp.

## Mechanizmy zabezpieczające

### Zmiana uprawnień

Zmiana uprawnień do dowolnych elementów systemu jest realizowana w czasie rzeczywistym i nie wymaga od użytkownika przelogowania się, aby zmiany zadziałały.

### Inspektor uprawnień

Mechanizm inspektora uprawnień oprócz weryfikacji uprawnień do danych, prezentuje również uprawnienia do przeglądania, edycji, tworzenia i usuwania co oznacza, że można w szybki sposób sprawdzić z poziomu użytkownika jakie uprawnienia ma przydzielone.

### Centralny system nadzorujący uprawnienia

YetiForce posiada jeden centralny system, który weryfikuje uprawnienia do każdego elementu. Nie ma znaczenia czy importujesz dane, komunikujesz się przez API czy też próbujesz zmodyfikować coś za pomocą przycisku [np. zmiana statusu], każdorazowo system sprawdza czy na pewno użytkownik ma wszystkie konieczne uprawnienia do wykonania operacji.
