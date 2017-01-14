---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC SETPREF 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC SETPREF{:/}
 tag | {::nomarkdown}SETPREF{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SETPREF^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - set a graph setting
 Input parameters | {::nomarkdown}SETTING<br/>PUBLIC{:/}
 Code | ```  D SETPREF^ORWGAPI("ORWGRPC",SETTING,+$G(PUBLIC))<br/> S ERR=$NA(^TMP("ORWGRPC",$J))```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}