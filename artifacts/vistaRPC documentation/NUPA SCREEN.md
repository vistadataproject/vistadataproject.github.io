---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA SCREEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NUPA SCREEN{:/}
 tag | {::nomarkdown}SCREEN{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows M code to be executed from inside a Delphi program.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Code to execute.  If you set variable NUPa to a result, it will be pulled back into the assessment GUI. Code can be: S NUPA=$$D(^DPT(DFN)) D TAG^ROUTINE{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}