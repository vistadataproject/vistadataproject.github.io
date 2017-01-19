---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP INVOICE CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP INVOICE CHECK{:/}
 tag | {::nomarkdown}INVCHK{:/}
 routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Pass in the IEN of the 7078 or the 583 file, and the file (7078 or 583) Returns the Invoice number(s) linked to the 7078 or 583 if one exists.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of file 7078 or 583.{:/} | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Must be \583\ (Unauthorized)     or \7078\ (CH){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}