---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORB PROVIDER RECIPIENTS
# ORB PROVIDER RECIPIENTS

Set of codes indicating default provider recipients of a notification by their title or relationship to the patient.  Notifications can be set up with any or all of the following codes:   P (Primary Provider): deliver notification to  the patient&#x27;s PrimaryProvider.    A (Attending Physician): deliver notification to the patient&#x27;s AttendingPhysician.  T (Patient Care Teams): deliver notification to the patient&#x27;s OE/RR Teams (personal patient and team lists are evaluated for potential recipients) and to devices on an OE/RR team.  O (Ordering Provider): deliver notification to the providerwho placed the order which trigger the notification.  M (PCMM Team): deliver notification to users/providers linked to thepatient via PCMM Team Position assignments.  E (Entering User): deliver notification to the user/provider who enteredthe order&#x27;s most recent activity.  R (PCMM Primary Care Practitioner): deliver notification to thepatient&#x27;s PCMM Primary Care Practitioner.  S (PCMM Associate Provider): deliver notification to the patient&#x27;s PCMMAssociate Provider.  C (PCMM Mental Health Treatment Coordinator): deliver notification to the patient&#x27;s PCMM Mental Health Treatment Coordinator. The providers, physicians and teams must be set up properly and accuratelyfor the correct individuals to receive the notification.

Property | Value
--- | ---
ID | 50
Summary | Provider Recipients
Value Type | free text
Value Domain | 0:9
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}