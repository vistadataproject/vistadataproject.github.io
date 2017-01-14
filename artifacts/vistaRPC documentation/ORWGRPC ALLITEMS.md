---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC ALLITEMS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ALLITEMS{:/}
 tag | {::nomarkdown}ALLITEMS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ALLITEMS^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get all items of data on patient (procedures, tests, codes,..)
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  D ALLITEMS^ORWGAPI("ORWGRPC",DFN)
 S ITEMS=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am