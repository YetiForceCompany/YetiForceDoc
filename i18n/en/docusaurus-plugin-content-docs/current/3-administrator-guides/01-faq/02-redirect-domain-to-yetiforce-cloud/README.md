---
title: How to redirect a domain to YetiForce Cloud
description: Redirecting WWW application to another domain
keywords:
  - YetiForce
  - redirect
  - domena
  - Cloud
  - DNS
  - CNAME
tags:
  - redirect
  - domena
  - Cloud
---

Redirecting a domain (or subdomain) to another www address (domain/subdomain) is very practical in business. Most often it is used when we want the target application to be visible to end-users at a different address. Using redirection is especially useful when we use solutions that aren’t on your server but are at a different address than for example our domain, which is known to our users. A step-by-step instruction can be found below.

:::warning

For YetiForce customers the redirecting service is only available for the YetiForce Cloud product.

:::

## Problem description

Your application is installed at yourcrm.yetiforce.eu and you want your employees to access it through crm.newaddress.com

## Solution

In order to redirect the system to a new address follow the instruction below:

1. Redirect the new address (e.g.: crm.newaddress.com) using a CNAME record in DNS to the address where the application is currently located (e.g.: crm.oldaddress.com) - thanks to this redirection, each employee entering the new address will be redirected "in the background" to the old address where the application is located, but will see the new address in the address bar.**Note**: pay special attention to how you add the CNAME entry, because most often you have to enter a dot at the end, e.g.: `crm.oldaddress.com.` - if you are not sure how to do it correctly, read about it on the Internet: https://www.google.com/search?q=domain+cname+example. When adding a CNAME record, remember to set the TTL for the record to 3600 seconds.

2. If you have correctly added the CNAME record in DNS, you will be able to use the new address after a while. To be sure that everything went well, you can use online tools that will allow you to check your DNS configuration: https://www.google.com/search?q=check+dns+cname. Remember that some DNS servers can take up to several hours to update the new settings, but most often it takes no longer than 15 minutes.

3. Once you have correctly performed the redirection, you should change the configuration on the server and/or in the target application (for example: our system stores the address in the configuration file where the application is running, it uses this address to protect itself from unwanted attacks - not allowing to accept requests from another address). Each application, as well as each server where the application is located, requires a different configuration - report this to the server administrator and the application administrator, they will know what to do.

4. The last but very important step is to add the HTTPS certificates of the new domain to the server where the old address is. If you don't do this, after redirection, the users will see a warning about an invalid certificate (because by default the certificate is configured to work correctly only under the new address, and you need to add the certificate so that after redirection the old address can also use it correctly). To make this possible, you need to provide two elements to the administrator of the server where the application is located:
  - SSL certificate private key
  - Intermediate SSL certificate

## Summary

Although the process itself is very simple and very quick (it takes no more than 15 minutes in total), it is problematic because you have to involve several people at the same time:

- New domain admin - who redirects and provides a private key and the new domain’s intermediate certificate.
- Old server admin - who adds the new domain to the server (often it has to be added to vhost) and adds the new certificate.
- App admin - who changes app address to the new one in app configuration.
