---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ1 QRYSITR 

 property | value 
--- | --- 
 label | ORRHCQ1 QRYSITR
 tag | QRYSITR
 routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
 return value type | SINGLE VALUE
 description | Similar to the main query iterator routine, except does not processthe patients marked as sensitive, and saves them off withoutscreening them.  Subsequent routines are called to manage the listand process those selected for reporting.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ITERATOR | LITERAL | 80 | true | Iterator that was returned from the last call to this routine. | 




Generated on January 11th 2017, 6:34:23 am