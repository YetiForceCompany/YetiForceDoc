---
title: Użytkownicy
description: Moduł pozwala na wprowadzanie użytkowników (standardowych oraz administracyjnych) do systemu. Dzięki temu można decydować, kto ma dostęp i na jakim poziomie.
keywords:
  - Użytkownicy
  - Panel konfiguracyjny
  - YetiForce
tags:
  - Użytkownicy
preview: user_list.jpg
---

Moduł `Użytkownicy` pozwala na wprowadzanie użytkowników (standardowych oraz administracyjnych) do systemu. Dzięki temu można decydować, kto ma dostęp i na jakim poziomie.

## Lista użytkowników

![user_list.jpg][user_list.jpg]

Bezpośrednio na liście użytkowników jest dostęp do takich narzędzi jak:

1. Masowa edycja - pozwala wprowadzać zmiany na wielu użytkownikach jednocześnie.
2. Masowe resetowanie hasła - przydatne, gdy trzeba zmienić hasło dostępu dla wielu użytkowników jednocześnie.
3. Import i eksport użytkowników pozwala na łatwe przenoszenie użytkowników pomiędzy różnymi systemami bazowymi.
4. Dodawanie użytkownika - pozwala na ręczne dodanie użytkownika w systemie.

## Dodawanie użytkownika

![user_add.jpg][user_add.jpg]

Dodając użytkownika do systemu, należy wypełnić wszystkie pola wymagane przez system (oznaczone gwiazdką) oraz prawidłowo skonfigurować takie informacje, jak waluta, strefa czasowa, formatowanie liczb, język itd.

Od strony uprawnień, najważniejszym polem jest `Rola`, ponieważ będzie ono definiowało zakres uprawnień i zakres dostępu do danych w całym systemie. Jednocześnie należy pamiętać, że żaden użytkownik nie powinien pracować na użytkowniku `administrator`, ponieważ uprawnienia administracyjne służą tylko do zmian administracyjnych w systemie.

System ma wbudowany mechanizm, który wymusza co określony czas zmianę hasła na nowe. Dodatkowo system posiada wsparcie dla 2FA.

## Import użytkowników

![user_import.jpg][user_import.jpg]

System umożliwia import użytkowników. Warto mieć na uwadze, że format danych powinien być zgodny z formatem danych przy eksporcie użytkowników.
