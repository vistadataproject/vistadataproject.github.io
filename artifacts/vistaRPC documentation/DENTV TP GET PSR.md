---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET PSR 

 property | value 
--- | --- 
 label | DENTV TP GET PSR
 tag | PSR
 routine | [DENTVTP3](http://code.osehra.org/dox/Routine_DENTVTP3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns all of the PSR type records from the Treatment Plan Transaction/Exam file (#228.2) for a particular patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file. | 