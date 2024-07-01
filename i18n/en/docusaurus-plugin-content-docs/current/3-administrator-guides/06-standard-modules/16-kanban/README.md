---
title: Kanban board
description: The article describes the YetiForce Kanban Board addon configuration
keywords:
  - kanban
  - board
  - view
  - Settings
  - YetiForce
tags:
  - Kanban
preview: kanban-1.jpg
---

Boards in the Kanban view use cards and columns that can be easily configured in the panel according to the needs of your company. Moreover, in the YetiForce system, you can create multiple tables for one module that will present the data grouped in various ways.

:::warning

The YetiForce Kanban Board is a subscription based addon available in our Marketplace - [**Buy YetiForce Kanban Board**](https://yetiforce.com/pl/marketplace/dodatki/92-yetiforce-kanban-board.html)

:::

![kanban-1](kanban-1.jpg)

## Configuration

The configuration panel for the YetiForce Kanban Board can be found in `Software configuration  → Standard modules → Kanban`

![kanban-2](kanban-2.jpg)

From the list of available modules in the upper right corner of the screen, select the module where the Kanban board should be available:

![kanban-3](kanban-3.jpg)

## Create boards

Click <kbd>+ Add board</kbd> and select the field used to create a board in the module selected in the previous step:

![kanban-4](kanban-4.jpg)

Once you click <kbd>Add</kbd> the board will be available in the selected module.

![kanban-5](kanban-5.jpg)

## Board parameters

- Detail fields - list of fields used to display data from records in the Kanban Board. If the field has an icon, the icon will be visible on the board. All fields from the system are available according to users' permissions.

  ![kanban-6](kanban-6.jpg)

- Summation fields -list of fields to be summed for a given value (Kanban column) where Kanban is displayed. Only numeric fields are available where summation operations can be performed.

  ![kanban-7](kanban-7.jpg)

The data in the pick list is saved automatically upon each change.

## Permissions

Users need permissions for the Kanban board in order to be able to use it.

To grant the permissions, go to [`Software configuration → Permissions → Profiles`](/administrator-guides/permissions/profiles/), select a profile and enable the "Kanban" option.

![kanban-8](kanban-8.jpg)
