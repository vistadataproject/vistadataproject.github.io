---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORB OI EXPIRING - INPT<br/>
# ORB OI EXPIRING - INPT

This parameter is used to trigger a notification/alert when a specificorderable item is expiring for an inpatient.   If the value for the orderable item flag is &quot;YES&quot;, the entity (user,team, device) flagging the orderable item becomes a potential alertrecipient for ALL patients.  If the value is &quot;NO&quot;, the entity (user,team, device), flagging the orderable item only becomes a potentialalert recipient if that entity is &quot;linked&quot; to the patient.  (If a deviceis added to the potential recipient list, it will always receive thealert.) Users are linked to a patient if the user is the patient&#x27;s attendingphysician, primary inpatient provider, PCMM primary care practitioner,PCMM associate provider, user is assigned to a position on the patient&#x27;sPCMM primary care team or user shares an OE/RR team with the patient.OE/RR teams are linked to a patient if the patient is on the team. (Ifa patient is on a team that has flagged an orderable item, all users onthat team become potential alert recipients.)  Devices (printers, etc.)are linked to a patient if the device and patient are on the same OE/RRteam. 

## Properties

Property | Value
--- | ---
Summary | Flag Item to Send INPT EXPIRING Notifs
Value Type | yes
Value Domain | Y:yes;N:no
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | TEAM (OE_RR)
3 | DEVICE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}