---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF REMOTE PRIMARY DFN ICN 

 property | value 
--- | --- 
 label | {::nomarkdown}MPIF REMOTE PRIMARY DFN ICN{:/}
 tag | {::nomarkdown}PRIMARY{:/}
 routine | [MPIFRPC3](http://code.osehra.org/dox/Routine_MPIFRPC3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call will return the primary DFN and ICN fora particular station and DFN.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SITE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This is the site's station number ... a legacy station number can be passed.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a patient's internal IEN in the PATIENT file (#2).A legacy IEN can be passed along with a legacy station number.{:/} | 




 Generated on January 13th 2017, 7:11:27 am