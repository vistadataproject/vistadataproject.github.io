---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT SPECIALTIES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT SPECIALTIES{:/}
 tag | {::nomarkdown}SPEC{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of treating specialties.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF TREATING SPECIALTIES
 Lines | {::nomarkdown} N I,NAME,IEN<br/> S I=1,NAME=""<br/> F  S NAME=$O(^DIC(45.7,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN)) I $$ACTIVE^DGACT(45.7,IEN) S Y(I)=IEN_"^"_NAME,I=I+1{:/}




 Generated on January 13th 2017, 7:15:27 am