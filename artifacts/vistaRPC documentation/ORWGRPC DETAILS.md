---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC DETAILS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC DETAILS{:/}
 tag | {::nomarkdown}DETAILS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get report for type of data for a date or date range
 Input Parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2<br/>TYPE<br/>COMP{:/}
 Lines | ```{::nomarkdown} D DETAILS^ORWGAPI("ORWGRPC",DFN,DATE1,DATE2,TYPE,$G(COMP))<br/> S ITEMS=$NA(^TMP("ORWGRPC",$J))```{:/}




 Generated on January 13th 2017, 7:11:27 am