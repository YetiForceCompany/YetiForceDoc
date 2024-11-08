---
title: Loader and autoloader of files
description: Autoloader is a mechanism that improves uploads of files and classes.
keywords:
  - loader
  - autoloader
  - silnik
  - YetiForce
tags:
  - loader
  - autoloader
---

## Autoloader

Autoloader is a mechanism that improves uploads of files and classes. It has been designed to ensure simpler creation of new modules because there is no need to upload the same files for the module to work properly. In reality, it is used only to avoid rigid writing of paths to certain files. If a class name is created according to the specification described below, the Autoloader will upload an appropriate file before the creation of an object/class. There is also a mechanism called "Loader" that is responsible for the upload of an appropriate file.

A few important principles about the `Autoloader`:

1. By default "Autoloader" works only within a module directory, e.g. `modules/MyModule/`.
2. Module, file or directory name cannot contain underscores "\_".
3. In order for the Autoloader to upload a file, a class with an appropriate name has to be triggered:

   Example A:

   - class name: MyModule_xyz_Model
   - loaded file: modules/MyModule/models/xyz.php

   Example B:

   - class name: MyModules_helper_ComponentName_Lib
   - loaded file: modules/myModule/helper/libs/ComponentName.php

4. Directory names (of directories with files to which you refer) have to end with "s" in order for the "Autoloader" to work whereas class names have to be without "s".

   Przykładowy plik:

   - modules/ModuleName/actions/ComponentName.php - ModuleName_ComponentName_Action
   - modules/ModuleName/models/ComponentName.php - ModuleName_ComponentName_Model
   - modules/ModuleName/uitypes/ComponentName.php - ModuleName_ComponentName_Uitype
   - modules/Contacts/helper/libs/ComponentName.php - Contacts_helper_ComponentName_Lib

## Loader

There is also a `Loader` within the system and it is responsible for the upload of files. By knowing its working principles, it is possible to overwrite system files without changing engine files. Some of the capabilities of a Loader are described below:

:::tip
The mechanism described below works from version YetiForce `2.1`
:::

The Loader allows to overwrite any system file. A folder named 'custom' needs to be added to the main system directory and a complete file path provided, e.g. `custom/modules/Accounts/Accounts.php`. The system will load the file Accounts.php instead of the original file. Currently, this solution works only for modules, but in the future the system will allow to change system files globally. A list of directories possible to overwrite:

- modules/ModuleName/... >> custom/modules/ModuleName/...
- languages/... >> custom/languages/...
- layouts/vlayout/modules/... >> custom/layouts/vlayout/modules/...

In case of language files, the mechanism responsible for overwriting works differently. An empty language file has to be created and you should only add translations that need to be overwritten (no need to duplicate the entire language file).
