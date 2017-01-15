---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT SPECIALTIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT SPECIALTIES{:/}
 tag | {::nomarkdown}SPEC{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of treating specialties.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SPEC^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF TREATING SPECIALTIES
 Code | {::nomarkdown}  N I,NAME,IEN<br> S I=1,NAME=""<br> F  S NAME=$O(^DIC(45.7,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN)) I $$ACTIVE^DGACT(45.7,IEN) S Y(I)=IEN_"^"_NAME,I=I+1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}