---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE ISCLINIC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ISCLINIC{:/}
 tag | {::nomarkdown}ISCLINIC{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if location is a Clinic.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Location{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISCLINIC^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns TRUE if location is a clinic
 Input parameters | {::nomarkdown}ORLOC{:/}
 Code | {::nomarkdown}  N ORTYP<br> S ORY=0<br> S ORTYP=$$GET1^DIQ(44,+ORLOC,2,"I")<br> I (ORTYP="C")!(ORTYP="M") S ORY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}