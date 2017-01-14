---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQPT WARDS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT WARDS{:/}
 tag | {::nomarkdown}WARD{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of wards.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | WARD^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF ACTIVE WARDS
 Code | ```  N I,IEN,NAME,D0
 S I=1,NAME=""
 F  S NAME=$O(^DIC(42,"B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D
 . S D0=IEN D WIN^DGPMDDCF
 . I X=0 S Y(I)=IEN_"^"_NAME,I=I+1```




 Generated on January 14th 2017, 7:26:35 am