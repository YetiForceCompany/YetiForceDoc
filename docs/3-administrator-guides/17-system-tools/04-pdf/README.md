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

### Download

- Chromium - https://www.chromium.org/getting-involved/download-chromium/

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

### Simple installation on Linux

A simple script to download the latest version without installation. 

Requires additional packages to be installed, e.g.:

```bash
apt-get install -y --no-install-recommends libnss3-tools libatk1.0-0 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm-dev libasound2
```

```bash
#! /bin/bash

cd $(dirname $0)

LASTCHANGE_URL="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Linux_x64%2FLAST_CHANGE?alt=media"

REVISION=$(curl -s -S $LASTCHANGE_URL)

echo "latest revision is $REVISION"

if [ -d $REVISION ] ; then
  echo "already have latest version"
  exit
fi

ZIP_URL="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Linux_x64%2F$REVISION%2Fchrome-linux.zip?alt=media"

ZIP_FILE="${REVISION}-chrome-linux.zip"

echo "fetching $ZIP_URL"

rm -rf $REVISION
mkdir $REVISION
pushd $REVISION
curl -# $ZIP_URL > $ZIP_FILE
echo "unzipping.."
unzip $ZIP_FILE
popd
rm -f ./latest
find chromium/* -type d -ctime +1 -exec rm -rf {} \;
ln -s $REVISION/chrome-linux/ ./latest
```
