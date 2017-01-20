---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP VALID FOR 7078 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP VALID FOR 7078{:/}
 tag | {::nomarkdown}CHK7078{:/}
 routine | [DSIFNOT4](http://code.osehra.org/dox/Routine_DSIFNOT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This PRC preforms some basic checks on an entry in file 162.2 to see if it is complete enough to create a 7078.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REQ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Number of Request (Required, Pointer to file 162.2){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}