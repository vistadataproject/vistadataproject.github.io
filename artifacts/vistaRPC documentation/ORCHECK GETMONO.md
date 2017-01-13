---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCHECK GETMONO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK GETMONO{:/}
 tag | {::nomarkdown}GETMONO{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return a monograph
 Input Parameters | {::nomarkdown}ORMONO{:/}
 Lines | ```{::nomarkdown} Q:'$D(^TMP($J,"ORMONOGRAPH",ORMONO))<br/> K ^TMP($J,"ORMONORPC")<br/> M ^TMP($J,"ORMONORPC")=^TMP($J,"ORMONOGRAPH",ORMONO,"DATA")<br/> K ^TMP($J,"ORMONORPC",0)<br/> S ORY=$NA(^TMP($J,"ORMONORPC")),@ORY=""```{:/}




 Generated on January 13th 2017, 7:11:27 am