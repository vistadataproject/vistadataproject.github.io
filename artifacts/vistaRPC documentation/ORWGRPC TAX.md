---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC TAX 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC TAX{:/}
 tag | {::nomarkdown}TAX{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | TAX^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get reminder taxonomies
 Input parameters | {::nomarkdown}ALL<br/>REMTAX{:/}
 Code | ```  D TAX^ORWGAPI("ORWGRPC",+$G(ALL),.REMTAX)
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am