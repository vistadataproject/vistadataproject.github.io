---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> Pbm_Patient_Demographics-59_9 

 property | value 
--- | --- 
 id | Pbm_Patient_Demographics-59_9
 fmId | 59.9
 label | Pbm Patient Demographics
 location | ^PSUDEM(
 description | This file captures the date, time, and PATIENT DFN when any change occurs \rin the PATIENT file (#2) on any field captured in the PBM Patient \rDemographics Extract. Data in this file will be purged monthly for data \rolder than 75 days.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| event_date_time | .01 | Event Date/time | This field records the date and time when any change occurs in the \rPATIENT file (#2) on any field captured in the PBM Patient \rDemographics Extract. These changes are captured by the DG Field \rMonitor. The data in this field is purged monthly for all data older \rthan 75 days. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| patient | .02 | Patient | This field records the PATIENT DFN when any change occurs in the PATIENT \rfile (#2) on any field captured in the PBM Patient Demographics Extract.\rWhen the monthly patient demographic extract runs, it will harvest data \rfrom the PATIENT file (#2) for the DFNs stored in this field and all data \rolder than 75 days will be purged from this file.  | POINTER |  |  | [Patient-2](Patient-2.md) | 