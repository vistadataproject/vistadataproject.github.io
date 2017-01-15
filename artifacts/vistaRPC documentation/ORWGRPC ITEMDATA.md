---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC ITEMDATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ITEMDATA{:/}
 tag | {::nomarkdown}ITEMDATA{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ITEMDATA^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get data of an item on patient (glucose results)
 Input parameters | {::nomarkdown}ITEM<br>START<br>DFN{:/}
 Code | {::nomarkdown}  D ITEMDATA^ORWGAPI("ORWGRPC",ITEM,START,DFN)<br> S DATA=$NA(^TMP("ORWGRPC",$J)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}