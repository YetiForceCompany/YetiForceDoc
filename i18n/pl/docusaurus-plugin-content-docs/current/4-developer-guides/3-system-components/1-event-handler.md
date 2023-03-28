---
title: Event handler-y
description: Event handler-y są potężnym narzędziem dającym możliwość wykonania dodatkowych akcji podczas wykonywania operacji bez konieczności modyfikacji funkcji bazowych.
keywords:
  - Event
  - handler
  - hook
  - silnik
  - YetiForce
tags:
  - event
  - handler
  - hook
---

## Informacje ogólne

Event handler-y są potężnym narzędziem dającym możliwość wykonania dodatkowych akcji podczas wykonywania systemowych operacji bez konieczności modyfikacji/ingerencji silnika systemu.

## Rejestracja handler-a

Funkcją odpowiedzialną za ich rejestrację (czyli dodanie do systemu) jest metoda `\App\EventHandler::registerHandler()`

```php
App\EventHandler::registerHandler('EntityAfterSave', 'OpenStreetMap_OpenStreetMapHandler_Handler', 'Accounts,Leads,Contacts', '', 3);
```

Metoda przyjmuje aż osiem parametrów ale tylko dwa są wymagane:

```php
registerHandler(string $eventName, string $className, $includeModules = '', $excludeModules = '', $priority = 5, $isActive = true, $ownerId = 0, $mode = 1): bool
```

### Wymagane parametry

- `$eventName` - nazwa event-u (pełna lista w punkcie [Typy](#typy))
- `$className` - klasa, której kod zostanie wywołany przy wykonaniu handler-a

### Opcjonalne parametry

- `$includeModules` (default: '') - określa, w których modułach ma być aktywny dany EventHandler
- `$excludeModules` (default: '') - określa, dla których modułów EventHandler ma nie działać
- `$priority` (default: 5) - priorytet wykonania, używany podczas ustalania kolejności wykonywania
- `$isActive` (default: true) - określa czy EventHandler jest aktywny
- `$ownerId` (default: 0) - określa Id modułu właściciela event-u
- `$mode` (default: 1) - określa czy jest możliwość edycji handler-a (1 - tak, 0 - nie)

### Przykład

```php
\App\EventHandler::registerHandler('EntityBeforeSave', 'Vtiger_FieldsDependency_Handler', implode(',', $modules), '', 5, true, 0, \App\EventHandler::EDITABLE);

class Vtiger_FieldsDependency_Handler
{
  / * EntityBeforeSave function.
   *
   * @param App\EventHandler $eventHandler
   */
  public function entityBeforeSave(App\EventHandler $eventHandler): void
  {
    //kod handler-a
  }
}
```

## Typy

Poniżej znajduje się lista event handler-ów

### Operacje na rekordach

Lista dla wersji: `6.4.180`

#### zapis

- EntityBeforeSave
- EntityAfterSave
- EntityAfterSaveAjax

#### usuwanie

- EntityBeforeDelete
- EntityAfterDelete

#### zmiana stanu rekordu

- EntityChangeState

#### usuwanie powiązania

- EntityBeforeUnLink
- EntityAfterUnLink

#### tworzenie powiązania

- EntityBeforeLink
- EntityAfterLink
- EntityAfterLinkForSource

#### transfer relacji

- EntityAfterTransferLink
- EntityBeforeTransferUnLink
- EntityAfterTransferUnLink

#### konwersja lead-a na kontrahenta

- EntityBeforeConvertLead
- EntityAfterConvertLead

#### konwersja rekordów

- RecordConverterAfterSave

#### aktualizacja stanu magazynowego

- IStoragesAfterUpdateStock

### Operacje podczas wyświetlania widoków

#### widok podglądu rekord

- EntityAfterShowHiddenData
- DetailViewBefore

#### widok edycji rekord

- EditViewBefore
- EditViewDuplicate
- InventoryRecordDetails

#### walidacja

- EditViewPreSave - walidacja formularza
- PreDelete - walidacja usuwania
- PreStateChange - walidacja zmiany stanu

#### zmiana wartości pola

- EditViewChangeValue

#### pobieranie informacji o rekordzie

- RecordGetData

#### wyświetlanie przycisków modułu powiązanego

- RelationListLinks

#### modal generowania PDF-a

- PdfModalBefore
- PdfModalAfter

#### widok wysyłki wiadomości email

- MailComposeParamBefore
- MailComposeParamAfter

### Operacje na grupach

#### usuwanie grupy

- GroupBeforeDelete

### Operacje na użytkowniku

#### usuwanie użytkownika

- UsersBeforeDelete
- UsersAfterDelete

#### zapis użytkownika

- UserBeforeSave
- UserAfterSave

#### logowanie użytkownika

- UsersAfterLogin

#### wylogowanie użytkownika

- UserLogoutBefore

#### reset hasła użytkownika

- UsersBeforePasswordChange
- UsersAfterPasswordChange

### Operacje na polach wyboru

#### zmiana nazwy wartości w słowniku

- PicklistAfterRename

#### usuń wartość słownika

- PicklistAfterDelete

### Operacje na wiadomościach email

#### dodanie do kolejki wiadomości do wysłania

- MailerAddToQueue

#### wysłanie wiadomości

- MailerBeforeSend
- MailerAfterSend

#### raportowanie o błędach podczas wysyłania wiadomości

- MailerAddToLogs
- MailerAfterSendError

### Operacje na szablonach pdf

#### generowanie szablonów pdf

- PdfGenerate
- PdfGenerateInit
