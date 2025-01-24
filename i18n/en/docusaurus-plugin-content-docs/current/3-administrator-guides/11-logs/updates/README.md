---
title: Updates
description: The process of system update is simpler than the installation or migration process, so every YetiForce administrator should be able to cope with it.
keywords:
  - configuration
  - verification
  - report
  - server
  - system
  - Settings
  - YetiForce
tags:
  - configuration report
  - server
  - system
preview: update-1.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player';

The process of system update is simpler than the installation or migration process, so every YetiForce administrator should be able to cope with it. One of the most important things that you need to remember is that before attempting to update the system, you should always make a backup copy and begin the process on the testing environment. Updates performed directly on production are one of the most common mistakes made by young administrators.

:::warning IMPORTANT

If your system is heavily customized, we strognly recommend that the update process be conducted by our experienced specialists.

Contact us to receive a quote.

:::

<Tabs groupId="zhh7fxZ293w">
    <TabItem value="youtube-zhh7fxZ293w" label="🎬 YouTube">
        <ReactPlayer
            url="https://www.youtube.com/watch?v=zhh7fxZ293w"
            width="100%"
            height="500px"
            controls={true}
        /></TabItem>
    <TabItem value="yetiforce-zhh7fxZ293w" label="🎥 YetiForce TV">
        <ReactPlayer url="/video/system-update.mp4" width="100%" height="500px" controls={true} /></TabItem>
</Tabs>

System update can be divided into 3 types of activities, which involve quite important processes:

## Pre-update activities

- Make a full backup of the entire system (all files/folders)
- Backup the database
- Disable Cron - it can be disabled in the administration panel (it is recommended to disable all tasks). You can also disable Cron by renaming the cron.php file
- Enable logs ([Debug](/developer-guides/debug#summary))
- Backup the system and perform test update

## Activities during the update

Go to the Admin Panel (Software Configuration), select `Logs → Updates` in the menu.

In the selected window, there are two options to choose between:

![update-1.jpg](update-1.jpg)

### Manual installation

In this type of installation, it is important to download the appropriate package.

Paczkę aktualizacyjną można pobrać z kilku miejsc, jednakże zalecanym miejscem jest nasze repozytorium GitHub: https://github.com/YetiForceCompany/UpdatePackages/tree/master/. Znajdują się tam paczki aktualizacyjne do wszystkich wersji. Należy wybrać tę paczkę, która odpowiada obecnej wersji systemu. Aktualizacja wymaga zachowania odpowiedniej kolejności paczek. Jeżeli masz wersje `1.1`. a chciałbyś uaktualnić system do wersji `2.0`, powinieneś pobrać następujące paczki aktualizacyjne:

- 1.1.0RC_to_1.2.0RC
- 1.2.0RC_to_1.3.0RC
- 1.3.0RC_to_1.4.0RC
- 1.4.0RC_to_2.0.0

There are built-in mechanisms that do not allow to upload incorrect packs, but they can be omitted. Although it is obviously not recommended, some might be tempted by the fact that it can save time. `1.2.0`, `1.4.0`] and it's impossible to update the system with versions that are in between [called minor versions, e.g. `1.2.54`, `1.4.11`]. This can happen in the following cases:

1. directly from the main GitHub folder]. It should be downloaded from here: https://github.com/YetiForceCompany/YetiForceCRM/releases
2. Update package for a minor version has been uploaded. It might be downloaded from the developer tree: https://github.com/YetiForceCompany/UpdatePackages/tree/developer/YetiForce%20CRM%201.x.x

Regardless of the reason, it's important to remember to:

1. Open this file: https://github.com/YetiForceCompany/YetiForceCRM/blob/master/config/version.php on the server where your system is located;
2. from `1.4.55` version to `1.4.0` [always reduce the number].

After selecting a proper version of the update package, you can proceed to the manual method of uploading it by clicking the `Upload update` button.

![update-2.jpg](update-2.jpg)

Select the appropriate version and click `Import`.

![update-3.jpg](update-3.jpg)

### Installation from the panel

The `Available upgrade packages` table lists the packages that the system automatically detects according to your version.

![update-4.jpg](update-4.jpg)

When your Internet is enabled, click on `Download package`.

After downloading, you can begin the installation by clicking the `Install package` button.

![update-5.jpg](update-5.jpg)

Accept the license - it's the last step, both in the manual installation and in the automatic installation. If everything is correct, you should see a window with information about the version number and a list of important changes that the update introduces, and which may affect its course. If you are prepared and you have enabled the logs, accept the license, and start the update by pressing the `Yes` button.

![update-6.jpg](update-6.jpg)

The properly performed installation will complete by displaying the summary window or redirecting to the desktop.

## Post-update activities

### Verify update

- First check logs and search for any errors or warnings. Log files can sometimes contain 20 thousand lines of code so it is recommended to use keywords, e.g.
- Wyłącz dzienniki po kilku dniach używania systemu w celu sprawdzenia, czy występują błędy ([Debug](/developer-guides/debug#podsumowanie))
- Update the languages in the system.
- Update lib_roundcube library to the version corresponding to your system.
- In the admin panel, in the [`Software configuration → Standard modules → Modules - installation`](/administrator-guides/standard-modules/modules-installation/)you can see whether a previously installed library requires updating.
- Instal the latest version of a Service Pack, if it was released for a given version

After installing the update, you can go to the `Software Configuration → Logs → Updates` to see currently available Service Packs. If there are no available versions in the list view, the latest version is installed.

![update-7.jpg](update-7.jpg)

- Enable Cron and check its correct operation. In order to do it, go to the admin panel to see if the Cron tasks have been started and if they have been completed correctly.

## Tests of proper system operation

- Test the system by clicking to see if all views are working [if you can edit, modify, delete records]. Perform changes primarily as an unprivileged user.
- Perform the necessary tests, for example, sending e-mails, generating PDF documents, editing roles or access rules
- Check communication with external systems, e.g.

## How to cope with problems

The most important thing is to know how to analyze logs because 99% of solutions can be found there. Not only application logs are important but also server logs are an excellent source of information. The second step might be a description of a problem on GitHub where our community and YetiForce team provide free assistance. Before you add an issue here: https://github.com/YetiForceCompany/YetiForceCRM/issues you should prepare a step-by-step description, relevant logs, important screenshots that will help us to reproduce the error. An issue with insufficient description will extend the process of solving a problem. It is also possible to ask for professional and paid support from YetiForce team, visit our [Marketplace](https://yetiforce.com/en/marketplace/support.html) to see what we offer.
