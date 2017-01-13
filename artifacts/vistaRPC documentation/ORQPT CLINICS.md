---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT CLINICS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT CLINICS{:/}
 tag | {::nomarkdown}CLIN{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of clinics.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF CLINICS
 Lines | ```{::nomarkdown} N ORLST,IEN,I<br/> D GETLST^XPAR(.ORLST,"ALL","ORWD COMMON CLINIC")<br/> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br/> . S IEN=$P(ORLST(I),U,2) I $$ACTLOC^ORWU(IEN)=1 D<br/> .. S Y(I)=IEN_U_$P(^SC(IEN,0),U,1)```{:/}




 Generated on January 13th 2017, 7:11:26 am