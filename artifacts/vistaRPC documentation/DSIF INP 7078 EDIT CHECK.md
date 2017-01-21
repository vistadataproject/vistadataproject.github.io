---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP 7078 EDIT CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP 7078 EDIT CHECK{:/}
 tag | {::nomarkdown}EDTCHK{:/}
 routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to see if there is at least one payment on file for a given 7078.  This is needed by the GUI so it won't allow the user to edit a 7078 if a payment exists.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number for 7078{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}