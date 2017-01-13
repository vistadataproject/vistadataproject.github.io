---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PXRM MENTAL HEALTH RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}PXRM MENTAL HEALTH RESULTS{:/}
 tag | {::nomarkdown}MHR{:/}
 routine | [PXRMRPCC](http://code.osehra.org/dox/Routine_PXRMRPCC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns progress note text based on the results of the test.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEST RESULTS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Dummy field to represent results. Probably needs to pass contents of theYS array (R1,R2,DFN,DUZ,ADATE etc).{:/} | 
| {::nomarkdown}RESULT GROUP/ELEMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the result group for the test.{:/} | 




 Generated on January 13th 2017, 6:24:32 am