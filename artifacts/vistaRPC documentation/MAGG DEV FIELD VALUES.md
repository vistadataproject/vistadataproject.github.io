---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG DEV FIELD VALUES 

 property | value 
--- | --- 
 label | MAGG DEV FIELD VALUES
 tag | GETS
 routine | [MAGGTSYS](http://code.osehra.org/dox/Routine_MAGGTSYS_source.html)
 return value type | GLOBAL ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NODE | LITERAL | 30 | true | This is the IEN in the Image File. | 
| FLAGS | LITERAL | 100 | true | This is the Flags parameter used in the call to GETS^DIQ.  If this is null, then the default of \IERN\ is used. | 