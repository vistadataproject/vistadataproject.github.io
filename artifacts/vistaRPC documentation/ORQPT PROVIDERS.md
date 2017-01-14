---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQPT PROVIDERS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT PROVIDERS{:/}
 tag | {::nomarkdown}PROV{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of providers.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PROV^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF PROVIDERS
 Code | ```  N I,IEN,NAME,TDATE
 S I=1,NAME=""
 F  S NAME=$O(^VA(200,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN))  D
 .Q:$E(NAME)="*"
 .I $D(^XUSEC("PROVIDER",IEN)),$$ACTIVE^XUSER(IEN) S Y(I)=IEN_"^"_NAME,I=I+1```




 Generated on January 14th 2017, 7:26:35 am