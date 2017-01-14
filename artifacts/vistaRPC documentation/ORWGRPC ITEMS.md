---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGRPC ITEMS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC ITEMS{:/}
 tag | {::nomarkdown}ITEMS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ITEMS^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get items of a type of data on patient (lab tests)
 Input parameters | {::nomarkdown}DFN<br/>TYPE{:/}
 Code | ```  D ITEMS^ORWGAPI("ORWGRPC",DFN,TYPE)
 S ITEMS=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 14th 2017, 7:26:36 am