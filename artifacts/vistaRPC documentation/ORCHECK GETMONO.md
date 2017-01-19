---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCHECK GETMONO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK GETMONO{:/}
 tag | {::nomarkdown}GETMONO{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETMONO^[ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 Method comment | return a monograph
 Input parameters | {::nomarkdown}ORMONO{:/}
 Code | {::nomarkdown}  Q:'$D(^TMP($J,"ORMONOGRAPH",ORMONO))<br> K ^TMP($J,"ORMONORPC")<br> M ^TMP($J,"ORMONORPC")=^TMP($J,"ORMONOGRAPH",ORMONO,"DATA")<br> K ^TMP($J,"ORMONORPC",0)<br> S ORY=$NA(^TMP($J,"ORMONORPC")),@ORY=""{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}