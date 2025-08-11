---
title: Akcje na rekordzie
description: Podstawowe akcje/operacje dostepne dla danego rekordu
keywords:
  - akcje
  - operacje
  - YetiForce
tags:
  - Akcje
  - Operacje
---

## Usuń rekord z systemu

Ta opcja pozwala na **trwałe i nieodwracalne usunięcie rekordu** z bazy danych. Po jej wybraniu, rekord zostaje natychmiastowo usunięty, a jego odzyskanie jest niemożliwe. Należy pamiętać, że ta operacja **pozostawia powiązane z rekordem elementy** oraz **zapisy w historii zmian**, jednak sam rekord przestaje istnieć w systemie.

## Przenieś do kosza

Opcja "Przenieś do Kosza" pozwala na **logiczne usunięcie rekordu** (tzw. Soft Delete). Rekord nie jest fizycznie usuwany z bazy danych, a jedynie **zmienia swój status na "W koszu"**. Dzięki temu dane nadal istnieją w systemie i można je przeglądać, jednak są **ignorowane przez aplikację** i nie można ich używać w bieżących operacjach. Jest to przydatne, gdy chcemy tymczasowo wyłączyć rekord z użytku, zachowując jednocześnie możliwość jego **przywrócenia w przyszłości**.
