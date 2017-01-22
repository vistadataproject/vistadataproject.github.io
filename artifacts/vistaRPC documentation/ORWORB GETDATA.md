---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB GETDATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB GETDATA{:/}
 tag | {::nomarkdown}GETDATA{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given an XQAID, return XQADATA for an alert.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDATA^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | return XQADATA for an alert
 Input parameters | {::nomarkdown}XQAID{:/}
 Code | {::nomarkdown}  N SHOWADD<br> S ORY=""<br> Q:$G(XQAID)=""!('$D(^XTV(8992,"AXQA",XQAID)))<br> D GETACT^XQALERT(XQAID)<br> S ORY=XQADATA<br> I ($E(XQAID,1,3)="TIU"),(+ORY>0) D<br> . S SHOWADD=1<br> . S ORY=ORY_$$RESOLVE^TIUSRVLO(+ORY)<br> K XQAID,XQADATA,XQAOPT,XQAROU{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}