---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDLR32 LAB COLL TIME 

 property | value 
--- | --- 
 label | ORWDLR32 LAB COLL TIME
 tag | LABCOLTM
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | SINGLE VALUE
 description | Is the given time a routine lab collection time for the given location?


### Method description

 property | value 
--- | --- 
 Method comment | Is this a routine lab collect time for this location?

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Collection Time | LITERAL | 16 | true | Valid FileMan data/time string to check whether it is a valid labcollect time. | 
| Location | LITERAL | 16 | true | Pointer to Hospital Location | 