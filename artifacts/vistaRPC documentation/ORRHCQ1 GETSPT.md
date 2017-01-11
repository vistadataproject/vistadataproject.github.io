---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ1 GETSPT 

 property | value 
--- | --- 
 label | ORRHCQ1 GETSPT
 tag | GETSPT
 routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
 return value type | ARRAY
 description | Gets sensitive patients from a query tool cohort, where the patientshave not yet been screened.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Start | LITERAL | 80 | true | Starting position, specified by Name!DFN.  For example:Winchester, Charles Emmerson!78390 | 
| Length | LITERAL | 80 | true | Length of the return array from this routine. | 




Generated on January 11th 2017, 6:34:23 am