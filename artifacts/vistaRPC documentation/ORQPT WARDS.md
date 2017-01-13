---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT WARDS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT WARDS{:/}
 tag | {::nomarkdown}WARD{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of wards.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF ACTIVE WARDS
 Lines | ```
 N I,IEN,NAME,D0
 S I=1,NAME=""
 F  S NAME=$O(^DIC(42,"B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D
 . S D0=IEN D WIN^DGPMDDCF
 . I X=0 S Y(I)=IEN_"^"_NAME,I=I+1```




 Generated on January 13th 2017, 6:55:28 am