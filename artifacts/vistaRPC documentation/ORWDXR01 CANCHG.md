---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR01 CANCHG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR01 CANCHG{:/}
 tag | {::nomarkdown}CANCHG{:/}
 routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORIFN<br/>TXTOD{:/}
 Lines | ```
 S ORY=0
 Q:'$D(^OR(100,+ORIFN,0))
 I TXTOD D TXTCAN(.ORY) Q
 N OUTGRP,URELSTS,USIGSTS,RNTYPE,PDSTS
 N ODGRP,ODREL,ODSIG,ODTYPE,LSTACT
 S OUTGRP=$O(^ORD(100.98,"B","O RX",0))
 S URELSTS=$O(^ORD(100.01,"B","UNRELEASED",0))
 S PDSTS=$O(^ORD(100.01,"B","PENDING",0))
 S USIGSTS=2 ; unsigned order
 S RNTYPE=2 ; renew action
 S LSTACT=$P($G(^OR(100,+ORIFN,3)),U,7)
 S ODGRP=$P($G(^OR(100,+ORIFN,0)),U,11)
 S ODREL=$P($G(^OR(100,+ORIFN,3)),U,3)
 S ODSIG=$P($G(^OR(100,+ORIFN,8,LSTACT,0)),U,4)
 S ODTYPE=$P($G(^OR(100,+ORIFN,3)),U,11)
 I (ODGRP=OUTGRP),(ODREL=URELSTS),(ODSIG=USIGSTS),(ODTYPE=RNTYPE) S ORY=1```
 Leading comment lines | {::nomarkdown}If it's an pending or unsigned unreleased renewed order, can edit=True{:/}




 Generated on January 13th 2017, 6:55:29 am