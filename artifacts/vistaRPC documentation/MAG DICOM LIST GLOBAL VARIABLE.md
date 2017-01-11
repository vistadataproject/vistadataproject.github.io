---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM LIST GLOBAL VARIABLE 

 property | value 
--- | --- 
 label | MAG DICOM LIST GLOBAL VARIABLE
 tag | LIST
 routine | [MAGDGL](http://code.osehra.org/dox/Routine_MAGDGL_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns information from global variables on theserver system.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| WILD | LITERAL | 255 | true | The value of this parameter is a string that constitutesa wild-card for traversing a global variable. | 
| MAX | LITERAL | 10 | true | The value of this parameter is an integer value that specifiesthe maximum number of name/value pairs to be returned. | 
| START | LITERAL | 10 | true | The value of this parameter is an integer value that specifiesthe the point in the global variable traversal where thereport is to be resumed. | 




 Generated on January 11th 2017, 7:15:04 am