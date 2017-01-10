---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWCS LIST OF CONSULT REPORTS 

 property | value 
--- | --- 
 label | ORWCS LIST OF CONSULT REPORTS
 tag | LIST
 routine | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns a list on consult reports for aspecific patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT]. | 