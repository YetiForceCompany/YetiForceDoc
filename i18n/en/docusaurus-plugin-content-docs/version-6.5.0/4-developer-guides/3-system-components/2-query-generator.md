---
title: QueryGenerator
description: QueryGenerator mechanism, which can list any data from entity type modules.
keywords:
  - QueryGenerator
  - query
  - builder
  - engine
  - YetiForce
tags:
  - QueryGenerator
---

:::tip The functionality is available for YetiForce version `3.5` and later
:::

The QueryGenerator mechanism can be used to list any data from entity type modules.

## Load filter from a specific module

```php
$queryGenerator = new \App\QueryGenerator('Accounts');
$queryGenerator->initForCustomViewById(106);
```

## Add to mandatory conditions

```php
$queryGenerator->addCondition('accounttype', 'Customer', 'e');
$queryGenerator->addCondition('accounttype', 'Customer', 'e');
$queryGenerator->addCondition('id', 124, 'e');
$queryGenerator->addNativeCondition(['status' => 1, 'type' => 2]);
$queryGenerator->addNativeCondition(['id' => [4, 8, 15]]);
```

## Add to optional conditions

```php
$queryGenerator->addCondition('accounttype', 'Customer', 'e',false);
$queryGenerator->addCondition('id', 124, 'e',false);
$queryGenerator->addNativeCondition(['status' => 1, 'type' => 2],false);
$queryGenerator->addNativeCondition(['id' => [4, 8, 15]],false);
```

## Add joins

http://www.yiiframework.com/doc-2.0/guide-db-query-builder.html#join

```php
$this->addJoin(['LEFT JOIN', 'vtiger_crmentity', 'vtiger_activity.activityid = vtiger_crmentity.crmid');
```

## Operator list

const STANDARD_OPERATORS

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/app/Condition.php#L65-L103
```

## Date fields operators list

const DATE_OPERATORS

```ini reference
https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/app/Condition.php#L22-L58
```

## Download data

```php
$rows = $queryGenerator->createQuery()->all();
foreach ($rows as &$row) {
}
```

or

```php
$dataReader = $queryGenerator->createQuery()->createCommand()->query();
while ($row = $dataReader->read()) {
}
```

## Sort

```php
$queryGenerator->setOrder('accountid');
$queryGenerator->setOrder('accountid', \App\Db::ASC);
$queryGenerator->setOrder('accountid', \App\Db::DESC);
```

## Combine displayed data

```php
$queryGenerator->setConcatColumn('date_start', "CONCAT(vtiger_activity.date_start, ' ', vtiger_activity.time_start)");
$queryGenerator->setConcatColumn('due_date', "CONCAT(vtiger_activity.due_date, ' ', vtiger_activity.time_end)");
```

## Add non-field columns

```php
$queryGenerator->setCustomColumn('u_yf_openstreetmap.lon');
```

## Add fields

```php
$queryGenerator->setField(['visibility', 'assigned_user_id', 'activitystatus']);
```

## Add fields from a related module

```php
$queryGenerator->addReletedField([
 'sourceField' => 'xxxxxxxxxxx',
 'relatedModule' => 'OSSTimeControl',
 'relatedField' => 'timecontrol_type',
]);
```

## Add conditions from a related module

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
