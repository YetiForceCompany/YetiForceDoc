---
title: YetiForce installation
description: How to install YetiForce
keywords:
  - creator
  - installation
  - manual
  - YetiForce
  - how to install
tags:
  - installation
preview: install-1.png
---

In this article, you will find everything you need to know about installing YetiForce - the necessary information, step-by-step installation instructions, as well as the most common errors and problems. **Read all of the following information before proceeding with the installation process.**

## How to install YetiForce?

The installation process of YetiForce is very simple. It's done using a browser-based wizard - just like most web applications.

Before the installation, check if your server complies with the requirements: [YetiForce requirements](requirements) or [How to configure a Debian 10 server for YetiForce](/developer-guides/environments/debian-10)

:::important

A person who is going to install the system should have at least basic knowledge of web servers, databases and server permissions. 99% of installation issues come from people with insufficient experience attempting to install the system. If you are not sure whether you can manage on your own, you can ask somebody with adequate IT expertise. The entire installation process will take up to 30 minutes. Installation of YetiForce is similar to the installation of applications such as WordPress, Joomla, Drupal. Differences between particular tools are minor, so if you managed to install a CMS system, you will also be able to install YetiForce.

:::

## Download and upload system files

First, prepare the installation files. **[Download YetiForce](download) from our official sources.**

:::warning

We recommend downloading the "complete" versions, for example `YetiForceCRM-6.4.0-complete.zip`. If you don't download the "complete" version, you will have to install the libraries using `yarn` and `composer` before installing the system.
The right order is important - first `yarn`, then `composer`.
A sample installation script can be downloaded from [here](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/dependency.sh).

:::

- Unzip the file, with e.g [7-Zip](http://7-zip.org/).
- Copy the directory to the web server, using e.g. [WinSCP](https://winscp.net/).
- Start the installation wizard from the web level (where you copied the files) and follow the steps provided.

You can also use the bash console

```bash
cd /home/yfprod/html/
wget -O YetiForceCRM.zip https://github.com/YetiForceCompany/YetiForceCRM/releases/download/6.2.0/YetiForceCRM-6.2.0-complete.zip
unzip YetiForceCRM.zip
chown -R yfprod:yfprod /home/yfprod/html/
```

## Step 1 - Run the installation wizard

Run the target address of your system in the browser window, the system should show the installation wizard. If it doesn't, there may be some problems, you can try running the address: **SITE_URL**/install/Install.php np. https://gitdeveloper.yetiforce.com/install/Install.php

![Krok 1](install-1.png)

On the start screen there are options that allow you to select a language of the installation (browser language is the default language) and to choose an installation mode (new installation or migration from a different system). We will go through the steps of a new installation. **Click `Install` and proceed to the next step.**

## Step 2 - Read and accept the license

It's necessary to agree to the license terms in order to proceed with the installation process. The YetiForce License is very similar to the standard MIT license, it allows modification of the code and to leave information about the initial developer. We recommend reading the license.

![Krok 2](install-2.png)

## Step 3 - Choose installation type

Decide where you want to install the system - you can choose your own server or buy our hosting or cloud services. If you'd like to use our services, after clicking the "Buy" button you will be able to make the payment.

![Krok 3](install-3.png)

## Step 4 - Server configuration review

In the fourth stepyou can find your current web server configuration compared to the requirements of YetiForce (what needs to be changed and to what values to set). It is necessary to remember that this configuration may change according to different requirements applied to the application and a deployment company should take it into consideration. For example, if you generate large reports that have a longer generating time than the maximum time set in `max_execution_time` parameter, then it is necessary to set the parameters in such a way that time of executing a script is always longer than time for generating a report. Otherwise, reports may not be generated successfully.

Make sure your administrator is familiar with [web server requirements](/introduction/requirements/). If all required parameters are not met and you attempt to proceed with the installation, the application will display a warning message.

Once you are aware of the risks associated with incorrect web server configuration you can click "OK" and move to the next step.

![Krok 4](install-4.png)

## Step 5 - Access data configuration

In this step you need to enter access data to a database as well as set output parameters for the system. A database will be created on the basis of this data (when this option has been activated). The structure of the database will be copied together with basic records and an administrator account will be created, so after completing the installation it will be possible to log on this account.

If incorrect access data is entered into the database, an error message will be displayed.

In this case, it is necessary to go back and enter the correct access data. If everything is set correctly, the screen from Step 7 will appear.

![Krok 5](install-5.png)

## Step 6 - Data summary

![Krok 6](install-6.png)

## Step 7 - Enter registration information

Enter the data of the company that will use the system, the data will then be used to register the system.

According to the license, each system must be registered after the trial period of 14 days.

![Krok 7](install-7.png)

## Step 8 - Database import and system configuration

![Krok 8](install-8.png)

When the installation is performed correctly, you will be automatically redirected to the system.

![Krok 9](install-9.png)
