---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE UNLOCK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE UNLOCK{:/}
 tag | {::nomarkdown}UNLOCK{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Unlocks a template.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IEN of Template to unlock.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | UNLOCK^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Unlock Template
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  L -^TIU(8927,TIUDA,0):1<br> S TIUY=1{:/}


### CPRS

[Templates/rTemplates.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}