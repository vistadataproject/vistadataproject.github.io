---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 SCLST 

 property | value 
--- | --- 
 label | ORWDBA1 SCLST
 tag | SCLST
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | ARRAY
 description | Array of Order ID's and SC.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 50 | true | Patient IEN. | 
| ORLST | LIST | 255 | true | List of Orders. | 