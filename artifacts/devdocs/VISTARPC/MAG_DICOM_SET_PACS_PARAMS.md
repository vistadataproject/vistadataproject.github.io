---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM SET PACS PARAMS<br/>
# MAG DICOM SET PACS PARAMS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC ensures that proper values are stored for a numberof Imaging Site Parameters for the current "place".If proper values are already present, no change is made to the database.

## Properties

Property | Value
--- | ---
Label | SETPACS
MUMPS Implementation | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PLACE | LITERAL | 30 | true | The value of this parameter is a pointer to ^MAG(2006.1)This pointer identifies the &quot;place&quot; for which parameters areto be entered.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}