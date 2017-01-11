---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM AUDIT PURGE 

 property | value 
--- | --- 
 label | MAG DICOM AUDIT PURGE
 tag | PURGE
 routine | [MAGDRPC7](http://code.osehra.org/dox/Routine_MAGDRPC7_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC call will purge audit information that was gatheredby DICOM Gateways.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILENUM | LITERAL | 20 | true | The value of this parameter is a number. This number identifiesthe FileMan table that is to be purged. | 
| DATE | LITERAL | 20 | true | The value of this parameter is a (FileMan formatted) date.Data generated before this date will be purged from the currentFileMan table. | 




 ###### Generated on January 11th 2017, 6:39:43 am