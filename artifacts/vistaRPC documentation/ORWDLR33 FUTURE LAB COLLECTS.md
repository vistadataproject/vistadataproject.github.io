---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR33 FUTURE LAB COLLECTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR33 FUTURE LAB COLLECTS{:/}
 tag | {::nomarkdown}LCFUTR{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the number of days in the future to allow Lab Collects.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LCFUTR^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Get # of days for future Lab Collects
 Input parameters | {::nomarkdown}ORLOC, ORDIV{:/}
 First comment | {::nomarkdown}<pre> For Event Delay Order<br/>  --ORLOC Event default location<br/>  --ORDIV Event default division</pre>{:/}
 Code | {::nomarkdown}  S ORDY=0<br> Q:'$D(^XTV(8989.51,"B","LR LAB COLLECT FUTURE"))<br> I $G(ORDIV) S ORDY=+$$GET^XPAR(+$G(ORLOC)_";SC("_"^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","LR LAB COLLECT FUTURE",1,"I")<br> E  S ORDY=+$$GET^XPAR(+$G(ORLOC)_";SC("_"^DIV^SYS^PKG","LR LAB COLLECT FUTURE",1,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}