---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ORCPLX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ORCPLX{:/}
 tag | {::nomarkdown}ORCPLX{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return children orders of the complex order
 Input Parameters | {::nomarkdown}ORID<br/>ORACT{:/}
 Lines | ```
 Q:'$D(^OR(100,+ORID,0))
 N PKG,LACT,OELACT,ISNOW
 S PKG=$P($G(^OR(100,+ORID,0)),U,14)
 S PKG=$$NMSP^ORCD(PKG)
 I PKG'="PS" Q
 N CHLDCNT,IDX,X3
 S (CHLDCNT,IDX)=0
 S:$L($G(^OR(100,+ORID,2,0))) CHLDCNT=$P(^(0),U,4)
 I 'CHLDCNT Q
 F  S IDX=$O(^OR(100,+ORID,2,IDX)) Q:'IDX  D
 . S (LACT,OELACT,ISNOW)=0
 . D ISNOW(.ISNOW,IDX)
 . Q:ISNOW
 . S X3=$G(^OR(100,IDX,3))
 . S LACT=$P(X3,U,7)
 . F  S OELACT=$O(^OR(100,IDX,8,OELACT),-1) Q:OELACT
 . S:OELACT>LACT LACT=OELACT
 . S ORY(IDX)=IDX_";"_LACT```




 Generated on January 13th 2017, 6:55:29 am