---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC GETVIEWS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC GETVIEWS{:/}
 tag | {::nomarkdown}GETVIEWS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get graph views
 Input Parameters | {::nomarkdown}ALL<br/>PUBLIC<br/>EXT<br/>USER{:/}
 Lines | ```
 D GETVIEWS^ORWGAPI("ORWGRPC",ALL,+$G(PUBLIC),+$G(EXT),+$G(USER))
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 13th 2017, 6:55:29 am