---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE FORCE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE FORCE{:/}
 tag | {::nomarkdown}FORCE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the value of the ORWPCE FORCE GUI PCE ENTRY parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The user to check the parameter for.{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location to use in checking the parameter.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FORCE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Retrieve FORCE GUI PCE Entry for a given User/Location
 Input parameters | {::nomarkdown}USER, LOC{:/}
 Code | {::nomarkdown}  N SRV,ORTMP,ORERR<br> S USER=$G(USER,DUZ)<br> S SRV=$P($G(^VA(200,USER,5)),U)<br> D GETLST^XPAR(.ORTMP,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORWPCE FORCE PCE ENTRY","Q",.ORERR)<br> S ORY=+$P($G(ORTMP(1)),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}