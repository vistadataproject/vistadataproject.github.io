---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM NETWORK STATUS 

 property | value 
--- | --- 
 label | MAG DICOM NETWORK STATUS
 tag | ONOFLINE
 routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Mark a Network Location as being either on-line or off-line.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DEST | LITERAL | 30 | true | The value of this parameter is a pointer to ^MAG(2005.2).This pointer identifies the network location for which theoperational status is being defined. | 
| vs:Input_Parameter-8994_02 | STATUS | LITERAL | 10 | true | The value of this parameter is a Boolean value that indicatesthe new operational status of the network location:   0 = off-line   1 = on-line | 