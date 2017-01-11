---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ1 GETSLN 

 property | value 
--- | --- 
 label | ORRHCQ1 GETSLN
 tag | GETSLN
 routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
 return value type | ARRAY
 description | When a query executes, the sensitive patients are saved off before theyare evaluated, along with the sensitive information gathered fromthe routine PTSEC^DGSEC4.  This RPC returns the sensitive message textfor the given patient when this query attempted to query their record.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 80 | true | DFN of the sensitive patient. | 