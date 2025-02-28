---
title: Kanban board
description: The article describes the YetiForce Kanban Board addon configuration
keywords:
  - kanban
  - board
  - view
  - settings
  - YetiForce
tags:
  - Kanban
  - Board
preview: kanban-1.png
---

Kanban boards in the YetiForce system are a visual tool for managing processes and projects. They allow you to organize work by dividing it into columns representing process stages (e. g. "To do", "In progress", "Completed") and cards symbolizing specific tasks that can be moved between columns. This allows you to easily track work progress, identify bottlenecks and optimize the flow of tasks. Kanban boards are integrated with other YetiForce modules, which supports task management in the context of sales, design, service and other activities.

:::warning

YetiForce Kanban Board is available for subscription in our Marketplace. - [**More information**](https://yetiforce.com/en/kanban-board.html)

:::

![Configuration view](kanban-1.png)

## Configuration

The YetiForce Kanban Board configuration panel is located in <kbd>Software configuration → Standard modules → Kanban</kbd>.

![Opening the kanban module view - opening the module list](kanban-2-1.png)
![Opening the kanban module view - selecting a module](kanban-2-2.png)

From the list of available modules in the upper right corner of the screen (1), select the module (2) where the Kanban board should be available:

![Module selection](kanban-3.png)

## Create boards

Click <kbd>+ Add board</kbd> and select the field used to create a board in the module selected in the previous step:

![Selecting fields from the module](kanban-4.png)

Once you click <kbd>Add</kbd> the board will be available in the selected module.

![Field selection view](kanban-5.png)

## Board parameters

- Detailed fields - list of fields where the record data is to appear. If a field has an icon set, it will be visible. All fields from the system are available, taking into account user permissions.

  ![Detail field view](kanban-6.png)

- Summary Fields - list of fields to be added up for a given value (kanban bar) where kanban is displayed. Only numeric fields are available where sum operations can be performed.

  ![Summary view](kanban-7.png)

The data in the pick list is saved automatically upon each change.

## Permissions

In order for a user to use the Kanban view, they must have the appropriate level of permissions.

To do this, go to <kbd>[`System configuration → Permissions → Profiles`](/administrator-guides/permissions/profiles/)</kbd>, and then select the relevant profile:

![Profile selection](kanban-8-1.png)

then select the relevant module where the Kanban Board should be available

![Module selection](kanban-8-2.png)

and customize permissions.

![Change permissions for actions and views](kanban-8-3.png)
