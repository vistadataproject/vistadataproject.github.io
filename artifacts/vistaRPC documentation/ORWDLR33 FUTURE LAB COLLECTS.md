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

 property | value 
 --- | --- 
 Method | LCFUTR^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Get # of days for future Lab Collects
 First comment | {::nomarkdown}For Event Delay Order<br/>--ORLOC Event default location<br/>--ORDIV Event default division{:/}
 Input parameters | {::nomarkdown}ORLOC<br>ORDIV{:/}
 Code | {::nomarkdown}  S ORDY=0<br> Q:'$D(^XTV(8989.51,"B","LR LAB COLLECT FUTURE"))<br> I $G(ORDIV) S ORDY=+$$GET^XPAR(+$G(ORLOC)_";SC("_"^"_+$G(ORDIV)_";DIC(4,^SYS^PKG","LR LAB COLLECT FUTURE",1,"I")<br> E  S ORDY=+$$GET^XPAR(+$G(ORLOC)_";SC("_"^DIV^SYS^PKG","LR LAB COLLECT FUTURE",1,"I"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}