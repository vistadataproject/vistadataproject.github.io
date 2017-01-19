---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC ALLVIEWS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ALLVIEWS{:/}
 tag | {::nomarkdown}ALLVIEWS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ALLVIEWS^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get all graph views
 Input parameters | {::nomarkdown}VIEW<br>USER{:/}
 Code | {::nomarkdown}  D ALLVIEWS^ORWGAPI("ORWGRPC",+$G(VIEW),+$G(USER))<br> S DATA=$NA(^TMP("ORWGRPC",$J)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}