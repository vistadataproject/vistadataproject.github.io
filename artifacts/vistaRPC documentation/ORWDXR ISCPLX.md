---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ISCPLX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ISCPLX{:/}
 tag | {::nomarkdown}ISCPLX{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISCPLX^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | 1: is complex order 0: is not
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  Q:'$D(^OR(100,+ORID,0))<br> N PKG<br> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br> S PKG=$$NMSP^ORCD(PKG)<br> I PKG'="PS" Q<br> N NUMCHDS,NOWID,NOWVAL<br> S (NOWVAL,NOWID)=0<br> S NUMCHDS=$P($G(^OR(100,+ORID,2,0)),U,4)<br> I NUMCHDS>2 S ORY=1 Q<br> I NUMCHDS=2 D<br> . S ORY=1<br> . S:$D(^OR(100,+ORID,4.5,"ID","NOW")) NOWID=$O(^("NOW",0))<br> . S:NOWID NOWVAL=$G(^OR(100,+ORID,4.5,NOWID,1))<br> I NOWVAL=1 S ORY=0 Q{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}