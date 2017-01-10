---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWSR CASELIST 

 property | value 
--- | --- 
 label | ORWSR CASELIST
 tag | CASELIST
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of all surgery cases for a patient, without documents asreturned by ORWSR LIST.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | dfn | LITERAL | 32 | true | Patient DFN | 