---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM QUEUE INIT 

 property | value 
--- | --- 
 label | MAG DICOM QUEUE INIT
 tag | INIT
 routine | [MAGDRPC4](http://code.osehra.org/dox/Routine_MAGDRPC4_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC (re)initializes the queue for DICOM transmissionof images to (remote) DICOM Storage Providers.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOCATION | LITERAL | 20 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location for which images are beingtransmitted. | 




 ###### Generated on January 11th 2017, 6:39:43 am