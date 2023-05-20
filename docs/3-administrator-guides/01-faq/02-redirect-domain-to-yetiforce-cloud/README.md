---
title: How to redirect a domain to YetiForce Cloud
description: Redirecting WWW application to another domain
keywords:
  - YetiForce
  - redirect
  - domain
  - Cloud
  - DNS
  - CNAME
tags:
  - redirect
  - domain
  - Cloud
---

Redirecting a domain (or subdomain) to another www address (domain/subdomain) is very practical in business. Most often it is used when we want the target application to be visible to end-users at a different address. Using redirection is especially useful when we use solutions that aren’t on your server but are at a different address than for example our domain, which is known to our users. A step-by-step instruction can be found below.

:::warning
For YetiForce customers the redirecting service is only available for the YetiForce Cloud product.
:::

## Problem description

Our application is installed at yourcrm.yetiforce.eu and we want our employees to access it through crm.newaddress.com

## Solution

In order to redirect the system to a new address follow the instruction below:

1. Redirect the new address (eg. crm.newaddress.com) using CNAME record in DNS to the address where the application currently exists (eg. yourcrm.yetiforce.eu) - thanks to this solution each employee who types in the new address will be redirected in the background to the old address, but the URL will show the new one. Keep in mind that when you add a CNAME entry there must be a full stop at the end, eg. `yourcrm.yetiforce.eu.` - if you are not sure how to do this you can find instructions on Google: https://www.google.com/search?q=domain+cname+example. Remember to set TTL for the record to 3600 seconds.

2. If you have added a CNAME record in DNS, after some time you will be able to use a new www address. In order to make sure everything is alright, you can use the online tools that will allow you to verify the DNS configuration:
   https://www.google.com/search?q=check+dns+cname. Note that some DNS servers need minutes or even hours to update but usually it doesn’t take more than 15 minutes.

3. Once you successfully redirected the address you should change the configuration on the server and/or the target application (our system stores the address in the config file, it uses the address to protect itself against attackers by not accepting any requests from a different address). Each application and each server require a different configuration, please get in touch with your server administrator and app administrator for further instructions.
4. The last but very important step is adding HTTPS certificates of the new domain to the servers with the old WWW address. Otherwise, after the redirection users will see a warning about the invalid certificate (because by default the certificate is configured to work properly only at the new WWW address and we need to add the certificate so that after the redirection the old WWW address can also be used correctly. The server admin of the application will need two elements:
   - SSL certificate private key
   - Intermediate SSL certificate

## Summary

Even though the process itself is fairly quick and simple (shouldn’t take more than 15 minutes), it tends to be problematic since several people have to be involved at the same time:

- New domain admin - who redirects and provides a private key and the new domain’s intermediate certificate.
- Old server admin - who adds the new domain to the server (often it has to be added to vhost) and adds the new certificate.
- App admin - who changes app address to the new one in app configuration.
