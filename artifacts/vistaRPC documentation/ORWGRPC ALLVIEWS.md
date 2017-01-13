---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC ALLVIEWS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ALLVIEWS{:/}
 tag | {::nomarkdown}ALLVIEWS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get all graph views
 Input Parameters | {::nomarkdown}VIEW<br/>USER{:/}
 Lines | ```{::nomarkdown} D ALLVIEWS^ORWGAPI("ORWGRPC",+$G(VIEW),+$G(USER))<br/> S DATA=$NA(^TMP("ORWGRPC",$J))```{:/}




 Generated on January 13th 2017, 7:11:27 am