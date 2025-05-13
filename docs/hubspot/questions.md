---
hide:
    - toc
---

# General Questions

##Q. I keep seeing 'Webphone Unavailable' error message?
A. Users may encounter a "Webphone Unavailable" error message when attempting to call from RingCentral for HubSpot. This error typically occurs due to insufficient microphone permissions in the browser. To identify and resolve the issue, consider the following rules:

Solution 1: Enable Microphone Permissions

When users see the "Webphone Unavailable" error message, instruct them to click on it. This action will open the browser site settings. Ensure that the toggle for Microphone is turned on. Once enabled, the error message should disappear, allowing users to use RingCentral for HubSpot for making calls.

Solution 2: Check Browser Privacy Settings

If users still encounter the "Webphone Unavailable" error message after allowing microphone permissions, recommend checking the browser privacy settings. For Google Chrome:

1. Go to Browser Settings
2. Select Privacy and security
3. Select Microphone
4. Verify the following: - The correct microphone is selected (e.g., MacBook Pro Microphone (Built-in)(System default)) - Under default behavior, "Sites can ask to use your microphone" radio button is selected - The HubSpot site is not listed under "Not allowed to use your microphone" - The HubSpot site is present under "Allowed to use your microphone"

##Q. The contact page does not open in HubSpot when there is an inbound call in RingCentral for HubSpot?
A. Contact Page Not Opening for Inbound Calls

The screen pop feature in HubSpot opens a contact screen or the contact search page for multiple matches when a user receives an inbound call. If it does not work as expected, there are several reasons to check if the customer has configured the settings correctly.

Check if the user has enabled the toggle for 'Show matches for inbound calls'. If the user has not enabled this toggle in the RingCentral for HubSpot integration, the screen pop feature will not work.

Even if the 'Show matches for inbound calls' toggle is enabled and users don't see the feature working, we need to determine if they are checking this feature after the inbound phone call is answered or while it is ringing. This feature only works when the inbound phone call is answered, not when the integration starts ringing with the matched contact.

If the user has already enabled 'Show matches for inbound calls', is answering inbound calls, and the feature still does not work, we need to check if there are any browser pop-up blockers in place. Go to Settings -> Privacy and security -> Site settings -> Pop-ups and redirects -> Ensure that the radio button is selected for 'Sites can send pop-ups and use redirects'.

##Q. Why isn't my SMS being logged automatically?
A: Once you enable the Auto-Log Texts toggle in Settings, all new incoming and outgoing texts will be logged automatically by the app. SMS messages are typically logged within 10 minutes, and the app will retry any failed attempts.

If you don’t see your SMS in HubSpot, it could be due to one of the following:

The RingCentral for HubSpot app may not be showing the most up-to-date logging status.

You might be viewing the wrong HubSpot contact, company, or deal.

To resolve this:

1. Sign out and sign back in to the RingCentral for HubSpot app to refresh the sync.

2. Click the “View Log Details” icon to open the exact record where the SMS has been logged in HubSpot.

##Q. Why is a contact getting created in HubSpot for unknown phone numbers?
A. When the "Auto log calls" toggle is enabled in RingCentral for HubSpot settings, the app creates a new contact for inbound calls with no matching record. The new contact is named "Caller + phone number in e164 format," and the call is logged under this new contact. The same process applies to SMS messages. If there's no matched record, the app creates a new contact named "SMS + phone number in e164 format" and logs the SMS to this new record.

##Q Why is there no available hub to log in?
A. If you're unable to log in, reach out to your HubSpot administrator to connect the HubSpot account you would like to use with RingCentral.
If this has already been done, please ensure:

-   You have access to the Hub in HubSpot
-   You use the same email to sign in to both HubSpot and RingCentral for HubSpot
    If you are still unable to log in after verifying these points, please contact RingCentral Support for assistance.

##Q. I have enabled/updated call outcome/call type in HubSpot, but why are the changes not synced back to RingCentral for HubSpot?
A. To sync the changes, log out of the app and then log back in.

##Q. Why do I see the error message "Cannot match contact. Try clicking the Create log icon in your call history." when I make or pick up a call?
A. This error message appears when your company reaches the rate limit imposed by HubSpot at that specific moment. As a result, the call information is displayed as "Unknown" because the contact matching process fails due to the rate limitation. However, potential matches may still exist despite the "Unknown" status. To resolve this, you can return to your call history and click the "Create call log" icon for the specific call. This action will trigger the contact matching process again, attempting to find and associate the correct contact information.

I have checked with Jack and have the same insights. This would be considered a product feature request, and there is currently no estimated time of arrival (ETA) for its implementation and delivery. I will proceed to create an improvement ticket. You can also refer the customer to my previous comment and suggest they submit a feature request through ideas.ringcentral.com.

Please let me know if you have any additional concerns.

##Q. Why is the call not matched, but the contact exists in my HubSpot?
A. First, ensure you have signed into the hub where your contacts exist in RingCentral for HubSpot.
Second, RingCentral for HubSpot follows the contact match logic for both national and international calls. If you make or receive national calls, the company/contact records with phone number or mobile phone number in any format will be matched. For example, if a phone number +16508888888 calls you and there are 4 contacts with the phone number saved as +16508888888, 1 (650)-888-8888, 650_888_8888, 6508888888 in your HubSpot, all of these will be matched.

##Q. Why is there no call recording link for playback in HubSpot contact activity?
A. If there is no call recording link present inside the HubSpot contact/company activity for the logged call, it is most likely that the integration was closed immediately after the call ended. We recommend users not to hit the close button for the integration after the call is ended, as this will terminate the integration instance and prevent the update API calls from occurring to update the call log with several parameters such as Call Duration, Call Recording Link, and Call Ended Time. If the user did not close the integration and still does not see the call recording playback link, please check the RingCentral admin portal to see if that call was recorded. If it is present there, please report the issue to RingCentral support.

## Q. Can I make calls directly from HubSpot?

A. Yes. You can use the RingCentral dialer inside HubSpot to call contacts. Calls are logged automatically with details like duration, timestamp, and optional notes.

## Q. Will inbound calls be logged in HubSpot?

A. Yes. Both answered and missed incoming calls are logged, helping you track all interactions. If you take a call outside HubSpot, it's still logged through Activity sync if it's set up.

## Q. What happens if I take a call outside of HubSpot?

A. Calls made or received on your deskphone and RingCentral mobile or desktop apps are still logged in HubSpot through Activity Sync. You may need to manually add notes and update call details.

## Q. Does RingCentral for HubSpot support call recordings?

A. Yes. If call recording is turned on in your RingCentral account, a playback link will appear in HubSpot. Recordings are stored in RingCentral's system.

## Q. Can I use RingCentral for HubSpot on mobile?

A. You can make and receive calls using the RingCentral mobile app. However, full integration features like in-app calling and automatic logging work best on the HubSpot desktop or web app. You need to use the HubSpot app to manually disposition and log calls. HubSpot doesn't currently support third-party calling from RingCentral in their mobile app.

## Q. Is RingCentral for HubSpot free?

A. The integration is free for RingCentral Advanced and Ultra users.

## Q. What HubSpot objects does RingCentral integrate with?

A. RingCentral for HubSpot primarily integrates with:

-   Contacts: Call logs link to HubSpot contacts to help track interactions.
-   Companies: Calls can be linked to company records for easier team collaboration.
-   Deals: Calls can be logged under active deals to track communications during the sales process.
-   Tickets: Support teams can log calls under tickets to keep a record of customer interactions.

## Q. Does RingCentral work with HubSpot automations?

A. Yes. RingCentral integrates with HubSpot workflows and automation tools. You can:

-   Trigger workflows based on call events, like creating a follow-up task when a call is logged.
-   Send notifications when a call is completed or missed.
-   Create follow-up reminders to help boost customer engagement.

## Q. Who should I contact for support?

A.

-   For RingCentral technical issues, contact Support.
-   For HubSpot CRM questions, contact HubSpot Support.
-   End users should visit the RingCentral support site or reach out to their system admin for integration-related questions.
