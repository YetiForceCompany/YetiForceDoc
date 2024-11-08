---
title: Record access control
description: Limiting access to data is crucial for the company's security
keywords:
  - control
  - access
  - records
  - YetiForce
tags:
  - control
  - access
  - records
---

Limiting access to data is crucial for organizations that care about systems that meet the `need to know` principle - i.e.

## Data access business logic

### Parent Access Levels

Access to any data in the YetiForce system always requires authorization, which permits the user to view data. The main configuration of the system defines two overriding levels of data access:

- Public access
- Private access

Granting public access to a specific module means that the user who has access to the module (has it enabled in the viewable profile) has access to all data, regardless of who owns or shares the record. If private access is specified, the permission mechanisms described below apply.

By default, all modules in the system have a public access level, which means that at the implementation stage and after obtaining specific permissions, access to data should be configured in accordance with the business logic of the organization. In practice, some functionalities may have public access (even in large organizations), when the data contained in the module should be available to all users.

### Special permissions

The system includes a mechanism that grants access to data under special conditions. The `Special access` module allows you to grant read and edit permissions for data that a user does not own. a person with special permissions has access to all records, regardless of who owns them.

However, special access has some limitations - it does not grant permissions to delete data and does not grant permissions to records assigned to groups.

### Permissions resulting from the organizational structure

If access to the module is set to private, then the system verifies authorizations for each record independently and verifies the user's access level before providing data. By default, the system allows access to data to people higher in the hierarchy than the owner of the record. This means that without additional configuration, the system provides access to data in accordance with the hierarchy of dependencies in the organization.

### Permissions resulting from groups

Each record in the system can be assigned to a group, in this case the access to data is granted to all people who are part of the group, regardless of whether the users are assigned to the group, other groups, or roles, the system always calculates access per system users.

### System administrator's data permissions

System pozwala na tworzenie użytkowników będących administratorami [oraz super-administratorami], którzy nie powinni pracować na systemie, ale mają dostęp do wszystkich danych widocznych dla użytkowników standardowych [super-administrator może ograniczań dostęp do niektórych funkcjonalności, ale dotyczy to panelu administracyjnego a nie dostępu do danych].

### Restricting access to `private` records

In organizations where access to data should be general and restrictions are only point-based, you can use the functionality that allows you to change the access to the record to `private`. This change means that, regardless of all other permissions, access to a record marked as private is possible only for users who are the owner of the record, a person who shares the record, or the system administrators. access that allows viewing all records regardless of permissions) do not work, so access to a private record must be granted manually each time directly in the record.

## Custom permission mechanisms

### Access exceptions

Ze względu na zróżnicowanie obowiązków wewnątrz organizacji, często zachodzi potrzeba przydzielania uprawnień, które nie wynikają bezpośrednio ze struktury organizacyjnej [np. dostęp do danych oddziału A ma mieć pracownik w oddziale B], wówczas można skorzystać z narzędzia dostępnego w narzędziu "Dostęp do modułów" w którym możemy tworzyć wyjątki dla każdej funkcjonalności niezależnie. Wyjątki dostępu pozwalają na określanie dodatkowych uprawnień do przeglądu oraz edycji danych [wyjątki dostępu nie pozwalają na zmniejszanie uprawnień czy też nadawanie uprawnień do usuwania].

### Uprawnienia wynikające z hierarchii [w dół]

One of the most important mechanisms is the ability to activate permissions granted due to access to the parent record, e.g. This functionality is especially useful in companies that limit access on one level, i.e.

If we open a related record, such as an invoice on the Account, then the system verifies whether the user has the permissions to the parent record; if so, the system will allow you to open the record. At the same time, the record you opened from the Account level (e.g. an invoice) will not be available to the user in other views, e.g. in the list of all invoices.

### Uprawnienia wynikające z hierarchii [w górę]

Innym mechanizmem umożliwiającym dostęp do danych jest hierarchia działająca "w górę zależności" np. mając dostęp do faktury klienta, otrzymamy również dostęp do kontrahenta ponieważ kontrahent jest elementem nadrzędnym. Mechanizm ten nie działa "w locie" lecz wymaga aktywowania panelu i włączenia specjalnych skryptów przeliczających w CRON. Przeliczenie uprawnień spowoduje, że otrzymamy dostęp do kontrahenta nie dlatego, że jesteśmy jego właścicielem, lecz dlatego, że mamy dostęp do elementu podrzędnego dla tego kontrahenta i będzie to widoczne na liście rekordów [np. na liście kontrahentów zobaczymy kontrahenta którego nie jesteśmy właścicielem].

Hierarchical permissions are disabled by default and must be manually activated. Each case requires an analysis to determine whether this mechanism could potentially grant excessive access to data that the user should not see.

### Permissions resulting from advanced configuration

The advanced permissions mechanism is a panel that allows you to create access rules that do not result from the default permissions mechanisms, e.g. This mechanism works in the `cache` and after changing the rules in the tool, recalculation of permissions should be forced. This mechanism is not recommended because since the system has to recalculate the permissions, it cannot determine in real time whether the user should have access to the information. By default, this panel is disabled.

## Permission verification

### Inspekcja uprawnień

With such advanced permission tools, access administration may turn out to be difficult, which is why a tool that allows verification of permissions and access directly from the user's side has been implemented in the system. Inspektor uprawnień działa na dwóch warstwach [dla każdego modułu niezależnie], pierwszą warstwą jest lista rekordów [wówczas system weryfikuje kto ma dostęp i w jakim zakresie do danych na liście] a drugą warstwą jest weryfikacja uprawnień do konkretnego rekordu [wchodzą w rekord, możemy sprawdzić kto jeszcze ma dostęp do tego rekordu].

Co najważniejsze, narzędzie pokazuje nie tylko kto ma dostęp, ale również z czego ten dostęp wynika [czyli w którym panelu konfiguracyjnym zostały nadane uprawnienia] a więc w szybki sposób możemy znaleźć narzędzi w którym należy zmniejszyć uprawnienia dla użytkownika.

### Separation of duties

W celu poprawnego spełnienia rozdzielenia obowiązków ["Separation of duties - https://en.wikipedia.org/wiki/Separation_of_duties"], system pozwala na określanie uprawnień do wartości słownikowych [np. można określić jaki pracownik może zmieniać status rekordu] oraz w samym systemie są wbudowane zaawansowane mechanizmy procesów, które kontrolują jakie dane i przez kogo powinny być wypełniane na którym etapie procesu.

### Conflict of interest

W organizacjach w których dostęp do danych może stwarzać konflikt interesów można zastosować wbudowany mechanizm, który pozwala na weryfikację czy danych użytkownik nie wchodzi w konflikt z danymi nad którymi pracuje, jeżeli tak się stanie, zostaną uruchomione mechanizmy zabezpieczające a rekord zostanie przepisany na innego użytkownika.

### Permission inspection

Wszystkie uprawnienia działają w czasie rzeczywistym [wyjątek stanowią uprawnienia zaawansowane, które domyślnie są wyłączone i są przeliczane z opóźnieniem], oznacza to, że zmiana roli, profilu czy też zmiana danych do których użytkownik ma dostęp są realizowane natychmiast i nie wymagają ponownego przelogowania użytkownika.
