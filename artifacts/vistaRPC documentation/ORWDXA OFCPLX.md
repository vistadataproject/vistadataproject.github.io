---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA OFCPLX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA OFCPLX{:/}
 tag | {::nomarkdown}OFCPLX{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | OFCPLX^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | is ORID child of PRTORDER
 Input parameters | {::nomarkdown}ORID, PRTORDER{:/}
 Code | {::nomarkdown}  N NUMCHDS,NOWID,NOWVAL,X3,ORDA,ISNOW<br> Q:'$D(^OR(100,+ORID,0))<br> S ISNOW=0<br> D ISNOW^ORWDXR(.ISNOW,+ORID)<br> Q:ISNOW<br> N PKG<br> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br> S PKG=$$NMSP^ORCD(PKG)<br> I PKG'="PS" Q<br> I $L($G(^OR(100,+ORID,3))),('$L($P(^(3),U,9))) Q<br> S (NUMCHDS,NOWID,NOWVAL,X3,ORDA)=0<br> S PRTORDER=+$P(^(3),U,9)<br> S X3=$G(^OR(100,PRTORDER,3)),ORDA=$P(X3,U,7)<br> S PRTORDER=PRTORDER_";"_ORDA<br> S NUMCHDS=$P($G(^OR(100,+PRTORDER,2,0)),U,4)<br> I NUMCHDS>2 S ORY="COMPLEX-PSI"_U_PRTORDER<br> S:$D(^OR(100,+PRTORDER,4.5,"ID","NOW")) NOWID=$O(^("NOW",0))<br> S:NOWID NOWVAL=$G(^OR(100,+PRTORDER,4.5,NOWID,1))<br> I NOWVAL=1 Q<br> E  S ORY="COMPLEX-PSI"_U_PRTORDER{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}