---
title: Bria Softphone
description: Integracja z centralą telefoniczną za pośrednictwem aplikacji Bria Softphone
keywords:
  - Integracja
  - PBX
  - Bria Softphone
  - YetiForce
tags:
  - PBX
  - Bria Softphone
preview: bria-softphone-1.png
---

:::tip

Funkcjonalność dostępna od wersji YetiForce 7.0

:::

Integracja z centralą telefoniczną za pośrednictwem aplikacji Bria Softphone.

Połączenie z Bria Softphone bazuje na `Bria Desktop API`, dzięki któremu użytkownik w czasie rzeczywistym otrzymuje informacje o połączeniach.

Zalety i możliwości integracji:

- Zgodność z wiodącymi na rynku serwerami połączeń lub usługami VoIP (https://www.counterpath.com/international-voip-providers/)
- Dedykowana aplikacja dla użytkownika
- Możliwość wybierania numeru telefonu z okna systemu YetiForce
- Synchronizacja całej historii połączeń
- Graficzna prezentacja statusu Twojego telefonu
- Obsługiwane plany: Bria Solo, Bria Teams, Bria Enterprise (https://www.counterpath.com/product-comparison/). Nie obsługuje planu "Bria Solo Free".
- Integracja z YetiForce za pomocą aktywnego okna przeglądarki

![bria-softphone-1.png](bria-softphone-1.png)

## Prezentacja wideo Bria Softphone

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player';

<Tabs groupId="sWyz4oqKYwI">
    <TabItem value="youtube-sWyz4oqKYwI" label="🎬 YouTube">
        <ReactPlayer
            src="https://www.youtube.com/watch?v=sWyz4oqKYwI"
            width="100%"
            height="500px"
            controls={true}
        />
    </TabItem>
    <TabItem value="yetiforce-sWyz4oqKYwI" label="🎥 YetiForce TV">
        <ReactPlayer src="https://public.yetiforce.com/tutorials/integration-BriaSoftphone.mp4" width="100%" height="500px" controls={true} />
    </TabItem>
</Tabs>

## Konfiguracja Bria Softphone

### Dodanie konfiguracji do PBX

Dodajemy wpis o typie `BRIA Softphone`

![bria-softphone-2.png](bria-softphone-2.png)

### Ustawianie numeru wewnętrznego dla użytkowników

Wprowadź wewnętrzny numer telefonu dla użytkowników, którzy mają mieć aktywną integrację z Bria Softphone.

![bria-softphone-3.png](bria-softphone-3.png)

## Status połączenia Bria Softphone

Ikona na górnej belce systemu pokazuje aktualny status integracji z aplikacją Bria Softphone.

![bria-softphone-4.png](bria-softphone-4.png) Brak połączenia z telefonem

![bria-softphone-5.png](bria-softphone-5.png) Aktywne połączenie z telefonem, widać numer/nazwę aktualnie zalogowanego użytkownika w Softphone

![bria-softphone-6.png](bria-softphone-6.png) Rozmowa wychodząca lub przychodząca, pokazuje nazwę/numer rozmówcy

## Wybieranie numeru w Bria Softphone

Jeśli integracja została aktywowana prawidłowo, to wszystkie pola o typie `telefon` będą miały dodatkową ikonę telefonu.

Po kliknięciu numeru lub ikony telefonu zostanie wywołana metoda do utworzenia połączenia z wybranym numerem telefonu.

![bria-softphone-7.png](bria-softphone-7.png)

## Obsługa połączeń przychodzących Bria Softphone

Gdy otrzymujemy połączenie przychodzące, system poinformuje o nim innym kolorem i ikoną oraz pokaże numer telefonu osoby dzwoniącej.

![bria-softphone-8.png](bria-softphone-8.png)

## Uprawnienia

### Uprawnienia przeglądarki dla Bria Softphone

Aby integracja działała prawidłowo, wymagane jest udzielenie zgody na dostęp do innych aplikacji i usług na tym urządzeniu.

![bria-softphone-10.jpg](bria-softphone-10.jpg)

Zgoda może zostać zmieniona w dowolnym momencie poprzez kliknięcie ikony informacji o witrynie.

![bria-softphone-11.jpg](bria-softphone-11.jpg)

### Zezwolenie na komunikację z klientem Bria

Podczas pierwszego uruchomienia aplikacji Bria Softphone i podłączenia systemu YetiForce wymagane jest zezwolenie na komunikację pomiędzy aplikacjami.

![bria-softphone-12.jpg](bria-softphone-12.jpg)

Wszystkie zgody są przechowywane w `Preferencjach` aplikacji. Więcej informacji można znaleźć na stronie https://docs.counterpath.com/docs/DeskUG/clients/UserGuides/Desktop/reference/deskApiAccess.htm

![bria-softphone-13.jpg](bria-softphone-13.jpg)

## Odnośniki zewnętrzne

- https://www.counterpath.com/softphone-clients/
- https://www.counterpath.com/teams-pricing/
- https://www.counterpath.com/bria-desktop-api/

## Debugowanie

W celu aktywacji logów w przeglądarce dla integracji należy ustawić w pliku [config/Debug.php](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_JS_DEBUG) parametr [$JS_DEBUG](https://doc.yetiforce.com/code/classes/Config-Debug.html#property_JS_DEBUG) na `true`.

```php
/** Turn on/off error debugging in javascript */
public static $JS_DEBUG = true;
```

![bria-softphone-9.png](bria-softphone-9.png)
