---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB FOLLOW-UP TYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORB FOLLOW-UP TYPE{:/}
 tag | {::nomarkdown}TYPE{:/}
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the follow-up action type for a notification as identified via thealert xqaid.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  For OE/RR alerts the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TYPE^[ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 Method comment | return notif follow-up action type
 Input parameters | {::nomarkdown}ORXQAID{:/}
 Code | {::nomarkdown}  N NIEN<br> S NIEN=$P($P(ORXQAID,";"),",",3)<br> S ORBY=$G(^ORD(100.9,NIEN,3))<br> I ORBY="" S ORBY="INFO^"<br> E  S ORBY=$P(ORBY,U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}