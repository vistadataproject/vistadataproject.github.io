---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM ROUTE VALID DEST
# MAG DICOM ROUTE VALID DEST

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ A Routing Gateway needs to check the validity of names ofdestinations at several occasions. This RPC performs this validation.

Property | Value
--- | ---
Label | VALDEST
Routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 30 | true | The value of this parameter is a string.This string identifies the destination to which one or moreimages is or are to be transmitted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}