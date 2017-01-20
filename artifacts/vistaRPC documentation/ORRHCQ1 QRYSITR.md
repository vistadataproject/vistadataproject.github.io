---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRHCQ1 QRYSITR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRHCQ1 QRYSITR{:/}
 tag | {::nomarkdown}QRYSITR{:/}
 routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Similar to the main query iterator routine, except does not processthe patients marked as sensitive, and saves them off withoutscreening them.  Subsequent routines are called to manage the listand process those selected for reporting.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ITERATOR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Iterator that was returned from the last call to this routine.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}