---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM PACS CUTOFF DATE 

 property | value 
--- | --- 
 label | MAG DICOM PACS CUTOFF DATE
 tag | CUTOFF
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ On occasion the software on the DICOM Gateway needs to knowthe number of days that files are retained on Magnetic Storagefor files that are copied to a PACS.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| D0 | LITERAL | 30 | true | The value of this parameter is a pointer to the ImagingSite Parameter Table (#2006.1). For non-consolidated sites, this value is always equal to 1 . For consolidated sites, this pointer identifies the \place\for which information is to be retrieved. | 




 Generated on January 11th 2017, 7:15:04 am