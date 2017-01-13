---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL PROBLEM NTRT BULLETIN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROBLEM NTRT BULLETIN{:/}
 tag | {::nomarkdown}NTRTBULL{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC generates a bulletin to the OR CAC Mail Group, indicating that an unresolved term needs to be requested using the New Term Rapid Turnaround website at http://hdrmul7.aac.domain.ext:7151/ntrt/.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Send NTRT Request bulletin to CAC mailgroup

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORTERM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the unresolved term for which an NTRT Request should be filed.{:/} | 




 Generated on January 13th 2017, 6:24:32 am