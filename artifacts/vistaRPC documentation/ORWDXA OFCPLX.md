---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA OFCPLX 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA OFCPLX{:/}
 tag | {::nomarkdown}OFCPLX{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | OFCPLX^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | is ORID child of PRTORDER
 Input parameters | {::nomarkdown}ORID<br/>PRTORDER{:/}
 Code | ```  N NUMCHDS,NOWID,NOWVAL,X3,ORDA,ISNOW
 Q:'$D(^OR(100,+ORID,0))
 S ISNOW=0
 D ISNOW^ORWDXR(.ISNOW,+ORID)
 Q:ISNOW
 N PKG
 S PKG=$P($G(^OR(100,+ORID,0)),U,14)
 S PKG=$$NMSP^ORCD(PKG)
 I PKG'="PS" Q
 I $L($G(^OR(100,+ORID,3))),('$L($P(^(3),U,9))) Q
 S (NUMCHDS,NOWID,NOWVAL,X3,ORDA)=0
 S PRTORDER=+$P(^(3),U,9)
 S X3=$G(^OR(100,PRTORDER,3)),ORDA=$P(X3,U,7)
 S PRTORDER=PRTORDER_";"_ORDA
 S NUMCHDS=$P($G(^OR(100,+PRTORDER,2,0)),U,4)
 I NUMCHDS>2 S ORY="COMPLEX-PSI"_U_PRTORDER
 S:$D(^OR(100,+PRTORDER,4.5,"ID","NOW")) NOWID=$O(^("NOW",0))
 S:NOWID NOWVAL=$G(^OR(100,+PRTORDER,4.5,NOWID,1))
 I NOWVAL=1 Q
 E  S ORY="COMPLEX-PSI"_U_PRTORDER```




 Generated on January 14th 2017, 7:26:35 am