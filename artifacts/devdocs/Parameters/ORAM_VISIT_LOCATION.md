---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORAM VISIT LOCATION
# ORAM VISIT LOCATION

Clinic Locations                                  Without PCE Functions: Clinic location you choose is the clinic the notewill be associated with.  This requires a number from the HospitalLocation file.                                   If you do NOT use the PCE function, then your site is responsible forencounters, etc.  The program does NOT care if you use a count or anon-count clinic.                                   With PCE Functions: If you DO use PCE functions, then you will be askedfor three clinics, one for face contact (the one on the yellow sheet), onefor phone contact, and one that is non count (these are on the PCE form).The &quot;VISIT&quot;  location (the ANTICOAG VISIT Clinic Location) should be aClinic for FACE to FACE visits.  The program does not care if you use thesame clinic for both the phone and face to face, but for PCE credit theymust be COUNT CLINICS.                                 The non-count clinic is used for notes only, when no PCE data is recorded.

Property | Value
--- | ---
ID | 596
Summary | Anticoagulation VISIT Clinic Location
Value Type | pointer
Value Domain | 44:AEMQ
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | DIVISION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}