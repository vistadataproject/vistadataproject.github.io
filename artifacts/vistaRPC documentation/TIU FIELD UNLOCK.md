---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD UNLOCK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD UNLOCK{:/}
 tag | {::nomarkdown}UNLOCK{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Unlock Template Field{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of Template Field{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | UNLOCK^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | Unlock Template Field
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  L -^TIU(8927.1,TIUDA,0)<br> S TIUY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}