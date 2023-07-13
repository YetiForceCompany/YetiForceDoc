---
title: Instalacja systemu YetiForce
description: Jak zainstalować system YetiForce
keywords:
  - kreator
  - instalacji
  - instrukcja
  - YetiForce
  - jak zainstalować
tags:
  - instalacja
preview: install-1.png
---

W tym artykule znajdziesz wszystko, co powinieneś wiedzieć o instalacji YetiForce - niezbędne informacje, instrukcję instalacji krok po kroku, oraz najczęściej pojawiające się błędy i problemy. **Koniecznie zapoznaj się ze wszystkimi poniższymi informacjami przed przystąpieniem do instalacji systemu.**

## Jak zainstalować system YetiForce?

Proces instalacji YetiForce jest bardzo prosty. Instalacja YetiForce odbywa podobnie do instalacji większości aplikacji webowych, czyli za pomocą kreatora przez przeglądarkę.

Przed instalacją sprawdź czy twój serwer jest zgodny z wymaganiami: [Wymagania systemu YetiForce](requirements) lub [Jak skonfigurować serwer z Debian 10 dla systemu YetiForce](/developer-guides/environments/debian-10)

:::important

A person who is going to install the system should have at least basic knowledge of web servers, databases, and server permissions. 99% problemów instalacyjnych wynika z niewystarczającej wiedzy osób, które instalują aplikację. Jeśli nie jesteś pewien, czy jesteś w stanie samodzielnie przeprowadzić proces instalacji, poproś o pomoc kogoś posiadającego odpowiednią wiedzę z zakresu IT. Cała operacja instalacji zajmie maksymalnie 2 - 30 minut. Instalacja YetiForce jest podobna do instalacji takich aplikacji jak: WordPress, Joomla, Drupal. Różnice pomiędzy poszczególnymi narzędziami są niewielkie. Tak więc, jeżeli poradziłeś sobie z instalacją systemu klasy CMS, to poradzisz sobie również z YetiForce.

:::

## Pobierz i wgraj pliki systemu

W pierwszej kolejności przygotuj pliki instalacyjne. **[Pobierz YetiForce](download) z naszych oficjalnych źródeł.**

:::warning

Zalecamy pobranie wersji "complete", na przykład `YetiForceCRM-6.4.0-complete.zip`. Jeśli została pobrana inna wersja niż "complete", to przed instalacją systemu należy zainstalować biblioteki przy użyciu `yarn` i `composer`. Ważna jest kolejność - najpierw `yarn`, potem `composer`. Przykładowy skrypt instalacyjny możesz pobrać [stąd](https://github.com/YetiForceCompany/YetiForceCRM/blob/developer/tests/setup/dependency.sh).

:::

- Pobrany plik ZIP rozpakuj, np. za pomocą programu [7-Zip](http://7-zip.org/).
- Katalog z systemem CRM, który otrzymasz po rozpakowaniu pliku ZIP, skopiuj na serwer WWW, np. za pomocą programu [WinSCP](https://winscp.net/).
- Następnie postępuj zgodnie z kreatorem, którego wywołasz z poziomu WWW tam, gdzie skopiowałeś pliki YetiForce CRM.

Lub z konsoli bash

```bash
cd /home/yfprod/html/
wget -O YetiForceCRM.zip https://github.com/YetiForceCompany/YetiForceCRM/releases/download/6.2.0/YetiForceCRM-6.2.0-complete.zip
unzip YetiForceCRM.zip
chown -R yfprod:yfprod /home/yfprod/html/
```

## Krok 1 - Uruchomienie kreatora instalacji

Uruchom w oknie przeglądarki adres docelowy twojego systemu - powinien pokazać się kreator instalacji. If it doesn't, there may be some problems, you can try running the address: **SITE_URL**/install/Install.php eg. https://gitdeveloper.yetiforce.com/install/Install.php

![step 1](install-1.png)

Na ekranie startowym w kreatorze instalacji dostępna jest możliwość konfiguracji języka instalacji (domyślnie język jest predefiniowany na podstawie języka przeglądarki). Przejdziemy przez kolejne etapy nowej instalacji. **Kliknij `Zainstaluj` i przejdź do następnego kroku.**

## Krok 2 - Zapoznanie się z warunkami licencji i ich akceptacja

W drugim kroku kreator wymaga zaakceptowania licencji. Licencja YetiForce jest bardzo podobna do licencji MIT, jest otwarta i pozwala na dowolną modyfikację kodu z pozostawieniem informacji o pierwotnym autorze. Przeczytaj w pełni informacje o licencji, ponieważ z perspektywy firmy, dla której wdrażasz oprogramowanie, zapisy i warunki licencji są istotne.

![step 2](install-2.png)

## Krok 3 - Wybierz rodzaj instalacji

Zdecyduj, gdzie chcesz zainstalować system - możesz wybrać własny serwer albo dokonać zakupu naszego hostingu lub chmury. If you'd like to use our services, after clicking the "Buy" button, you will be able to make the payment.

![step 3](install-3.png)

## Krok 4 - Weryfikacja konfiguracji serwera

In the fourth step, you can find your current web server configuration compared to the requirements of YetiForce (what needs to be changed and to what values to set). Należy pamiętać, że w zależności od wymagań, jakie się stawia aplikacji CRM, konfiguracja ta może ulec zmianom. Firma wdrożeniowa powinna uwzględnić zmiany we własnym zakresie. For example, if you generate large reports that have a longer generating time than the maximum time set in the `max_execution_time` parameter, then it is necessary to set the parameters in such a way that the time of executing a script is always longer than the time for generating a report. W przeciwnym wypadku taki raport może się nie wygenerować.

Dla pewności, poproś swojego administratora, aby zapoznał się z tymi [wymaganiami dla serwerów WWW](/introduction/requirements/). If all required parameters are not met, and you attempt to proceed with the installation, the application will display a warning message.

Once you are aware of the risks associated with incorrect web server configuration you can click "OK", and move to the next step.

![step 4](install-4.png)

## Krok 5 - Konfiguracja danych dostępowych

In this step, you need to enter access data to a database as well as set output parameters for the system. Na podstawie tych danych zostanie utworzona baza danych (gdy ta opcja została aktywowana). Na podstawie tych danych system utworzy bazę danych (o ile opcja ta została aktywowana), wgra strukturę bazy danych razem z podstawowymi danymi oraz utworzy podstawowe konto administratora, do którego będziesz mógł się zalogować po instalacji.

Jeżeli wprowadzisz nieprawidłowe dane dostępowe do bazy danych pokaże się błąd.

W takim wypadku musisz cofnąć się do ekranu poprzedniego i prawidłowo wprowadzić dane dostępowe. Jeżeli wszystko zostanie uzupełnione prawidłowo, zobaczysz ekran podobny do tego, który jest w kroku następnym.

![step 5](install-5.png)

## Krok 6 - Podsumowanie danych

![step 6](install-6.png)

## Krok 7 - Wprowadzenie danych rejestracyjnych

Wprowadź dane firmy, która będzie korzystała z systemu. Te dane zostaną potem wykorzystane do rejestracji systemu.

Zgodnie z zapisami licencji każdy system musi być zarejestrowany po okresie próbnym 14 dni.

![step 7](install-7.png)

## Krok 8 - Import bazy danych oraz konfigurowanie systemu

![step 8](install-8.png)

Jeżeli instalacja zostanie wykonana prawidłowo, zostaniesz automatycznie przeniesiony do systemu CRM.

![step 9](install-9.png)

## The installation process has failed

What to do when the system shows the message `Invalid session ID` at the beginning of the installation.

![install-failed-10](install-10.png)

![install-failed-11](install-11.png)

### What does the message `Invalid session ID` mean?

"Sent session ID does not match the one received from the server. We recommend clearing your browser cache, and if that does not fix the problem, we recommend correcting your server configuration."

The error often appears when there are (or there were) several instances of different system versions on one address. Different system versions have different cookie configurations, and therefore sometimes the session ID cannot be updated during installation.

This can be checked in the browser console:

![install-failed-12](install-12.png)

### How to repair invalid session ID

The repair is simple, it is required to delete the browser cache or delete all cookies for the domain (which the system is running on).

:::warning

Pay attention to delete cookies for HTTP and HTTPS!!!

:::

#### HTTP

![install-failed-13](install-13.png)

#### HTTPS

![install-failed-14](install-14.png)

### How to clear the browser cache for only one domain

You can easily remove all browser cache, but how to do it for one domain only so as not to lose all data?

In the development tools, it is possible to view and delete the cache. Each browser may have removal options elsewhere. More details can be found in the article [How to clear browser cache?](/administrator-guides/faq/how-to-clear-browser-cache/)
