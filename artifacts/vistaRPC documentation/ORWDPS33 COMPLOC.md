---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS33 COMPLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS33 COMPLOC{:/}
 tag | {::nomarkdown}COMPLOC{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will return a 0 if the patient location is the same location as the original order. It will return a 1 if the location is different.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the original order from file 100{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the encounter location the order is being written for.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COMPLOC^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Input parameters | {::nomarkdown}ORID, LOC{:/}
 Code | {::nomarkdown}  S ORY=0<br> I LOC'=+$P($G(^OR(100,+ORID,0)),U,10) S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}