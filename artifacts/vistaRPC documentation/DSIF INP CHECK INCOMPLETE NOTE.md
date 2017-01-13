---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP CHECK INCOMPLETE NOTE 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP CHECK INCOMPLETE NOTE{:/}
 tag | {::nomarkdown}CHKINOT{:/}
 routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will check to see if there is an incomplete 7078 for this patient.  If one exists then there cannot be a new request added.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient File Pointer (File #2, Required){:/} | 




 Generated on January 13th 2017, 6:44:48 am