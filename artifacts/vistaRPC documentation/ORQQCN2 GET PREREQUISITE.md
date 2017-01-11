---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN2 GET PREREQUISITE 

 property | value 
--- | --- 
 label | ORQQCN2 GET PREREQUISITE
 tag | PREREQ
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | GLOBAL ARRAY
 description | Returns resolved boilerplate form CONSULT SERIVCES file (123.5) reflectingthe service's prerequisites for ordering a consult.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Service IEN | LITERAL | 16 | true | Service IEN in file 123.5. | 
| Patient ID | LITERAL | 32 | true | Patient DFN. | 