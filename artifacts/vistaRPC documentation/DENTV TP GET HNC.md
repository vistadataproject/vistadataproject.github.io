---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET HNC 

 property | value 
--- | --- 
 label | DENTV TP GET HNC
 tag | HNC
 routine | [DENTVTP3](http://code.osehra.org/dox/Routine_DENTVTP3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns all of the Head&Neck records from the Treatment Plan Transaction/Exam file (#228.2) for a particular patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file. | 