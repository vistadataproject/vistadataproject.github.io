---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC TAX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC TAX{:/}
 tag | {::nomarkdown}TAX{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get reminder taxonomies
 Input Parameters | {::nomarkdown}ALL<br/>REMTAX{:/}
 Lines | ```
 D TAX^ORWGAPI("ORWGRPC",+$G(ALL),.REMTAX)
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 13th 2017, 6:55:29 am