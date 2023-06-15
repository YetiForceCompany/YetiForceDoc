---
title: Slow connection to the mail server
description: Over the past few months, a few customers that optimized YetiForce system to its limits have notices slow access to the mail server
keywords:
  - YetiForce
  - problemów
  - hosting
tags:
  - problemów
  - hosting
---

Over the past few months, a few customers that optimized YetiForce system to its limits have notices slow access to the mail server. The description below results from the experience gained during the deployments of the system in large companies.

![slow-connection-to-the-mail-server.jpg](slow-connection-to-the-mail-server.jpg)

## Opis problemu

It is quite common that when you use applications such as Outlook, Thunderbird or any other email client working offline, the communication seems to run smoothly (no slowdowns are noticeable). The situation is different in case of Roundcube (the default mail client in YetiForce), because this application does not work offline, but online.

In Outlook the situation is as follows: an email downloaded from the server is saved locally in Outlook, every search or entry to the downloaded email is performed in Outlook and has nothing in common with the email server. Each connection to the server is performed in order to synchronize and download new elements. In many cases this mechanism is optimal, because it does not overload the server and an internet connection. This solution has also some drawbacks, but it will not be discussed in this article, because it all depends on which side of the fence you are standing :

In case of Roundcube the situation is completely different. Here each time the email client is refreshed it connects to the mail server. Data is downloaded from the server every time you view your email messages. The main advantage of this solution is a real-time communication. If you delete something on one of your devices, e.g. on your mobile, you can expect that when you refresh the website, the deleted element will not appear in the interface of your mail client. The most important advantage of Roundcube is the fact that you do not need to install anything on the part of users (the web browser is enough) whereas its greatest disadvantage is no access to your emails if you are not connected to the Internet [of course this problem can also be addressed].

## Testing

But how is it related to the speed of response of the mailbox? The biggest problems are hardware mail servers on shared hosting. These servers are inefficient and if there are too many enquiries they slow down. It can be tested easily if you use such solutions. Ask your employees to send and open many email messages at the same time so every employee connects to the server every 3-5 seconds. This simple test allows to see that the server slows down significantly. This kind of behavior can be probably noticed on NAS tools where the producer tries to include as many functionalities as possible on servers that have low performance parameters.

If the above test will not be successful, we suggest something different. It is necessary to enable debugging in Roundcube so you will be able to track every enquiry sent to the server and its response time. If the response time of Roundcube is taking too long, it means that the server cannot cope with the work. Most often the enquiries will take over 90% of the loading time for the entire CRM.

After gaining our own experience and undertaking numerous tests, we set Roundcube by default with such parameters that allow the best possible performance and according to the recommendations of its producer. If you need, you can change this configuration so it will better meet the requirements of your company. Open source solutions do not limit you, instead they provide many opportunities and many new solutions.

## Rozwiązanie

Unfortunately, I do not have any good news here, because the problem results from the establishments of Roundcube so if this solution is in use, it is necessary to adjust the working environment in such a way that it will work efficiently and optimally. In practice, it does not matter whether the application server is on the same server as the mail server or whether they are on different physical servers. There might also be a case in which the application server is on a physical server and the mail server is on the virtual server, but the most important things are the optimal communication and adequately optimized servers. If the application and servers are on the same server, then this solution will be 10-30% more efficient in comparison to the other two solutions. However, response time varies in fractions of seconds so a regular user will not even notice it.

Please note that in order to solve the problem is is necessary to define the bottleneck, eliminate it and replace with a more optimal solution!
