---
title: How to back up the YetiForce application
description: 'How to perform a YetiForce backup: database, application files, storage directory, permissions, backup retention and verification.'
keywords:
  - copy
  - YetiForce copy
  - backup
  - files
  - databases
  - storage
  - mysqldump
  - YetiForce
tags:
  - backup
preview: 3-backup-yetiforce-app.jpg
---

This article shows you how to perform a full YetiForce backup step by step. A successful YetiForce backup should include the database, application files, and the user `storage` directory.

If you're looking for a short answer: a full YetiForce backup is a separate database dump, a separate copy of the application files, and a separate copy of the `storage` directory, preferably encrypted, with permissions control and regular recovery testing.

![3-backup-yetiforce-app.jpg](3-backup-yetiforce-app.jpg)

## Before you begin

Before performing a backup, it's best to limit changes to the system. It's safest to perform the backup during a period of low user activity and ensure that no CRON tasks, imports, or integration processes that write data to the database or storage directory are running during the backup.

:::tip

Best practice is to periodically test the backup restoration on a separate environment. A backup that cannot be restored is not an effective safeguard.

:::

## How to backup the YetiForce database

Begin your backup by taking a full database dump. This is a key step in the entire process.

Example `mysqldump` command:

```bash
mysqldump --single-transaction --skip-lock-tables --quick -f yetiforce_database_name
```

The above parameters help reduce the risk of interrupting the backup process, for example in the event of problems with the database structure.

:::warning

Making only a copy of the files without a database dump does not allow for correct system recovery.

:::

## How to back up YetiForce application files

Next, back up almost the entire YetiForce application directory. You can skip the following directories during the backup:

- `__YF_ROOT__`/cache/session/
- `__YF_ROOT__`/cache/templates_c
- `__YF_ROOT__`/storage

In the following example, the command is run from the parent directory of `__YF_ROOT__`.

```bash
7z a -mx=4 $BC_PATH.7z html -x!html/storage/ -x!html/cache/session/ -x!html/cache/templates_c/ -P$BC_SECRET
```

:::warning

- `__YF_ROOT__` is the application's root directory, which contains system files such as `app_data` and `user_privileges`.
- The copy should always be encrypted and the password safely stored.

:::

## How to back up user files

Separately from the copy of the application itself, make a copy of the user files directory, `__YF_ROOT__`/storage (for example, `/home/yfprod/html/storage`). This allows you to separate the application code from user data. This is especially important when user files take up a lot of space, and it's better to archive them separately, or even on a separate virtual machine for larger data scales. This copy can be made with a lower compression ratio to reduce archive creation and recovery times.

In the following example, the command is run from the parent directory of `__YF_ROOT__`.

```bash
7z a -mx=2 $BACKUP_PATH.7z html/storage/ -P$BACKUP_SECRET
```

## Is a copy of the entire virtual machine enough?

In practice, we've often encountered situations where restoring a snapshot or backup of the entire virtual machine wasn't enough to immediately get YetiForce up and running. The most common cause was database issues after restoring the entire machine.

Therefore, we recommend making backups on several layers and storing them in different locations.

Example:

- database backup
- app files backup
- `storage` directory backup
- snapshot of the machine or server as an additional layer of security

## Ho to remove old backups

We don't recommend deleting old backups based solely on file age. If a new backup fails, for example due to insufficient space or a database issue, you may be left without a valid backup. It's safer to manage retention based on the number of archives retained.

Example:

```bash
ls $BACKUP_DIR/db/* -1t | tail -n +3 | xargs rm -f
ls $BACKUP_DIR/app/* -1t | tail -n +3 | xargs rm -f
ls $BACKUP_DIR/storage/* -1t | tail -n +3 | xargs rm -f
```

The above example keeps the two most recent copies in each directory.

## How to set up backup permissions

After creating a copy, it is worth limiting permissions so that only the designated owner has access to the archives.

```bash
chown -R root:root $BACKUP_DIR
chmod 700 $BACKUP_DIR
```

## How to check if the YetiForce backup is valid

Once the process is complete, check that:

- the archives have been created and have the expected size,
- the database dump was not interrupted by an error,
- the backups are saved in the correct location,
- the passwords for encrypted archives are stored safely,
- [system-migration-or-recovery procedure](system-migration-or-recovery) has been tested at least in a test environment.

If backups are done periodically via CRON, be sure to also log job results and error notifications. This will help you more quickly detect situations where backups are no longer performing correctly.

## FAQ

### What should a full YetiForce backup contain?

A full YetiForce backup should contain three elements: a database dump, a copy of the application files, and a copy of the storage directory. Omitting any of these elements may prevent a successful system restore.

### Is a snapshot of a server or virtual machine enough?

No. Snapshots can provide an additional layer of security, but they shouldn't replace separate copies of the database and files. In practice, problems after a restore most often involve the database itself or inconsistent data saved during system operation.

### How often should YetiForce backups be performed?

The frequency depends on the number of changes in the system. For production environments, regular backups are standard, performed automatically using CRON, at least once a day, and even more frequently in systems with high volumes of operations.

### How to check if the backup is working?

The best method is to test the backup restoration in a separate environment. The mere presence of a backup file doesn't guarantee that the data can be successfully restored. Please see the article on [system migration or recovery](system-migration-or-recovery).
