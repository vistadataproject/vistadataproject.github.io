---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC SETVIEWS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC SETVIEWS{:/}
 tag | {::nomarkdown}SETVIEWS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - set a graph view
 Input Parameters | {::nomarkdown}NAME<br/>PUBLIC<br/>VAL{:/}
 Lines | ```{::nomarkdown} D SETVIEWS^ORWGAPI("ORWGRPC",NAME,+$G(PUBLIC),.VAL)<br/> S ERR=$NA(^TMP("ORWGRPC",$J))```{:/}




 Generated on January 13th 2017, 7:11:27 am