---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV STUDY LOOKUP<br/>
# MAGV STUDY LOOKUP

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Looks up the imaging case using the accession number provided by thecalling application.   Obtains patient demographic data, and checksthe data for accuracy. (MAG*3.0*118)

## Properties

Property | Value
--- | ---
Label | LOOKUP
Routine | [MAGVSTDY](http://code.osehra.org/dox/Routine_MAGVSTDY_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CASENUMB | LITERAL | 16 | true | CASENUMB &#x3D; ACCESSION NUMBER PASSED FROM THE CLIENT.
IMGSVC | LITERAL | 3 | true | RAD OR CON.  No other entries are allowed.
PNAMEDCM | LITERAL | 64 | true | Patient&#x27;s Name from the DICOM header (0010,0010).
PIDDCM | LITERAL | 64 | true | Patient ID from DICOM header (0010,0020).
PDOBDCM | LITERAL | 8 | true | Patient&#x27;s Birth Date from DICOM header (0010,0030).
PSEXDCM | LITERAL | 1 | true | Patient&#x27;s Sex from DICOM header (0010,0040).
PICNDCM | LITERAL | 16 | true | Patient&#x27;s VA Integration Control Number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}