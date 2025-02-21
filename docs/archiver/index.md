# RingCentral Archiver
##### Safe, compliant storage of call recordings

## Installation and Operation

### Setup Connection Between RingCentral Account and Cloud Storage Account

To access RingCentral Archiver:

1. Log in at RingCentral Service.
2. Navigate to More → Apps and Resources → Archiver.
3. On the Accounts tab, select to connect your RingCentral account to one of the following cloud storage options:
   * Dropbox
   * Box
   * SFTP
   * Google Drive

Once the connection is successfully set up, a RingCentral Application folder will be created under the Apps folder in the connected cloud storage.

!!! info "Data backup will cease when the DISCONNECT button is clicked. However, the RingCentral folders created in the storage accounts will not be deleted upon disconnection."

### Backup RingCentral Data to Cloud Storage

With a RingCentral account connected to a cloud storage account, users can enable or disable backup by checking/unchecking the Turn On Backup checkbox. By default, the toggle is ON.

#### Admin View

* Available only to admin users when switching to Account Settings on the Sync Options tab.
* Admins can back up only Call Recordings.
* By default, Call Recordings are selected for backup.
* With the Turn On Backup option enabled, RingCentral Archiver will run a backup job every 30 minutes, archiving call recordings for all extensions in the company.
* Admins can archive call recordings for themselves or for all extensions.

#### Extension View

* Extension users can choose to back up the following for their own extensions:
  * Call Recordings
  * Voicemails
  * SMS
  * Fax

### Archiver Logs

* With Turn On Backup enabled, archive jobs run every 30 minutes.
* Each task is logged at the backend, and users can view logs on the Logs tab.
* By default, logs from the past 7 days are displayed.
* If data fails to back up due to an issue, Archiver will automatically retry 3 times.
* If files still fail after 3 retries, a manual retry button will appear in the Archive logs.
* Users can:
  * Click the Retry button for individual logs.
  * Select multiple failed records and click the Retry button on the top left for bulk retry.

## System Requirements

The following browsers are supported by RingCentral for Archiver:

* Microsoft Edge 38+ (Windows 10)
* Firefox 46+ (Windows, Mac)
* Chrome 50+ (Windows, Mac)
* Safari 9.1+ (Mac)
