---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB RENEW ALERT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORB RENEW ALERT{:/}
 tag | {::nomarkdown}RENEW{:/}
 routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc renews an alert.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}XQAID is the unique identifier used by Kernel Alerts to process and take actions on alerts.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RENEW^[ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 Method comment | renew/restore an alert/notification
 Input parameters | {::nomarkdown}XQAID{:/}
 Code | {::nomarkdown}  Q:$L($G(XQAID))<1<br> K XQAKILL<br> I '$D(^XTV(8992,"AXQA",XQAID,DUZ)) D RESTORE^XQALERT1 ;DBIA #4100<br> S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}