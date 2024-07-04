---
title: Event handlers
description: Event handlers are a powerful tool that allows you to perform additional actions while performing various operations without having to modify base functions.
keywords:
  - Event
  - handler
  - hook
  - engine
  - YetiForce
tags:
  - event
  - handler
  - hook
---

## Basic information

Event handlers are a powerful tool that allows you to perform additional actions while performing various system operations without having to modify or interfere with the system engine.

## Handler registration

The `\App\EventHandler::registerHandler()` method is responsible for registering handlers (adding them to the system)

```php
App\EventHandler::registerHandler('EntityAfterSave', 'OpenStreetMap_OpenStreetMapHandler_Handler', 'Accounts,Leads,Contacts', '', 3);
```

The method takes eight parameters, but only two are required:

```php
registerHandler(string $eventName, string $className, $includeModules = '', $excludeModules = '', $priority = 5, $isActive = true, $ownerId = 0, $mode = 1): bool
```

### Required parameters

- `$eventName` - event name (a list can be found in [Types](#types))
- `$className` - class, whose code will be called when the handler is executed

### Optional parameters

- `$includeModules` (default: '') - specifies in which modules the given EventHandler should be active
- `$excludeModules` (default: '') - specifies in which modules the given EventHandler should be inactive
- `$priority` (default: 5) - execution priority, used when determining the order of execution
- `$isActive` (default: true) - determines if the EventHandler is active
- `$ownerId` (default: 0) - specifies event owner's module ID
- `$mode` (default: 1) - determines if the handler is editable (1 - yes, 0 - no)

### Example

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

## Types

Below you can find a list of event handlers

### Record operations

List for version: `6.4.180`

#### save

- EntityBeforeSave
- EntityAfterSave
- EntityAfterSaveAjax

#### delete

- EntityBeforeDelete
- EntityAfterDelete

#### state change

- EntityChangeState

#### unlink

- EntityBeforeUnLink
- EntityAfterUnLink

#### tworzenie powiązania

- EntityBeforeLink
- EntityAfterLink
- EntityAfterLinkForSource

#### transfer link

- EntityAfterTransferLink
- EntityBeforeTransferUnLink
- EntityAfterTransferUnLink

#### convert lead to account

- EntityBeforeConvertLead
- EntityAfterConvertLead

#### convert records

- RecordConverterAfterSave

#### stock update

- IStoragesAfterUpdateStock

### Operations while displaying views

#### record preview

- EntityAfterShowHiddenData
- DetailViewBefore

#### record edition view

- EditViewBefore
- EditViewDuplicate
- InventoryRecordDetails

#### walidacja

- EditViewPreSave - walidacja formularza
- PreDelete - walidacja usuwania
- PreStateChange - walidacja zmiany stanu

#### field value change

- EditViewChangeValue

#### get record data

- RecordGetData

#### display related module buttons

- RelationListLinks

#### PDF generation popup

- PdfModalBefore
- PdfModalAfter

#### send email view

- MailComposeParamBefore
- MailComposeParamAfter

### Group operations

#### delete group

- GroupBeforeDelete

### User operations

#### delete user

- UsersBeforeDelete
- UsersAfterDelete

#### save user

- UserBeforeSave
- UserAfterSave

#### login user

- UsersAfterLogin

#### logout user

- UserLogoutBefore

#### user password reset

- UsersBeforePasswordChange
- UsersAfterPasswordChange

### Picklist operations

#### rename picklist value

- PicklistAfterRename

#### delete picklist value

- PicklistAfterDelete

### Email operations

#### add to queue

- MailerAddToQueue

#### send message

- MailerBeforeSend
- MailerAfterSend

#### report errors related to sent emails

- MailerAddToLogs
- MailerAfterSendError

### PDF templates operations

#### PDF template generation

- PdfGenerate
- PdfGenerateInit

## Exceptions - bypassing handlers and workflows

- disableHandlers - disable all handlers except the mandatory ones
- disableWorkflow - disable only the workflow handler
- disableHandlerByName - disable one specific handler

```php
$recordModel->setHandlerExceptions(['disableHandlers' => true]);

$recordModel->setHandlerExceptions(['disableWorkflow' => true]);

$recordModel->setHandlerExceptions(['disableHandler' => ['ModTracker_ModTrackerHandler_Handler']]);
```

### Mandatory handlers

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/2c14baaf8dbc7fd82d5c585f2fa0c23528450618/app/EventHandler.php#L23
```
