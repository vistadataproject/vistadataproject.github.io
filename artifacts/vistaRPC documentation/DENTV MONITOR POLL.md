---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV MONITOR POLL 

 property | value 
--- | --- 
 label | DENTV MONITOR POLL
 tag | POLL
 routine | [DENTVM1](http://code.osehra.org/dox/Routine_DENTVM1_source.html)
 return value type | ARRAY
 description | See if the monitor background job has finished and if so, get theresults from the DENTAL PATIENT (#220) file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Contains the patient pointer (DFN). | 