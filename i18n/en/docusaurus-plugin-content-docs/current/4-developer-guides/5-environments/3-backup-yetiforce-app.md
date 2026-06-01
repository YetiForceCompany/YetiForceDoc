---
title: Jak wykonać kopię zapasową aplikacji YetiForce
description: 'Jak wykonać backup YetiForce: baza danych, pliki aplikacji, katalog storage, uprawnienia, retencja i weryfikacja kopii.'
keywords:
  - kopia
  - kopia aplikacji YetiForce
  - backup
  - plików
  - bazy danych
  - storage
  - mysqldump
  - YetiForce
tags:
  - backup
preview: 3-backup-yetiforce-app.jpg
---

Ten artykuł pokazuje, jak wykonać pełną kopię YetiForce krok po kroku. Poprawna kopia zapasowa YetiForce powinna obejmować bazę danych, pliki aplikacji oraz katalog `storage` z plikami użytkowników.

Jeżeli szukasz krótkiej odpowiedzi: pełną kopię YetiForce to osobny zrzut bazy danych, osobna kopia plików aplikacji i osobna kopia katalogu `storage`, najlepiej szyfrowana, z kontrolą uprawnień i regularnym testem odtworzenia.

![3-backup-yetiforce-app.jpg](3-backup-yetiforce-app.jpg)

## Zanim rozpoczniesz

Przed wykonaniem kopii zapasowej warto ograniczyć zmiany w systemie. Najbezpieczniej wykonać backup w czasie niskiej aktywności użytkowników oraz upewnić się, że w trakcie operacji nie są uruchamiane zadania CRON, importy ani procesy integracyjne zapisujące dane do bazy lub katalogu `storage`.

:::tip

Najlepszą praktyką jest okresowe testowanie odtworzenia kopii na osobnym środowisku. Backup, którego nie da się odtworzyć, nie jest skutecznym zabezpieczeniem.

:::

## Jak wykonać kopię bazy danych YetiForce

Tworzenie kopii zapasowej rozpocznij od wykonania pełnego zrzutu bazy danych. To kluczowy element całej procedury.

Przykładowe polecenie `mysqldump`:

```bash
mysqldump --single-transaction --skip-lock-tables --quick -f yetiforce_database_name
```

Powyższe parametry pomagają ograniczyć ryzyko przerwania procesu backupu, na przykład w przypadku problemów ze strukturą bazy danych.

:::warning

Samo wykonanie kopii plików bez zrzutu bazy danych nie pozwala na poprawne odtworzenie systemu.

:::

## Jak wykonać kopię plików aplikacji YetiForce

W kolejnym kroku wykonaj kopię niemal całego katalogu aplikacji YetiForce. Podczas archiwizacji możesz pominąć poniższe katalogi:

- `__YF_ROOT__`/cache/session/
- `__YF_ROOT__`/cache/templates_c
- `__YF_ROOT__`/storage

W poniższym przykładzie polecenie jest uruchamiane z katalogu nadrzędnego względem `__YF_ROOT__`.

```bash
7z a -mx=4 $BC_PATH.7z html -x!html/storage/ -x!html/cache/session/ -x!html/cache/templates_c/ -P$BC_SECRET
```

:::warning

- `__YF_ROOT__` to główny katalog aplikacji, w którym znajdują się pliki systemu, na przykład `app_data` i `user_privileges`.
- Kopia powinna być zawsze szyfrowana, a hasło przechowywane w bezpiecznym miejscu.

:::

## Jak wykonać kopię plików użytkowników

Oddzielnie od kopii samej aplikacji wykonaj kopię katalogu z plikami użytkowników, czyli `__YF_ROOT__`/storage (na przykład `/home/yfprod/html/storage`). Pozwala to rozdzielić kod aplikacji od danych użytkowników. Ma to szczególne znaczenie, gdy pliki użytkowników zajmują dużo miejsca i lepiej archiwizować je osobno, a przy większej skali danych nawet na oddzielnej maszynie wirtualnej. Tę kopię można wykonać z niższym stopniem kompresji, aby skrócić czas tworzenia i odtwarzania archiwum.

W poniższym przykładzie polecenie jest uruchamiane z katalogu nadrzędnego względem `__YF_ROOT__`.

```bash
7z a -mx=2 $BACKUP_PATH.7z html/storage/ -P$BACKUP_SECRET
```

## Czy kopia całej maszyny wirtualnej wystarczy

W praktyce wielokrotnie spotykaliśmy sytuacje, w których przywrócenie snapshotu lub backupu całej maszyny wirtualnej nie wystarczało do natychmiastowego uruchomienia YetiForce. Najczęstszą przyczyną były problemy z bazą danych po odtworzeniu całej maszyny.

Dlatego rekomendujemy wykonywanie kopii zapasowych na kilku warstwach oraz przechowywanie ich w różnych lokalizacjach.

Przykładowy podział:

- kopia bazy danych,
- kopia plików aplikacji,
- kopia katalogu `storage`,
- snapshot maszyny lub serwera jako dodatkowa warstwa bezpieczeństwa.

## Jak usuwać stare kopie zapasowe

Nie rekomendujemy usuwania starych kopii wyłącznie na podstawie wieku plików. Jeśli nowe wykonanie backupu zakończy się błędem, na przykład z powodu braku miejsca lub problemu z bazą danych, możesz zostać bez poprawnej kopii. Bezpieczniej jest zarządzać retencją na podstawie liczby zachowanych archiwów.

Przykład:

```bash
ls $BACKUP_DIR/db/* -1t | tail -n +3 | xargs rm -f
ls $BACKUP_DIR/app/* -1t | tail -n +3 | xargs rm -f
ls $BACKUP_DIR/storage/* -1t | tail -n +3 | xargs rm -f
```

Powyższy przykład pozostawia dwie najnowsze kopie w każdym katalogu.

## Jak ustawić uprawnienia do kopii

Po utworzeniu kopii warto ograniczyć uprawnienia, aby dostęp do archiwów miał tylko wskazany właściciel.

```bash
chown -R root:root $BACKUP_DIR
chmod 700 $BACKUP_DIR
```

## Jak sprawdzić, czy backup YetiForce jest poprawny

Po zakończeniu procesu sprawdź, czy:

- archiwa zostały utworzone i mają oczekiwany rozmiar,
- zrzut bazy danych nie został przerwany błędem,
- kopie są zapisane w odpowiedniej lokalizacji,
- hasła do zaszyfrowanych archiwów są przechowywane w bezpieczny sposób,
- [procedura odtworzenia systemu](system-migration-or-recovery) została przetestowana przynajmniej na środowisku testowym.

Jeżeli backup jest wykonywany cyklicznie z CRON-a, zadbaj także o logowanie wyniku zadania oraz powiadomienia o błędach. Dzięki temu szybciej wykryjesz sytuację, w której kopie przestały tworzyć się poprawnie.

## FAQ

### Co powinien zawierać pełny backup YetiForce

Pełny backup YetiForce powinien zawierać trzy elementy: zrzut bazy danych, kopię plików aplikacji oraz kopię katalogu `storage`. Pominięcie któregoś z tych elementów może uniemożliwić poprawne odtworzenie systemu.

### Czy sam snapshot serwera lub maszyny wirtualnej wystarczy

Nie. Snapshot może być dodatkową warstwą zabezpieczenia, ale nie powinien zastępować osobnych kopii bazy danych i plików. W praktyce problemy po odtworzeniu najczęściej dotyczą właśnie bazy danych lub niespójnych danych zapisanych w trakcie działania systemu.

### Jak często wykonywać backup YetiForce

Częstotliwość zależy od liczby zmian w systemie. Dla środowisk produkcyjnych standardem jest regularny backup wykonywany automatycznie z użyciem CRON-a, co najmniej raz dziennie, a w systemach o dużej liczbie operacji nawet częściej.

### Jak sprawdzić, czy kopia zapasowa działa

Najlepszą metodą jest testowe odtworzenie kopii na oddzielnym środowisku. Sama obecność pliku backupu nie oznacza jeszcze, że dane da się poprawnie przywrócić. Zapoznaj się z artykułem o [migracji lub przywracaniu systemu](system-migration-or-recovery).
