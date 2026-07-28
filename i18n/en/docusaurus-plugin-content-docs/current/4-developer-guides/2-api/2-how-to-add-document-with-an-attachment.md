---
title: How to add a document with an attachment via Rest API
description: The article describes how to add a new entry with an attachment in the `Documents` module via Rest API
keywords:
  - Webservice
  - API
  - RestAPI
  - add
  - document
  - file
  - attachment
  - YetiForce
tags:
  - Webservice
  - API
  - Rest API
  - Document with an attachment
---

:::tip This functionality is available for YetiForce version `6.2.0` and later
:::

The article describes how to add a new entry with an attachment in the `Documents` module via Rest API.

Before continuing, please research the methods and ways of communication described here: https://doc.yetiforce.com/api/

## 1. Create a document with an attachment

To create an entry in the `Documents` module use an API method the allows for record creation, i.e.

![create-record](create-record.png)

https://doc.yetiforce.com/api/#/BaseModule/ea3b9bea091cbde741323b5393901825

Creating a new record in the Documents module requires entering the following values:

- `notes_title` - document name.

- `folderid` - directory identifier.

- `filelocationtype` - file type. This field specifies the attachment type. Two values are available: `I` - internal (attachment), `E` - external (link).

- `filename` - file or URL. Attachment or link.

Below are some examples of API query construction:

### Postman

![create record Postman](create-record-PostmanApiDoc2.png)

### Guzzle - HTTP client for PHP

https://github.com/guzzle/guzzle

```php
$uri = 'https://example.com/webservice/RestApi/Documents/Record';
$options = [
   'headers' => [
     'User-Agent' => 'YetiForceRestApi',
     'x-api-key' => 'P0fzRUuzPNWC9pxYq3MeEUp6AJ9EJpWN',
     'x-token' => '9c65f656c9380b7066d992ec59c00c0d29147a579351742b0e9f43a73312f5be',
   ],
  'auth' => ['userName', 'Password'],
  'timeout' => 10,
  'connect_timeout' => 2
];
$httpClient = new \GuzzleHttp\Client($options);
$options['multipart'] = [
   ['name' => 'notes_title', 'contents' => 'Document pdf'],
   ['name' => 'filelocationtype', 'contents' => 'I'],
   [
     'name' => 'filename',
     'filename' => 'YetiForce.pdf',
     'contents' => file_get_contents('YetiForce.pdf')
   ]
];

$response = $httpClient->request('POST', $uri, $options)->getBody()->getContents();
```

### cURL - PHP

```php
$url = 'https://example.com/webservice/RestApi/Documents/Record';
$headers = [
   'User-Agent: YetiForceRestApi',
   'x-api-key: P0fzRUuzPNWC9pxYq3MeEUp6AJ9EJpWN',
   'x-token: 9c65f656c9380b7066d992ec59c00c0d29147a579351742b0e9f43a73312f5be',
   'Content-Type: multipart/form-data'
];
$userName = 'userName';
$password = 'Password';

$cf = new CURLFile(realpath('YetiForce.pdf'));
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
curl_setopt($ch, CURLOPT_USERPWD, "{$userName}:{$password}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, ['notes_title' => 'Document pdf', 'filelocationtype' => 'I', 'filename' => $cf]);

$response = curl_exec($ch);
```

## 2. Relating a document to another entry

To link the created document to another record in the system, add the following to the API query from point 1:

- `relationOperation` (bool) - by setting the value `true`, we specify that the entry that is being created is subject to connection in a relation.

- `sourceModule` (string) - name of the module with which the created document should be associated.

- `sourceRecord` (int) - the record identifier with which the created document should be associated.

- `relationId` (int) - optional, identifier of the relationship between modules. Complete if there is more than one relationship between modules.

Example query structure with relational binding:

```php
$httpClient = new \GuzzleHttp\Client($options);
$options['multipart'] = [
 ['name' => 'notes_title', 'contents' => 'Document pdf'],
 ['name' => 'filelocationtype', 'contents' => 'I'],
 [
     'name' => 'filename',
     'filename' => 'YetiForce.pdf',
     'contents' => file_get_contents('YetiForce.pdf')
 ],
 ['name' => 'relationOperation', 'contents' => true],
 ['name' => 'sourceModule', 'contents' => 'Contacts'],
 ['name' => 'sourceRecord', 'contents' => 124]
];
$response = $httpClient->request('POST', $uri, $options)->getBody()->getContents();
```
