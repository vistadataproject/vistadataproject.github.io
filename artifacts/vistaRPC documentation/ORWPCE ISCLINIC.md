---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE ISCLINIC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ISCLINIC{:/}
 tag | {::nomarkdown}ISCLINIC{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if location is a Clinic.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns TRUE if location is a clinic
 Input Parameters | {::nomarkdown}ORLOC{:/}
 Lines | {::nomarkdown} N ORTYP<br/> S ORY=0<br/> S ORTYP=$$GET1^DIQ(44,+ORLOC,2,"I")<br/> I (ORTYP="C")!(ORTYP="M") S ORY=1{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Location{:/} | 




 Generated on January 13th 2017, 7:15:28 am