---
title: Użytkownicy
description: Moduł pozwala na zarządzanie użytkownikami (standardowymi oraz administracyjnymi) w systemie YetiForce. Dzięki temu można decydować, kto ma dostęp i na jakim poziomie.
keywords:
  - Użytkownicy
  - Panel konfiguracyjny
  - YetiForce
tags:
  - Użytkownicy
preview: user_list.jpg
---

Moduł `Użytkownicy` umożliwia zarządzanie wszystkimi użytkownikami systemu – zarówno standardowymi, jak i administracyjnymi. Pozwala to precyzyjnie określić, kto ma dostęp do systemu i jakie posiada uprawnienia.

## Lista użytkowników

![user_list.jpg][user_list.jpg]

Na liście użytkowników dostępne są następujące narzędzia:

1. **Masowa edycja** – umożliwia wprowadzanie zmian dla wielu użytkowników jednocześnie.
2. **Masowe resetowanie haseł** – przydatne, gdy konieczna jest zmiana haseł dla wielu użytkowników naraz.
3. **Import i eksport użytkowników** – pozwala łatwo przenosić użytkowników między różnymi systemami.
4. **Dodawanie użytkownika** – umożliwia ręczne dodanie nowego użytkownika do systemu.

## Tworzenie użytkownika

![user_add.jpg][user_add.jpg]

Podczas dodawania użytkownika należy wypełnić wszystkie wymagane pola (oznaczone gwiazdką) oraz poprawnie skonfigurować takie informacje jak waluta, strefa czasowa, formatowanie liczb czy język.

Najważniejszym polem z punktu widzenia uprawnień jest `Rola`, która definiuje zakres dostępu do danych w systemie. Zalecamy, aby na koncie `administrator` nie pracować na co dzień – uprawnienia administracyjne powinny być wykorzystywane wyłącznie do zarządzania systemem.

System posiada mechanizm wymuszający okresową zmianę hasła oraz obsługuje uwierzytelnianie dwuskładnikowe (2FA).

## Import użytkowników

![user_import.jpg][user_import.jpg]

System umożliwia import użytkowników. Należy pamiętać, że format danych importowanych powinien być zgodny z formatem danych eksportowanych z systemu.
