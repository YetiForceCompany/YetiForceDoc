---
title: Faktury Kosztowe
description: Jak obsługiwać faktury kosztowe w systemie YetiForce z integracją z KSeF.
keywords:
  - KSeF
  - integracja
  - Krajowy System e-Faktur
  - faktury kosztowe
tags:
  - Faktury
  - KSeF
  - Integracje
---

## Pobieranie faktur kosztowych z KSeF

Pobieranie faktur kosztowych z KSeF odbywa się w systemie YetiForce automatycznie. YetiForce cyklicznie odpytuje API KSeF o nowe faktury kosztowe i je pobiera. Po pobraniu faktury kosztowej z KSeF, zostanie ona przetworzona i utworzony zostanie rekord faktury w module "Faktury Kosztowe" z uzupełnionymi danymi z pobranej faktury ustrukturyzowanej.

### Aby funkcjonalność importowania faktur kosztowych z KSeF działała poprawnie, należy upewnić się, że

- w panelu administracyjnym systemu YetiForce została aktywowana integracja z KSeF
- w konfiguracji integracji z KSeF istnieje aktywny Certyfikat KSeF - pobierane będą te faktury kosztowe, które zostały wystawione na podmiot powiązany z tym certyfikatem (NIP podmiotu)
- włączony jest harmonogram pobierania (zadania CRON) - od częstotliwości harmonogramu zależy, jak szybko po wystawieniu faktury kosztowej w KSeF zostanie ona pobrana do YetiForce

:::info

Więcej informacji o konfiguracji integracji z KSeF, w tym o dodawaniu certyfikatów KSeF, znajdziesz w sekcji [Dokumentacja administratora: KSeF](../../../3-administrator-guides/15-integration/20-ksef/README.md).

:::
