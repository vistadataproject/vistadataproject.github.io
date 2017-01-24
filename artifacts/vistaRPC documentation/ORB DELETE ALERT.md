---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB DELETE ALERT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORB DELETE ALERT{:/}
 tag | {::nomarkdown}DEL{:/}
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This function deletes an alert.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEL^[ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 Method comment | delete an alert
 Input parameters | {::nomarkdown}XQAID, ORKILL{:/}
 Code | {::nomarkdown}  N ORN<br> S ORN=$P($P(XQAID,";"),",",3)<br> I $G(ORKILL)=1!($G(ORKILL)=0) S XQAKILL=ORKILL<br> I $G(XQAKILL)="" S XQAKILL=$$XQAKILL^ORB3F1(ORN)<br> I $G(XQAKILL)="" S XQAKILL=1<br> S ORBY="FALSE"<br> I $L($G(XQAID)) D DELETE^XQALERT S ORBY="TRUE"<br> K XQAKILL{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}