---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN DEFAULT REQUEST REASON 

 property | value 
--- | --- 
 label | ORQQCN DEFAULT REQUEST REASON
 tag | DEFRFREQ
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | GLOBAL ARRAY
 description | 


### Method description

 property | value 
--- | --- 
 Method comment | Return default reason for request for service
 Leading comment lines | ORSVC=pointer to file 123.5,ORDFN=patient, if RESOLVE=1,RESOLVE=1 to resolve boilerplate, 0 to not resolve

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SERVICE | LITERAL | 16 |  |  | 
| PATIENT DFN | LITERAL | 32 |  |  | 
| RESOLVE | LITERAL | 2 |  |  | 