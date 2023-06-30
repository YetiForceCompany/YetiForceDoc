---
title: PDF
description: YetiForce PDF Premium
keywords:
  - YetiForce
  - Panel konfiguracyjny
  - PDF
tags:
  - PDF
preview: pdf-2.jpg
---

## Chromium/Chrome

### Konfigurowanie ścieżki generatora PDF

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

#### Przykładowe wartości `$chromiumBinaryPath`:

- chromium
- chromium-browser
- google-chrome
- /usr/bin/google-chrome
- c:\Program Files (x86)\Google\Chrome\Application\chrome.exe
- c:\ungoogled-chromium\chrome.exe

### Wybierz nowy silnik

Gdy ścieżka `$chromiumBinaryPath` jest poprawnie ustawiona i system ma dostęp do lokalizacji/polecenia, zobaczysz nowy silnik w panelu PDF.

![pdf-2.jpg](pdf-2.jpg)
