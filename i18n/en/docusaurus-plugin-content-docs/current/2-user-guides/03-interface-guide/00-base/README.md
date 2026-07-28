---
title: Record actions
description: Basic actions/operations available for records
keywords:
  - actions
  - operations
  - YetiForce
tags:
  - Actions
  - Operations
---

## Delete record from system

This option allows you to **permanently and irreversibly delete a record** from the database. Once selected, the record is immediately deleted and cannot be recovered. Note that this operation **retains the elements related to the record** and **the change history entries**, but the record itself ceases to exist in the system.

## Move to trash

The "Move to Recycle Bin" option allows you to **logically delete a record** (also known as Soft Delete). The record isn't physically removed from the database, but merely **changes its status to "In Recycle Bin"**. This means that the data still exists in the system and can be viewed, but is **ignored by the application** and cannot be used in ongoing operations. This is useful when you want to temporarily disable a record while still retaining the option to **restore it in the future**.
