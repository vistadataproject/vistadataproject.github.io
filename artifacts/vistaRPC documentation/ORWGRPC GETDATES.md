---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC GETDATES 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC GETDATES{:/}
 tag | {::nomarkdown}GETDATES{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDATES^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get graph date range
 Input parameters | {::nomarkdown}REPORTID{:/}
 Code | ```  D GETDATES^ORWGAPI("ORWGRPC",$G(REPORTID))
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am