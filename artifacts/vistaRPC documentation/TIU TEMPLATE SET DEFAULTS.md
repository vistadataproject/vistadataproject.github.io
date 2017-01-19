---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE SET DEFAULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE SET DEFAULTS{:/}
 tag | {::nomarkdown}SETDFLT{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves Template Default Settings{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SETTINGS{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SETDFLT^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Saves Default Templates for the user
 Input parameters | {::nomarkdown}SETTINGS{:/}
 Code | {::nomarkdown}  N TIUERR<br> D EN^XPAR(DUZ_";VA(200,","TIU DEFAULT TEMPLATES",1,SETTINGS,.TIUERR) ;2263<br> S TIUY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}