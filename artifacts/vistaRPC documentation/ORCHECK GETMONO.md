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
 Lines | ```
 Q:'$D(^TMP($J,"ORMONOGRAPH",ORMONO))
 K ^TMP($J,"ORMONORPC")
 M ^TMP($J,"ORMONORPC")=^TMP($J,"ORMONOGRAPH",ORMONO,"DATA")
 K ^TMP($J,"ORMONORPC",0)
 S ORY=$NA(^TMP($J,"ORMONORPC")),@ORY=""```




 Generated on January 13th 2017, 6:55:29 am