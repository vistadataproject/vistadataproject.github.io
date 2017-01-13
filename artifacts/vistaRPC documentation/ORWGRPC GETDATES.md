---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC GETDATES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC GETDATES{:/}
 tag | {::nomarkdown}GETDATES{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get graph date range
 Input Parameters | {::nomarkdown}REPORTID{:/}
 Lines | ```{::nomarkdown} D GETDATES^ORWGAPI("ORWGRPC",$G(REPORTID))<br/> S DATA=$NA(^TMP("ORWGRPC",$J))```{:/}




 Generated on January 13th 2017, 7:11:27 am