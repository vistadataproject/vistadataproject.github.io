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
 Lines | {::nomarkdown} Q:'$D(^OR(100,+ORID,0))<br/> N PKG<br/> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S PKG=$$NMSP^ORCD(PKG)<br/> I PKG'="PS" Q<br/> N NUMCHDS,NOWID,NOWVAL<br/> S (NOWVAL,NOWID)=0<br/> S NUMCHDS=$P($G(^OR(100,+ORID,2,0)),U,4)<br/> I NUMCHDS>2 S ORY=1 Q<br/> I NUMCHDS=2 D<br/> . S ORY=1<br/> . S:$D(^OR(100,+ORID,4.5,"ID","NOW")) NOWID=$O(^("NOW",0))<br/> . S:NOWID NOWVAL=$G(^OR(100,+ORID,4.5,NOWID,1))<br/> I NOWVAL=1 S ORY=0 Q{:/}




 Generated on January 13th 2017, 7:15:28 am