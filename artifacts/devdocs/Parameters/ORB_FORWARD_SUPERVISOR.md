---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORB FORWARD SUPERVISOR
# ORB FORWARD SUPERVISOR

The number of days before a notification is forwarded to a recipient&#x27;ssupervisor.  The maximum is 30 days.  If not indicated or zero, thenotification will not be forwarded.  For example, if a notification has avalue of 14 for this parameter, it will be forwarded to the supervisor ofeach recipient who hasn&#x27;t processed the notification after 14 days.Determination of recipients who have not processed the notification andwho  their supervisors are is made by the Kernel Alert Utility.  It willnot be  forwarded to supervisors of recipients who have processed thealert within  14 days.  If the value of this parameter is zero ornon-existent, the  alert/notification will never be forwarded.For this purpose, the supervisor is identified as the recipient&#x27;s service/section chief.

Property | Value
--- | ---
ID | 44
Summary | Hold Days before Forward to Supervisor
Value Type | numeric
Value Domain | 0:30:0
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}