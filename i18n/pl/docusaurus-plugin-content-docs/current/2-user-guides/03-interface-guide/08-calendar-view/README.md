---
title: Widok kalendarza
description: The article describes the calendar view
keywords:
  - calendar
  - view
  - YetiForce
tags:
  - Calendar
  - YetiForce
preview: calendar-view-1.jpg
---

![calendar-view-1](calendar-view-1.jpg)

## Dodatkowe źródła danych

:::tip Ta funkcja jest dostępna dla YetiForce w wersji `6.4.233` i później
:::

Dodatkowe źródła danych umożliwiają pokazanie informacji z wszystkich modułów z rekordami które posiadają pole daty lub daty czasu. Blok z konfiguracją jest dostępny w panelu filtrów z prawej strony.

![calendar-view-additional-data-sources-0.jpg](calendar-view-additional-data-sources-0.jpg)

### Opis pól

![calendar-view-additional-data-sources-1.jpg](calendar-view-additional-data-sources-1.jpg)

#### Tytuł

Nazwa która będzie pokazany w liście źródeł danych

#### Typ

Typ określa na podstawie ilu i jakich typów pól mają być prezentowane dane, dzięki takiemu rozwiązaniu system daje możliwość pokazania danych z zakresu lub na podstawie dwóch pól data i czas jako jednej wartości.

Do wyboru mamy następujące typy:

- Jedno pole daty lub data i czas
- Dwa pola daty i czasu
- Zakres czasu dla jednego pola daty lub daty i godziny
- Zakres czasu dla dwóch pól data i czas

#### Publiczne

Parametr określa czy dane źródło danych będzie widoczne dla innych użytkowników. Domyślnie każdy widzi tylko dwoje, a dzięki temu można współdzielić. Opcja dostępna tylko dla administratorów systemu.

#### Uwzględnij filtry

Zaznaczenie tej opcji zawęzi wyniki do wybranych użytkowników i grup. Pozostawienie tej opcji odznaczonej pokaże wszystkie wpisy, niezależnie od wybranych użytkowników i grup.

#### Moduł

Moduł z którego będą pokazywane dane.

#### Widok niestandardowy

Lista z filtrami dla wybranego modułu, daje to możliwość dodatkowego przefiltrowania wyświetlanych danych bazujących na warunkach z filtrów. Więcej informacji znajduje sie w artykule [Warunki filtrów](/user-guides/interface-guide/list-view/filter#conditions)

#### Pole etykiety

Lista wyboru umożliwia zmianę domyślnej etykiety rekordy na wybrane pole które chcemy pokazać w kalendarzu.

![calendar-view-field-label.jpg](calendar-view-field-label.jpg)

#### Dane oparte na polach

W zależności od wybranego typu dostępne będzie jedna lub cztery listy wyboru z polami dla wybranego modułu. Dane wyświetlanie w kalendarzu będą pokazane na podstawie wybranych pól.

![calendar-view-additional-data-sources-2.jpg](calendar-view-additional-data-sources-2.jpg)

### Uprawnienia

Funkcjonalność dodatkowych źródeł danych jest dostępna dla zwykłego użytkownika dopiero po nadaniu odpowiednich uprawnień.

Zarządzanie uprawnieniami odbywa sie w panelu [Konfiguracja systemu → Uprawnienia → Profile](/administrator-guides/permissions/profiles/)

Uprawnienia dzielą sie na dwie opcje:

- Kalendarz - Dodatkowe źródła danych - nadaje dostęp do całego bloku oraz wyświetlania danych
- Kalendarz - Tworzenie dodatkowych źródeł danych - daje możliwość tworzenia/edycji własnych źródeł danych
