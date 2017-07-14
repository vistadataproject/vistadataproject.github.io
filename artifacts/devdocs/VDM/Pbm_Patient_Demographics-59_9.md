---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Pbm_Patient_Demographics-59_9<br/>
<a name="top"></a>
# Pbm Patient Demographics (59.9)
This file captures the date,time,and PATIENT DFN when any change occurs  in the PATIENT file (#2) on any field captured in the PBM Patient  Demographics Extract. Data in this file will be purged monthly for data  older than 75 days.

**Global:** ^PSUDEM(

**Domain:** Patients

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Event Date/time**{::nomarkdown}<pre><code>  event_date_time</code></pre>{:/} | .01 | This field records the date and time when any change occurs in the <br/>PATIENT file (#2) on any field captured in the PBM Patient <br/>Demographics Extract. These changes are captured by the DG Field <br/>Monitor. The data in this field is purged monthly for all data older <br/>than 75 days. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | .02 | This field records the PATIENT DFN when any change occurs in the PATIENT <br/>file (#2) on any field captured in the PBM Patient Demographics Extract.<br/>When the monthly patient demographic extract runs,it will harvest data <br/>from the PATIENT file (#2) for the DFNs stored in this field and all data <br/>older than 75 days will be purged from this file.  | POINTER |  | [Patient-2](Patient-2)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}