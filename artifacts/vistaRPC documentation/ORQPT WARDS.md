---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT WARDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT WARDS{:/}
 tag | {::nomarkdown}WARD{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of wards.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | WARD^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF ACTIVE WARDS
 Code | {::nomarkdown}  N I,IEN,NAME,D0<br> S I=1,NAME=""<br> F  S NAME=$O(^DIC(42,"B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D<br> . S D0=IEN D WIN^DGPMDDCF<br> . I X=0 S Y(I)=IEN_"^"_NAME,I=I+1{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}