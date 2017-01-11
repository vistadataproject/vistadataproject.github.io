---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE FIND PROCEDURE 

 property | value 
--- | --- 
 label | SDOE FIND PROCEDURE
 tag | FINDCPT
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure Call (RPC) returns a boolean indicator onwhether a specific procedure is associated with an encounter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file. | 
| CPT IEN | LITERAL |  | true | This is the internal entry number of an entry in the CPT [#81 - ^ICPT] file. | 




 ###### Generated on January 11th 2017, 6:39:42 am