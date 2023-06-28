---
title: YetiForce PDF Premium - aktywacja
description: Poniższy artykuł wyjaśnia rozwiązywanie problemów nieaktywnych lub nieprawidłowo działających dodatków zakupionych w Marketplace.
keywords:
  - YetiForce
  - Rozwiązywanie problemów
  - dodatki
  - nieaktywne
  - zakupione
tags:
  - Rozwiązywanie problemów
---

:::tip

Do prawidłowego działania dodatku wymagany jest silnik Chromium/Chrome. [POBIERZ SILNIK](https://www.chromium.org/getting-involved/download-chromium/)

:::

## Zakup dodatku

Dodatki najlepiej kupować w Marketplace panelu administracyjnym systemu YetiForce. Jeżeli interesują cię inne formy płatności i rozliczenia to można skorzystać z naszej strony WWW lub skontaktować się z nami za pomocą formularza kontaktowego.

![pdf-1.jpg](pdf-1.jpg)

## Aktywacja dodatku przez zespół YetiForce

Obsługa subskrypcji odbywa się ręcznie. Jeśli po 48 godzinach nie zobaczysz aktywnego rozszerzenia, to zapoznaj się z artykułem: [Rozwiązywanie problemów z nieaktywnymi lub niedziałającymi dodatkami](/administrator-guides/marketplace/troubleshooting)

## Konfigurowanie ścieżki generatora PDF

Plik konfiguracyjny PDF: [config/Components/Pdf.php](https://doc.yetiforce.com/code/classes/Config-Components-Pdf.html)

Ustaw ścieżkę lokalną lub polecenie do generatora PDF w parametrze [$chromiumBinaryPath](https://doc.yetiforce.com/code/classes/Config-Components-Pdf.html#property_chromiumBinaryPath)

```php
/**
 * Configuration file: Config\Components\Pdf.
 */
class Pdf
{
    /**
     * The name or path of the chrome/chromium engine.
     *
     * @see https://www.chromium.org/getting-involved/download-chromium
     *
     * @var string
     */
    public static $chromiumBinaryPath = 'chromium';

    /**
     * Chromium browser options available for the browser factory.
     *
     * @see https://github.com/chrome-php/chrome#available-options
     *
     * @var array
     */
    public static $chromiumBrowserOptions = ['noSandbox' => true, 'noProxyServer' => true, 'keepAlive' => true];
}
```

### Przykładowe wartości `$chromiumBinaryPath`:

- chromium
- chromium-browser
- google-chrome
- /usr/bin/google-chrome
- c:\Program Files (x86)\Google\Chrome\Application\chrome.exe
- c:\ungoogled-chromium\chrome.exe

## Wybierz nowy silnik

Gdy ścieżka `$chromiumBinaryPath` jest poprawnie ustawiona i system ma dostęp do lokalizacji/polecenia, zobaczysz nowy silnik w panelu PDF.

![pdf-2.jpg](pdf-2.jpg)
