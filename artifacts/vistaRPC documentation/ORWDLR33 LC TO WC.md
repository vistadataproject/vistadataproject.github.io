---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR33 LC TO WC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR33 LC TO WC{:/}
 tag | {::nomarkdown}LCTOWC{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LCTOWC^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | return text instructing user when LC changed to WC on accept/release
 Input parameters | {::nomarkdown}ORLOC{:/}
 Code | {::nomarkdown}  N ORDIV,ORSVC<br> S ORDIV=DUZ(2)<br> S ORSVC=+$G(^VA(200,DUZ,5))<br> I ORSVC S ORTXT=$$GET^XPAR(+$G(ORLOC)_";SC("_"^"_+$G(ORSVC)_";DIC(49,^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","ORWLR LC CHANGED TO WC",1,"I")<br> E  S ORTXT=$$GET^XPAR(+$G(ORLOC)_";SC("_"^SVC^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","ORWLR LC CHANGED TO WC",1,"I")<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}