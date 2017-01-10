---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM MENTAL HEALTH RESULTS 

 property | value 
--- | --- 
 label | ORQQPXRM MENTAL HEALTH RESULTS
 tag | MHR
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | Returns progress note text based on the results of the test.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RESULT GROUP/ELEMENT | LITERAL | 16 | true | This is the pointer to the result group for the test. | 
| vs:Input_Parameter-8994_02 | TEST RESULTS | LITERAL | 16 | true | Field to pass contents of the YS array (R1,R2,DFN,DUZ,ADATE etc). | 