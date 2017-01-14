---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC ITEMDATA 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ITEMDATA{:/}
 tag | {::nomarkdown}ITEMDATA{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get data of an item on patient (glucose results)
 Input Parameters | {::nomarkdown}ITEM<br/>START<br/>DFN{:/}
 Lines | {::nomarkdown} D ITEMDATA^ORWGAPI("ORWGRPC",ITEM,START,DFN)<br/> S DATA=$NA(^TMP("ORWGRPC",$J)){:/}




 Generated on January 13th 2017, 7:15:28 am