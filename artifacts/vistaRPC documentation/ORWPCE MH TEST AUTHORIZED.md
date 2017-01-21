---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE MH TEST AUTHORIZED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE MH TEST AUTHORIZED{:/}
 tag | {::nomarkdown}MHATHRZD{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Indicates if a given mental health test can be given by the given user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}MENTAL HEALTH TEST NAME{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The user giving the test.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MHATHRZD^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Indicates that user can score test
 Input parameters | {::nomarkdown}TEST, USER{:/}
 Code | {::nomarkdown}  N ORYS,ORANS<br> I $T(PRIVL^YTAPI5)="" S ORY=1 Q<br> S ORY=0<br> S ORYS("CODE")=TEST<br> S ORYS("STAFF")=USER<br> D PRIVL^YTAPI5(.ORANS,.ORYS)<br> I $G(ORANS(1))="[DATA]" S ORY=+$P($G(ORANS(2)),U,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}