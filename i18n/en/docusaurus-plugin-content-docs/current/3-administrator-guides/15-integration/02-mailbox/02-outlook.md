---
title: Outlook configuration
description: Generate Client ID & Client Secret in Outlook
keywords:
  - Email
  - Private mailbox
  - Corporate mailbox
  - Gmail
  - Outlook
tags:
  - Email
  - Private mailbox
  - Corporate mailbox
  - Gmail
  - Outlook
preview: mailbox-integration-1.jpg
---

This article is a supplement to the [YetiForce integration with mail clients](/administrator-guides/integration/mailbox) guide.
It focuses on showing how to generate a Client ID and Client Secret in Azure AD. These details are necessary to authenticate the connection between YetiForce and your Outlook account.

### Step 1: Create a project in the Microsoft Azure Portal

- Go to the [Azure Portal](https://portal.azure.com/).
- Log in using your Microsoft account.
- In the search box at the top, enter `Microsoft Entra ID` and select the service from the list.

![outlook-1](outlook-1.jpg)

- Click <kbd>+ Create</kbd> and then select `Register application` from the list.

![outlook-2](outlook-2.jpg)

- Fill the form.

![outlook-3](outlook-3.jpg)

- **Name** - A unique name that will be used for app identification.
- **Supported account types** - Select `Accounts in any organizational directory`.
- **Redirect URI** - In the first field, select `Web` from the list. The value for the second field should be copied from the YetiForce system. The process is described below.

### Step 2: Find the Redirect URI value

Return to the mail server creation process described in [this article](/administrator-guides/integration/mailbox/#add-mail-server). Make sure that the `Redirect URI` field contains the name of the application you created for mail integration. Then copy the redirect URI value by pressing the button marked in the screenshot.

![outlook-10](outlook-10.jpg)

### Step 3: Proceed with the registration of your application in the Microsoft Azure portal

Paste the copied `Redirect URI` value from YetiForce into the `Redirect URI` field of the registration form in the Microsoft Azure portal. Then click the <kbd>Register</kbd> button.

### Step 4: Grant permissions

The application requires necessary permissions.

- From the menu on the left, select `API permissions`.
- Click <kbd>+ Add permission</kbd>.
- Select `Microsoft Graph` in the popup window.

![outlook-4](outlook-4.jpg)

- Select permission type: `Delegated permissions`.
- Using the search bar or list, select the following permissions:
  - email
  - IMAP AccessAsUser.All
  - offline_access
  - profile
  - SMTP Send
  - User.Read

![outlook-5](outlook-5.jpg)

### Step 5: Add key

- From the menu on the left side select `Certificates & secrets`, and then click <kbd>+ New client Secret</kbd>.
- Enter any key name in the right panel and
- Confirm the new key by clicking the <kbd>Add</kbd> button

![outlook-6](outlook-6.jpg)

### Step 6: Client Secret

After adding the key, a `Client Secret` will appear, copy it.

![outlook-7](outlook-7.jpg)

### Step 7: Client ID

To get the `Client ID` value, go to the `Overview` tab and then copy the Application ID.

![outlook-8](outlook-8.jpg)

### Step 8: Add mail sever in YetiForce

Once you have the `Client ID` and `Client Secret`, fill out the rest of the form that you started creating in [this article](/administrator-guides/integration/mailbox/#add-mail-server).

#### Form fields

- **Subject**: A unique name that will be used for identification.
- **Authorization method**: `OAuth2`.
- **OAuth Authentication Provider**: select `Azure AD - Outlook.com (Office 365)`.
- **Client ID**: value from Step 7.
- **Client secret**: value from Step 6.
- **Redirect URI** - we select an application created for integration with the mail service.

Now complete the IMAP and SMTP configuration according to your email provider's recommendations.

![outlook-9](outlook-9.jpg)

After adding the mail account, you need to link it with user accounts. This process is described in [this article](/administrator-guides/integration/mailbox#step-3-link-mail-server-with-user-accounts).
