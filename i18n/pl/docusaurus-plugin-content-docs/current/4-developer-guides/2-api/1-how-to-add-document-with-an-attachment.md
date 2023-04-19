---
title: Jak przez Rest Api dodać dokument z załącznikiem
description: W tym artykule znajdziesz informacje jak za pomocą Rest Api dodać wpis w module Dokumenty wraz z załącznikiem
keywords:
  - Webservice
  - API
  - RestAPI
  - dodać
  - dokument
  - plik
  - załącznik
  - YetiForce
tags:
  - Webservice
  - API
  - Rest API
  - Dokument z załącznikiem
---

:::tip Funkcjonalność dostępna od wersji YetiForce `6.2.0` i później
:::

W tym artykule znajdziesz informacje jak za pomocą Rest Api dodać wpis w module Dokumenty wraz z załącznikiem

Przed przejściem dalej należy zapoznać się z dostępnymi metodami i sposobem komunikacji z api opisanymi tutaj: https://doc.yetiforce.com/api/

## 1. Tworzenie dokumentu z załącznikiem

Do utworzenia wpisu w module Dokumenty należy wykorzystać metodę api umożliwiającą tworzenie rekordu, tj.

![create-record](create-record.png)

https://doc.yetiforce.com/api/#/BaseModule/ea3b9bea091cbde741323b5393901825

Cała trudność w dodawaniu załącznika polega na odpowiednim przygotowaniu zapytania. Standardowo w zapytaniu należy odpowiednio uzupełnić pola modułu i w tym przypadku nie będzie inaczej.

Nazwy pól modułu dostępne są w panelu edycji pól w konfiguracji systemu: Konfiguracja systemu -> Moduły standardowe -> Moduły - pola

Pola odpowiedzialne za dodanie załącznika to:

- Typ pliku [filelocationtype]

  Pole to określa typ załącznika. Dostępne są dwie wartości: I - Wewnętrzny, E - Zewnętrzny

- Nazwa pliku/WWW [filename]

  Załącznik lub odnośnik

Posiadając już wiedzę o strukturze modułu Dokumenty można przejść do wysyłania zapytań do api. Poniżej kilka przykładów konstrukcji tego typu zapytań:

### Postman

![create record Postman](create-record-PostmanApiDoc2.png)

### Guzzle, PHP HTTP client

https://github.com/guzzle/guzzle

```php
$uri = 'https://example.com/webservice/RestApi/Documents/Record';
$options = [
   'headers' => [
     'User-Agent' => 'YetiForceRestApi',
     'x-api-key' => 'P0fzRUuzPNWC9pxYq3MeEUp6AJ9EJpWN',
     'x-token' => '9c65f656c9380b7066d992ec59c00c0d29147a579351742b0e9f43a73312f5be',
   ],
  'auth' => ['userName', 'Password'],
  'timeout' => 10,
  'connect_timeout' => 2
];
$httpClient = new \GuzzleHttp\Client($options);
$options['multipart'] = [
   ['name' => 'notes_title', 'contents' => 'Document pdf'],
   ['name' => 'filelocationtype', 'contents' => 'I'],
   [
     'name' => 'filename',
     'filename' => 'YetiForce.pdf',
     'contents' => file_get_contents('YetiForce.pdf')
   ]
];

$response = $httpClient->request('POST', $uri, $options)->getBody()->getContents();
```

### cURL, PHP

```php
$url = 'https://example.com/webservice/RestApi/Documents/Record';
$headers = [
   'User-Agent: YetiForceRestApi',
   'x-api-key: P0fzRUuzPNWC9pxYq3MeEUp6AJ9EJpWN',
   'x-token: 9c65f656c9380b7066d992ec59c00c0d29147a579351742b0e9f43a73312f5be',
   'Content-Type: multipart/form-data'
];
$userName = 'userName';
$password = 'Password';

$cf = new CURLFile(realpath('YetiForce.pdf'));
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
curl_setopt($ch, CURLOPT_USERPWD, "{$userName}:{$password}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, ['notes_title' => 'Document pdf', 'filelocationtype' => 'I', 'filename' => $cf]);

$response = curl_exec($ch);
```

## 2. Powiązanie utworzonego dokumentu z innym wpisem.

Istnienie dokumentu niepowiązanego w systemie jest bezcelowe, dlatego każdy utworzony wpis w module Dokumenty powinien zostać przypisany do rekordu innego modułu, np. Kontaktu, Kontrahenta, Zgłoszenia czy dowolnego innego, z którym istnieje taka możliwość.

Nie trzeba tworzyć osobnych zapytań do api celem powiązania dokumentu, czynność tę można wykonać bezpośrednio przy jego tworzeniu, dodając kilka dodatkowych zmiennych, i są nimi:

- relationOperation (bool) /obowiązkowe

  Określa, iż tworzony wpis podlega powiązaniu

- sourceModule (string) /obowiązkowe

  Nazwa modułu, z którym należy powiązać utworzony dokument

- sourceRecord (int) /obowiązkowe

  Identyfikator rekordu, z którym należy powiązać utworzony dokument

- relationId (int) /opcjonalne

  Identyfikator relacji pomiędzy danymi modułami. 

  Wymagany, jeżeli istnieje więcej niż jedna relacja pomiędzy modułami.

Przykładowy plik:

```php
$httpClient = new \GuzzleHttp\Client($options);
$options['multipart'] = [
 ['name' => 'notes_title', 'contents' => 'Document pdf'],
 ['name' => 'filelocationtype', 'contents' => 'I'],
 [
     'name' => 'filename',
     'filename' => 'YetiForce.pdf',
     'contents' => file_get_contents('YetiForce.pdf')
 ],
 ['name' => 'relationOperation', 'contents' => true],
 ['name' => 'sourceModule', 'contents' => 'Contacts'],
 ['name' => 'sourceRecord', 'contents' => 124]
];
$response = $httpClient->request('POST', $uri, $options)->getBody()->getContents();
```
