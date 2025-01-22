---
title: Access control to system functionalities
description: One of the key security elements of YetiForce is access control to functionalities, tools, and actions available in the system.
keywords:
  - control
  - access
  - functionality
  - YetiForce
tags:
  - control
  - access
  - functionality
---

One of the key security elements of the YetiForce system is the control of access to functionalities, tools and actions at the user and administrator level. By default, access to all system elements, such as modules, tools, buttons, or actions, is checked.

## Functionality access logic

### Functionality division

The YetiForce system offers its users a rich choice of tools, including the most important functionality which is a module (e.g. There are many common elements in each module, i.e.:

- Actions
- Tools
- Views
- Filters
- Fields / Picklists
- Widgets

whether the field is visible to the user or whether they can use the filter. Additionally, there are two types of picklists. One of them includes the ability to define permissions to values, and therefore allows you to control the process of modifying a record, taking into account what role can change what statuses, e.g.the technical department can modify the tickets and set their status to "for verification", while the control department can change their status to "verified, to be closed". This is one of the ways to implement the principle of "separation of duties".

### Access to modules, actions, fields

Access to a module, action, or field is defined at the profile level, meaning that a user assigned to a specific role inherits the profiles that have been set in the role. Assigning a profile to a user is not done directly, but indirectly by assigning it to a role.

You can specify general permissions on the module layer in the profile, i.e.:

- Preview
- Create
- Edit
- Delete

If the user is granted permissions to view/edit in the module, it means that they will be able to view and edit these records, but they won't be able to delete them or create new ones. Profiles do not grant permissions to data/records, but only to functionalities, tools and actions.

In addition, in each module, you can assign permissions to fields by specifying three states - hidden, read only, write - which allows you to limit permissions to the field and operations on it. system or required by default, cannot have their permissions changed without the involvement of a developer, because they have been imposed by the producer.

In addition to field permissions, you can assign permissions to tools, such as mass editing, emailing, texting, import/export, etc., which means that you have full control over which tools can be utilized by the end user.

### Filter access

Additionally, the administrator can mark the filter as public and grant access to the filter to particular users. The permissions to create and edit filters result directly from the permissions defined in the profile.

### View access

Access to views is partly automatic and partly configurable, for global views [e.g. list, list with preview, summary, details, etc.] permissions are defined globally for the entire organization, while for other views [e.g. create record, edit record, quick create] permissions result directly from the profile.

### Widget access

Access to widgets is defined on three layers [desktop, module, record] but only on the first two layers can we assign who can see which widgets and how they can be managed, while widgets on the third layer are automatically controlled by the system and available to anyone who has access to the record [however, the system does not show widgets for modules to which we do not have permissions].

A very important feature of widgets is that they do not show anything that the user does not have the permission to see. Even if we create a widget that shows all the data in the module, each user will only see the data they have access to.

## Safety mechanisms

### Change permissions

Changing permissions to any elements of the system is performed in real time and does not require the user to relog for the changes to take effect.

### Permission inspector

The permission inspector mechanism, in addition to verifying data permissions, also presents permissions to view, edit, create and delete, which means that you can quickly check at the user's level what permissions they have been granted.

### Central permission supervision system

YetiForce has one central system that verifies permissions for each element. It does not matter whether you are importing data, communicating via API or trying to modify something using the button [e.g. change status], the system always checks whether the user has all the necessary permissions to perform the operation.
