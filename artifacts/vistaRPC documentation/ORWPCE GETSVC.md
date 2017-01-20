---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GETSVC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GETSVC{:/}
 tag | {::nomarkdown}GETSVC{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Calculates the correct service category.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SVC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Initial Service Connection Category.{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Pointer to the hospital location.{:/} | 
| {::nomarkdown}INP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Patient Status0 = Outpatient1 = Inpatient{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETSVC^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Returns the correct Service Connected Category
 Input parameters | {::nomarkdown}SVC, LOC, INP{:/}
 Code | {::nomarkdown}  N DSS,ORWSVC<br> S DSS=$P($G(^SC(+LOC,0)),U,7)<br> Q:'+DSS<br> M ORWSVC=SVC<br> S NEWSVC=$$SVC^PXKCO(.ORWSVC,DSS,INP,LOC) ; DBIA #3225{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}