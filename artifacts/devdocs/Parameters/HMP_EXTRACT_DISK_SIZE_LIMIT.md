---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; HMP EXTRACT DISK SIZE LIMIT<br/>
# HMP EXTRACT DISK SIZE LIMIT

Maximum size (megabytes) of all VPR extracts in ^XTMP(&quot;VPRFX~*&quot;) waiting to be sent to HMP servers as part of getPtUpdates.  If maximum is reached, patient domain extract TasKman jobs will be requeued to a future time, as specified in the VPR EXTRACT TASK REQUEUE SECS parameter. At that time, this maximum check will be performed again.  Also, this maximum check occurs when an executing extract job is about to start another domain extract. If maximum size has been reached, the job will hang the number of seconds specified by the VPR EXTRACT TASK REQUEUE SECS parameter. The maximum check will occur again after the hang time has expired.  This limit is needed to insure the ^XTMP global does not get too big during initial/resync domain extract processing and cause disk full  errors.

## Properties

Property | Value
--- | ---
Summary | Extracts Size Limit (MBs)
Value Type | numeric
Value Domain | 10:2000:0
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}