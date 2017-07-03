---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM TEXT AUDIT GET
# MAG DICOM TEXT AUDIT GET

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC call fetches the statistical informationthat is collected about the transmission of Text Messages.

Property | Value
--- | ---
Label | GET1
Routine | [MAGDRPC7](http://code.osehra.org/dox/Routine_MAGDRPC7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 10 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.
TODAY | LITERAL | 10 | true | The value of this Boolean parameter, if present, indicates whetherinformation is to be retrieved for the current date only (value is true)or for all dates on which information was logged (value isabsent or false).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}