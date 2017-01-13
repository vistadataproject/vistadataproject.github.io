---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC ALLITEMS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ALLITEMS{:/}
 tag | {::nomarkdown}ALLITEMS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get all items of data on patient (procedures, tests, codes,..)
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```{::nomarkdown} D ALLITEMS^ORWGAPI("ORWGRPC",DFN)<br/> S ITEMS=$NA(^TMP("ORWGRPC",$J))```{:/}




 Generated on January 13th 2017, 7:11:27 am