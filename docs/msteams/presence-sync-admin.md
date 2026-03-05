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

# Setting up presence sync in Microsoft Teams and RingCentral

The RingCentral presence sync feature connects a user's status in RingCentral and Microsoft Teams. This feature must be set up by an admin to provide unified contact searching and bi-directional presence sync for accurate user availability across platforms. Review  [presence sync mapping examples for users](presence-sync-user.md).

## In this article

- **[Prerequisites for presence sync](#prerequisites-for-presence-sync)** - Requirements before setting up presence sync
- **[Step 1: Set up presence sync in the Admin Portal](#step-1-set-up-presence-sync-in-the-admin-portal)** - Configure presence sync in RingCentral Admin Portal
- **[Step 2: Sync presence status](#step-2-sync-presence-status)** - Sync presence for users
- **[Step 3: Customize call presence settings](#step-3-customize-call-presence-settings)** - Configure call handling rules based on Teams presence
- **[Revoking presence sync for users or admins](#revoking-presence-sync-for-users-or-admins)** - Turn off presence sync

## Prerequisites for presence sync

Before turning on presence sync as an admin:

- Verify all users listed in both the RingCentral Admin Portal and Microsoft admin center have been created and enabled.
- For presence sync to function properly, connections are made between Microsoft Teams and RingCentral accounts using a unique email address login name.
- In RingCentral, this identifier is the email address assigned to the user, and in Microsoft Teams, it's the user principal name (UPN) or email address of the user.
- You must have a Microsoft Azure Active Directory (AD) admin account.
- You'll need to provide authentication to Microsoft Azure AD twice during the setup.
- You need a global admin role for this authentication.

## Step 1: Set up presence sync in the Admin Portal

1. Sign in to the [RingCentral Admin Portal](https://service.ringcentral.com).
2. Click the More tab (a), then Account Settings (b), and then Microsoft Teams (c).
3. Click the Presence Sync tab.
4. Under Step 1, click Sign in.

    ![***Admin Portal Setup***](./img/admin-portal-setup.png)

5. In the popup, enter your credentials and click Sign in.
6. Check the box next to Consent on behalf of your organization.
7. Click Accept. The popup will close.

    ![***Sign In Popup***](./img/sign-in-popup.png)

8. Click Authorize RingCentral.

    ![***Authorize RingCentral***](./img/authorize-ringcentral.png)

9. Re-enter your credentials if prompted.
10. Click Accept. The popup will close.

    ![***Click Accept***](./img/click-accept.png)

11. Verify the Sync presence status. You can Sync presence for all users, Sync presence for selected users, or Disable presence sync.

    ![***Verify the Sync presence status***](./img/verify-sync-presence-status1.png)

12. If you have call queues set up, you can turn the Customize RingCentral call presence with Microsoft Teams Presence toggle on or off.

!!! note
    Logins must be consistent across both platforms, or presence sync won't work correctly for the users.

## Step 2: Sync presence status

Once your Microsoft 365 account is connected, you can Sync presence for all users or Sync presence for selected users.

![***Verify the Sync presence status***](./img/verify-sync-presence-status.png)

You can also Disable presence sync for all users.

Once the sync completes, a confirmation message will appear, and you'll receive an email including details on the number of synchronized users and if any users failed to sync.

!!! note
    Presence Sync will stop working for users if the Microsoft admin's connection to the RingCentral account is interrupted.

## Step 3: Customize call presence settings

You can then set up specific rules for accepting calls based on a user's status in Microsoft Teams by customizing call presence settings. This feature maps specific Microsoft Teams presence states to RingCentral call handling rules. Incoming calls will then be managed based on the user's availability in Microsoft Teams.

These settings override the [default presence sync behavior](https://support.ringcentral.com/article-v2/Navigating-presence-sync-as-a-user-in-Microsoft-Teams.html?brand=RingCentral&product=RingEX&language=en_US) set up in [Step 2](#step-2-sync-presence-status).

!!! note
    Presence configurations made in this step are one-way only. Changes in Microsoft Teams update RingCentral call handling, but changes in RingCentral presence don't update Microsoft Teams.

![***Call Presence Settings***](./img/call-presence-settings.png)

To update call presence settings:

1. Click the toggle on to set up rules for accepting calls based on your status in Microsoft Teams.
2. Click Edit to modify the call handling rules for each status.

**MS Teams presence:**

a. Busy
b. In a call
c. In a conference call
d. In a meeting
e. Offline

### RingCentral call rules

- **Accept all calls:** All incoming calls will ring through to the user, regardless of their Teams presence.
- **Do not accept queue calls:** Direct calls will ring through, but calls from call queues will not.
- **Do not accept any calls:** All incoming calls will be blocked.

### RingCentral presence

The RingCentral presence status is automatically set based on the selected call rule:

- **Accept all calls:** RingCentral presence changes to Busy or Offline.
- **Do not accept queue calls:** RingCentral presence changes to Busy or Offline.
- **Do not accept any calls:** RingCentral presence is set to Do Not Disturb (DND).

1. Click Save. You can click Reset to default to restore the previous default settings.

![***Update call presence settings***](./img/update-call-presence-settings.png)

### Example

For example, if a user's Microsoft Teams status is "In a meeting" and the "Do not accept any calls" rule is selected, RingCentral will:

- Set the user's RingCentral presence to DND.
- Prevent all incoming calls from ringing through to the user.

!!! warning "Important"
    If your Microsoft Teams Busy status is mapped to RingCentral's Do Not Disturb (DND), your Teams status may still show Busy or DND after your call or meeting ends on either platform. This can happen when you make or receive a RingCentral call during a Teams call or meeting, or the other way around.

    To reset your status, manually change it back to Available in Teams.

## Revoking presence sync for users or admins

To turn off presence sync for all users in your organization, click Disable presence sync.

You can also turn off presence sync for individual users by clicking Unsync under the Actions column in the user list.

![***Revoking presence sync for users or admins***](./img/revoking-presence-sync.png)

To turn presence sync back on at the admin level, follow the steps in [Setting up presence sync in the Admin Portal](#step-1-set-up-presence-sync-in-the-admin-portal) section.
