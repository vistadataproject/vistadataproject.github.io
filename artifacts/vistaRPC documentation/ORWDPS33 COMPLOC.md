---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDPS33 COMPLOC 

 property | value 
--- | --- 
 label | ORWDPS33 COMPLOC
 tag | COMPLOC
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | SINGLE VALUE
 description | This RPC will return a 0 if the patient location is the same location as the original order. It will return a 1 if the location is different.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORID | LITERAL |  | true | This is the IEN of the original order from file 100 | 
| LOC | LITERAL |  | true | This is the encounter location the order is being written for. | 