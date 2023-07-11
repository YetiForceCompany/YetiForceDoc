---
title: Apache 500 - Internal Server Error
description: It is a common scenario for people responsible for installation, updates, and implementation of the system to receive error 500 in the browser.
keywords:
  - Server
  - Apache
  - Internal
  - Error
  - 500
  - YetiForce
tags:
  - Error
---

It is a common scenario for people responsible for installation, updates, and implementation of the system to receive error 500 in the browser. The first thing to understand is that this type of error isn’t an application error, but http server error. However, it doesn't mean the application itself cannot cause the problem, but it means that the http server knows why this error appeared. Therefore, the most important information is why the http server displays the error. Read the following information to learn more about the error:

## Enable http server logs and determine what causes the error

- If you can’t see anything relevant in the logs - you will have to enable more detailed http server logs. Error 500 is a server error, and therefore the server knows best why the error is displayed.
- If you don’t know how to enable logs - you should ask your server administrator to do it for you, or contact the server’ provider support.
- YetiForce application logs may include a hint why the problem occurs, but you should mostly focus on what the server logs show.

## The most common causes of error 500

- **temporary exceeding security services parameters**, including the scripts run by www. You can try to undo the last changes performed in www service, disable scripts/applications that can significantly burden the server.
- **exceeding the timeout parameter for the server**. You can solve the problem by modifying scripts, for example websites, so that their execution time doesn’t exceed the service safety parameters.
- **misconfigured file and directory permissions**. You can change CHMOD, for example while connecting to the FTP server.
- **incorrect entries in the .htaccess file**. You can solve the problem by removing or fixing incorrect directives, for example syntax errors, or calling options unavailable on the server.

## How can the YetiForce team help you to solve this problem?

This error is server-specific and requires the analysis of server logs, so YetiForce team can only help you to solve this problem if you buy one of the support packages available in [our store](https://yetiforce.com/en/marketplace/support.html).

## How can the community help you to solve this problem?

If you submit an issue here: https://github.com/YetiForceCompany/YetiForceCRM/issues, you can try to solve the problem together with the community, but remember that if you don’t provide http server logs, it may be like finding a needle in a haystack. Therefore, it is necessary to attach these logs.

If you find an error message and you have no clue what to do with it, you should ask the operating system administrator to conduct an analysis, or research the problem on the Internet on your own. Our team can only offer advice as far as configuration and development of the YetiForce system is concerned. When it comes to assistance with server issues we recommend contacting companies who specialize in this area. We have Linux server specialists, but they support us in the development of the product and they also help us during the implementation of paid projects.
