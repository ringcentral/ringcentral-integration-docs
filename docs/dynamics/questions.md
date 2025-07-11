---
hide:
    - toc
---

# General Questions

##Q: I don't see any new tab or window opening on incoming calls.

A: When a call comes in, it rings on your softphone (or any other client with the same account). Simultaneously, the call log section in RC for Dynamics with matched entities will expand from the sidebar.

##Q: I can see some phone numbers in Dynamics, but the click-to-call icon is not displayed.

A: By default, the phone icon is present on Business Phone and Mobile Phone fields as they are of phone type. To see a phone icon beside other phone numbers for click-to-dial functionality, those fields must be configured as "Phone" fields. This configuration needs to be done separately by your administrator following the admin guide (https://assets.ringcentral.com/us/guide/admin-guide/dynamics_beta_admin.pdf) on page 15, Step 4: Enable Click to Dial with RingCentral Description.

##Q. Why isn't the RingCentral panel showing up for users?

A. After an admin completes the installation for RingCentral for Dynamics integration and CIF from the Power Platform (https://admin.powerplatform.microsoft.com/), there could be two reasons why:

Reason 1:

-   Ensure that the app where the user is trying to access the RingCentral integration is added as part of 'Select Unified Interface Apps for Channel' in the Channel Integration Framework (CIF) setup.
-   Ensure the user role of those not seeing the integration is added to the 'Select the Roles for Channel'.

Reason 2:

-   Ensure that 'Channel Access' is included in the 'Select the Roles for Channel'.

All of this information is included in the RingCentral for Dynamics 365 admin guide (https://assets.ringcentral.com/us/guide/admin-guide/dynamics_beta_admin.pdf) on page 11, Step 3: Enable RingCentral for Dynamics.

![CIF Setup](./img/cif-setup.png)

##Q. Why do missed calls get logged to Dynamics 365, even after deselecting the options for "Missed calls with voicemail" and "Missed calls without voicemail" in the integration console?

A. Integration Console settings are specific to server-side call logging. This means when a user receives a missed call with or without voicemail on any RingCentral platform apart from the RingCentral for Dynamics integration inside Microsoft Dynamics 365, these calls do not get logged to the contact/account/leads/opportunities.

All other settings configured in the integration console (integrations.ringcentral.com) are only applicable for server-side calls (outside the RingCentral for Dynamics 365). Any call operations performed inside the RingCentral for Dynamics 365 integration within Microsoft Dynamics 365 are called client-side operations.

## Q. Why is the RingCentral for Dynamics 365 integration or the RingCentral panel in Dynamics displaying a blank white screen?

A. If the Channel URL opens in a new tab without issues, it is most likely a setup issue where our integration does not load in the customer's environment. I recommend the admin user follow the exact steps from the admin guide at https://assets.ringcentral.com/us/guide/admin-guide/dynamics_beta_admin.pdf.

If the issue persists after completing the correct setup, please follow these steps:

-   Collect HAR and console logs from the 'Customer Service Hub' screen. Right-click anywhere on the screen, inspect the element, and reload the page. Ask the customer to open the RingCentral for Dynamics panel in the top right corner.
-   I also recommend the admin add the 'Channel Access' role to the 'Select the Roles for the Channel' section.
