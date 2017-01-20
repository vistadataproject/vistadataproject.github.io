---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR01 CANCHG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR01 CANCHG{:/}
 tag | {::nomarkdown}CANCHG{:/}
 routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CANCHG^[ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 Input parameters | {::nomarkdown}ORIFN, TXTOD{:/}
 First comment | {::nomarkdown}<pre>If it's an pending or unsigned unreleased renewed order, can edit=True</pre>{:/}
 Code | {::nomarkdown}  S ORY=0<br> Q:'$D(^OR(100,+ORIFN,0))<br> I TXTOD D TXTCAN(.ORY) Q<br> N OUTGRP,URELSTS,USIGSTS,RNTYPE,PDSTS<br> N ODGRP,ODREL,ODSIG,ODTYPE,LSTACT<br> S OUTGRP=$O(^ORD(100.98,"B","O RX",0))<br> S URELSTS=$O(^ORD(100.01,"B","UNRELEASED",0))<br> S PDSTS=$O(^ORD(100.01,"B","PENDING",0))<br> S USIGSTS=2 ; unsigned order<br> S RNTYPE=2 ; renew action<br> S LSTACT=$P($G(^OR(100,+ORIFN,3)),U,7)<br> S ODGRP=$P($G(^OR(100,+ORIFN,0)),U,11)<br> S ODREL=$P($G(^OR(100,+ORIFN,3)),U,3)<br> S ODSIG=$P($G(^OR(100,+ORIFN,8,LSTACT,0)),U,4)<br> S ODTYPE=$P($G(^OR(100,+ORIFN,3)),U,11)<br> I (ODGRP=OUTGRP),(ODREL=URELSTS),(ODSIG=USIGSTS),(ODTYPE=RNTYPE) S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}