---
hide:
    - path
    - toc
---

# RingCentral for Zapier Release Notes

This page lists RingCentral for Zapier releases from late 2025 through the current version. For newer Zapier semantic versions, the RC internal version indicates the release month.

<section class="zapier-release" markdown>

## 26.1.3

<div class="zapier-release-meta" markdown>

**Release Month:** April 2026 · **RC Internal Version:** 26.2.10

</div>

Version 26.1.3 adds broader admin monitoring for instant triggers, optional ACE recording and insight file outputs, a new fax trigger, and safer Call Log controls for high-volume accounts.

### What's New

- **Multi-extension instant trigger monitoring**: RingCentral admins can select up to 50 extensions in **New SMS/MMS Received**, **New SMS/MMS Sent**, **New Voicemail**, and **New Fax Received**. If no extensions are selected, the trigger monitors the connected user's extension. Non-admin users may be limited to their own extension by RingCentral permissions.
- **New Fax Received trigger**: Inbound fax events can now start Zaps. Admins can monitor up to 50 selected extensions. During trigger setup, test samples are kept lighter by checking up to 3 selected extensions and requesting up to 5 fax records per extension.
- **Faster SMS Only mode**: **New SMS/MMS Received** now includes an `SMS Only` mode that uses the faster instant-SMS event and the webhook payload directly. Use `SMS/MMS` or `MMS Only` when the Zap needs MMS attachments.
- **Optional ACE recording file outputs**: **ACE Processed Recording** can fetch recording metadata and a downloadable recording file when **Include recording file outputs** is enabled. The new fields include recording URI, recording content URI, recording content type, and recording file. This option is off by default to avoid extra RingCentral API calls when a Zap only needs insights.
- **Combined ACE insights text file**: **ACE Processed Recording** can generate one downloadable `.txt` file with selected insight sections, including transcript, summary, bulleted summary, next steps, highlights, call notes, sentiment, AI score, and speaker list. The text file can use either formatted section titles or plain text.
- **Safer Call Log detailed mode**: **New Call Log Record** includes clearer guidance for Detailed view and a **Record Limit** setting, especially for **Company Call Log** workflows that may approach Zapier's approximate 6 MB response-size limit.
- **More resilient webhooks**: Instant triggers now attempt to re-subscribe when subscription renewal fails, helping webhook deliveries continue without user action.

### Related Documentation

- [New Call Log Record](call-log.md)
- [ACE Processed Recording](ace-processed-recording.md)
- [New SMS/MMS Received](sms-mms-received.md)
- [New SMS/MMS Sent](sms-mms-sent.md)
- [New Voicemail](new-voicemail.md)
- [New Fax Received](new-fax-received.md)

### Actions

There are no new action changes in this release.

</section>

<section class="zapier-release" markdown>

## 26.1.2

<div class="zapier-release-meta" markdown>

**Release Month:** March 2026 · **RC Internal Version:** 26.1.30

</div>

### Fixes

- **ACE Processed Recording**: Fixed an issue where a call with Call Notes could trigger the Zap twice.

</section>

<section class="zapier-release" markdown>

## 26.1.1

<div class="zapier-release-meta" markdown>

**Release Month:** February 2026 · **RC Internal Version:** 26.1.21

</div>

### Updates

- **Create Post**: Fixed an input field error that could prevent the action from running correctly.
- **ACE Processed Recording**: Improved the trigger test step. When the connected user has the `ReadAccountCallLog` feature, Zapier now uses company call logs to fetch sample call logs and insights. Otherwise, it uses the connected user's call log. This only affects Zapier test samples, not live webhook deliveries.

</section>

<section class="zapier-release" markdown>

## 26.1.0

<div class="zapier-release-meta" markdown>

**Release Month:** February 2026 · **RC Internal Version:** 26.1.20

</div>

### What's New

- **ACE Processed Recording rebrand**: Renamed **RingSense Processed Recording** to **ACE Processed Recording**. Descriptions now mention ACE (formerly RingSense), and license references now use AI Conversation Expert.
- **Live ACE test samples**: ACE Processed Recording now uses live data during trigger setup instead of mocked sample data.
- **Zapier platform upgrade**: Upgraded `zapier-platform-core` and `zapier-platform-cli` to version 18.1.0.
- **Phone number validation**: **New Call Log Record** and **New Call Recording** now warn when phone number filters are not in E.164 format without the leading `+`.
- **SMS/MMS attachment resilience**: **New SMS/MMS Received** now returns a placeholder file if RingCentral returns a 500 error while fetching an attachment, helping prevent Zaps from being disabled.
- **ACE sentiment output**: ACE Processed Recording now includes sentiment support.
- **Transcript fallback handling**: New Call Log Record and New Call Recording now handle 404 responses for missing transcripts without failing the trigger.

</section>

<section class="zapier-release" markdown>

## 25.3.30

<div class="zapier-release-meta" markdown>

**Release Month:** September 2025

</div>

### Updates

- **New Call Log Record**: Added a transcripts output field, made the API input field always visible, and adjusted permission warnings and checks.
- **New Call Recording**: Added a transcripts output field, made the API input field always visible, and adjusted permission warnings and checks.
- **RingSense Processed Recording**: Added `hostPhoneNumber` and `customerPhoneNumbers` output fields, and updated sample phone numbers to use the correct E.164 format.

</section>
