---
title: Kontrola dostępu do rekordów
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

Ograniczenie dostępu do danych jest kluczowe z perspektywy organizacji, którym zależy na systemach spełniających regułę `need to know` - czyli przydzielenie minimum koniecznych dostępów oraz `Separation of duties` - czyli rozdzielenie obowiązków.

## Logika biznesowa dostępu do danych

### Nadrzędne poziomy dostępu

Dostęp do dowolnych danych w systemie YetiForce zawsze wymaga autoryzacji, która uprawnia użytkownika do przeglądania danych w systemie. Główna konfiguracja systemu określa dwa nadrzędne poziomy dostępu do danych:

- Dostęp publiczny
- Dostęp prywatny

Przypisanie dostępu publicznego do określonego modułu, oznacza, że użytkownik który ma dostęp do modułu [ma go włączonego w profilu z możliwością przeglądania] ma dostęp do wszystkich danych niezależnie od tego, kto jest właścicielem lub osobą współdzielącą rekordu. W przypadku określenia dostępu prywatnego, mają zastosowanie mechanizmy uprawnień, które zostały opisane poniżej.

Domyślnie w systemie wszystkie moduły mają poziom publiczny, to oznacza, że na etapie wdrożenia i po uzyskaniu specyfiki uprawnień, należy skonfigurować dostęp do danych zgodnie z logiką biznesową obowiązującą w organizacji. W praktyce, niektóre funkcjonalności mogą mieć ustawiony dostęp publiczny [nawet w dużych organizacjach], gdy dane zawarte w module powinny być dostępne dla wszystkich użytkowników.

### Uprawnienia specjalne

W systemie został zaszyty mechanizm, uprawniający do dostępu do danych na specjalnych warunkach. Moduł "Dostęp specjalny" pozwala nadawać uprawnienia do odczytu i edycji dla danych, których nie jesteśmy właścicielem. Uprawnienia te są nadrzędne w stosunku do uprawnień ograniczających dostęp do danych tzn. osoba mająca uprawnienia specjalne, ma dostęp do wszystkich rekordów niezależnie do kogo są przypisane.

Dostęp specjalny ma jednak pewne ograniczenia, przede wszystkim nie przydziela uprawnień do usuwania danych oraz nie przydziela uprawnień do rekordów przypisanych do grup.

### Uprawnienia wynikające ze struktury organizacyjnej

Jeżeli dostęp do modułu został określony na prywatny, wówczas system weryfikuje uprawnienia dla każdego rekordu niezależnie i przed udostępnieniem danych weryfikuje poziom dostępu użytkownika. Domyślnie system pozwala na dostęp do danych osobom które są wyżej w hierarchii niż właściciel rekordu. Oznacza to, że bez dodatkowej konfiguracji, system udostępnia dostęp do danych zgodnie z hierarchią zależności w organizacji.

### Uprawnienia wynikające z grup

Każdy rekord w systemie może być przydzielony do grupy, wówczas dostęp do danych jest przydzielany dla wszystkich osób będących częścią grupy [niezależnie czy do grupy przydzieliliśmy użytkowników, inne grupy, role to system zawsze przelicza dostęp na użytkowników systemu].

### Uprawnienia do danych dla administratora systemu

System pozwala na tworzenie użytkowników będących administratorami [oraz super-administratorami], którzy nie powinni pracować na systemie, ale mają dostęp do wszystkich danych widocznych dla użytkowników standardowych [super-administrator może ograniczań dostęp do niektórych funkcjonalności, ale dotyczy to panelu administracyjnego a nie dostępu do danych].

### Ograniczenie dostępu do rekordów `prywatnych`

W organizacjach gdzie dostęp do danych powinien być ogólny a ograniczenia są tylko punktowe, można stosować funkcjonalność pozwalającą na zmianę dostępu do rekordu na prywatny. Zmiana ta powoduje, że niezależnie od wszystkich innych uprawnień dostęp do rekordu oznaczony jako prywatny jest możliwy tylko przez użytkowników będących właścicielem rekordu, osobą współdzielącą oraz dla administratorów systemu. Mechanizmy ogólnego dostępu [np. dostęp specjalny, który pozwala na podgląd wszystkich rekordów niezależnie od uprawnień] nie działają, a więc każdorazowo dostęp do rekordu prywatnego należy nadawać ręcznie bezpośrednio w rekordzie.

## Niestandardowe mechanizmy przydzielania uprawnień

### Wyjątki dostępu

Ze względu na zróżnicowanie obowiązków wewnątrz organizacji, często zachodzi potrzeba przydzielania uprawnień, które nie wynikają bezpośrednio ze struktury organizacyjnej [np. dostęp do danych oddziału A ma mieć pracownik w oddziale B], wówczas można skorzystać z narzędzia dostępnego w narzędziu "Dostęp do modułów" w którym możemy tworzyć wyjątki dla każdej funkcjonalności niezależnie. Wyjątki dostępu pozwalają na określanie dodatkowych uprawnień do przeglądu oraz edycji danych [wyjątki dostępu nie pozwalają na zmniejszanie uprawnień czy też nadawanie uprawnień do usuwania].

### Uprawnienia wynikające z hierarchii [w dół]

Jednym z ważniejszych mechanizmów jest możliwość aktywowania uprawnień, które otrzymujemy ze względu na dostęp do rekordu nadrzędnego np. mając dostęp do kontrahenta możemy widzieć wszystkie dane [np. komentarze, kalendarz, umowy, oferty itd.]. Ta funkcjonalność jest szczególnie przydatna w firmach, które ograniczają dostęp jednopoziomowo [czyli masz dostęp do kontrahenta i wszystkich jego danych].

Jeżeli wejdziemy w rekord powiązany [np. w fakturę na kontrahencie], wówczas system weryfikuje, czy użytkownik posiada uprawnienia do rekordu nadrzędnego, jeżeli tak, to system pozwoli wejść w rekord. Jednocześnie rekord w którego weszliśmy z poziomu kontrahenta [np. w fakturę] nie będzie dostępny użytkownikowi w innych widokach np. w liście wszystkich faktur.

### Uprawnienia wynikające z hierarchii [w górę]

Innym mechanizmem umożliwiającym dostęp do danych jest hierarchia działająca "w górę zależności" np. mając dostęp do faktury klienta, otrzymamy również dostęp do kontrahenta ponieważ kontrahent jest elementem nadrzędnym. Mechanizm ten nie działa "w locie" lecz wymaga aktywowania panelu i włączenia specjalnych skryptów przeliczających w CRON. Przeliczenie uprawnień spowoduje, że otrzymamy dostęp do kontrahenta nie dlatego, że jesteśmy jego właścicielem, lecz dlatego, że mamy dostęp do elementu podrzędnego dla tego kontrahenta i będzie to widoczne na liście rekordów [np. na liście kontrahentów zobaczymy kontrahenta którego nie jesteśmy właścicielem].

Uprawnienia wynikające z hierarchii domyślnie są wyłączone i należy je ręcznie aktywować. Każdorazowo należy przeanalizować, czy mechanizm ten nie przydzieli nadmiarowych dostępów do danych, których użytkownik widzieć nie powinien.

### Uprawnienia wynikające z konfiguracji zaawansowanej

Mechanizm uprawnień zaawansowanych jest panelem, który pozwala na tworzenie reguł dostępów, które nie wynikają z domyślnych mechanizmów uprawnień np. można definiować uprawnienia na podstawie wartości słownika. Mechanizm ten działa w "cache-u" i po zmianie reguł w narzędziu należy wymusić przeliczenie uprawnień. Mechanizm ten nie jest zalecany, ponieważ system musi przeliczyć uprawnienia a to oznacza, że nie potrafi określić w czasie rzeczywistym czy użytkownik powinien mieć dostęp do informacji. Domyślnie panel ten jest wyłączony.

## Weryfikacja uprawnień

### Inspekcja uprawnień

Przy tak zaawansowanych narzędziach uprawnień, administrowanie dostępem może okazać się trudne, dlatego w systemie zostało zaprojektowane narzędzie pozwalające na weryfikację uprawnień i dostępów bezpośrednio od strony użytkownika. Inspektor uprawnień działa na dwóch warstwach [dla każdego modułu niezależnie], pierwszą warstwą jest lista rekordów [wówczas system weryfikuje kto ma dostęp i w jakim zakresie do danych na liście] a drugą warstwą jest weryfikacja uprawnień do konkretnego rekordu [wchodzą w rekord, możemy sprawdzić kto jeszcze ma dostęp do tego rekordu].

Co najważniejsze, narzędzie pokazuje nie tylko kto ma dostęp, ale również z czego ten dostęp wynika [czyli w którym panelu konfiguracyjnym zostały nadane uprawnienia] a więc w szybki sposób możemy znaleźć narzędzi w którym należy zmniejszyć uprawnienia dla użytkownika.

### Rozdzielenie obowiązków

W celu poprawnego spełnienia rozdzielenia obowiązków ["Separation of duties - https://en.wikipedia.org/wiki/Separation_of_duties"], system pozwala na określanie uprawnień do wartości słownikowych [np. można określić jaki pracownik może zmieniać status rekordu] oraz w samym systemie są wbudowane zaawansowane mechanizmy procesów, które kontrolują jakie dane i przez kogo powinny być wypełniane na którym etapie procesu.

### Konflikt interesów

W organizacjach w których dostęp do danych może stwarzać konflikt interesów można zastosować wbudowany mechanizm, który pozwala na weryfikację czy danych użytkownik nie wchodzi w konflikt z danymi nad którymi pracuje, jeżeli tak się stanie, zostaną uruchomione mechanizmy zabezpieczające a rekord zostanie przepisany na innego użytkownika.

### Przeliczanie uprawnień

Wszystkie uprawnienia działają w czasie rzeczywistym [wyjątek stanowią uprawnienia zaawansowane, które domyślnie są wyłączone i są przeliczane z opóźnieniem], oznacza to, że zmiana roli, profilu czy też zmiana danych do których użytkownik ma dostęp są realizowane natychmiast i nie wymagają ponownego przelogowania użytkownika.
