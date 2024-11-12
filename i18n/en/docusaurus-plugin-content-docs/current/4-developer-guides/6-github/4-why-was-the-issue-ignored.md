---
title: Why was the issue ignored?
description: This article might come in handy when your issue has been labeled as Category::Ignored, and you don't quite agree with our decision.
keywords:
  - System
  - development
  - ideas
  - YetiForce
tags:
  - development
  - ideas
---

This article might come in handy when your issue has been labeled as Category::Ignored, and you don't quite agree with our decision. We made a list of all the cases that result in labeling the issue as ignored, it'll allow the community to better understand our point of view. We also provide some examples on how to solve the problem of an ignored issue.

## 1. Ignored issues labeled as: Category::Enhancement

The issue is related to changes that we won't add anytime soon

If you want to find out a bit more about why an issue was ignored, we recommend reading [System development ideas](/developer-guides/github/system-development-ideas).

## 2. The issue is not properly described

### a. There's no log information in the issue

Logs are the source of all necessary information required to analyze the problem, even if it comes to system installation. If possible, a properly described issue should always include not only logs per se, but also their analysis. Remember that logs contain some sensitive and redundant information, therefore only the relevant fragment should be attached to the issue. More information on how to enable logs can be found [here](/developer-guides/debug). If you provide all the missing details according to [this](/developer-guides/github/how-to-report-bugs) article, you can request reopening the issue, or you can submit a new one.

### b. The description isn't sufficient

We often stumble upon issues that inform about a problem, but the description unfortunately doesn't provide enough details, which makes it hard for us to distinguish what kind of issue is being reported. The issues are written in different languages, by different people, sometimes translated by low quality translator, therefore we recommend writing short and simple sentences, that fully describe the problem. If you were redirected here, please describe your problem once again in more detail, according to [this](/developer-guides/github/how-to-report-bugs) article. Once you do that, you can ask us to reopen your issue, or submit a new well-described one.

### c. The issue doesn't include step-by-step instructions on how to trigger the error

We always try to trigger the error on the developer version of YetiForce, which is the most up-to-date version available. If the description doesn't provide the instructions on how to trigger the error on a clean version, then it'll most likely be ignored. It's due to the fact that we can't and we don't want to guess how to recreate the problem. The perfect solution would be to record your screen using [Screen2GIF](http://www.screentogif.com/) for example, which will show us what steps have to be taken in order to trigger the error. Once you do that, you can request reopening your issue.

## 3. The issue was not tested on our server

The issue wasn't tested on https://demo.yetiforce.com/ It's extremely important for the issue to be tested on our servers. If you skip that step, we might close it and label as ignored. It's due to the fact that we take care of hundreds of issues every month, and we can't guess the error's behavior on our servers. We don't want to waste our time trying to find the cause, especially if it turns out that everything is working just fine on our server, and the users are experiencing problems due to their server's incorrect configuration. If you add all the details on testing the error on our server, and the error still occurs, you can submit a new issue or request reopening the existing one.

## 4. The issue is related to specific environment

The issue is related to an error that only occurs in certain configuration

If an issue is ignored due to its specific configuration it doesn't mean that the problem doesn't exist. It's crucial for the YetiForce team to be able to recreate the issue in order to solve the problem. If we currently don't have the tools or applications necessary to test the errors, then the issue will be closed. Additionally, if testing the error is very laborious, we will also close it. The solution in this case would be sending us all access data to a fully configured test environment on your server.

## 5. One problem per issue

Too many errors reported in one issue

We strongly believe in our "one issue = one problem" rule, and we would like to ask all our users to follow that rule. It makes it much easier for us to coordinate issues and search for problem on GitHub. If this is the reason for ignoring your issue, then describe all your problems in separate issues.
