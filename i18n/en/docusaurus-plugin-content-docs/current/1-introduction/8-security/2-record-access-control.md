---
title: Record access control
description: Limiting access to data is crucial for the company's security
keywords:
  - control
  - access
  - records
  - YetiForce
tags:
  - control
  - access
  - records
---

Limiting access to data is crucial for organizations that care about systems that meet the `need to know` principle - i.e.

## Data access business logic

### Parent Access Levels

Access to any data in the YetiForce system always requires authorization, which permits the user to view data. The main configuration of the system defines two overriding levels of data access:

- Public access
- Private access

Granting public access to a specific module means that the user who has access to the module (has it enabled in the viewable profile) has access to all data, regardless of who owns or shares the record. If private access is specified, the permission mechanisms described below apply.

By default, all modules in the system have a public access level, which means that at the implementation stage and after obtaining specific permissions, access to data should be configured in accordance with the business logic of the organization. In practice, some functionalities may have public access (even in large organizations), when the data contained in the module should be available to all users.

### Special permissions

The system includes a mechanism that grants access to data under special conditions. The `Special access` module allows you to grant read and edit permissions for data that a user does not own. a person with special permissions has access to all records, regardless of who owns them.

However, special access has some limitations - it does not grant permissions to delete data and does not grant permissions to records assigned to groups.

### Permissions resulting from the organizational structure

If access to the module is set to private, then the system verifies authorizations for each record independently and verifies the user's access level before providing data. By default, the system allows access to data to people higher in the hierarchy than the owner of the record. This means that without additional configuration, the system provides access to data in accordance with the hierarchy of dependencies in the organization.

### Permissions resulting from groups

Each record in the system can be assigned to a group, in this case the access to data is granted to all people who are part of the group, regardless of whether the users are assigned to the group, other groups, or roles, the system always calculates access per system users.

### System administrator's data permissions

The system allows you to create users who are administrators (and super-administrators) who shouldn't use the system, but have access to all data visible to regular users (a super-administrator can limit access to some functionalities, but this applies to the administration panel and not access to data).

### Restricting access to `private` records

In organizations where access to data should be general and restrictions are only point-based, you can use the functionality that allows you to change the access to the record to `private`. This change means that, regardless of all other permissions, access to a record marked as private is possible only for users who are the owner of the record, a person who shares the record, or the system administrators. access that allows viewing all records regardless of permissions) do not work, so access to a private record must be granted manually each time directly in the record.

## Custom permission mechanisms

### Access exceptions

Due to the variety of responsibilities in the organization, there is often a need to grant permissions that don't result directly from the organizational structure (e.g., an employee in branch B needs access to the data of branch A). To achieve that, you can use the tool available in "Access to modules", where you can create exceptions for each functionality independently. Access exceptions allow you to define additional permissions to view and edit data (access exceptions do not allow you to reduce permissions or grant permissions to delete).

### Permissions resulting from the hierarchy (downwards)

One of the most important features is the ability to activate permissions granted due to access to the parent record, e.g., if you have access to an Account record, you can see all data (e.g., comments, calendar, service contracts, quotes, etc.). This functionality is particularly useful in companies that limit access on a single level (i.e. it grants access to the Account and all of their data).

If we open a related record, such as an invoice on the Account, then the system verifies whether the user has the permissions to the parent record; if so, the system will allow you to open the record. At the same time, the record you opened from the Account level (e.g. an invoice) will not be available to the user in other views, e.g. in the list of all invoices.

### Permissions resulting from the hierarchy (upwards)

Another mechanism that enables access to data is a hierarchy operating "upwards of dependencies", e.g., if you have access to a customer's invoice, you will also get access to the Account record because the Account is a superior element. This mechanism does not work "on the fly" but requires enabling it in the panel and enabling special conversion scripts in CRON. Recalculating permissions will result in granting access to the Account not because you are its owner, but because you have access to the subordinate element for this contractor, and it will be visible in the record list (e.g., in the list of Accounts you will see an Account record that you don't own).

Hierarchical permissions are disabled by default and must be manually activated. Each case requires an analysis to determine whether this mechanism could potentially grant excessive access to data that the user should not see.

### Permissions resulting from advanced configuration

The advanced permissions mechanism is a panel that allows you to create access rules that do not result from the default permissions mechanisms, e.g. This mechanism works in the `cache` and after changing the rules in the tool, recalculation of permissions should be forced. This mechanism is not recommended because since the system has to recalculate the permissions, it cannot determine in real time whether the user should have access to the information. By default, this panel is disabled.

## Permission verification

### Permission inspector

With such advanced permission tools, access administration may turn out to be difficult, which is why a tool that allows verification of permissions and access directly from the user's side has been implemented in the system. The permission inspector works on two layers (separately for each module). The first layer is the list of records (the system verifies who has access to the data on the list and to what extent), and the second layer is the verification of permissions to a specific record (you can check who else has access to a record by opening it).

Most importantly, the tool shows not only who has access, but also why the access was granted (for example, in which configuration panel the permissions were granted), so you can quickly find the right place if you need to reduce the permissions for the user.

### Separation of duties

In order to properly comply with [separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties), the system allows you to specify the permissions to picklist values (e.g., you can specify which employee can change the status of a record), and the system itself has advanced process mechanisms that control what data and by whom should be filled in at which stage of the process.

### Conflict of interest

In organizations where access to data may create a conflict of interest, a built-in mechanism can be used to verify that a user conflicts with the data they are working on. If this happens, security mechanisms will be activated and the record will be reassigned to another user.

### Permission inspection

All permissions work in real time, except for advanced permissions, which are disabled by default and are recalculated with a delay. This means that changing the role, profile, or the data the user can access is modified immediately and does not require relogging.
