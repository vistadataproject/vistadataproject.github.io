---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ORCPLX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ORCPLX{:/}
 tag | {::nomarkdown}ORCPLX{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ORCPLX^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Return children orders of the complex order
 Input parameters | {::nomarkdown}ORID<br>ORACT{:/}
 Code | {::nomarkdown}  Q:'$D(^OR(100,+ORID,0))<br> N PKG,LACT,OELACT,ISNOW<br> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br> S PKG=$$NMSP^ORCD(PKG)<br> I PKG'="PS" Q<br> N CHLDCNT,IDX,X3<br> S (CHLDCNT,IDX)=0<br> S:$L($G(^OR(100,+ORID,2,0))) CHLDCNT=$P(^(0),U,4)<br> I 'CHLDCNT Q<br> F  S IDX=$O(^OR(100,+ORID,2,IDX)) Q:'IDX  D<br> . S (LACT,OELACT,ISNOW)=0<br> . D ISNOW(.ISNOW,IDX)<br> . Q:ISNOW<br> . S X3=$G(^OR(100,IDX,3))<br> . S LACT=$P(X3,U,7)<br> . F  S OELACT=$O(^OR(100,IDX,8,OELACT),-1) Q:OELACT<br> . S:OELACT>LACT LACT=OELACT<br> . S ORY(IDX)=IDX_";"_LACT{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}