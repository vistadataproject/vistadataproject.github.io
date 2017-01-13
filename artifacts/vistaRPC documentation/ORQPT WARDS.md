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
 Lines | {::nomarkdown} N I,IEN,NAME,D0<br/> S I=1,NAME=""<br/> F  S NAME=$O(^DIC(42,"B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D<br/> . S D0=IEN D WIN^DGPMDDCF<br/> . I X=0 S Y(I)=IEN_"^"_NAME,I=I+1{:/}




 Generated on January 13th 2017, 7:15:27 am