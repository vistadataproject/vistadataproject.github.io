---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC DETAIL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAIL^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get all reports for types of data from items and date range
 Input parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2<br/>VAL<br/>COMP{:/}
 Code | ```  D DETAIL^ORWGAPI("ORWGRPC",DFN,DATE1,DATE2,.VAL,$G(COMP))
 S ITEMS=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am