---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ISCPLX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ISCPLX{:/}
 tag | {::nomarkdown}ISCPLX{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | 1: is complex order 0: is not
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```
 Q:'$D(^OR(100,+ORID,0))
 N PKG
 S PKG=$P($G(^OR(100,+ORID,0)),U,14)
 S PKG=$$NMSP^ORCD(PKG)
 I PKG'="PS" Q
 N NUMCHDS,NOWID,NOWVAL
 S (NOWVAL,NOWID)=0
 S NUMCHDS=$P($G(^OR(100,+ORID,2,0)),U,4)
 I NUMCHDS>2 S ORY=1 Q
 I NUMCHDS=2 D
 . S ORY=1
 . S:$D(^OR(100,+ORID,4.5,"ID","NOW")) NOWID=$O(^("NOW",0))
 . S:NOWID NOWVAL=$G(^OR(100,+ORID,4.5,NOWID,1))
 I NOWVAL=1 S ORY=0 Q```




 Generated on January 13th 2017, 6:55:29 am