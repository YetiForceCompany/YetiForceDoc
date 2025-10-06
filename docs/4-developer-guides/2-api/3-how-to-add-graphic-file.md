---
title: Jak przez API dodać do pola plik graficzny
description: Niniejszy dokument zawiera informacje, jak za pomocą REST API dodać plik graficzny w polach obsługujących takie pliki w YetiForce CRM.
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

Niniejszy dokument zawiera instrukcję, jak do rekordu za pomocą API dodać plik graficzny w polach obsługujących takie pliki.

**Przed przejściem dalej należy zapoznać się z dostępnymi metodami i sposobem komunikacji z API opisanymi w [dokumentacji API](https://doc.yetiforce.com/api/).**

Aplikacja YetiForce posiada dwa rodzaje pól obsługujących pliki graficzne:

- Plik graficzny
- Plik graficzny (wiele)

![graphic file](graphic-file.png)

## Dodawanie pliku graficznego

W celu dodania pliku graficznego do rekordu należy skorzystać ze standardowego punktu końcowego do tworzenia lub edycji rekordu poprzez metodę POST (tworzenie) lub PUT (edycja).

```bash
/webservice/WebserviceStandard/{moduleName}/Record
```

Pole z plikiem dodaje się analogicznie jak inne pola rekordu, z tą różnicą, że jego wartością nie jest łańcuch tekstowy lub liczba, lecz tablica z obiektem. Obiekt pliku graficznego tworzonego z poziomu API wymaga trzech elementów:

- `name` - nazwa pliku.

- `key` - losowy ciąg znaków, niepowtarzalny w obrębie plików graficznych danego pola.

- `baseContent` - plik graficzny przekonwertowany na format base64. Nie należy umieszczać fragmentu początkowego z typem MIME (np. `data:image/jpeg;base64,`).

Poniżej przedstawiono przykład dodania pliku graficznego do kontaktu za pomocą narzędzia Postman, gdzie `imagename` to nazwa pola określona w ustawieniach modułu.

![graphic file postman](graphic-file-postman.png)
