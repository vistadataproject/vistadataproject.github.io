---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV WORK ITEMS COUNT 

 property | value 
--- | --- 
 label | MAGV WORK ITEMS COUNT
 tag | CNTWI
 routine | [MAGVIM08](http://code.osehra.org/dox/Routine_MAGVIM08_source.html)
 return value type | ARRAY
 description | +---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+ Returns number of records in MAG WORK ITEM file (#2006.941) by TYPE, SUBTYPE, and STATUS.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYPE | LITERAL |  | true | External value of TYPE field (#2006.941,1) | 
| SUBTYPE | LITERAL |  | true | External value of SUBTYPE field (#2006.941,2) | 
| STATUS | LITERAL |  | true | External value of STATUS field (#2006.941,3) | 




 Generated on January 11th 2017, 7:15:04 am