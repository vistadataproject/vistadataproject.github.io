---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT PROVIDERS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT PROVIDERS{:/}
 tag | {::nomarkdown}PROV{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of providers.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF PROVIDERS
 Lines | {::nomarkdown} N I,IEN,NAME,TDATE<br/> S I=1,NAME=""<br/> F  S NAME=$O(^VA(200,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN))  D<br/> .Q:$E(NAME)="*"<br/> .I $D(^XUSEC("PROVIDER",IEN)),$$ACTIVE^XUSER(IEN) S Y(I)=IEN_"^"_NAME,I=I+1{:/}




 Generated on January 13th 2017, 7:15:27 am