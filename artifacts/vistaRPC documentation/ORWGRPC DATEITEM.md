---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC DATEITEM 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC DATEITEM{:/}
 tag | {::nomarkdown}DATEITEM{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DATEITEM^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get patient items in date range for a type
 Input parameters | {::nomarkdown}OLDEST<br/>NEWEST<br/>FNUM<br/>DFN{:/}
 Code | ```  D DATEITEM^ORWGAPI("ORWGRPC",OLDEST,NEWEST,FNUM,DFN)
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am