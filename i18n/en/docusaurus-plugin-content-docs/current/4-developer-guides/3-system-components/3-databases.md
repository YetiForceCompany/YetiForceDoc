---
title: Database communication engine
description: QueryGenerator mechanism, which can list any data from entity type modules.
keywords:
  - loader
  - autoloader
  - engine
  - YetiForce
tags:
  - loader
  - autoloader
---

Starting from version 3.3, YetiForce has a new database communication engine built-in, which we continuously develop and improve together with each new release.

This allows YetiForce to communicate with multiple database engines (DBMS) that are compliant with PDO, such as MariaDB, MySQL, PostgreSQL, MSSQL, SQLite, Oracle, and Cubrid.

It does not yet have all the mechanisms rewritten to be able to fully install the system on another database engine.

## Related documentation

- [Yii - Working with Databases](https://www.yiiframework.com/doc/guide/2.0/en/start-databases#configuring-db-connection)
- [DBMS comparison](https://www.sql-workbench.eu/dbms_comparison.html)
- [Modern SQL](https://modern-sql.com/)
- [Comparison of relational database management systems](https://en.wikipedia.org/wiki/Comparison_of_relational_database_management_systems)

## Table names

We use prefixes in table name, for example `u_#__crmentity_label` >> `u_yf_crmentity_label`. The default prefix is `yf_`

- a_yf_encryption = 'admin' (administrator's part)
- s_yf_multireference = 'admin' (configuration's part)
- l_yf_sqltime = 'log' (this part only contains logs)
- o_yf_csrf = 'log' (this part only contains OWASP messages)
- w_yf_servers = 'portal' (temporary name; this part is only for webservice applications including Portal)

More examples: https://github.com/yiisoft/yii2/tree/master/tests/framework/db

## Query building basics

http://www.yiiframework.com/doc-2.0/yii-db-queryinterface.html#where()-detail

## Data types

### MySQL

https://github.com/YetiForceCompany/yii2-framework/blob/yetiforce/db/mysql/Schema.php#L42-L75

https://github.com/YetiForceCompany/yii2-framework/blob/yetiforce/db/mysql/QueryBuilder.php#L26-L49

### PgSQL

https://github.com/YetiForceCompany/yii2-framework/blob/yetiforce/db/pgsql/Schema.php#L44-L126

https://github.com/YetiForceCompany/yii2-framework/blob/yetiforce/db/pgsql/QueryBuilder.php#L52-L78

## Database connection without primary database parameter

```php
$db = \App\Db::getInstance();
$db = \App\Db::getInstance('base');
$db = \App\Db::getInstance('log');
$db = \App\Db::getInstance('admin');
```

## Downloading data

http://www.yiiframework.com/doc-2.0/guide-db-query-builder.html

```php
$query = (new \App\Db\Query())
	->select(['id', 'user_name'])
	->from('vtiger_users')
	->where(['status' => 'Active'])
	->limit(10)
	->andWhere(['between', 'holidaydate', $date[0], $date[1]]);
```

## Shortcuts

```php
$query->all();

$query->createCommand()->queryOne() => $query->one() // get first line
$id = (new \App\Db\Query())->from($tableName)->scalar(); // get value from first line first column

// Full version:
$dataReader = $query->createCommand()->query();
$values = [];
while ($shownerid = $dataReader->readColumn(0)) {
 $values[] = $shownerid;
}

// Short version:
$values = $query->column();
```

## Join

```php
->innerJoin('vtiger_tab', 'vtiger_relatedlists.related_tabid = vtiger_tab.tabid')
->leftJoin('u_yf_announcement_mark', 'u_yf_announcement.announcementid = u_yf_announcement_mark.crmid')
```
