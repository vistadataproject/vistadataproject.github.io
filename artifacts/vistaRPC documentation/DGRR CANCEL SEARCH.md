---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR CANCEL SEARCH 

 property | value 
--- | --- 
 label | DGRR CANCEL SEARCH
 tag | CANCEL
 routine | [DGRRLU](http://code.osehra.org/dox/Routine_DGRRLU_source.html)
 return value type | SINGLE VALUE
 description | The DGRR CANCEL SEARCH RPC will cancel a patient search in VistA.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | JOB | LITERAL | 99 | true | JOB = A unique JOB ID used to cancel a VistA search. | 