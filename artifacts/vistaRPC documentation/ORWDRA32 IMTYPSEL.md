---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 IMTYPSEL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 IMTYPSEL{:/}
 tag | {::nomarkdown}IMTYPSEL{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return list of active imaging types
 Input Parameters | {::nomarkdown}DUMMY{:/}
 Lines | ```
 N ORX,I,IEN,DGRP,MNEM,NAME
 S ORX=""
 F I=1:1  S ORX=$O(^RA(79.2,"C",ORX)) Q:ORX=""  D
 . I '$D(^ORD(101.43,"S."_ORX)) Q
 . S IEN=$O(^RA(79.2,"C",ORX,0))
 . S NAME=$P(^RA(79.2,IEN,0),U,1)
 . S MNEM=$P(^RA(79.2,IEN,0),U,3)
 . S DGRP=$O(^ORD(100.98,"B",MNEM,0))
 . S Y(I)=IEN_U_NAME_U_MNEM_U_DGRP```




 Generated on January 13th 2017, 6:55:29 am