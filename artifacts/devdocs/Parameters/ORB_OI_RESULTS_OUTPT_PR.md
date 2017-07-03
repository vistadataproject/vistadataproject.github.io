---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORB OI RESULTS - OUTPT PR
# ORB OI RESULTS - OUTPT PR

This parameter is used to trigger a notification/alert when a specificorderable item is resulted for an outpatient.  Results only apply to orders which can be resulted (lab, imaging, consults.)  The notification is delivered to a user based upon that user&#x27;srelationship to the outpatient as defined by the following codes.An Orderable Item can be set up with any or all of the following codes:    P (Primary Provider): deliver notification to the patient&#x27;s PrimaryProvider.  A (Attending Physician): deliver notification to the patient&#x27;s AttendingPhysician.T (Patient Care Teams): deliver notification to the patient&#x27;s OE/RR Teams (personal patient and team lists are evaluated for potential recipients) and to devices on an OE/RR team.O (Ordering Provider): deliver notification to the provider who placed the order which trigger the notification.M (PCMM Team): deliver notification to users/providers linked to thepatient via PCMM Team Position assignments.E (Entering User): deliver notification to the user/provider who entered the order&#x27;s most recent activity.R (PCMM Primary Care Practitioner): deliver notification to thepatient&#x27;s PCMM Primary Care Practitioner.S (PCMM Associate Provider): deliver notification to the patient&#x27;s PCMMAssociate Provider.C (PCMM Mental Health Treatment Coordinator): deliver notification to the patient&#x27;s PCMM Mental Health Treatment Coordinator.

Property | Value
--- | ---
ID | 405
Summary | Flag Items for OUTPT RESULT Provid Recip
Value Type | free text
Value Domain | 0:9
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}