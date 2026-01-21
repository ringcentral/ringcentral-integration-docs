---
hide:
    - navigation
---

<div class="storage-hero storage-hero--smarsh" markdown>

# :material-shield-check: Connect Smarsh

Enterprise archiving and compliance platform for regulated industries.

</div>

## Overview

Smarsh provides enterprise-grade archiving and compliance solutions designed for regulated industries. Integrate RingCentral with Smarsh to meet your organization's compliance and e-discovery requirements.

---

## Prerequisites

!!! warning "Before You Begin"
    Ensure the following prerequisites are met before proceeding with the setup.

<div class="grid cards" markdown>

-   :material-star:{ .lg .middle } **RingCentral Archiver**

    ---

    Premium subscription or above required

-   :material-key:{ .lg .middle } **Smarsh Account**

    ---

    Valid Smarsh token (32 characters)

-   :material-shield-account:{ .lg .middle } **Admin Privileges**

    ---

    RingCentral app Admin privilege required

-   :material-toggle-switch:{ .lg .middle } **Compliance Exports**

    ---

    Must be enabled in RingCentral settings

</div>

### Enable Compliance Exports

To enable message data export:

1. Go to **RingCentral app** → **Settings** → **Administration** → **Messaging**
2. Toggle **Enable message data export** to the **ON** position

![Enable Data Export](./img/enable-data-export.png)

---

## Connection Steps

<div class="steps-container" markdown>

**Step 1:** Go to your RingCentral Online account and click **Tools** → **Archiver Beta**

**Step 2:** Click **Connect** next to Smarsh

**Step 3:** Enter your credentials in the pop-up window:

| Field | Description |
|-------|-------------|
| **Smarsh Token** | Your 32-character Smarsh authentication token |
| **Description** | *(Optional)* A description for this connection |

**Step 4:** Click **Connect** to proceed

**Step 5:** Click **Go to Sync Options** and confirm in the next pop-up to configure archiving

</div>

---

## Configure Data Types

After connecting, configure which data types to archive:

1. Go to the **Sync Options** tab
2. Select **Account Settings** from the dropdown menu
3. Check the box beside **RingCentral app Messages**

!!! info "Account-Level Archiving"
    When using Account Settings, all extensions managed by this admin account will be archived. Currently, only RingCentral app messages are supported. Additional options will be available in future releases.

When enabled, you will see a confirmation message.

---

## Searching Data in Smarsh

### Initiate a New Search

After logging in to Smarsh, navigate to the **Search** tab to begin searching your archived data.

![Data Search in Smarsh](./img/data-search-smarsh.png)

### View Search Results

Search results display as threads. Click any thread to view the detailed breakdown. Different message types show distinct prefix headers:

- **MESSAGE** - Standard messages
- **DIRECT MESSAGE** - Private conversations

![Search Results](./img/search-results-smarsh.png)

### Preview or Download

Certain RingCentral content types appear as attachments within threads:

| Content Type | Description |
|--------------|-------------|
| **Event** | Calendar events |
| **Task** | Task items |
| **Note** | Notes and memos |
| **Attached file** | File attachments |

Click any attachment to preview it online or download it.

![Search Result Download](./img/search-result-download.png)

---

## Related Resources

<div class="grid cards" markdown>

-   :material-sync:{ .lg .middle } **Sync Options**

    ---

    Configure archiving schedules and data types.

    [:octicons-arrow-right-24: Configure Sync](sync-options.md)

-   :material-file-document:{ .lg .middle } **Archive Logs**

    ---

    Monitor archive activity and troubleshoot issues.

    [:octicons-arrow-right-24: View Logs](archive-logs.md)

</div>
