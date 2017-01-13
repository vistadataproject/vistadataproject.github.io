---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC ITEMS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ITEMS{:/}
 tag | {::nomarkdown}ITEMS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get items of a type of data on patient (lab tests)
 Input Parameters | {::nomarkdown}DFN<br/>TYPE{:/}
 Lines | ```
 D ITEMS^ORWGAPI("ORWGRPC",DFN,TYPE)
 S ITEMS=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 13th 2017, 6:55:29 am