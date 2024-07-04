---
title: Fałszywe pozytywne wyniki analizy YetiForce przez ModSecurity
keywords:
  - server
  - requirements
  - system
  - YetiForce
  - ModSecurity
tags:
  - server
  - requirements
  - system
  - ModSecurity
description: What are the problems with the operation of the YetiForce system with ModSecurity
---

In the default configuration, ModSecurity does not work properly with the YetiForce system, which results in the detection of false positive results, i.e., finding vulnerabilities that do not actually exist.

## Examples of errors

### KaTeX parse error: Can't use function '$' in math mode at position

```
[Tue Oct 19 12:46:31.419489 2021] [:error] [pid 3665031] [client 10.0.1.2:53070] [client 10.0.1.2] ModSecurity: Warning. Pattern match "(?:;|\\\\{|\\\\||\\\\|\\\\||&|&&|\\\\n|\\\\r|\\\\$\\\

KaTeX parse error: Can't use function '$' in math mode at position 6: |\\\\$̲\\\\(\\\\(|`|\\...
)\\\\s(?:{|\\\\s\\\
KaTeX parse error: Got function '\newline' with no arguments as superscript at position 1: \̲n̲e̲w̲l̲i̲n̲e̲

\\\\-\\\\|+\\\\w'\\"\\\\./\\\\\\\\]+/)?[\\\\\\\\'\\"](?:l[\\\\\\\\'\\"] ..." at ARGS:historyUrl. [file "/usr/share/modsecurity-crs/rules/REQUEST-932-APPLICATION-ATTACK-RCE.conf"] [line "123"] [id "932100"] [msg "Remote Command Execution: Unix Command Injection"] [data "Matched Data: &history found within ARGS:historyUrl: index.php?module=Calendar&view=CalendarExtended&history=true&viewType=month&start=2021-09-27&end=2021-11-06&user=22&time=current&cvid=undefined&hiddenDays=0,6"] [severity "CRITICAL"] [ver "OWASP_CRS/3.2.0"] [tag "application-multi"] [tag "language-shell"] [tag "platform-unix"] [tag "attack-rce"] [tag "OWASP_CRS"] [tag "OWASP_CRS/WEB_ATTACK/COMMAND_INJECTION"] [tag "WASCTC/WASC-31"] [tag "OWASP_TOP_10/A1"] [tag "PCI/6.5.2"] [hostname "yetiforce.example.com"] [uri "/index.php"] [unique_id "YW6iB-TmEYx0Wwg3C6b1hwAAAAk"]

```

### Access denied with code 403 (phase 2). Operator GE matched 5 at TX:anomaly_score

```
[Tue Oct 19 12:46:31.425358 2021] [:error] [pid 3665031] [client 10.0.1.2:53070] [client 10.0.1.2] ModSecurity: Access denied with code 403 (phase 2). Operator GE matched 5 at TX:anomaly_score. [file "/usr/share/modsecurity-crs/rules/REQUEST-949-BLOCKING-EVALUATION.conf"] [line "91"] [id "949110"] [msg "Inbound Anomaly Score Exceeded (Total Score: 5)"] [severity "CRITICAL"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-generic"] [hostname "yetiforce.example.com"] [uri "/index.php"] [unique_id "YW6iB-TmEYx0Wwg3C6b1hwAAAAk"]
```

### Operator GE matched 5 at TX:inbound_anomaly_score.

```
[Tue Oct 19 12:46:31.425742 2021] [:error] [pid 3665031] [client 10.0.1.2:53070] [client 10.0.1.2] ModSecurity: Warning. Operator GE matched 5 at TX:inbound_anomaly_score. [file "/usr/share/modsecurity-crs/rules/RESPONSE-980-CORRELATION.conf"] [line "86"] [id "980130"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5 - SQLI=0,XSS=0,RFI=0,LFI=0,RCE=5,PHPI=0,HTTP=0,SESS=0): individual paranoia level scores: 5, 0, 0, 0"] [tag "event-correlation"] [hostname "yetiforce.example.com"] [uri "/index.php"] [unique_id "YW6iB-TmEYx0Wwg3C6b1hwAAAAk"]
```

## Address doesn't contain the Remote Command Execution: Unix Command Injection attack\`

The `historyUrl` parameter contains the following URL: "index.php?module=Calendar&view=CalendarExtended&history=true&viewType=month&start=2021-09-27&end=2021-11-06&user=22&time=current&cvid=undefined&hiddenDays=0,6", not the following shell command: `Remote Command Execution: Unix Command Injection`.

## We do not recommend that PHP scripts be able to call functions to the OS shell

In [System settings → Logs → Server - configuration](/administrator-guides/logs/server-configuration/) you can verify whether any dangerous functions have been enabled (including shell commands):

```ini
disable_functions = pcntl_alarm,pcntl_fork,pcntl_waitpid,pcntl_wait,pcntl_wifexited,pcntl_wifstopped,pcntl_wifsignaled,pcntl_wifcontinued,pcntl_wexitstatus,pcntl_wtermsig,pcntl_wstopsig,pcntl_signal,pcntl_signal_get_handler,pcntl_signal_dispatch,pcntl_get_last_error,pcntl_strerror,pcntl_sigprocmask,pcntl_sigwaitinfo,pcntl_sigtimedwait,pcntl_exec,pcntl_getpriority,pcntl_setpriority,pcntl_async_signals,pcntl_unshare,shell_exec,exec,system,passthru,popen
```

Therefore, there is no risk, if your server is properly configured.

## Each input is properly validated for allowed values and characters
