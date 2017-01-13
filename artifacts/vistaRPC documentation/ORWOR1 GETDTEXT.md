---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDTEXT{:/}
 tag | {::nomarkdown}GETDTEXT{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the external text of an existing order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get External Text
 Input Parameters | {::nomarkdown}ORDER{:/}
 Lines | {::nomarkdown} N IFN,ACTION<br/> S IFN=+ORDER,ACTION=$P(ORDER,";",2),I=0<br/> F  S I=$O(^OR(100,+IFN,8,+ACTION,.2,I)) Q:'I  S TEXT(I)=^(I,0){:/}




 Generated on January 13th 2017, 7:15:28 am