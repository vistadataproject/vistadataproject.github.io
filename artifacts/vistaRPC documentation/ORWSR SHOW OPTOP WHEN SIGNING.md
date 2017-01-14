---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR SHOW OPTOP WHEN SIGNING 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR SHOW OPTOP WHEN SIGNING{:/}
 tag | {::nomarkdown}SHOWOPTP{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CASE IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SHOWOPTP^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | Should OpTop be displayed on signature?
 Input parameters | {::nomarkdown}ORCASE{:/}
 Code | {::nomarkdown}  I '$$PATCH^XPDUTL("SR*3.0*100") S ORY=0 Q<br> S ORY=$$OPTOP^SROESTV(+ORCASE){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}