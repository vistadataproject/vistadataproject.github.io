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

 Property | Value 
 --- | --- 
 Method | WARD^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF ACTIVE WARDS
 Code | {::nomarkdown}  N I,IEN,NAME,D0<br> S I=1,NAME=""<br> F  S NAME=$O(^DIC(42,"B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D<br> . S D0=IEN D WIN^DGPMDDCF<br> . I X=0 S Y(I)=IEN_"^"_NAME,I=I+1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}