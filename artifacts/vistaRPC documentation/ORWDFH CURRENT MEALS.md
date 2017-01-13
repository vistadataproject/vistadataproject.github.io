---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH CURRENT MEALS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH CURRENT MEALS{:/}
 tag | {::nomarkdown}CURMEALS{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return current list of recurring meals for AO and TF orders
 Input Parameters | {::nomarkdown}ORDFN<br/>ORMEAL{:/}
 Lines | ```
 N I,Y,X S I=0
 S ORMEAL=$G(ORMEAL,"")
 D EN2^FHWOR8(ORDFN,ORMEAL,.ORY)
 F  S I=$O(ORY(I)) Q:'I  D
 . S X=$P(ORY(I),U,2)
 . S Y=$P(ORY(I),U,1) D DD^%DT S $P(ORY(I),U,2)=Y
 . S $P(ORY(I),U,3)=$S(X="B":"Breakfast",X="N":"Noon",X="E":"Evening",1:"")```




 Generated on January 13th 2017, 6:55:29 am