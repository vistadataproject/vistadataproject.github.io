---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDTEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDTEXT{:/}
 tag | {::nomarkdown}GETDTEXT{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the external text of an existing order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDTEXT^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Get External Text
 Input parameters | {::nomarkdown}ORDER{:/}
 Code | ```  N IFN,ACTION
 S IFN=+ORDER,ACTION=$P(ORDER,";",2),I=0
 F  S I=$O(^OR(100,+IFN,8,+ACTION,.2,I)) Q:'I  S TEXT(I)=^(I,0)```




 Generated on January 14th 2017, 7:26:35 am