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
  - Plik graficzny
---

Niniejszy dokument zawiera informację jak za pomocą Rest Api dodać plik graficzny w polach obsługujących takie pliki w YetiForce CRM.

Aplikacja posiada dwa typu pól obsługujących pliki graficzne, są to:

- Plik graficzny
- Pliki graficzne (wiele)

![graphic file](graphic-file.png)

**Przed przejściem dalej należy zapoznać się z dostępnymi metodami i sposobem komunikacji z api opisanymi tutaj: https://doc.yetiforce.com/api/
**

## Dodawanie pliku graficznego

Cała trudność z dodaniem pliku graficznego polega na odpowiednim przygotowaniu pól w wysyłanym zapytaniu. Na wstępie należy przygotować listę pól, które należy uzupełnić w trakcie tworzenia/edycji rekordu przez api. Struktura pól danego modułu dostępna jest w panelu edycji pól w konfiguracji systemu: [`Konfiguracja systemu -> Moduły standardowe -> Moduły - pola`](/administrator-guides/standard-modules/edit-fields/)

Znając już nazwę pola graficznego, które chcemy uzupełnić o plik graficzny można przystąpić do konstrukcji zapytania.

Każdy plik graficzny tworzony z poziomu api wymaga trzech zmiennych:

- name

  Nazwa pliku

- key

  Losowy ciąg znaków, niepowtarzalny w obrębie plików graficznych danego pola.

- baseContent

  Plik graficzny przekonwertowany na base64

Poniżej przykład dodania pliku graficznego do kontaktu za pomocą narzędzia Postman.

![graphic file postman](graphic-file-postman.png)
