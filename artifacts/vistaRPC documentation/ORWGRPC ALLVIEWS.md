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
 Lines | ```
 D ALLVIEWS^ORWGAPI("ORWGRPC",+$G(VIEW),+$G(USER))
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 13th 2017, 6:55:29 am