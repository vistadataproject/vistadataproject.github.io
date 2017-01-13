---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP CANCEL 7078 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP CANCEL 7078{:/}
 tag | {::nomarkdown}CAN7078{:/}
 routine | [DSIFNOT2](http://code.osehra.org/dox/Routine_DSIFNOT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will mark the 7078 cancelled and if possible remove the Non-VA PTF record and make modifications to the 1358.  Logic cloned from existing routine FBCHC78.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to file 162.4 VA FORM 10-7078 (Required){:/} | 




 Generated on January 13th 2017, 5:52:13 am