---
hide:
    - toc
---

# General Questions

## Q. How do I locate the Archiver Settings section in the Admin Portal if it's not visible?

A. If the Archiver Setting tab cannot be found in More -> Account Settings -> Archiver Settings, please ensure that:

-   Your organization's subscription plan includes the Archiver feature.
-   You are logged into the Admin Portal with administrator privileges.
-   You are viewing the Admin Portal interface rather than My Extension settings (switch between them using the dropdown menu in the top right).
-   If you still cannot access the Archiver Settings tab after confirming these points, please reach out to RingCentral Support for assistance.

<br />

## Q. After enabling User Archiver in Archiver Settings, why can't users access the Archiver?

A. In the service portal, the user should make sure that they are in the **My Extension** view, then select More -> Apps and Resources -> Archiver. Please reach out to our support if you are unable to find the Archiver app.
![My Extension](./img/my-extension.png)

<br />

## Q. Why are administrators unable to access Archiver even after Admin Archiver has been enabled in the settings?

A. Administrators should check that their role has been granted all of the following permissions:

-   Features - Archiver for Admins
-   Company Call Log - Access Recordings
-   Company Call Log - Delete Records
-   Company Call Log - Download & Delivery
-   Company Call Log - View Only
-   User Management - Users

If the permissions are configured correctly, then the admin should also make sure that they are in the **Admin Portal** view in the service portal, then navigating to More -> Apps and Resources -> Archiver.
![Admin Portal](./img/admin-portal.png)

<br />

## Q. Why does an admin user see the error "Call recordings for all extensions couldn't be backed up" when trying to back up call recordings for all extensions?

A. This error occurs when the admin user lacks the required permissions to access company call recordings. To resolve this, verify that [the admin user's role has all the required permissions](./admin-roles-permissions.md). Without these permissions, the system cannot archive call recordings for all extensions, even when the option is selected.
![Admin Permission Error](./img/admin-permission-error.png)

<br />

## Q. Why do users receive a "Call recordings for your extensions couldn't be backed up" error in the Sync Options tab when Call Recordings is selected?

A. This error appears when users lack the necessary permissions to access their own call recordings. To resolve this, ensure that [the user's role has all the required permission](./user-roles-permissions.md). Without these permissions, users will be unable to archive call recordings for their extension.
![User Permission Error](./img/user-permission-error.png)
