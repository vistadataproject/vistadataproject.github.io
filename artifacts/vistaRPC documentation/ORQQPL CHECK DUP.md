---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL CHECK DUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL CHECK DUP{:/}
 tag | {::nomarkdown}DUP{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}TERM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}TEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DUP^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | Check for duplicate problem
 Input parameters | {::nomarkdown}DFN<br>TERM<br>TEXT{:/}
 Code | {::nomarkdown}  S Y=$$DUPL^GMPLX(DFN,TERM,TEXT) Q:+Y=0<br> I $P(^AUPNPROB(Y,1),U,2)="H" S Y=0 Q<br> S Y=Y_U_$P(^AUPNPROB(Y,0),U,12){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}