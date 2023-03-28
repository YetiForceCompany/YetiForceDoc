---
title: Jak przez Rest Api dodać plik graficzny
description: Artykuł opisuje jak za pomocą Rest Api dodać plik graficzny w YetiForce CRM.
keywords:
  - Webservice
  - API
  - RestAPI
  - dodać
  - plik
  - załącznik
  - graficzny
  - pole
  - YetiForce
tags:
  - Webservice
  - API
  - Rest API
  - Image
---

Niniejszy dokument zawiera informację jak za pomocą Rest Api dodać plik graficzny w polach obsługujących takie pliki w YetiForce CRM.

Aplikacja posiada dwa typu pól obsługujących pliki graficzne, są to:

- Image
- Graficzny (wiele)

![graphic file](graphic-file.png)

**Przed przejściem dalej należy zapoznać się z dostępnymi metodami i sposobem komunikacji z api opisanymi tutaj: https://doc.yetiforce.com/api/**

## Dodawanie pliku graficznego

Cała trudność z dodaniem pliku graficznego polega na odpowiednim przygotowaniu pól w wysyłanym zapytaniu. Na wstępie należy przygotować listę pól, które należy uzupełnić w trakcie tworzenia/edycji rekordu przez api.

Struktura pól danego modułu dostępna jest w panelu edycji pól w konfiguracji systemu: [`Konfiguracja systemu -> Moduły standardowe -> Moduły - pola`](/administrator-guides/standard-modules/edit-fields/)

Po zapoznaniu się ze strukturą możesz przejść do konstruowania zapytań.

Każdy plik graficzny tworzony z poziomu api wymaga trzech zmiennych:

- **name**

  Nazwa pliku

- **key**

  Losowy ciąg znaków, niepowtarzalny w obrębie plików graficznych danego pola.

- **baseContent**

  Plik graficzny przekonwertowany na base64

Poniżej przykład dodania pliku graficznego do kontaktu za pomocą narzędzia Postman.

![graphic file postman](graphic-file-postman.png)
