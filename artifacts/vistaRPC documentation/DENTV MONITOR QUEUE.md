---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV MONITOR QUEUE 

 property | value 
--- | --- 
 label | DENTV MONITOR QUEUE
 tag | QUE
 routine | [DENTVM1](http://code.osehra.org/dox/Routine_DENTVM1_source.html)
 return value type | SINGLE VALUE
 description | Queues a TaskMan job to run patient dental (e.g.) Fluoride, Monitor(s).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Contains the patient pointer (DFN). | 