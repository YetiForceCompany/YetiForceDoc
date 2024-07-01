---
title: System - konfiguracja
description: System - konfiguracja
keywords:
  - YetiForce
  - System
  - Konfiguracja
  - Relacja
tags:
  - Konfiguracja
  - Relacja
preview: main.jpg
---

## Główna konfiguracja

Ten panel pozwala na konfigurację ogólnych ustawień systemu dotyczących jego wyglądu oraz zachowania dla wszystkich użytkowników systemu.

![main.jpg](main.jpg)

- **Maksymalna wielkość uploadu (`upload_max_filesize`: 100 MB)** - ten parametr określa maksymalny rozmiar plików przesyłanych do systemu. Rozmiar ten nie może przekraczać 100MB.
- **Domyślny moduł** - ten parametr określa, który moduł użytkownicy zobaczą po zalogowaniu się do systemu.
- **Maksymalna długość tekstu widoku listy** - ten parametr określa maksymalną długość tekstu widocznego w widoku listy
- **Maksymalna ilość wyświetlanych rekordów na stronę w widoku listy** - ten parametr określa maksymalną liczbę rekordów, które będą widoczne w widoku listy
- **Układ** - "Domyślny"
- **Pokazywanie menu okruszkowego** - checkbox; jeśli jest zaznaczony, to menu okruszkowe pojawi się na górze ekranu
- **Maksymalna długość tytułu**- parametr określający maksymalną ilość znaków, które mogą być wpisane w polu “Tytuł”
- **Minimalna częstotliwość crona [min]** - ten parametr określa częstotliwość wyzwalania CRON w minutach.
- **Maksymalna liczba rekordów w masowej edycji ** - ten parametr definiuje maksymalną liczbę rekordów, które mogą być modyfikowane za pomocą narzędzia do masowej edycji.
- **Włączenie zamykania modalnego okna poprzez kliknięcie na tło** - checkbox określający czy okienka pop up będą zamykane poprzez kliknięcie na tło, czy wyłącznie poprzez przycisk <kbd>🗙</kbd> znajdujący się w rogu okienka.
- **Maksymalna długość dla tagu href**
- **Pokaż wybór języka na stronie logowania** - checkbox, który pozwala na włączenie lub wyłączenie listy wyboru języka
- **Pokaż wybór layoutu na stronie logowania** - checkbox, dzięki któremu można określić czy lista wyboru layoutu będzie dostępna na ekranie logowania.

## Relacja

Ten panel kontroluje wygląd zakładek rekordów powiązanych widocznych w widoku rekordu.

Jedną z najważniejszych zalet YetiForce jest możliwość dostosowania prawie każdego elementu w systemie. Ta opcja jest również dostępna dla zakładek modułów powiązanych widocznych w widoku rekordu. Jeśli chcesz zmienić wygląd zakładek w systemie, poniższa instrukcja zawiera listę i opis parametrów, których możesz użyć.

![Relation.jpg](Relation.jpg)

Panel jest łatwy do użycia, wystarczy wybrać ustawienia, które chcesz zmienić i nacisnąć przycisk <kbd>Zapisz</kbd> na dole ekranu. Ta funkcjonalność pomoże Ci dostosować następujące elementy:

### Pokaż nazwy modułów powiązanych w zakładkach

☑ - Jeśli zaznaczone, nazwy modułów będą wyświetlane na zakładkach w widoku rekordu, jak pokazano poniżej:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - Jeśli nie zaznaczono, nazwy modułów nie będą wyświetlane, jak na obrazku poniżej:

![related-modules-names-off.jpg](related-modules-names-off.jpg)

### Pokaż ikony modułów powiązanych w zakładkach

☑ - Jeśli zaznaczone, ikony modułów będą wyświetlane na zakładkach w widoku rekordu, jak pokazano poniżej:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - Jeśli nie zaznaczono, ikony modułów nie będą wyświetlane, jak na obrazku poniżej:

![related-modules-icon-off.jpg](related-modules-icon-off.jpg)

### Pokaż liczbę rekordów w zakładkach powiązanych modułów

☑ - Jeśli zaznaczone, to w widoku rekordu na zakładkach zobaczymy ilość rekordów znajdujących się w modułach powiązanych, jak pokazano poniżej:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - Jeśli nie zaznaczono, to liczby określające ilość rekordów znajdujących się w modułach powiązanych nie będą widoczne na zakładce, jak pokazano poniżej:

![related-modules-count-off.jpg](related-modules-count-off.jpg)

### Maksymalna długość komentarza widocznego w powiązanym rekordzie

Kontroluje długość komentarza widocznego w niektórych relacjach, na przykład w zakładce "Produkty i Usługi" w rekordach z modułu kontrahenta. W zależności od ustawionej wartości komentarze będą wyglądać w następujący sposób:

- długość 10

![maximum-length-10.jpg](maximum-length-10.jpg)

- długość 50

![maximum-length-50.jpg](maximum-length-50.jpg)

### Oddzielne przyciski akcji do zmiany dodatkowych danych

Kontroluje widoczność przycisku zmiany dodatkowych danych w zakładce `Uczestnicy` w rekordach dodanych do modułu Wydarzenia (`Marketing → Wydarzenia`)

☑ - Jeśli zaznaczone, to przycisk pojawi się bezpośrednio w widoku listy uczestników, jak na obrazku poniżej:

![separate-action-on.jpg](separate-action-on.jpg)

☐ - Jeśli nie zaznaczono to przycisk ten pojawi się dopiero po kliknięciu przycisku ustawień <kbd>:wrench:</kbd> na liście uczestników, tak jak na przykładzie poniżej:

![separate-action-off.jpg](separate-action-off.jpg)

## Wydajność

![Performance.jpg](Performance.jpg)
