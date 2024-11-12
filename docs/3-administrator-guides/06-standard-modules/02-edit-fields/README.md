---
title: Edycja pola
description: Edycja pola
keywords:
  - YetiForce
  - Edycja
  - pola
tags:
  - Pola
---

## Ikona pomocy

Ikony pomocy to prosty mechanizm pozwalający na dodanie przy każdym polu w systemie ikony zawierającej szczegółową informację dotyczącą pola. Zalecamy stosowanie takich informacji pomocniczych dla pól biznesowo istotnych np. statusy, etapy, pola, które są automatycznie aktualizowane. Każda podpowiedź może być tłumaczona dla każdego języka indywidualnie.

To narzędzie jest dostępne tylko dla administratorów. Po wejściu w zarządzanie tłumaczeniami, a następnie w ikony pomocy, mamy do dyspozycji kilka funkcjonalności. Przede wszystkim powinniśmy wybrać języki, dla jakich chcemy modyfikować opisy w ikonach. Następnie wybieramy moduł, dla którego narzędzie ma wyświetlić listę dostępnych pól. Do dyspozycji mamy jeszcze możliwość zawężenia listy pól do tych, które nie mają wprowadzonej treści, jak również możemy wyszukiwać interesujące nas pola.

![help-icon.jpg](help-icon.jpg)

Zasada aktywowania ikony pomocy jest dość prosta. Jeżeli ikona pomocy ma w danym języku wprowadzoną treść, a widok odpowiada widokowi, który ustawiliśmy, to ikona pomocy zostanie wyświetlona. Należy pamiętać, że ikony pomocy są zależne od języka - jeżeli użytkownik pracujący w systemie ma inny język niż treść informacji dla ikony pomocy, to ikona ta mu się nie wyświetli. Jeżeli chcesz wyłączyć wyświetlanie ikony, wystarczy, że usuniesz w niej zawartość (zostawisz pustą). Do wprowadzania treści mamy wbudowany edytor (ma on ograniczoną ilość pokazywanych narzędzi formatowania tekstu), w którym możemy używać HTML. W edytorze od strony programistycznej możemy przełączyć się na więcej dostępnych paneli z narzędziami, ale wymaga to zmian w kodzie.

Gdy aktywowaliśmy ikony pomocy, będą one od tego momentu dostępne dla użytkowników systemu, na trzech różnych widokach, które przy polu zaznaczyliśmy, czyli:

- Tworzenie i edycja rekordu.
- Podsumowanie i szczegóły rekordu.
- Szybkie tworzenie rekordu.

## Tworzenie pól systemowych

Ten artykuł opisuje mechanizm używany do tworzenia pól systemowych, które są takie same jak istniejące pola lub muszą mieć określone parametry.

![system-field-1.jpg](system-field-1.jpg)

Jeśli jakieś pole już istnieje w danym module, to nie będzie dostępne w oknie tworzenia pól systemowych.

Następujące pola mogą być dodane:

- Właściciel rekordu
- Utworzony przez
- Ostatnio modyfikowany przez
- Czas utworzenia
- Czas ostatniej zmiany
- Osoby współdzielące
- Prywatny
- Aplikacja Web service

:::info

💻 Demo: https://demo.yetiforce.com/index.php?module=LayoutEditor&parent=Settings&view=Index

:::
