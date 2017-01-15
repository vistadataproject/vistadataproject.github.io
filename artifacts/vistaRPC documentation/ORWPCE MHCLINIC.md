---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE MHCLINIC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE MHCLINIC{:/}
 tag | {::nomarkdown}MHCLINIC{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE of the indicated clinic is a mental health clinic.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Clinic IEN.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MHCLINIC^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | See if this is a mental health clinic
 Input parameters | {::nomarkdown}ORIEN{:/}
 Code | {::nomarkdown}  I $T(MHCLIN^SDUTL2)="" S ORY=1<br> E  S ORY=$$MHCLIN^SDUTL2(ORIEN){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}