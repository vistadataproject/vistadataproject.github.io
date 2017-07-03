---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM FILEMAN GET
# MAG DICOM FILEMAN GET

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ On occasion it is needed to fetch a value from a database.This RPC is a general-purpose one that fetches the valueof one specific field from a specific table.

Property | Value
--- | ---
Label | FMGET
Routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 30 | true | The value of this parameter is a number. This value is the(FileMan) number of the table from which information is retrieved.
D0 | LITERAL | 30 | true | The value of this parameter is a number. This value is theinternal entry number in the table from which information is retrieved.
FIELD | LITERAL | 30 | true | The value of this parameter is a number. This value is the(FileMan) number of the field in the table from which information is retrieved.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}