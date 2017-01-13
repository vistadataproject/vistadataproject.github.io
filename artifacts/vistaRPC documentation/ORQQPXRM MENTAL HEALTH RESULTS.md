---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM MENTAL HEALTH RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MENTAL HEALTH RESULTS{:/}
 tag | {::nomarkdown}MHR{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns progress note text based on the results of the test.{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}RESULT<br/>ORES{:/}
 Lines | {::nomarkdown} D MHR^PXRMRPCC(.ORY,RESULT,.ORES){:/}
 Leading comment lines | {::nomarkdown}DBIA 3080{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RESULT GROUP/ELEMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the result group for the test.{:/} | 
| {::nomarkdown}TEST RESULTS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Field to pass contents of the YS array (R1,R2,DFN,DUZ,ADATE etc).{:/} | 




 Generated on January 13th 2017, 7:15:27 am