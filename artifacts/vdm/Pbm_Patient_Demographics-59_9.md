---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Pbm_Patient_Demographics-59_9 

 property | value 
--- | --- 
 id | Pbm_Patient_Demographics-59_9
 fmId | 59.9
 label | Pbm Patient Demographics
 location | ^PSUDEM(
 description | {::nomarkdown}This file captures the date, time, and PATIENT DFN when any change occurs <br/>in the PATIENT file (#2) on any field captured in the PBM Patient <br/>Demographics Extract. Data in this file will be purged monthly for data <br/>older than 75 days.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| event_date_time | .01 | Event Date/time | {::nomarkdown}This field records the date and time when any change occurs in the <br/>PATIENT file (#2) on any field captured in the PBM Patient <br/>Demographics Extract. These changes are captured by the DG Field <br/>Monitor. The data in this field is purged monthly for all data older <br/>than 75 days.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| patient | .02 | Patient | {::nomarkdown}This field records the PATIENT DFN when any change occurs in the PATIENT <br/>file (#2) on any field captured in the PBM Patient Demographics Extract.<br/>When the monthly patient demographic extract runs, it will harvest data <br/>from the PATIENT file (#2) for the DFNs stored in this field and all data <br/>older than 75 days will be purged from this file. {:/} | POINTER |  |  | [Patient-2](Patient-2.md) | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:30:43 am</p>{:/}