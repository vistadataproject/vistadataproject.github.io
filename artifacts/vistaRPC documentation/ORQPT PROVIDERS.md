---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT PROVIDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT PROVIDERS{:/}
 tag | {::nomarkdown}PROV{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of providers.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PROV^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF PROVIDERS
 Code | {::nomarkdown}  N I,IEN,NAME,TDATE<br> S I=1,NAME=""<br> F  S NAME=$O(^VA(200,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN))  D<br> .Q:$E(NAME)="*"<br> .I $D(^XUSEC("PROVIDER",IEN)),$$ACTIVE^XUSER(IEN) S Y(I)=IEN_"^"_NAME,I=I+1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}