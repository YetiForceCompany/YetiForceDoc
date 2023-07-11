---
title: System - Configuration
description: System - Configuration
keywords:
  - YetiForce
  - System
  - Configuration
  - Relation
tags:
  - Configuration
  - Relation
preview: main.jpg
---

## Main configuration

Ten panel pozwala na konfigurację ogólnych ustawień systemu dotyczących jego wyglądu oraz zachowania dla wszystkich użytkowników systemu.

![main.jpg](main.jpg)

- Maksymalna wielkość uploadu (`upload_max_filesize`: 100 MB) - ten parametr określa maksymalny rozmiar plików przesyłanych do systemu. Rozmiar ten nie może przekraczać 100MB.
- Domyślny moduł - ten parametr określa, który moduł użytkownicy zobaczą po zalogowaniu się do systemu.
- Maksymalna długość tekstu w widoku listy - ten parametr określa maksymalną długość tekstu widoczną w widoku listy
- Maksymalna ilość wyświetlanych rekordów na stronę w widoku listy - ten parametr określa maksymalną ilość rekordów, które widoczne będą w widoku listy
- Układ - “Domyślny”
- Pokazywanie menu okruszkowego - checkbox, dzięki któremu możemy kontrolować czy menu okruszkowe pokazuje się na górze ekranu
- Maksymalna długość tytułu - parametr określa maksymalną ilość znaków, które mogą być wpisane w polu “Tytuł”
- Minimalna częstotliwość cron-a [min] - parametr określający częstotliwość uruchamiania CRONa przez system w minutach.
- Maksymalna liczba rekordów w masowej edycji - parametr określający maksymalną liczbę rekordów, które mogą być modyfikowane za pomocą narzędzia masowej edycji.
- Włączenie zamykania modalnego okna poprzez kliknięcie na tło - checkbox określający czy okienka pop up będą zamykane poprzez kliknięcie na tło, czy wyłącznie poprzez przycisk × znajdujący się w rogu okienka.
- Maksymalna długość dla tagu href
- Pokaż wybór języka na stronie logowania - checkbox, który pozwala na włączenie lub wyłączenie listy wyboru język
- Pokaż wybór layoutu na stronie logowania - checkbox, dzięki któremu można określić czy lista wyboru layoutu będzie dostępna na ekranie logowania.

## Relation

Za pomocą tego panelu możemy kontrolować w jaki sposób wyświetlane są informacje dotyczące zakładek rekordów powiązanych, widocznych po wejściu w rekord.

Jedną z wielu zalet YetiForce jest możliwość dostosowania niemalże każdego elementu widocznego w systemie. Takiej możliwości nie mogło zatem zabraknąć w konfiguracji zakładek modułów powiązanych, widocznych po kliknięciu w jakikolwiek rekord w systemie. Jeśli chcesz zmienić wygląd tych zakładek w Twoim systemie, poniżej znajdziesz opis parametrów, które to umożliwiają.

![Relation.jpg](Relation.jpg)

Panel jest bardzo prosty w obsłudze, wystarczy wybrać interesujące nas opcje i kliknąć przycisk <kbd>Zapisz</kbd> na dole strony. Funkcjonalność ta pozwala na konfigurację poniższych elementów:

### Show related modules names in tabs

☑ - Jeśli checkbox zostanie zaznaczony, to w widoku rekordu na zakładkach zobaczymy nazwy modułów powiązanych, tak jak na obrazku poniżej:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - Jeśli natomiast checkbox pozostanie niezaznaczony, to nazwy modułów powiązanych nie będą widoczne na zakładce, tak jak na przykładzie poniżej:

![related-modules-names-off.jpg](related-modules-names-off.jpg)

### Show related modules icon in tabs

☑ - Jeśli checkbox zostanie zaznaczony, to w widoku rekordu na zakładkach zobaczymy ikony modułów powiązanych, tak jak na obrazku poniżej:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - Jeśli natomiast checkbox pozostanie niezaznaczony, to ikony modułów powiązanych nie będą widoczne na zakładce, tak jak na przykładzie poniżej:

![related-modules-icon-off.jpg](related-modules-icon-off.jpg)

### Show record count in tabs of related modules

☑ - Jeśli checkbox zostanie zaznaczony, to w widoku rekordu na zakładkach zobaczymy ilość rekordów znajdujących się w modułach powiązanych, tak jak na obrazku poniżej:

![related-modules-names-on.jpg](related-modules-names-on.jpg)

☐ - Jeśli natomiast checkbox pozostanie niezaznaczony, to liczby określające ilość rekordów znajdujących się w modułach powiązanych nie będą widoczne na zakładce, tak jak na przykładzie poniżej:

![related-modules-count-off.jpg](related-modules-count-off.jpg)

### Maximum length of a comment visible on the related record

Kontroluje długość komentarza widocznego w niektórych relacjach, na przykład w zakładce "Produkty i Usługi" w rekordach z modułu kontrahenta.
W zależności od ustawionej wartości komentarze będą wyglądać w następujący sposób:

- długość 10

![maximum-length-10.jpg](maximum-length-10.jpg)

- długość 50

![maximum-length-50.jpg](maximum-length-50.jpg)

### Separate action buttons for changing additional data

Kontroluje widoczność przycisku zmiany dodatkowych danych w zakładce "Uczestnicy" w rekordach modułu Wydarzenia (Marketing → Wydarzenia)

☑ - Jeśli checkbox zostanie zaznaczony to przycisk pojawi się bezpośrednio w widoku listy uczestników, tak jak na obrazku poniżej:

![separate-action-on.jpg](separate-action-on.jpg)

☐ - Jeśli natomiast checkbox pozostanie niezaznaczony to przycisk ten pojawi się dopiero po kliknięciu przycisku ustawień na liście uczestników, tak jak na przykładzie poniżej:

![separate-action-off.jpg](separate-action-off.jpg)

## Performance

![Performance.jpg](Performance.jpg)
