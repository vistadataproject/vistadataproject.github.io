---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL CHECK DUP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL CHECK DUP{:/}
 tag | {::nomarkdown}DUP{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Check for duplicate problem
 Input Parameters | {::nomarkdown}DFN<br/>TERM<br/>TEXT{:/}
 Lines | ```{::nomarkdown} S Y=$$DUPL^GMPLX(DFN,TERM,TEXT) Q:+Y=0<br/> I $P(^AUPNPROB(Y,1),U,2)="H" S Y=0 Q<br/> S Y=Y_U_$P(^AUPNPROB(Y,0),U,12)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}TERM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}TEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:11:27 am