---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG RAD GET NEXT RPT BY PT 

 property | value 
--- | --- 
 label | MAG RAD GET NEXT RPT BY PT
 tag | NXTPTRPT
 routine | [MAGDRPC9](http://code.osehra.org/dox/Routine_MAGDRPC9_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Returns the next ^RARPT entry for the patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | Patient pointer. | 
| RARPT1 | LITERAL |  | true | ^RARPT pointer - origin of search.  Next one is before it or after it. | 
| DIR | LITERAL |  | true | Direction to transverse ^RADPT (increasing or decreasing report number).1 = increasing report number, -1 = decreasing report number. | 




 ###### Generated on January 11th 2017, 6:39:43 am