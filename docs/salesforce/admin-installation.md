---
hide:
    - toc
---

<style>
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>

# Install RingCentral for Salesforce

## Quick Navigation

-   **[Install RingCentral for Salesforce](#install-ringcentral-for-salesforce)** - Install the RingCentral for Salesforce package from AppExchange
-   **[Uninstall RingCentral for Salesforce](#uninstall-ringcentral-for-salesforce)** - Remove RingCentral for Salesforce from your Salesforce instance

---

Install the RingCentral for Salesforce package from the [Salesforce AppExchange](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EORsjUAH). Click "Get It Now" to start the installation. Installation of this application requires an administrator login to Salesforce.com

![App Exchange](./img/app-exchange.png)

By clicking "Get It Now", the confirm page will appear. Click the "Visit Provider

![App Exchange Install](./img/app-exchange-install.png)

The user will be navigated to the landing page. Select a Production or a Sandbox environment to process the installation. In this guide, we are going to install the application in a Production environment.

![RingCentral Install](./img/ringcentral-install.png)

The installation process will be initiated in the Salesforce environment. Select the users that wanted to be installed. And click the Install button.

![Install Package](./img/install-package.png)

The installation will continue to process. If the installation takes longer than expected, Salesforce will send an email notification when done.

![Installing Package](./img/installing-package.png)

Once the installation is done, the completed page will be displayed.

![Installed Package](./img/installed-package.png)

Now the admin can find the installed package in the Salesforce Setup -> Apps -> Packaging -> Installed Packages.

![Installed Package Salesforce](./img/installed-package-salesforce.png)

Once the installation is completed, the admin user is able to find the RingCentral for Lightning and RingCentral Admin for Lightning from the App Launcher.

![RingCentral Package Salesforce](./img/ringcentral-package-salesforce.png)

#Uninstall RingCentral for Salesforce

Navigate to the Salesforce Setup -> Apps -> Packaging -> Installed Packages. All installed packages are listed on the table.

![Installed Package Salesforce](./img/installed-package-salesforce.png)

RingCentral for Salesforce application is using the Package Name "rc_sf_package". Click the Uninstall in the Actions. The uninstallation will be initialized.

![Uninstalling Package](./img/uninstalling-package.png)

The admin can decide whether save a copy of the package data for later use, and need to confirm the uninstall. And click the Uninstall button to continue.

![Uninstalled Package](./img/uninstalled-package.png)

The packages that are going through the uninstallation process will be listed in the Uninstalled packages table. And the uninstallation status will be shown.

![Uninstalled Package Salesforce](./img/uninstalled-package-salesforce.png)

Once the uninstallation is completed, the package will be removed from the Installed Packages table, and the status on the Uninstalled Packages table will be shown Completed.

![Uninstall Package Complete](./img/uninstall-package-complete.png)
