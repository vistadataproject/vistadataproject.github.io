---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC DATEITEM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC DATEITEM{:/}
 tag | {::nomarkdown}DATEITEM{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get patient items in date range for a type
 Input Parameters | {::nomarkdown}OLDEST<br/>NEWEST<br/>FNUM<br/>DFN{:/}
 Lines | {::nomarkdown} D DATEITEM^ORWGAPI("ORWGRPC",OLDEST,NEWEST,FNUM,DFN)<br/> S DATA=$NA(^TMP("ORWGRPC",$J)){:/}




 Generated on January 13th 2017, 7:15:28 am