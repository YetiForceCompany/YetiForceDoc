---
title: Jak wykonać kopię systemu
description: Jak prawidłowo xxx kopii system YetiForce.
keywords:
  - kopii
  - kopia zapasowa
  - YetiForce
tags:
  - kopia zapasowa
---

Artykuł opisuje jak prawidłowo wykonać kopię zapasową samej aplikacji YetiForce, niezależnie czy wykonujemy ją jednorazowo czy tworzymy skryptu cyklicznego backupu.

## Kopia bazy danych

Wykonania kopii zaczynamy od wykonania pełnego dump-a bazy danych. Samo polecenie `mysqldump` nie wystarczy.

Przykładowe zapytanie do wykonanania dump-a bazy, ważne aby zabezpieczyć się przed błędami któe mogą znajdować sie w strukturze bazy danych i które moga powodować przerwanie wykonywania kopii.

```sql
mysqldump --single-transaction --skip-lock-tables --quick -f yetiforce_database_name
```

## Kopia plików aplikacji

Wykonujemy kopię prawie całego katalogu z systemem YetiForce. Można pominą poniższe katalogi:

- `__YF_ROOT__`/cache/session/
- `__YF_ROOT__`/cache/templates_c
- `__YF_ROOT__`/storage

W poniśzym przykłądzie wywołanie kopi jest z katalogu pinżej niż `__YF_ROOT__`.

```bash
7z a -mx=4 $BC_PATH.7z html -x!html/storage/ -x!html/cache/session/ -x!html/cache/templates_c/ -P$BC_SECRET
```

:::warning

- `__YF_ROOT__` to główny katalog aplikacji, w którym znajdują się pliki aplikacji np. app_data, user_privileges.
- Kopia powinna być zawsze szyfrowana i hasło przechowywać w bezpiecznym miejscu

:::

## Kopia plików użytkownika

Odzielnie od kopii samej aplikacji wykonujemy kopie katalogu z plikami użytkowników czyli katalog `__YF_ROOT__`/storage (np. /home/yfprod/html/storage). Kopię można wykonać z mniejszym stopniem kompresji z kilku powodów np. szybkości wykonania i przywrócenia.

W poniśzym przykłądzie wywołanie kopi znajduje się z katalogu pinżej niż `__YF_ROOT__`.

```bash
7z a -mx=2 $BACKUP_PATH.7z html/storage/ -P$BACKUP_SECRET
```

## Kopia całej maszyny wirtualnej to za mało

Nie jedno krotnie widzieliśmy że przywrócenie snapshot-a lub backpu VM nie powodowało że system YetiForce od razu działał. Przyczyny były różne najczęściej problem był w bazie danych która nie uruchomiło się pop przywróceniu całej VM.

Dlatego rekomendujemy żeby kopię zapasową wykonywać na kilku warstwach i przechwowywać w różnych miejscahc.

## Usuwanie starych kopii

Nie rekomendujemy usuwania starych kopii na podstawie tworzenia plików, bo gdy wykonanie kopii się nie powiedzie z różnych przyczyn (np. brak miejsca, problem z bazą danych) to zostajemy bez zaanej kopii. Zalecamy usuwanie bazujace na ilościach kopii.

Przykład:

```bash
ls $BACKUP_DIR/db/* -1t | tail -n +3 | xargs rm -f
ls $BACKUP_DIR/app/* -1t | tail -n +3 | xargs rm -f
ls $BACKUP_DIR/storage/* -1t | tail -n +3 | xargs rm -f
```

## Uprawnienia

PO wykonaniu plików warto zmienić uprawnienia aby tylko określony właściciel miał dostęp do plików kopii.

```bash
chown -R root:root $BACKUP_DIR
chmod 700 $BACKUP_DIR
```
