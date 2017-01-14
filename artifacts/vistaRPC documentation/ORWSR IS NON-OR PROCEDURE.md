---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWSR IS NON-OR PROCEDURE 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR IS NON-OR PROCEDURE{:/}
 tag | {::nomarkdown}ISNONOR{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CASE IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISNONOR^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | Is the procedure a non-OR procedure?
 Input parameters | {::nomarkdown}ORCASE{:/}
 Code | ```  I '$$PATCH^XPDUTL("SR*3.0*100") S ORY=0 Q<br/> S ORY=$$NON^SROESTV(+ORCASE)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}