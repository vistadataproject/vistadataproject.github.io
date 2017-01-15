---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC SETVIEWS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC SETVIEWS{:/}
 tag | {::nomarkdown}SETVIEWS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SETVIEWS^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - set a graph view
 Input parameters | {::nomarkdown}NAME<br>PUBLIC<br>VAL{:/}
 Code | {::nomarkdown}  D SETVIEWS^ORWGAPI("ORWGRPC",NAME,+$G(PUBLIC),.VAL)<br> S ERR=$NA(^TMP("ORWGRPC",$J)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}