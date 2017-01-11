---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV DGW INSTRUMENT LIST 

 property | value 
--- | --- 
 label | MAGV DGW INSTRUMENT LIST
 tag | INSTRMNT
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Return list of Instruments in DGWfrom DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HOSTNAME | LITERAL |  |  | The HOSTNAME is the corresponding DICOM Gateway.  If HOSTNAME is blank all settings will be returned | 




Generated on January 11th 2017, 6:34:23 am