---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC GETDATES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC GETDATES{:/}
 tag | {::nomarkdown}GETDATES{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDATES^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get graph date range
 Input parameters | {::nomarkdown}REPORTID{:/}
 Code | {::nomarkdown}  D GETDATES^ORWGAPI("ORWGRPC",$G(REPORTID))<br> S DATA=$NA(^TMP("ORWGRPC",$J)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}