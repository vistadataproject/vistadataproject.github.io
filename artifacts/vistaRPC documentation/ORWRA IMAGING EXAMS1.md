---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRA IMAGING EXAMS1 

 property | value 
--- | --- 
 label | ORWRA IMAGING EXAMS1
 tag | EXAMS1
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns a list on imaging exams for aspecific patient.


### Method description

 property | value 
--- | --- 
 Method comment | Return imaging exams
 Leading comment lines | RPC: ORWRA IMAGING EXAMS1,See RPC definition for details on input and output parameters

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT]. | 