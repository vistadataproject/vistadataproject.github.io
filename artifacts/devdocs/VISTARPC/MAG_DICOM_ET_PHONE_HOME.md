---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM ET PHONE HOME
# MAG DICOM ET PHONE HOME

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Each day, a DICOM Gateway reports a number of statisticsto the Imaging Team in Silver Spring (Maryland).Part of that information that is transmitted needs to be fetchedfrom the VistA System. This RPC fetches all information to be reported from the VistA system.

Property | Value
--- | ---
Label | INFO
Routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 20 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which this DICOM Gatewayis located.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}