---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORB FORWARD SURROGATES
# ORB FORWARD SURROGATES

The number of days before a notification is forwarded to a recipient&#x27;ssurrogates.  The maximum is 30 days.  If not indicated or zero, thenotification will not be forwarded.  For example, if a notification has avalue of 14 for this parameter, it will be forwarded to the surrogates ofeach recipient who haven&#x27;t processed the notification after 14 days.Determination of recipients who have not processed the notification andwho  their surrogates are is made by the Kernel Alert Utility.  It willnot be  forwarded to surrogates of recipients who have processed the alertwithin 14  days.  If the value of this parameter is zero or non-existent,the  alert/notification will never be forwarded. For this purpose, thesurrogate(s) are identified as the recipient&#x27;s MailMan surrogate(s).

Property | Value
--- | ---
ID | 45
Summary | Hold Days before Forward to Surrogates
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