---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT CLINICS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT CLINICS{:/}
 tag | {::nomarkdown}CLIN{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of clinics.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CLIN^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF CLINICS
 Code | {::nomarkdown}  N ORLST,IEN,I<br> D GETLST^XPAR(.ORLST,"ALL","ORWD COMMON CLINIC")<br> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br> . S IEN=$P(ORLST(I),U,2) I $$ACTLOC^ORWU(IEN)=1 D<br> .. S Y(I)=IEN_U_$P(^SC(IEN,0),U,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}