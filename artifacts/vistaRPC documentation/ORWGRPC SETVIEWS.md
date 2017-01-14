---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC SETVIEWS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC SETVIEWS{:/}
 tag | {::nomarkdown}SETVIEWS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SETVIEWS^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - set a graph view
 Input parameters | {::nomarkdown}NAME<br/>PUBLIC<br/>VAL{:/}
 Code | ```  D SETVIEWS^ORWGAPI("ORWGRPC",NAME,+$G(PUBLIC),.VAL)
 S ERR=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am