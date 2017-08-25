---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GET RADIOLOGY PROCEDURES<br/>
# MAGV GET RADIOLOGY PROCEDURES

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns a single Radiology Procedure, or a list of them,for the INSTITUTION of the input STATION NUMBER, and the input IMAGINGLOCATION. Updated from MAG DICOM RADIOLOGY PROCEDURES (MAG*3.0*118).

## Properties

Property | Value
--- | ---
Label | GETPROCS
MUMPS Implementation | [MAGVIM10](http://code.osehra.org/dox/Routine_MAGVIM10_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STATIONUM | LITERAL | 30 | true | This is the STATION NUMBER (#99) of an INSTITUTION file (#4) entryused for the query.
IENMAGLOC | LITERAL | 30 | true | IEN of an entry in the IMAGING LOCATIONS file (#79.1).will be filtered from the return array.
IENRAPROC | LITERAL | 30 | true | IEN of an entry in the RAD/NUC MED PROCEDURES file (#71). If present,restricts the output to the single procedure requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}