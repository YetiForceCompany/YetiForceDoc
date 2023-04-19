---
title: PDF
description: YetiForce PDF Premium
keywords:
  - YetiForce
  - Settings
  - PDF
tags:
  - PDF
preview: pdf-2.jpg
---

## Chromium/Chrome

### Configuring the PDF generator path

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

#### Example `$chromiumBinaryPath` values:

- chromium
- chromium-browser
- google-chrome
- /usr/bin/google-chrome
- c:\Program Files (x86)\Google\Chrome\Application\chrome.exe
- c:\ungoogled-chromium\chrome.exe

### Select the new engine

When the `$chromiumBinaryPath` path is set correctly and the system has access to the location/command you will see a new engine in the PDF panel.

![pdf-2.jpg](pdf-2.jpg)
