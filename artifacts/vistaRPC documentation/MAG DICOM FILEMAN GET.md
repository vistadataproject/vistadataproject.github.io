---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM FILEMAN GET 

 property | value 
--- | --- 
 label | MAG DICOM FILEMAN GET
 tag | FMGET
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ On occasion it is needed to fetch a value from a database.This RPC is a general-purpose one that fetches the valueof one specific field from a specific table.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 30 | true | The value of this parameter is a number. This value is the(FileMan) number of the table from which information is retrieved. | 
| D0 | LITERAL | 30 | true | The value of this parameter is a number. This value is theinternal entry number in the table from which information is retrieved. | 
| FIELD | LITERAL | 30 | true | The value of this parameter is a number. This value is the(FileMan) number of the field in the table from which information is retrieved. | 




 Generated on January 11th 2017, 7:15:04 am