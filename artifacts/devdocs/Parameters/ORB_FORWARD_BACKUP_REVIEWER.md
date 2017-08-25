---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORB FORWARD BACKUP REVIEWER<br/>
# ORB FORWARD BACKUP REVIEWER

The number of days before a notification is forwarded to a recipient&#x27;sbackup alert reviewer. The maximum is 30 days.  If not indicated or zero,the notification will not be forwarded.  For example, if a notificationhas a value of 14 for this parameter, it will be forwarded to the backupreviewer of each recipient who hasn&#x27;t processed the notification after 14days. Determination of recipients who have not processed the notificationand their backup alert reviewer is made by the Kernel Alert Utility.  Itwill not be forwarded to backup reviewers of recipients who haveprocessed the alert within 14 days.  If the value of this parameter iszero or non-existent, the  alert/notification will never be forwarded.

## Properties

Property | Value
--- | ---
Summary | Holds Days before Forward to Backup
Value Type | numeric
Value Domain | 0:30:0
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}