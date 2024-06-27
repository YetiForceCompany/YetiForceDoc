---
title: Jak przekierować domenę na YetiForce Cloud
description: Przekierowanie aplikacji WWW na inną domenę
keywords:
  - YetiForce
  - przekierowanie
  - domena
  - Cloud
  - DNS
  - CNAME
tags:
  - przekierowanie
  - domena
  - Cloud
---

Przekierowanie domeny (lub subdomeny) na inny adres www (domenę/subdomenę) jest bardzo praktyczne biznesowo. Najczęściej stosuje się to wówczas, gdy chcemy, aby docelowa aplikacja była dla użytkowników końcowych widoczna pod innym adresem. Szczególnie warto stosować przekierowanie, gdy korzystamy z rozwiązań, które nie są na naszym serwerze i są pod innym adresem niż na przykład nasza domena, która jest znana naszym użytkownikom. Poniżej znajdziesz instrukcje krok po kroku.

:::warning
Dla klientów YetiForce usługa przekierowywania jest dostępna tylko dla produktu YetiForce Cloud.
:::

## Opis problemu

Mamy aplikację pod domeną: crm.staryadres.com, a chcemy, aby nasi pracownicy widzieli ją pod nową domeną np. crm.nowyadres.com

## Rozwiązanie

Aby przekierować system na nowy adres, postępuj zgodnie z instrukcją poniżej:

1. Przekieruj nowy adres www (np.: crm.nowyadres.com) za pomocą rekordu CNAME w DNS na adres, pod którym obecnie znajduje się aplikacja (np.: crm.staryadres.com) - dzięki takiemu przekierowaniu, każdy pracownik wpisujący nowy adres WWW będzie "w tle" przekierowywany na stary adres, pod którym znajduje się aplikacja, ale w pasku adresu będzie widział nowy adres www. Uwaga: zwróć szczególną uwagę, w jaki sposób dodajesz wpis CNAME, ponieważ najczęściej musisz podać na końcu kropkę np.: `crm.staryadres.com.` - jeżeli nie jesteś pewien jak zrobić to dobrze, przeczytaj o tym w internecie: https://www.google.com/search?q=domain+cname+example. Dodając rekord CNAME pamiętaj o ustawieniu TTL dla rekordu na 3600 sekund.

2. Jeżeli dodałeś poprawnie rekord CNAME w DNS, to po pewnym czasie będziesz mógł posługiwać się nowym adresem WWW. Aby mieć pewność czy wszystko przebiegło pomyślnie, możesz skorzystać z narzędzi online, które pozwolą sprawdzić konfigurację DNS: https://www.google.com/search?q=check+dns+cname. Pamiętaj, że niektóre serwery DNS potrzebują minut, a nawet godzin, aby się uaktualnić, najczęściej jednak nie trwa to dłużej niż 15 minut.

3. Gdy już wykonałeś poprawnie przekierowanie, należy zmienić konfiguracje na serwerze i/lub w aplikacji docelowej (np.: nasz system przechowuje w pliku konfiguracyjnym adres www, pod którym działa aplikacja, wykorzystuje ten adres, aby chronić się przed niepożądanymi atakami — nie pozwalając na przyjmowanie żądań z innego adresu www). Każda aplikacja jak i każdy serwer, na którym znajduje się aplikacja, wymaga innej konfiguracji - zgłoś to do administratora serwera www i administratora aplikacji, oni będą wiedzieć, co robić.
4. Ostatnim, ale bardzo ważnym krokiem jest dodanie certyfikatów HTTPS nowej domeny do serwera, pod którym jest stary adres WWW. Jeżeli tego nie zrobisz, to po przekierowaniu użytkownicy zobaczą ostrzeżenie o nieważnym certyfikacie (ponieważ domyślnie certyfikat jest skonfigurowany tak, aby działał poprawnie tylko pod nowym adresem WWW, a my musimy dodać certyfikat po to, aby po przekierowaniu stary adres www mógł też poprawnie nim się posługiwać). Aby to było możliwe, musisz przekazać dwa elementy administratorowi serwera, na którym znajduje się aplikacja:
   - Klucz prywatny certyfikatu SSL
   - Pośredni certyfikat SSL

## Podsumowanie

Chociaż sam proces jest bardzo prosty i bardzo szybki (łącznie nie zajmuje więcej niż 15 minut), to jest problematyczny, ponieważ musimy do tego zaangażować kilka osób w tym samym czasie:

- Administrator nowej domeny, który zrobi przekierowanie i przekaże klucz prywatny i certyfikat pośredni nowej domeny.
- Administrator serwera na którym jest aplikacja docelowa, który doda do serwera nową domenę (często należy ją dodać na vhost) oraz doda nowy certyfikat.
- Administrator aplikacji, który zmieni w konfiguracji aplikacji adres na nowy.
