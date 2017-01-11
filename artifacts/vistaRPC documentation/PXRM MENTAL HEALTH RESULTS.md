---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PXRM MENTAL HEALTH RESULTS 

 property | value 
--- | --- 
 label | PXRM MENTAL HEALTH RESULTS
 tag | MHR
 routine | [PXRMRPCC](http://code.osehra.org/dox/Routine_PXRMRPCC_source.html)
 return value type | ARRAY
 description | Returns progress note text based on the results of the test.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TEST RESULTS | LITERAL | 16 | true | Dummy field to represent results. Probably needs to pass contents of theYS array (R1,R2,DFN,DUZ,ADATE etc). | 
| RESULT GROUP/ELEMENT | LITERAL | 16 | true | This is the pointer to the result group for the test. | 




 ###### Generated on January 11th 2017, 6:39:43 am