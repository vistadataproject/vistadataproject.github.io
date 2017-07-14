---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORB OI EXPIRING - INPT PR<br/>
# ORB OI EXPIRING - INPT PR

This parameter is used to trigger a notification/alert when a specificorderable item is expiring for an inpatient.  The notification is delivered to a user based upon that user&#x27;s relationship to the inpatient as defined by the following codes.  Orderable Items can be set up with anyor all of the following codes:   P (Primary Provider): deliver notification to the patient&#x27;s PrimaryProvider.  A (Attending Physician): deliver notification to the patient&#x27;s Attending Physician.T (Patient Care Teams): deliver notification to the patient&#x27;s OE/RR Teams (personal patient and team lists are evaluated for potential recipients) and to devices on an OE/RR team. O (Ordering Provider): deliver notification to the providerwho placed the order which trigger the notification.M (PCMM Team): deliver notification to users/providers linked to thepatient via PCMM Team Position assignments.E (Entering User): deliver notification to the user/provider who entered the order&#x27;s most recent activity.R (PCMM Primary Care Practitioner): deliver notification to thepatient&#x27;s PCMM Primary Care Practitioner.S (PCMM Associate Provider): deliver notification to the patient&#x27;s PCMMAssociate Provider.C (PCMM Mental Health Treatment Coordinator): deliver notification to thepatient&#x27;s PCMM Mental Health Treatment Coordinator.

## Properties

Property | Value
--- | ---
Summary | Flag Items for INPT EXPIRING Prov Recip
Value Type | free text
Value Domain | 0:9
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}