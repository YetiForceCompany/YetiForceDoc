---
title: Rejestr zmian
description: Rejestr zmian wg. wersji systemu YetiForce.
keywords:
  - KSeF
  - integracja
  - Krajowy System e-Faktur
  - konfiguracja
  - faktury
tags:
  - Faktury
  - KSeF
  - Integracje
---

## Najważniejsze zmiany funkcjonalne z podziałem na wersje systemu YetiForce

Obsługa API KSeF została dodana w wersji 7.1.0 systemu YetiForce. Zalecamy korzystanie z najnowszej wersji systemu YetiForce, aby mieć dostęp do najnowszych funkcjonalności i poprawek związanych z integracją z KSeF. Poniżej znajduje się lista najważniejszych zmian funkcjonalnych wprowadzonych w kolejnych wersjach systemu YetiForce związanych z integracją z KSeF.

---

### 7.1.1

- rozszerzenie wysyłki faktur sprzedażowych z CRM do KSeF o rodzaje "faktura korekta" (KOR, KOR_ZAL, KOR_ROZ), "faktura zaliczkowa" (ZAL), "faktura rozliczeniowa" (ROZ)
- rozszerzenie pobierania faktur z KSeF do CRM o rodzaje "faktura korekta" (KOR, KOR_ZAL, KOR_ROZ), "faktura zaliczkowa" (ZAL), "faktura rozliczeniowa" (ROZ)
- obsługa faktur "uproszczonych" została usunięta

---

### 7.1.0

- ***dodanie integracji z KSeF w systemie YetiForce***
- autoryzacja do KSeF za pomocą certyfikatu KSeF
- wysyłka faktur sprzedażowych z CRM do KSeF (rodzaj "faktura podstawowa", "faktura uproszczona")
- pobieranie faktur z KSeF do CRM (rodzaj "faktura podstawowa")
