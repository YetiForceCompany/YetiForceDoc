---
title: System access control
description: Limiting access to data is crucial for the organization
keywords:
  - control
  - access
  - records
  - YetiForce
tags:
  - control
  - access
  - records
---

In the YetiForce system, organizations most often store sensitive and confidential data about customers and about their own organization. Secure access to the application is a priority, and this article illustrates how we tackled this issue.

## System access logic

### Standard authentication

Standard authentication requires the user to enter their login and password in order for the system to check whether the user should be authenticated. If the data is correct, they will be logged into the system.

### 2FA authentication

If the user has the 2FA authentication activated, then, after the standard authentication and before logging into the system, a second window will appear and ask the user to enter the generated code from a 2FA application or device. Failure to enter the code will result in the user not being logged in correctly.

### LDAP Authentication

Users can log in using the LDAP service, in this case the authentication does not take place in the YetiForce system, but in the external LDAP service, which returns a true/false authentication result. If the user is properly authenticated and their login matches the login in the YetiForce system, they will also be authenticated in the application.

### Custom authentication

The system allows the use of other methods of standard or additional authentication, e.g. Unfortunately, some mechanisms require integration with the company's infrastructure, such as sending text messages or an internal application for one-time codes, therefore these options are priced individually.

### Authentication

After correct identification and authentication, the system automatically verifies the functionalities and data the user has permissions for. Depending on the authentication, each user can see different system functionalities - each element of the system can be defined for the user, e.g.

## Security mechanisms

### Unique identifiers

In the YetiForce system, there are two identifiers in the user table, the first identifier is `id`, which is a unique numerical identifier that creates a unique value for each user, and once a value is assigned, it cannot be assigned to another user in the future. Authentication The second unique identifier is the login used by the user to log in. The system has a security feature that will not allow you to assign a pre-existing login to a new user.

The uniqueness of identifiers allows you to verify the activities of individual users even when they have been removed from the system, and prevents identification errors.

### Independence of the identifier from the permissions in the application

The identifier does not in any way determine permissions in the application, as they are granted independently. Even if a user has the word "administrator" in their name or has been assigned to the "administrator" role, this does not grant them any administrative privileges.

### Blocking and removing users

The system allows you to quickly block a user by changing the user's status from active to inactive. In addition, deleting a user from the system will cause the user to cease to exist in the user database, but his system identifier `id` and login will remain in the system and cannot be used for new users.

If there is a limited profile in the system that reduces what the user has access to, then you can quickly change the role, assign the user limited access to data and functionalities.

### Multiple failed logins

The system has a tool that allows you to detect failed user logins and block them for a specified period of time if they exceed the prohibited logins field. Additionally, if e-mail notifications are defined in the application, the administrator will receive a notification about each block. By default, the system blocks the IP for 15 minutes after 10 unsuccessful attempts. These parameters can be modified in the administration panel.

### Hiding non-existing users

The system has been designed so that when logging in to a user who exists in the application and a user who does not exist, the response time is the same. Thanks to this security solution, it is not possible to detect whether the user login is used in the system.
