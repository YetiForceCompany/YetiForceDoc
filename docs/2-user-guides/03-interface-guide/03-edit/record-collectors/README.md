---
title: Record collectors
description: Record collectors
keywords:
  - Record
  - collectors
  - YetiForce
tags:
  - Record collectors
---

## Video guide

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player';

<Tabs groupId="XlIXiQpC9ug">
	<TabItem value="youtube-XlIXiQpC9ug" label="🎬 YouTube">
		<ReactPlayer
			url="https://www.youtube.com/watch?v=XlIXiQpC9ug"
			width="100%"
			height="500px"
			controls={true}
		/>
	</TabItem>
	<TabItem value="yetiforce-XlIXiQpC9ug" label="🎥 YetiForce TV">
		<ReactPlayer url="/video/record-collector.mp4" width="100%" height="500px" controls={true} />
	</TabItem>
</Tabs>

Record collector is used to load data from various sources and enables displaying and loading data into the YetiForce CRM system.

![record-collector-1](record-collector-1.jpg)

The mechanism is available in all modules, however it has to be enabled and configured for each module to work correctly.

## Konfiguracja

Konfiguracja kolektorów jest dostępna w panelu [`Konfiguracja systemu → Integracja → Kolektor rekordów`](/administrator-guides/integration/record-collectors/)

## Available collectors

Do systemu regularnie dodawane są kolejne rodzaje kolektorów rekordów. Lista wszystkich aktualnie dostępnych kolektorów znajduje się poniżej.
Darmowe kolektory, dostępne w YetiForce domyślnie, zostały oznaczone gwiazdką ★, pozostałe można zakupić w naszym Marketplace.

- GUS [PL] - Pobieranie danych o polskich przedsiębiorstwach dostarczone przez GUS z bazy internetowej REGON 1(BIR1)
- ★ VIES [EU] - Sprawdza, czy podmiot gospodarczy posiada aktualny numer VAT-EU (europejski NIP), dla transakcji wewnątrzwspólnotowej na terenie Unii Europejskiej.
- KRS [PL] - Pobierz dane polskich firm z Krajowego Rejestru Sądowego w Polsce
- Receita WS CNPJ [BR] - Pobieranie danych o przedsiębiorstwach brazylijskich dostarczone przez ReceitaWS z bazy Federalnego Urzędu Skarbowego Brazylii (Cadastro Nacional de Pessoas Jurídicas)
- Swiss Zefix [CH] - Pobieranie danych o przedsiębiorstwach Szwajcarii z bazy szwajcarskiego centralnego indeksu nazw firm (Zentraler Firmenindex)
- Danish CVR [DK] - Pobieranie danych o duńskich i norweskich firmach przez CVR API z bazy Duńskiego centralnego rejestru przedsiębiorstw (CVR)
- Data Gouv [FR] - Pobieranie danych o francuskich przedsiębiorstwach z Państwowego Instytutu Statystyki i Badań Gospodarczych (INSEE Institut National de la Statistique et des Études Économiques)
- Brreg Enhetsregisteret [NO] - Pobieranie danych o norweskich przedsiębiorstwach z centralnej bazy Brønnøysund (The Brønnøysund Register Centre)
- North Data - Pobieranie danych firm z bazy North Data
- ★ Orb Intelligence - Pobieranie danych firm dużej części świata z bazy Orb Intelligence udostępnionej przez Dun & Bradstreet
- CEIDG [PL] - Pobierz dane polskich firmy z Centralnej Ewidencji i Informacji o Działalności Gospodarczej w Polsce
- VAT [PL] - Usługa umożliwiająca sprawdzenie, czy podmiot jest czynnym, zwolnionym czy też niezarejestrowanym podatnikiem w VAT w Polsce.
- ★ YouControl [UA] - Pobieranie danych o ukraińskich firm dostarczone przez YouScore API z bazy YouControl
- Companies House [GB] - Pobieranie danych o firmach z Wielkiej Brytanii z agencji Companies House.
- VAT [GB] - Usługa umożliwiająca sprawdzenie, czy firma jest zarejestrowana jako płatnik VAT w Wielkiej Brytanii
- EDGAR [USA] - Pobieranie danych o firmach w USA z U.S. SECURITIES AND EXCHANGE COMMISSION (SEC) z bazy EDGAR
- VATify.eu - Pobieranie danych firm z bazy VATify.eu, która również zawiera aktualny status płatnika VAT
