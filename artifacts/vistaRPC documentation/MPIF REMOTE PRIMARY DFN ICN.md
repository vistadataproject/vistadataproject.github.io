---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF REMOTE PRIMARY DFN ICN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF REMOTE PRIMARY DFN ICN{:/}
 tag | {::nomarkdown}PRIMARY{:/}
 routine | [MPIFRPC3](http://code.osehra.org/dox/Routine_MPIFRPC3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call will return the primary DFN and ICN fora particular station and DFN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SITE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This is the site's station number ... a legacy station number can be passed.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a patient's internal IEN in the PATIENT file (#2).A legacy IEN can be passed along with a legacy station number.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}