---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN UNRESOLVED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN UNRESOLVED{:/}
 tag | {::nomarkdown}UNRSLVD{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if current user has unresolved consults for current patient, 0 if not.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | UNRSLVD^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Returns true if unresolved consults for user/pt
 Input parameters | {::nomarkdown}ORDFN{:/}
 First comment | {::nomarkdown}<pre>S ORY=0<br/>Q:+$$GET^XPAR("ALL","ORWOR SHOW CONSULTS",1,"I")=0<br/>S ORY=+$$ANYPENDG^GMRCTIU(ORDFN,DUZ)   ;DBIA #3473<br/>Q</pre>{:/}
 Code | {::nomarkdown}  S $P(ORY,U,1)=+$$ANYPENDG^GMRCTIU(ORDFN,DUZ)   ;DBIA #3473<br> S $P(ORY,U,2)=+$$GET^XPAR("ALL","ORWOR SHOW CONSULTS",1,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}