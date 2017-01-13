---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get all reports for types of data from items and date range
 Input Parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2<br/>VAL<br/>COMP{:/}
 Lines | ```
 D DETAIL^ORWGAPI("ORWGRPC",DFN,DATE1,DATE2,.VAL,$G(COMP))
 S ITEMS=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 13th 2017, 6:55:29 am