---
title: Wymagania systemu YetiForce
description: Jakie są wymagania dla systemu YetiForce
keywords:
  - serwer
  - wymagania
  - systemu
  - YetiForce
  - LAMP
  - LEMP
  - środowisko
tags:
  - serwer
  - wymagania
  - systemu
  - LAMP
  - LEMP
  - środowisko
preview: requirements.jpg
---

## Wstęp

YetiForce stawia pewne wymagania serwerom WWW - dostosowanie serwera jest kluczowe dla prawidłowej instalacji, jak również stabilnej pracy systemu. Nieprawidłowa konfiguracja serwera jest najczęstszą przyczyną problemów pojawiających się w YetiForce. Większość profesjonalnych serwerów WWW spełnia wymagania jakie podajemy poniżej. Jeżeli jednak zdarzy się, że Twój serwer nie spełnia wszystkich wymagań, poproś swojego administratora, aby poprawił konfigurację i podaj mu link do tego artykułu. Jeżeli Twój administrator nie chce zmienić konfiguracji, to czas najwyższy przejść na inny serwer, ponieważ to serwer powinien dostosować się do Ciebie, a nie Ty do serwera.

Podczas instalacji system weryfikuje aktualną konfigurację serwera i pokazuje elementy, które są niepoprawne i należy im zmienić parametr. Należy pamiętać, że przedstawiane wymagania poniżej nie są idealne dla każdego, a więc w przypadku bardziej wymagających klientów wymagania te powinny zostać zweryfikowane i zoptymalizowane.

:::tip
Zawsze aktualna i pełna konfiguracja znajduje się w module [Weryfikacja konfiguracji serwera](/administrator-guides/logs/server-configuration/) na wersji stabilnej:

- https://demo.yetiforce.com/index.php?parent=Settings&module=ConfReport&view=Index&block=14&fieldid=65

:::

## Możliwe problemy

import DocCardList from '@theme/DocCardList';

<DocCardList />

## Oprogramowanie bazowe dla serwera (LAMP/LEMP)

- **System operacyjny - Debian, Ubuntu, RedHat, Mint** - działa na większości dystrybucji linuksowych. Nie zalecamy systemu operacyjnego MS Windows, jak również MS Windows Server. Pomimo, że nasz system dobrze sobie radzi na serwerach Windows, to nie są one optymalne pod kątem działania aplikacji WWW.

  :::warning
  
  Ze względów bezpieczeństwa, zalecamy uruchomienie każdej wersji systemu YetiForce (PROD i TEST) na osobnym/dedykowanym użytkowniku systemu operacyjnego (najlepiej na oddzielnym serwerze), np. yfprod, yftest. Nie zalecamy używania jednego użytkownika systemu operacyjnego dla kilku aplikacji/stron internetowych.
  
  :::

- **Serwer WWW**

  - **Nginx `1.23` (rekomendowany)** - poprawnie działa również na wcześniejszych wersjach, jednakże zalecamy najnowsze stabilne wersje oprogramowania. Możesz również używać oprogramowania alternatywnego, ale kompatybilnego z tym oprogramowaniem.
  - **Apache `2.4`** - działa również na wcześniejszych wersjach (`2.1, 2.2, 2.3`), jednakże zalecamy najnowsze stabilne wersje oprogramowania. Możesz również używać oprogramowania alternatywnego, ale kompatybilnego z tym oprogramowaniem.

    :::warning
    
    System YetiForce nie działa prawidłowo z rozszerzeniem WWW ModSecurity
    
    :::

- **Baza danych**

  - **MariaDB `10.6` (rekomendowany)** - zalecamy najnowsze stabilne wersje oprogramowania. Nie zalecamy wersji starszych niż wersja `10.1`.
  - **MySQL `8.0.13`** - lub nowsza wersji. Zalecamy użycie najnowszej stabilnej wersji oprogramowania.

- **PHP `8.1, 8.2, 8.3`. Zalecamy używanie najnowszych stabilnych wersji oprogramowania (np. `8.3.x`).

## Wymagania dla silnika baz danych (MariaDB/MySQL)

Pliki konfiguracyjne, np. Pliki konfiguracyjne np. `/etc/my.cnf`, `/etc/mysql/my.cnf`, `/etc/mysql/conf.d/`, `my.ini`

- `SQL_MODE` nie powinno zawierać `STRICT_TRANS_TABLE` i `ONLY_FULL_GROUP_BY`
- `ENGINE = InnoDB` powinno być dostępne i domyślnie włączone. (wyłącz --skip-innodb)

:::warning
Ze względów bezpieczeństwa zalecamy aby każda baza danych posiadała dedykowanego użytkownika, nie zalecamy używania użytkownika bazodanowego `root` do komunikacji z bazą danych.
:::

```ini
[client]
default-character-set           = utf8mb4

[mysql]
default-character-set           = utf8mb4

[mysqld]
default_storage_engine          = InnoDB
default-character-set           = utf8mb4
character-set-server            = utf8mb4
collation-server                = utf8_general_ci
init-connect                    = 'SET NAMES utf8'
sql-mode                        = ''
#sql-mode                       = "ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"
wait_timeout                    = 600
connect_timeout                 = 600
net_read_timeout                = 600
net_write_timeout               = 600
interactive_timeout             = 600
max_allowed_packet              = 128M
query_cache_size                = 128M
innodb_default_row_format       = 'dynamic'
innodb_lock_wait_timeout        = 600
innodb_large_prefix             = ON
innodb_file_per_table           = ON
innodb_ft_min_token_size        = 2
innodb_stats_on_metadata        = OFF
innodb_open_files               = 1000
innodb_io_capacity              = 1000
ft_min_word_len                 = 2
table_open_cache                = 1000
table_definition_cache          = 1400
bulk_insert_buffer_size = 16M

sort_buffer_size                = 4M
read_buffer_size                = 2M
read_rnd_buffer_size            = 1M
join_buffer_size                = 16M
max_connections                 = 100
innodb_flush_method             = O_DIRECT
```

## Wymagania dla PHP

Pliki konfiguracyjne, np. Pliki konfiguracyjne np. `/etc/php/8.1/fpm/php.ini`, `/etc/php/8.1/cli/php.ini`

```ini
allow_url_fopen = "On"
allow_url_include = "Off"
auto_detect_line_endings = "On"
default_charset = "UTF-8"
default_socket_timeout = 600
disable_functions = pcntl_alarm,pcntl_fork,pcntl_waitpid,pcntl_wait,pcntl_wifexited,pcntl_wifstopped,pcntl_wifsignaled,pcntl_wifcontinued,pcntl_wexitstatus,pcntl_wtermsig,pcntl_wstopsig,pcntl_signal,pcntl_signal_get_handler,pcntl_signal_dispatch,pcntl_get_last_error,pcntl_strerror,pcntl_sigprocmask,pcntl_sigwaitinfo,pcntl_sigtimedwait,pcntl_exec,pcntl_getpriority,pcntl_setpriority,pcntl_async_signals,pcntl_unshare,shell_exec,exec,system,passthru,popen
display_errors = Off
display_startup_errors = Off
error_log = /var/log/php_error.log
error_reporting = E_ALL & ~E_NOTICE
expose_php = "Off"
file_uploads = "On"
html_errors = "On"
log_errors = "On"
max_execution_time = 600
max_input_time = 600
max_input_vars = 10000
mbstring.func_overload = 0
memory_limit = 1024M
mysqlnd.collect_memory_statistics = "Off"
mysqlnd.collect_statistics = "Off"
opcache.enable = "On"
opcache.enable_cli = "On"
opcache.fast_shutdown = 1
opcache.file_update_protection = 0
opcache.interned_strings_buffer = 100
opcache.max_accelerated_files = 40000
opcache.memory_consumption = 256
opcache.revalidate_freq = 0
opcache.save_comments = 0
opcache.validate_timestamps = 1
openssl.cafile=/etc/ssl/certs/ca-certificates.crt
openssl.capath=/etc/ssl/certs/
output_buffering = "On"
post_max_size = 100M
realpath_cache_size = 4096k
realpath_cache_ttl = 600
request_order = "GP"
session.auto_start = "Off"
session.cookie_httponly = "On"
session.gc_divisor = 500
session.gc_maxlifetime = 1440
session.gc_probability = 1
session.name = "YTSID"
session.use_only_cookies = "On"
session.use_strict_mode = "On"
session.use_trans_sid = "Off"
short_open_tag = "On"
upload_max_filesize = 100M
user_ini.filename =
variables_order = "GPCS"
zlib.output_compression = "Off"
```

<details>
  <summary>Wersja deweloperska</summary>

```ini
allow_url_fopen = On
allow_url_include = "Off"
auto_detect_line_endings = "On"
default_charset = "UTF-8"
default_socket_timeout = 1000
disable_functions = ""
display_errors = On
display_startup_errors = On
error_log = /var/log/php_error.log
error_reporting = E_ALL
expose_php = "Off"
file_uploads = "On"
html_errors = On
log_errors = On
max_execution_time = 1000
max_input_time = 1000
max_input_vars = 10000
mbstring.func_overload = 0
memory_limit = 1024M
mysqlnd.collect_memory_statistics = "Off"
mysqlnd.collect_statistics = "Off"
opcache.enable = "On"
opcache.enable_cli = "On"
opcache.fast_shutdown = 1
opcache.file_update_protection = 0
opcache.interned_strings_buffer = 100
opcache.max_accelerated_files = 40000
opcache.memory_consumption = 256
opcache.revalidate_freq  = 0
opcache.save_comments = 1
opcache.validate_timestamps = 1
openssl.cafile=/etc/ssl/certs/ca-certificates.crt
openssl.capath=/etc/ssl/certs/
output_buffering = "On"
post_max_size = 100M
realpath_cache_size = 4096k
realpath_cache_ttl = 600
request_order = "GP"
session.auto_start = "Off"
session.cookie_httponly = "On"
session.gc_divisor = 500
session.gc_maxlifetime = 1440
session.gc_probability = 1
session.name = "YTSID"
session.use_only_cookies = "On"
session.use_strict_mode = "On"
session.use_trans_sid = "Off"
short_open_tag = "On"
upload_max_filesize = 100M
user_ini.filename =
variables_order = "GPCS"
zlib.output_compression = "Off"
```

</details>

### Konfiguracja bibliotek zewnętrznych

#### Obowiązkowe

- imap
- PDO
- pdo_mysql
- mysqlnd (MySQL Native Driver)
- openssl
- curl
- gd
- pcre
- xml
- json
- session
- dom
- zip
- mbstring
- soap
- fileinfo
- iconv
- intl
- SPL
- Reflection
- SimpleXML
- bcmath
- filter
- ctype
- hash

#### Opcjonalne

- exif - Biblioteka zalecana do zwiększenia bezpieczeństwa, umożliwia pracę z metadanymi obrazów
- ldap - Biblioteka wymagana podczas aktywnego logowania za pomocą LDAP/AD
- OPcache - Poprawia wydajność PHP poprzez przechowywanie skompilowanego kodu bajtowego w pamięci współdzielonej
- apcu - Biblioteka przyspieszająca wydajność systemu, zalecana podczas pracy większej ilości użytkowników lub większego obciążenia systemu
- imagick - Biblioteka zalecana do zwiększenia bezpieczeństwa, zabezpiecza i weryfikuje potencjalnie niebezpieczne pliki graficzne
- pdo_sqlsrv - Biblioteka wymagana podczas aktywnej integracji z Wapro ERP lub Comarch

#### Zabronione

- uopz - rozszerzenie powoduje zawieszanie i blokowanie systemu

### FPM

```ini
php_admin_value[error_log] = /var/log/php_fpm_errors.log
clear_env = no
request_terminate_timeout = 600
pm.process_idle_timeout = 600s;
pm.max_requests = 5000
catch_workers_output = yes
```

:::important
Przykładowa konfiguracja FPM:
<details>
  <summary>Ostatnia stabilna wersja</summary>

```ini
; Start a new pool named 'www'.
; the variable $pool can be used in any directive and will be replaced by the
; pool name ('www' here)
[yfprod]

; Per pool prefix
; It only applies on the following directives:
; - 'access.log'
; - 'slowlog'
; - 'listen' (unixsocket)
; - 'chroot'
; - 'chdir'
; - 'php_values'
; - 'php_admin_values'
; When not set, the global prefix (or /usr) applies instead.
; Note: This directive can also be relative to the global prefix.
; Default Value: none
;prefix = /path/to/pools/$pool

; Unix user/group of processes
; Note: The user is mandatory. If the group is not set, the default user's group
;       will be used.
user = yfprod
group = yfprod

; The address on which to accept FastCGI requests.
; Valid syntaxes are:
;   'ip.add.re.ss:port'    - to listen on a TCP socket to a specific IPv4 address on
;                            a specific port;
;   '[ip:6:addr:ess]:port' - to listen on a TCP socket to a specific IPv6 address on
;                            a specific port;
;   'port'                 - to listen on a TCP socket to all addresses
;                            (IPv6 and IPv4-mapped) on a specific port;
;   '/path/to/unix/socket' - to listen on a unix socket.
; Note: This value is mandatory.
listen = /run/php/yfprod.sock

; Set listen(2) backlog.
; Default Value: 511 (-1 on FreeBSD and OpenBSD)
;listen.backlog = 511

; Set permissions for unix socket, if one is used. In Linux, read/write
; permissions must be set in order to allow connections from a web server. Many
; BSD-derived systems allow connections regardless of permissions. The owner
; and group can be specified either by name or by their numeric IDs.
; Default Values: user and group are set as the running user
;                 mode is set to 0660
listen.owner = www-data
listen.group = www-data
;listen.mode = 0660
; When POSIX Access Control Lists are supported you can set them using
; these options, value is a comma separated list of user/group names.
; When set, listen.owner and listen.group are ignored
;listen.acl_users =
;listen.acl_groups =

; List of addresses (IPv4/IPv6) of FastCGI clients which are allowed to connect.
; Equivalent to the FCGI_WEB_SERVER_ADDRS environment variable in the original
; PHP FCGI (5.2.2+). Makes sense only with a tcp listening socket. Each address
; must be separated by a comma. If this value is left blank, connections will be
; accepted from any ip address.
; Default Value: any
;listen.allowed_clients = 127.0.0.1

; Specify the nice(2) priority to apply to the pool processes (only if set)
; The value can vary from -19 (highest priority) to 20 (lower priority)
; Note: - It will only work if the FPM master process is launched as root
;       - The pool processes will inherit the master process priority
;         unless it specified otherwise
; Default Value: no set
; process.priority = -19

; Set the process dumpable flag (PR_SET_DUMPABLE prctl) even if the process user
; or group is differrent than the master process user. It allows to create process
; core dump and ptrace the process for the pool user.
; Default Value: no
; process.dumpable = yes

; Choose how the process manager will control the number of child processes.
; Possible Values:
;   static  - a fixed number (pm.max_children) of child processes;
;   dynamic - the number of child processes are set dynamically based on the
;             following directives. With this process management, there will be
;             always at least 1 children.
;             pm.max_children      - the maximum number of children that can
;                                    be alive at the same time.
;             pm.start_servers     - the number of children created on startup.
;             pm.min_spare_servers - the minimum number of children in 'idle'
;                                    state (waiting to process). If the number
;                                    of 'idle' processes is less than this
;                                    number then some children will be created.
;             pm.max_spare_servers - the maximum number of children in 'idle'
;                                    state (waiting to process). If the number
;                                    of 'idle' processes is greater than this
;                                    number then some children will be killed.
;  ondemand - no children are created at startup. Children will be forked when
;             new requests will connect. The following parameter are used:
;             pm.max_children           - the maximum number of children that
;                                         can be alive at the same time.
;             pm.process_idle_timeout   - The number of seconds after which
;                                         an idle process will be killed.
; Note: This value is mandatory.
pm = ondemand

; The number of child processes to be created when pm is set to 'static' and the
; maximum number of child processes when pm is set to 'dynamic' or 'ondemand'.
; This value sets the limit on the number of simultaneous requests that will be
; served. Equivalent to the ApacheMaxClients directive with mpm_prefork.
; Equivalent to the PHP_FCGI_CHILDREN environment variable in the original PHP
; CGI. The below defaults are based on a server without much resources. Don't
; forget to tweak pm.* to fit your needs.
; Note: Used when pm is set to 'static', 'dynamic' or 'ondemand'
; Note: This value is mandatory.
pm.max_children = 15

; The number of child processes created on startup.
; Note: Used only when pm is set to 'dynamic'
; Default Value: (min_spare_servers + max_spare_servers) / 2
pm.start_servers = 2

; The desired minimum number of idle server processes.
; Note: Used only when pm is set to 'dynamic'
; Note: Mandatory when pm is set to 'dynamic'
pm.min_spare_servers = 1

; The desired maximum number of idle server processes.
; Note: Used only when pm is set to 'dynamic'
; Note: Mandatory when pm is set to 'dynamic'
pm.max_spare_servers = 3

; The number of seconds after which an idle process will be killed.
; Note: Used only when pm is set to 'ondemand'
; Default Value: 10s
;pm.process_idle_timeout = 10s;

; The number of requests each child process should execute before respawning.
; This can be useful to work around memory leaks in 3rd party libraries. For
; endless request processing specify '0'. Equivalent to PHP_FCGI_MAX_REQUESTS.
; Default Value: 0
;pm.max_requests = 500

; The URI to view the FPM status page. If this value is not set, no URI will be
; recognized as a status page. It shows the following informations:
;   pool                 - the name of the pool;
;   process manager      - static, dynamic or ondemand;
;   start time           - the date and time FPM has started;
;   start since          - number of seconds since FPM has started;
;   accepted conn        - the number of request accepted by the pool;
;   listen queue         - the number of request in the queue of pending
;                          connections (see backlog in listen(2));
;   max listen queue     - the maximum number of requests in the queue
;                          of pending connections since FPM has started;
;   listen queue len     - the size of the socket queue of pending connections;
;   idle processes       - the number of idle processes;
;   active processes     - the number of active processes;
;   total processes      - the number of idle + active processes;
;   max active processes - the maximum number of active processes since FPM
;                          has started;
;   max children reached - number of times, the process limit has been reached,
;                          when pm tries to start more children (works only for
;                          pm 'dynamic' and 'ondemand');
; Value are updated in real time.
; Example output:
;   pool:                 www
;   process manager:      static
;   start time:           01/Jul/2011:17:53:49 +0200
;   start since:          62636
;   accepted conn:        190460
;   listen queue:         0
;   max listen queue:     1
;   listen queue len:     42
;   idle processes:       4
;   active processes:     11
;   total processes:      15
;   max active processes: 12
;   max children reached: 0
;
; By default the status page output is formatted as text/plain. Passing either
; 'html', 'xml' or 'json' in the query string will return the corresponding
; output syntax. Example:
;   http://www.foo.bar/status
;   http://www.foo.bar/status?json
;   http://www.foo.bar/status?html
;   http://www.foo.bar/status?xml
;
; By default the status page only outputs short status. Passing 'full' in the
; query string will also return status for each pool process.
; Example:
;   http://www.foo.bar/status?full
;   http://www.foo.bar/status?json&full
;   http://www.foo.bar/status?html&full
;   http://www.foo.bar/status?xml&full
; The Full status returns for each process:
;   pid                  - the PID of the process;
;   state                - the state of the process (Idle, Running, ...);
;   start time           - the date and time the process has started;
;   start since          - the number of seconds since the process has started;
;   requests             - the number of requests the process has served;
;   request duration     - the duration in µs of the requests;
;   request method       - the request method (GET, POST, ...);
;   request URI          - the request URI with the query string;
;   content length       - the content length of the request (only with POST);
;   user                 - the user (PHP_AUTH_USER) (or '-' if not set);
;   script               - the main script called (or '-' if not set);
;   last request cpu     - the %cpu the last request consumed
;                          it's always 0 if the process is not in Idle state
;                          because CPU calculation is done when the request
;                          processing has terminated;
;   last request memory  - the max amount of memory the last request consumed
;                          it's always 0 if the process is not in Idle state
;                          because memory calculation is done when the request
;                          processing has terminated;
; If the process is in Idle state, then informations are related to the
; last request the process has served. Otherwise informations are related to
; the current request being served.
; Example output:
;   ************************
;   pid:                  31330
;   state:                Running
;   start time:           01/Jul/2011:17:53:49 +0200
;   start since:          63087
;   requests:             12808
;   request duration:     1250261
;   request method:       GET
;   request URI:          /test_mem.php?N=10000
;   content length:       0
;   user:                 -
;   script:               /home/fat/web/docs/php/test_mem.php
;   last request cpu:     0.00
;   last request memory:  0
;
; Note: There is a real-time FPM status monitoring sample web page available
;       It's available in: /usr/share/php/7.4/fpm/status.html
;
; Note: The value must start with a leading slash (/). The value can be
;       anything, but it may not be a good idea to use the .php extension or it
;       may conflict with a real PHP file.
; Default Value: not set
;pm.status_path = /status

; The ping URI to call the monitoring page of FPM. If this value is not set, no
; URI will be recognized as a ping page. This could be used to test from outside
; that FPM is alive and responding, or to
; - create a graph of FPM availability (rrd or such);
; - remove a server from a group if it is not responding (load balancing);
; - trigger alerts for the operating team (24/7).
; Note: The value must start with a leading slash (/). The value can be
;       anything, but it may not be a good idea to use the .php extension or it
;       may conflict with a real PHP file.
; Default Value: not set
;ping.path = /ping

; This directive may be used to customize the response of a ping request. The
; response is formatted as text/plain with a 200 response code.
; Default Value: pong
;ping.response = pong

; The access log file
; Default: not set
;access.log = log/$pool.access.log

; The access log format.
; The following syntax is allowed
;  %%: the '%' character
;  %C: %CPU used by the request
;      it can accept the following format:
;      - %{user}C for user CPU only
;      - %{system}C for system CPU only
;      - %{total}C  for user + system CPU (default)
;  %d: time taken to serve the request
;      it can accept the following format:
;      - %{seconds}d (default)
;      - %{miliseconds}d
;      - %{mili}d
;      - %{microseconds}d
;      - %{micro}d
;  %e: an environment variable (same as $_ENV or $_SERVER)
;      it must be associated with embraces to specify the name of the env
;      variable. Some exemples:
;      - server specifics like: %{REQUEST_METHOD}e or %{SERVER_PROTOCOL}e
;      - HTTP headers like: %{HTTP_HOST}e or %{HTTP_USER_AGENT}e
;  %f: script filename
;  %l: content-length of the request (for POST request only)
;  %m: request method
;  %M: peak of memory allocated by PHP
;      it can accept the following format:
;      - %{bytes}M (default)
;      - %{kilobytes}M
;      - %{kilo}M
;      - %{megabytes}M
;      - %{mega}M
;  %n: pool name
;  %o: output header
;      it must be associated with embraces to specify the name of the header:
;      - %{Content-Type}o
;      - %{X-Powered-By}o
;      - %{Transfert-Encoding}o
;      - ....
;  %p: PID of the child that serviced the request
;  %P: PID of the parent of the child that serviced the request
;  %q: the query string
;  %Q: the '?' character if query string exists
;  %r: the request URI (without the query string, see %q and %Q)
;  %R: remote IP address
;  %s: status (response code)
;  %t: server time the request was received
;      it can accept a strftime(3) format:
;      %d/%b/%Y:%H:%M:%S %z (default)
;      The strftime(3) format must be encapsuled in a %{<strftime_format>}t tag
;      e.g. for a ISO8601 formatted timestring, use: %{%Y-%m-%dT%H:%M:%S%z}t
;  %T: time the log has been written (the request has finished)
;      it can accept a strftime(3) format:
;      %d/%b/%Y:%H:%M:%S %z (default)
;      The strftime(3) format must be encapsuled in a %{<strftime_format>}t tag
;      e.g. for a ISO8601 formatted timestring, use: %{%Y-%m-%dT%H:%M:%S%z}t
;  %u: remote user
;
; Default: "%R - %u %t \"%m %r\" %s"
;access.format = "%R - %u %t \"%m %r%Q%q\" %s %f %{mili}d %{kilo}M %C%%"

; The log file for slow requests
; Default Value: not set
; Note: slowlog is mandatory if request_slowlog_timeout is set
;slowlog = log/$pool.log.slow

; The timeout for serving a single request after which a PHP backtrace will be
; dumped to the 'slowlog' file. A value of '0s' means 'off'.
; Available units: s(econds)(default), m(inutes), h(ours), or d(ays)
; Default Value: 0
;request_slowlog_timeout = 0

; Depth of slow log stack trace.
; Default Value: 20
;request_slowlog_trace_depth = 20

; The timeout for serving a single request after which the worker process will
; be killed. This option should be used when the 'max_execution_time' ini option
; does not stop script execution for some reason. A value of '0' means 'off'.
; Available units: s(econds)(default), m(inutes), h(ours), or d(ays)
; Default Value: 0
;request_terminate_timeout = 0

; The timeout set by 'request_terminate_timeout' ini option is not engaged after
; application calls 'fastcgi_finish_request' or when application has finished and
; shutdown functions are being called (registered via register_shutdown_function).
; This option will enable timeout limit to be applied unconditionally
; even in such cases.
; Default Value: no
;request_terminate_timeout_track_finished = no

; Set open file descriptor rlimit.
; Default Value: system defined value
;rlimit_files = 1024

; Set max core size rlimit.
; Possible Values: 'unlimited' or an integer greater or equal to 0
; Default Value: system defined value
;rlimit_core = 0

; Chroot to this directory at the start. This value must be defined as an
; absolute path. When this value is not set, chroot is not used.
; Note: you can prefix with '$prefix' to chroot to the pool prefix or one
; of its subdirectories. If the pool prefix is not set, the global prefix
; will be used instead.
; Note: chrooting is a great security feature and should be used whenever
;       possible. However, all PHP paths will be relative to the chroot
;       (error_log, sessions.save_path, ...).
; Default Value: not set
;chroot =

; Chdir to this directory at the start.
; Note: relative path can be used.
; Default Value: current directory or / when chroot
;chdir = /var/www

; Redirect worker stdout and stderr into main error log. If not set, stdout and
; stderr will be redirected to /dev/null according to FastCGI specs.
; Note: on highloaded environement, this can cause some delay in the page
; process time (several ms).
; Default Value: no
;catch_workers_output = yes

; Decorate worker output with prefix and suffix containing information about
; the child that writes to the log and if stdout or stderr is used as well as
; log level and time. This options is used only if catch_workers_output is yes.
; Settings to "no" will output data as written to the stdout or stderr.
; Default value: yes
;decorate_workers_output = no

; Clear environment in FPM workers
; Prevents arbitrary environment variables from reaching FPM worker processes
; by clearing the environment in workers before env vars specified in this
; pool configuration are added.
; Setting to "no" will make all environment variables available to PHP code
; via getenv(), $_ENV and $_SERVER.
; Default Value: yes
;clear_env = no

; Limits the extensions of the main script FPM will allow to parse. This can
; prevent configuration mistakes on the web server side. You should only limit
; FPM to .php extensions to prevent malicious users to use other extensions to
; execute php code.
; Note: set an empty value to allow all extensions.
; Default Value: .php
;security.limit_extensions = .php .php3 .php4 .php5 .php7

; Pass environment variables like LD_LIBRARY_PATH. All $VARIABLEs are taken from
; the current environment.
; Default Value: clean env
;env[HOSTNAME] = $HOSTNAME
;env[PATH] = /usr/local/bin:/usr/bin:/bin
;env[TMP] = /tmp
;env[TMPDIR] = /tmp
;env[TEMP] = /tmp

; Additional php.ini defines, specific to this pool of workers. These settings
; overwrite the values previously defined in the php.ini. The directives are the
; same as the PHP SAPI:
;   php_value/php_flag             - you can set classic ini defines which can
;                                    be overwritten from PHP call 'ini_set'.
;   php_admin_value/php_admin_flag - these directives won't be overwritten by
;                                     PHP call 'ini_set'
; For php_*flag, valid values are on, off, 1, 0, true, false, yes or no.

; Defining 'extension' will load the corresponding shared extension from
; extension_dir. Defining 'disable_functions' or 'disable_classes' will not
; overwrite previously defined php.ini values, but will append the new value
; instead.

; Note: path INI options can be relative and will be expanded with the prefix
; (pool, global or /usr)

; Default Value: nothing is defined by default except the values in php.ini and
;                specified at startup with the -d argument
;php_admin_value[sendmail_path] = /usr/sbin/sendmail -t -i -f www@my.domain.com
;php_flag[display_errors] = off
;php_admin_value[error_log] = /var/log/fpm-php.www.log
;php_admin_flag[log_errors] = on
;php_admin_value[memory_limit] = 32M


;####
;# Best FastCGI Process Manager configuration for YetiForceCRM
;####

php_admin_value[error_log] = /var/log/php/fpm_yfprod_error.log
php_admin_value[open_basedir] = /home/yfprod/:/tmp/:/var/tmp/:/etc/nginx/ssl/:/etc/ssl/:/backup/yfprod/:/usr/bin/gpg:/usr/bin/gpg-agent:/usr/bin/gpgconf
clear_env = no
request_terminate_timeout = 600
pm.process_idle_timeout = 600s;
pm.max_requests = 5000
catch_workers_output = yes
```
</details>

<details>
  <summary>Wersja deweloperska</summary>

```ini
; Start a new pool named 'www'.
; the variable $pool can be used in any directive and will be replaced by the
; pool name ('www' here)
[yfprod]

; Per pool prefix
; It only applies on the following directives:
; - 'access.log'
; - 'slowlog'
; - 'listen' (unixsocket)
; - 'chroot'
; - 'chdir'
; - 'php_values'
; - 'php_admin_values'
; When not set, the global prefix (or /usr) applies instead.
; Note: This directive can also be relative to the global prefix.
; Default Value: none
;prefix = /path/to/pools/$pool

; Unix user/group of processes
; Note: The user is mandatory. If the group is not set, the default user's group
;       will be used.
user = yfprod
group = yfprod

; The address on which to accept FastCGI requests.
; Valid syntaxes are:
;   'ip.add.re.ss:port'    - to listen on a TCP socket to a specific IPv4 address on
;                            a specific port;
;   '[ip:6:addr:ess]:port' - to listen on a TCP socket to a specific IPv6 address on
;                            a specific port;
;   'port'                 - to listen on a TCP socket to all addresses
;                            (IPv6 and IPv4-mapped) on a specific port;
;   '/path/to/unix/socket' - to listen on a unix socket.
; Note: This value is mandatory.
listen = /run/php/yfprod.sock

; Set listen(2) backlog.
; Default Value: 511 (-1 on FreeBSD and OpenBSD)
;listen.backlog = 511

; Set permissions for unix socket, if one is used. In Linux, read/write
; permissions must be set in order to allow connections from a web server. Many
; BSD-derived systems allow connections regardless of permissions. The owner
; and group can be specified either by name or by their numeric IDs.
; Default Values: user and group are set as the running user
;                 mode is set to 0660
listen.owner = www-data
listen.group = www-data
;listen.mode = 0660
; When POSIX Access Control Lists are supported you can set them using
; these options, value is a comma separated list of user/group names.
; When set, listen.owner and listen.group are ignored
;listen.acl_users =
;listen.acl_groups =

; List of addresses (IPv4/IPv6) of FastCGI clients which are allowed to connect.
; Equivalent to the FCGI_WEB_SERVER_ADDRS environment variable in the original
; PHP FCGI (5.2.2+). Makes sense only with a tcp listening socket. Each address
; must be separated by a comma. If this value is left blank, connections will be
; accepted from any ip address.
; Default Value: any
;listen.allowed_clients = 127.0.0.1

; Specify the nice(2) priority to apply to the pool processes (only if set)
; The value can vary from -19 (highest priority) to 20 (lower priority)
; Note: - It will only work if the FPM master process is launched as root
;       - The pool processes will inherit the master process priority
;         unless it specified otherwise
; Default Value: no set
; process.priority = -19

; Set the process dumpable flag (PR_SET_DUMPABLE prctl) even if the process user
; or group is differrent than the master process user. It allows to create process
; core dump and ptrace the process for the pool user.
; Default Value: no
; process.dumpable = yes

; Choose how the process manager will control the number of child processes.
; Possible Values:
;   static  - a fixed number (pm.max_children) of child processes;
;   dynamic - the number of child processes are set dynamically based on the
;             following directives. With this process management, there will be
;             always at least 1 children.
;             pm.max_children      - the maximum number of children that can
;                                    be alive at the same time.
;             pm.start_servers     - the number of children created on startup.
;             pm.min_spare_servers - the minimum number of children in 'idle'
;                                    state (waiting to process). If the number
;                                    of 'idle' processes is less than this
;                                    number then some children will be created.
;             pm.max_spare_servers - the maximum number of children in 'idle'
;                                    state (waiting to process). If the number
;                                    of 'idle' processes is greater than this
;                                    number then some children will be killed.
;  ondemand - no children are created at startup. Children will be forked when
;             new requests will connect. The following parameter are used:
;             pm.max_children           - the maximum number of children that
;                                         can be alive at the same time.
;             pm.process_idle_timeout   - The number of seconds after which
;                                         an idle process will be killed.
; Note: This value is mandatory.
pm = ondemand

; The number of child processes to be created when pm is set to 'static' and the
; maximum number of child processes when pm is set to 'dynamic' or 'ondemand'.
; This value sets the limit on the number of simultaneous requests that will be
; served. Equivalent to the ApacheMaxClients directive with mpm_prefork.
; Equivalent to the PHP_FCGI_CHILDREN environment variable in the original PHP
; CGI. The below defaults are based on a server without much resources. Don't
; forget to tweak pm.* to fit your needs.
; Note: Used when pm is set to 'static', 'dynamic' or 'ondemand'
; Note: This value is mandatory.
pm.max_children = 15

; The number of child processes created on startup.
; Note: Used only when pm is set to 'dynamic'
; Default Value: (min_spare_servers + max_spare_servers) / 2
pm.start_servers = 2

; The desired minimum number of idle server processes.
; Note: Used only when pm is set to 'dynamic'
; Note: Mandatory when pm is set to 'dynamic'
pm.min_spare_servers = 1

; The desired maximum number of idle server processes.
; Note: Used only when pm is set to 'dynamic'
; Note: Mandatory when pm is set to 'dynamic'
pm.max_spare_servers = 3

; The number of seconds after which an idle process will be killed.
; Note: Used only when pm is set to 'ondemand'
; Default Value: 10s
;pm.process_idle_timeout = 10s;

; The number of requests each child process should execute before respawning.
; This can be useful to work around memory leaks in 3rd party libraries. For
; endless request processing specify '0'. Equivalent to PHP_FCGI_MAX_REQUESTS.
; Default Value: 0
;pm.max_requests = 500

; The URI to view the FPM status page. If this value is not set, no URI will be
; recognized as a status page. It shows the following informations:
;   pool                 - the name of the pool;
;   process manager      - static, dynamic or ondemand;
;   start time           - the date and time FPM has started;
;   start since          - number of seconds since FPM has started;
;   accepted conn        - the number of request accepted by the pool;
;   listen queue         - the number of request in the queue of pending
;                          connections (see backlog in listen(2));
;   max listen queue     - the maximum number of requests in the queue
;                          of pending connections since FPM has started;
;   listen queue len     - the size of the socket queue of pending connections;
;   idle processes       - the number of idle processes;
;   active processes     - the number of active processes;
;   total processes      - the number of idle + active processes;
;   max active processes - the maximum number of active processes since FPM
;                          has started;
;   max children reached - number of times, the process limit has been reached,
;                          when pm tries to start more children (works only for
;                          pm 'dynamic' and 'ondemand');
; Value are updated in real time.
; Example output:
;   pool:                 www
;   process manager:      static
;   start time:           01/Jul/2011:17:53:49 +0200
;   start since:          62636
;   accepted conn:        190460
;   listen queue:         0
;   max listen queue:     1
;   listen queue len:     42
;   idle processes:       4
;   active processes:     11
;   total processes:      15
;   max active processes: 12
;   max children reached: 0
;
; By default the status page output is formatted as text/plain. Passing either
; 'html', 'xml' or 'json' in the query string will return the corresponding
; output syntax. Example:
;   http://www.foo.bar/status
;   http://www.foo.bar/status?json
;   http://www.foo.bar/status?html
;   http://www.foo.bar/status?xml
;
; By default the status page only outputs short status. Passing 'full' in the
; query string will also return status for each pool process.
; Example:
;   http://www.foo.bar/status?full
;   http://www.foo.bar/status?json&full
;   http://www.foo.bar/status?html&full
;   http://www.foo.bar/status?xml&full
; The Full status returns for each process:
;   pid                  - the PID of the process;
;   state                - the state of the process (Idle, Running, ...);
;   start time           - the date and time the process has started;
;   start since          - the number of seconds since the process has started;
;   requests             - the number of requests the process has served;
;   request duration     - the duration in µs of the requests;
;   request method       - the request method (GET, POST, ...);
;   request URI          - the request URI with the query string;
;   content length       - the content length of the request (only with POST);
;   user                 - the user (PHP_AUTH_USER) (or '-' if not set);
;   script               - the main script called (or '-' if not set);
;   last request cpu     - the %cpu the last request consumed
;                          it's always 0 if the process is not in Idle state
;                          because CPU calculation is done when the request
;                          processing has terminated;
;   last request memory  - the max amount of memory the last request consumed
;                          it's always 0 if the process is not in Idle state
;                          because memory calculation is done when the request
;                          processing has terminated;
; If the process is in Idle state, then informations are related to the
; last request the process has served. Otherwise informations are related to
; the current request being served.
; Example output:
;   ************************
;   pid:                  31330
;   state:                Running
;   start time:           01/Jul/2011:17:53:49 +0200
;   start since:          63087
;   requests:             12808
;   request duration:     1250261
;   request method:       GET
;   request URI:          /test_mem.php?N=10000
;   content length:       0
;   user:                 -
;   script:               /home/fat/web/docs/php/test_mem.php
;   last request cpu:     0.00
;   last request memory:  0
;
; Note: There is a real-time FPM status monitoring sample web page available
;       It's available in: /usr/share/php/7.4/fpm/status.html
;
; Note: The value must start with a leading slash (/). The value can be
;       anything, but it may not be a good idea to use the .php extension or it
;       may conflict with a real PHP file.
; Default Value: not set
;pm.status_path = /status

; The ping URI to call the monitoring page of FPM. If this value is not set, no
; URI will be recognized as a ping page. This could be used to test from outside
; that FPM is alive and responding, or to
; - create a graph of FPM availability (rrd or such);
; - remove a server from a group if it is not responding (load balancing);
; - trigger alerts for the operating team (24/7).
; Note: The value must start with a leading slash (/). The value can be
;       anything, but it may not be a good idea to use the .php extension or it
;       may conflict with a real PHP file.
; Default Value: not set
;ping.path = /ping

; This directive may be used to customize the response of a ping request. The
; response is formatted as text/plain with a 200 response code.
; Default Value: pong
;ping.response = pong

; The access log file
; Default: not set
;access.log = log/$pool.access.log

; The access log format.
; The following syntax is allowed
;  %%: the '%' character
;  %C: %CPU used by the request
;      it can accept the following format:
;      - %{user}C for user CPU only
;      - %{system}C for system CPU only
;      - %{total}C  for user + system CPU (default)
;  %d: time taken to serve the request
;      it can accept the following format:
;      - %{seconds}d (default)
;      - %{miliseconds}d
;      - %{mili}d
;      - %{microseconds}d
;      - %{micro}d
;  %e: an environment variable (same as $_ENV or $_SERVER)
;      it must be associated with embraces to specify the name of the env
;      variable. Some exemples:
;      - server specifics like: %{REQUEST_METHOD}e or %{SERVER_PROTOCOL}e
;      - HTTP headers like: %{HTTP_HOST}e or %{HTTP_USER_AGENT}e
;  %f: script filename
;  %l: content-length of the request (for POST request only)
;  %m: request method
;  %M: peak of memory allocated by PHP
;      it can accept the following format:
;      - %{bytes}M (default)
;      - %{kilobytes}M
;      - %{kilo}M
;      - %{megabytes}M
;      - %{mega}M
;  %n: pool name
;  %o: output header
;      it must be associated with embraces to specify the name of the header:
;      - %{Content-Type}o
;      - %{X-Powered-By}o
;      - %{Transfert-Encoding}o
;      - ....
;  %p: PID of the child that serviced the request
;  %P: PID of the parent of the child that serviced the request
;  %q: the query string
;  %Q: the '?' character if query string exists
;  %r: the request URI (without the query string, see %q and %Q)
;  %R: remote IP address
;  %s: status (response code)
;  %t: server time the request was received
;      it can accept a strftime(3) format:
;      %d/%b/%Y:%H:%M:%S %z (default)
;      The strftime(3) format must be encapsuled in a %{<strftime_format>}t tag
;      e.g. for a ISO8601 formatted timestring, use: %{%Y-%m-%dT%H:%M:%S%z}t
;  %T: time the log has been written (the request has finished)
;      it can accept a strftime(3) format:
;      %d/%b/%Y:%H:%M:%S %z (default)
;      The strftime(3) format must be encapsuled in a %{<strftime_format>}t tag
;      e.g. for a ISO8601 formatted timestring, use: %{%Y-%m-%dT%H:%M:%S%z}t
;  %u: remote user
;
; Default: "%R - %u %t \"%m %r\" %s"
;access.format = "%R - %u %t \"%m %r%Q%q\" %s %f %{mili}d %{kilo}M %C%%"

; The log file for slow requests
; Default Value: not set
; Note: slowlog is mandatory if request_slowlog_timeout is set
;slowlog = log/$pool.log.slow

; The timeout for serving a single request after which a PHP backtrace will be
; dumped to the 'slowlog' file. A value of '0s' means 'off'.
; Available units: s(econds)(default), m(inutes), h(ours), or d(ays)
; Default Value: 0
;request_slowlog_timeout = 0

; Depth of slow log stack trace.
; Default Value: 20
;request_slowlog_trace_depth = 20

; The timeout for serving a single request after which the worker process will
; be killed. This option should be used when the 'max_execution_time' ini option
; does not stop script execution for some reason. A value of '0' means 'off'.
; Available units: s(econds)(default), m(inutes), h(ours), or d(ays)
; Default Value: 0
;request_terminate_timeout = 0

; The timeout set by 'request_terminate_timeout' ini option is not engaged after
; application calls 'fastcgi_finish_request' or when application has finished and
; shutdown functions are being called (registered via register_shutdown_function).
; This option will enable timeout limit to be applied unconditionally
; even in such cases.
; Default Value: no
;request_terminate_timeout_track_finished = no

; Set open file descriptor rlimit.
; Default Value: system defined value
;rlimit_files = 1024

; Set max core size rlimit.
; Possible Values: 'unlimited' or an integer greater or equal to 0
; Default Value: system defined value
;rlimit_core = 0

; Chroot to this directory at the start. This value must be defined as an
; absolute path. When this value is not set, chroot is not used.
; Note: you can prefix with '$prefix' to chroot to the pool prefix or one
; of its subdirectories. If the pool prefix is not set, the global prefix
; will be used instead.
; Note: chrooting is a great security feature and should be used whenever
;       possible. However, all PHP paths will be relative to the chroot
;       (error_log, sessions.save_path, ...).
; Default Value: not set
;chroot =

; Chdir to this directory at the start.
; Note: relative path can be used.
; Default Value: current directory or / when chroot
;chdir = /var/www

; Redirect worker stdout and stderr into main error log. If not set, stdout and
; stderr will be redirected to /dev/null according to FastCGI specs.
; Note: on highloaded environement, this can cause some delay in the page
; process time (several ms).
; Default Value: no
;catch_workers_output = yes

; Decorate worker output with prefix and suffix containing information about
; the child that writes to the log and if stdout or stderr is used as well as
; log level and time. This options is used only if catch_workers_output is yes.
; Settings to "no" will output data as written to the stdout or stderr.
; Default value: yes
;decorate_workers_output = no

; Clear environment in FPM workers
; Prevents arbitrary environment variables from reaching FPM worker processes
; by clearing the environment in workers before env vars specified in this
; pool configuration are added.
; Setting to "no" will make all environment variables available to PHP code
; via getenv(), $_ENV and $_SERVER.
; Default Value: yes
;clear_env = no

; Limits the extensions of the main script FPM will allow to parse. This can
; prevent configuration mistakes on the web server side. You should only limit
; FPM to .php extensions to prevent malicious users to use other extensions to
; execute php code.
; Note: set an empty value to allow all extensions.
; Default Value: .php
;security.limit_extensions = .php .php3 .php4 .php5 .php7

; Pass environment variables like LD_LIBRARY_PATH. All $VARIABLEs are taken from
; the current environment.
; Default Value: clean env
;env[HOSTNAME] = $HOSTNAME
;env[PATH] = /usr/local/bin:/usr/bin:/bin
;env[TMP] = /tmp
;env[TMPDIR] = /tmp
;env[TEMP] = /tmp

; Additional php.ini defines, specific to this pool of workers. These settings
; overwrite the values previously defined in the php.ini. The directives are the
; same as the PHP SAPI:
;   php_value/php_flag             - you can set classic ini defines which can
;                                    be overwritten from PHP call 'ini_set'.
;   php_admin_value/php_admin_flag - these directives won't be overwritten by
;                                     PHP call 'ini_set'
; For php_*flag, valid values are on, off, 1, 0, true, false, yes or no.

; Defining 'extension' will load the corresponding shared extension from
; extension_dir. Defining 'disable_functions' or 'disable_classes' will not
; overwrite previously defined php.ini values, but will append the new value
; instead.

; Note: path INI options can be relative and will be expanded with the prefix
; (pool, global or /usr)

; Default Value: nothing is defined by default except the values in php.ini and
;                specified at startup with the -d argument
;php_admin_value[sendmail_path] = /usr/sbin/sendmail -t -i -f www@my.domain.com
;php_flag[display_errors] = off
;php_admin_value[error_log] = /var/log/fpm-php.www.log
;php_admin_flag[log_errors] = on
;php_admin_value[memory_limit] = 32M


;####
;# Best FastCGI Process Manager configuration for YetiForceCRM
;####

php_admin_value[error_log] = /var/log/php/fpm_yfprod_error.log
php_admin_value[open_basedir] = /home/yfprod/:/tmp/:/var/tmp/:/etc/nginx/ssl/:/etc/ssl/:/backup/yfprod/:/usr/bin/gpg:/usr/bin/gpg-agent:/usr/bin/gpgconf
clear_env = no
request_terminate_timeout = 600
pm.process_idle_timeout = 600s;
pm.max_requests = 5000
catch_workers_output = yes
```
</details>

:::

## Serwer WWW

<details>
  <summary>Apache</summary>

```ini
<ifModule mod_headers.c>
Header unset X-XSS-Protection
Header unset Strict-Transport-Security
Header unset X-Frame-Options
Header unset X-Content-Type-Options
Header unset X-Permitted-Cross-Domain-Policies
Header unset Referrer-Policy
Header unset Expect-CT
Header unset X-Robots-Tag
Header unset Server
Header unset X-Powered-By

Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
Header always set X-Frame-Options SAMEORIGIN
Header always set X-Content-Type-Options nosniff
Header always set X-Permitted-Cross-Domain-Policies "none"
Header always set Referrer-Policy "no-referrer"
Header always set Expect-CT 'enforce; max-age=3600
Header always set X-Robots-Tag none

Header setifempty Cache-Control "private, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"
<FilesMatch "\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt|ttf|woff2)$">
	Header setifempty Cache-Control "max-age=86400, public"
</FilesMatch>
<Files file.php>
	Header unset Cache-Control
	Header always set Cache-Control "max-age=86400, public"
</Files>


</ifModule>
AddDefaultCharset UTF-8
<ifModule ModSecurity.c>
	SecServerSignature ''
</ifModule>
<IfModule mod_autoindex.c>
	Options -Indexes -MultiViews
</IfModule>

```
</details>
<details>
  <summary>Nginx</summary>

```ini
https://github.com/YetiForceCompany/YetiForceCRM/blob/stable/tests/setup/nginx
```
</details>

### Szyfrowanie HTTPS i HTTP2

Zalecamy aby połączenie z serwerem, na którym znajduje się nasz system, było zawsze szyfrowane. Jeśli połączenie z serwerem nie zostało nawiązane za pomocą protokołu HTTPS, komunikacja może zostać podsłuchana lub zmieniona przez osoby postronne.

### Uprawnienia do folderów i plików

Uprawnienia do folderów i plików często są głównym źródłem problemów dla osób instalujących aplikacje na swoich serwerach VPS i serwerach dedykowanych. Wszystkie pliki i foldery CRM powinny mieć tego samego właściciela.

Zalecamy następującą konfigurację:

- pliki `644` (rw-r--r--)
- foldery `755` (rwxr-xr-x)

Konfiguracja powinna umożliwiać serwerowi WWW na pełne uprawnienia do plików, bez konieczności zmiany uprawnień na plikach i folderach. Należy pamiętać, że sama aplikacja podczas pracy wykonuje różne operacje takie jak odczyt, zapis, jak również tworzenie i usuwanie plików. Jeżeli nie wiesz jak prawidłowo skonfigurować uprawnienia, poproś o to swojego administratora, wysyłając mu link do tego artykułu.

- Configuration directory `config/`
- Application data directory `app_data/`
- User privileges directory `user_privileges/`
- Tabdata File `user_privileges/tabdata.php`
- Menu file `user_privileges/menu_0.php`
- User privileges file `user_privileges/user_privileges_1.php`
- Cache Directory `cache/`
- Address book directory `cache/addressBook/`
- Image Cache Directory `cache/images/`
- Import Cache Directory `cache/import/`
- Logs directory `cache/logs/`
- Session directory `cache/session/`
- Cache templates directory `cache/templates_c/`
- Cache upload directory `cache/upload/`
- Vtlib test directory `cache/vtlib/`
- Vtlib Test HTML Directory `cache/vtlib/HTML/`
- Cron modules directory `cron/modules/`
- Modules Directory `modules/`
- Storage Directory `storage/`
- Product Image Directory `storage/products/`
- User Image Directory `storage/users/`
- Contact Image Directory `storage/contacts/`
- MailView attachments directory `storage/OSSMailView/`
- Logo Directory `public_html/layouts/resources/Logo/`
- E-mail client `public_html/modules/OSSMail/`
- Third party libraries `public_html/libraries/`

### Problemy z SELinux

:::warning
Gdy na serwerze jest zainstalowany SELinux w trybie enforcing często występują problemy z uprawnieniami. Należy zwrócić uwagę na parametry konfiguracyjne:

- httpd_unified
- httpd_can_network_connect

https://www.nginx.com/blog/using-nginx-plus-with-selinux/

https://docs.nextcloud.com/server/latest/admin_manual/installation/selinux_configuration.html

https://www.getpagespeed.com/server-setup/nginx/nginx-selinux-configuration

```bash
sudo setsebool -P httpd_unified 1
sudo setsebool -P httpd_can_network_connect on
```

:::

## Wymagania użytkownika końcowego

- System operacyjny - dowolny posiadający przeglądarkę internetową
- Wyświetlacz: zalecane 1280 × 800
- Przeglądarka zgodna z `ES5` ([ECMAScript 5](https://caniuse.com/?search=es5)) a od wersji 6.3 `ES6` ([ECMAScript 6](https://caniuse.com/?search=es6))

### Wspierane przeglądarki

Użytkownik powinien mieć zawsze najnowszą wersję przeglądarki, ponieważ tylko najnowsze wersje wspierają najnowsze technologie webowe. Poniżej umieściliśmy przeglądarki w kolejności w jakiej użytkownik powinien dokonywać wyboru. Oznacza to, że np. przeglądarka Safari jest gorszą przeglądarką dla aplikacji YetiForce niż jest Google Chrome.

1. Google Chrome, Microsoft Edge
2. Firefox,
3. Opera, Brave, Vivaldi
4. Apple Safari
5. Internet Explorer
6. Inne

## Dodatkowa konfiguracja z użyciem .htaccess

Część serwerów umożliwia zmianę konfiguracji za pomocą pliku `.htaccess`, poniżej pokazujemy kilka przykładów. Poniżej przedstawiamy kilka przykładów.

#### Apache module

:::warning
Poniższa konfiguracja działa tylko jak ustawiono w konfiguracji Apache np. `httpd.conf` "AllowOverride Options" lub "AllowOverride All"
:::

```apacheconf
<IfModule mod_php5.c>
    php_flag    log_errors              On
    php_flag    display_errors          Off
    php_value   error_log               cache/logs/phpError.log
    php_value   memory_limit            512M
    php_flag    output_buffering        On
    php_flag    zlib.output_compression Off
    php_flag    file_uploads            On
    php_value   upload_max_filesize     100M
    php_value   post_max_size           50M
</IfModule>
## FastCGI module
<IfModule fcgid_module.c>
    FcgidIOTimeout      600
    FcgidConnectTimeout 600
    FcgidBusyTimeout    600
    FcgidIdleTimeout    600
</IfModule>
<IfModule mod_fcgid.c>
    IdleTimeout         600
    ProcessLifeTime     600
    IPCConnectTimeout   600
    IPCCommTimeout      600
    BusyTimeout         600
</IfModule>
```

## Dodatkowa konfiguracja z użyciem user.ini

Istnieje możliwość szybkiej zmiany konfiguracji PHP przez utworzenie pliku user.ini w głównym katalog `$_SERVER['DOCUMENT_ROOT']`, obecnie obsługuje CGI/FastCGI. Należy jednak zachować ostrożność, ponieważ nie wszystkie parametry mogą być skonfigurowane w ten sposób (https://www.php.net/manual/en/configuration.changes.modes.php).

Więcej informacji znajduje się na stronie: https://secure.php.net/manual/en/configuration.file.per-user.php

Przykładowy plik:

<details>
  <summary>.user.ini</summary>

```ini
error_reporting = E_ALL & ~E_NOTICE
html_errors = On
log_errors = On
display_errors = Off
max_execution_time = 600
max_input_time = 600
default_socket_timeout = 600
output_buffering = "On"
post_max_size = 50M
upload_max_filesize = 100M
max_input_vars = 10000
memory_limit = 1024M
short_open_tag = "On"
default_charset = "UTF-8"
auto_detect_line_endings = "On"
zlib.output_compression = "Off"
session.cookie_httponly = "On"
session.auto_start = "Off"
session.gc_maxlifetime = 1440
session.gc_divisor = 500
session.gc_probability = 1
session.use_strict_mode = "On"
session.use_trans_sid = "Off"
session.use_only_cookies = "On"
session.name = "YTSID"
opcache.validate_timestamps = 1
opcache.revalidate_freq = 0
opcache.file_update_protection = 0
request_order = "GP"
variables_order = "GPCS"
```

</details>

## Wymagania na czas aktualizacji systemu

### MariaDB/MySQL

```ini
connect_timeout = 3600
connect_timeout = 3600
net_read_timeout = 3600
net_write_timeout = 3600
wait_timeout = 3600
wait_timeout = 3600
innodb_lock_wait_timeout = 3600
```

### PHP

```ini
max_execution_time = 3600
max_input_time = 3600
default_socket_timeout = 3600
```

### PHP FPM

```ini
pm.process_idle_timeout = 3600s
request_terminate_timeout = 3600
```

### NGINX

```nginx
server {
   ...
   client_body_timeout 3600;
   send_timeout 3600;

 location ~ \.php$ {
   ...
   fastcgi_send_timeout 3600;
   fastcgi_read_timeout 3600;
   keepalive_timeout 3600;
   proxy_connect_timeout 3600;
   proxy_send_timeout 3600;
   proxy_read_timeout 3600;
 }
 location ~ ^(.+\.php)(.*)$ {
   ...
   fastcgi_send_timeout 3600;
   fastcgi_read_timeout 3600;
   keepalive_timeout 3600;
   proxy_connect_timeout 3600;
   proxy_send_timeout 3600;
   proxy_read_timeout 3600;
 }
}
```
