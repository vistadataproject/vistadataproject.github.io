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
 Lines | ```{::nomarkdown} D ITEMS^ORWGAPI("ORWGRPC",DFN,TYPE)<br/> S ITEMS=$NA(^TMP("ORWGRPC",$J))```{:/}




 Generated on January 13th 2017, 7:11:27 am