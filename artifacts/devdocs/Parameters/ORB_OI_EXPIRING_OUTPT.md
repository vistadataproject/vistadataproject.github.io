---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORB OI EXPIRING - OUTPT
# ORB OI EXPIRING - OUTPT

 This parameter is used to trigger a notification/alert when a specific orderable item is expiring for an outpatient.     If the value for the orderable item flag is &quot;YES&quot;, the entity (user, team, device) flagging the orderable item becomes a potential alert recipient for ALL patients.  If the value is &quot;NO&quot;, the entity (user, team, device), flagging the orderable item only becomes a potential alert recipient if that entity is &quot;linked&quot; to the patient.  (If a device is added to the potential recipient list, it will always receive the alert.)   Users are linked to a patient if the user is the patient&#x27;s attending physician, primary inpatient provider, PCMM primary care practitioner, PCMM associate provider, user is assigned to a position on the patient&#x27;s PCMM primary care team or user shares an OE/RR team with the patient. OE/RR teams are linked to a patient if the patient is on the team. (If a patient is on a team that has flagged an orderable item, all users on  that team become potential alert recipients.)  Devices (printers, etc.) are linked to a patient if the device and patient are on the same OE/RR team. 

Property | Value
--- | ---
ID | 4684
Summary | Flag Item to Send OUTPT EXPIRING Notifs
Value Type | yes
Value Domain | Y:yes;N:no
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | TEAM (OE_RR)
3 | DEVICE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}