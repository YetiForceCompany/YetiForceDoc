---
title: YetiForce PDF Premium - activation
description: The article below explains troubleshooting inactive or malfunctioning addons purchased in the Marketplace.
keywords:
  - YetiForce
  - Troubleshooting
  - addons
  - inactive
  - purchased
tags:
  - Troubleshooting
---

:::tip

The Chromium/Chrome engine is necessary in order for this addon to work properly. You can download it [HERE](https://www.chromium.org/getting-involved/download-chromium/)

:::

## Purchasing the addon

It's best to purchase all the addon in the Marketplace in the system in the administrator panel. If you're interested in other payment options you can use our website or get in touch with us directly.

![pdf-1.jpg](pdf-1.jpg)

## Activating the addon by the YetiForce team

We activate the subscription manually. If your addon is not active within 48h in your system, please read the following article: [Troubleshooting inactive and malfunctioning addons](/administrator-guides/marketplace/troubleshooting)

## Configuring the PDF generator path

PDF configuration file: [config/Components/Pdf.php](https://doc.yetiforce.com/code/classes/Config-Components-Pdf.html)

Set the local path or a command to the PDF generator in the [$chromiumBinaryPath](https://doc.yetiforce.com/code/classes/Config-Components-Pdf.html#property_chromiumBinaryPath) parameter

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

### Example `$chromiumBinaryPath` values:

- chromium
- chromium-browser
- google-chrome
- /usr/bin/google-chrome
- c:\Program Files (x86)\Google\Chrome\Application\chrome.exe
- c:\ungoogled-chromium\chrome.exe

## Select the new engine

When the `$chromiumBinaryPath` path is set correctly and the system has access to the location/command you will see a new engine in the PDF panel.

![pdf-2.jpg](pdf-2.jpg)
