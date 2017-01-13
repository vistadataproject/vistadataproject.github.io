---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR IS NON-OR PROCEDURE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR IS NON-OR PROCEDURE{:/}
 tag | {::nomarkdown}ISNONOR{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is the procedure a non-OR procedure?
 Input Parameters | {::nomarkdown}ORCASE{:/}
 Lines | ```{::nomarkdown} I '$$PATCH^XPDUTL("SR*3.0*100") S ORY=0 Q<br/> S ORY=$$NON^SROESTV(+ORCASE)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CASE IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:11:27 am