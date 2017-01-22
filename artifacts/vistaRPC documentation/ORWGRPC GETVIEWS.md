---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC GETVIEWS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC GETVIEWS{:/}
 tag | {::nomarkdown}GETVIEWS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETVIEWS^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get graph views
 Input parameters | {::nomarkdown}ALL, PUBLIC, EXT, USER{:/}
 Code | {::nomarkdown}  D GETVIEWS^ORWGAPI("ORWGRPC",ALL,+$G(PUBLIC),+$G(EXT),+$G(USER))<br> S DATA=$NA(^TMP("ORWGRPC",$J)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}