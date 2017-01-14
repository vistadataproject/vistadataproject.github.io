---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORCHECK GETMONO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK GETMONO{:/}
 tag | {::nomarkdown}GETMONO{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETMONO^[ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 Method comment | return a monograph
 Input parameters | {::nomarkdown}ORMONO{:/}
 Code | ```  Q:'$D(^TMP($J,"ORMONOGRAPH",ORMONO))
 K ^TMP($J,"ORMONORPC")
 M ^TMP($J,"ORMONORPC")=^TMP($J,"ORMONOGRAPH",ORMONO,"DATA")
 K ^TMP($J,"ORMONORPC",0)
 S ORY=$NA(^TMP($J,"ORMONORPC")),@ORY=""```




 Generated on January 14th 2017, 7:26:36 am