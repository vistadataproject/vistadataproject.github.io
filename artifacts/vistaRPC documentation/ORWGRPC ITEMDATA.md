---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC ITEMDATA 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ITEMDATA{:/}
 tag | {::nomarkdown}ITEMDATA{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ITEMDATA^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get data of an item on patient (glucose results)
 Input parameters | {::nomarkdown}ITEM<br/>START<br/>DFN{:/}
 Code | ```  D ITEMDATA^ORWGAPI("ORWGRPC",ITEM,START,DFN)
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am