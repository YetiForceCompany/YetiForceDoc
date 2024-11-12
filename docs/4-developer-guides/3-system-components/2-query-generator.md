---
title: QueryGenerator
description: Mechanizm QueryGenerator, którym można listować dowolne dane z modułów typu entity.
keywords:
  - QueryGenerator
  - zapytanie
  - konstruktor
  - silnik
  - YetiForce
tags:
  - QueryGenerator
---

:::tip

Funkcjonalność dostępna od wersji YetiForce `3.5`

:::

The QueryGenerator mechanism can be used to list any data from entity type modules.

## Wczytanie filtru z konkretnego modułu

```php
$queryGenerator = new \App\QueryGenerator('Accounts');
$queryGenerator->initForCustomViewById(106);
```

## Dodanie do warunków wymaganych

```php
$queryGenerator->addCondition('accounttype', 'Customer', 'e');
$queryGenerator->addCondition('accounttype', 'Customer', 'e');
$queryGenerator->addCondition('id', 124, 'e');
$queryGenerator->addNativeCondition(['status' => 1, 'type' => 2]);
$queryGenerator->addNativeCondition(['id' => [4, 8, 15]]);
```

## Dodawanie do warunków opcjonalnych

```php
$queryGenerator->addCondition('accounttype', 'Customer', 'e',false);
$queryGenerator->addCondition('id', 124, 'e',false);
$queryGenerator->addNativeCondition(['status' => 1, 'type' => 2],false);
$queryGenerator->addNativeCondition(['id' => [4, 8, 15]],false);
```

## Dodanie join-ów

http://www.yiiframework.com/doc-2.0/guide-db-query-builder.html#join

```php
$this->addJoin(['LEFT JOIN', 'vtiger_crmentity', 'vtiger_activity.activityid = vtiger_crmentity.crmid');
```

## Lista operatorów

const STANDARD_OPERATORS

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/app/Condition.php#L65-L103
```

## Lista operatów pól dat

const DATE_OPERATORS

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/app/Condition.php#L22-L58
```

## Pobranie danych

```php
$rows = $queryGenerator->createQuery()->all();
foreach ($rows as &$row) {
}
```

lub

```php
$dataReader = $queryGenerator->createQuery()->createCommand()->query();
while ($row = $dataReader->read()) {
}
```

## Sortowanie

```php
$queryGenerator->setOrder('accountid');
$queryGenerator->setOrder('accountid', \App\Db::ASC);
$queryGenerator->setOrder('accountid', \App\Db::DESC);
```

## Łączenie wyświetlanych danych

```php
$queryGenerator->setConcatColumn('date_start', "CONCAT(vtiger_activity.date_start, ' ', vtiger_activity.time_start)");
$queryGenerator->setConcatColumn('due_date', "CONCAT(vtiger_activity.due_date, ' ', vtiger_activity.time_end)");
```

## Dodanie kolumn niebędących polami

```php
$queryGenerator->setCustomColumn('u_yf_openstreetmap.lon');
```

## Dodanie pól

```php
$queryGenerator->setField(['visibility', 'assigned_user_id', 'activitystatus']);
```

## Dodanie pól z modułu powiązanego

```php
$queryGenerator->addReletedField([
 'sourceField' => 'xxxxxxxxxxx',
 'relatedModule' => 'OSSTimeControl',
 'relatedField' => 'timecontrol_type',
]);
```

## Dodanie warunków z modułu powiązanego

```php
$queryGenerator->addReletedCondition([
 'sourceField' => 'xxxxxxxxxxx',
 'relatedModule' => 'OSSTimeControl',
 'relatedField' => 'timecontrol_type',
 'value' => 'PLL_BREAK_TIME',
 'operator' => 'e',
 'conditionGroup' => true,
]);
```
