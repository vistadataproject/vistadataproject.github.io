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

 Property | Value 
 --- | --- 
 Method | SPEC^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF TREATING SPECIALTIES
 Code | {::nomarkdown}  N I,NAME,IEN<br> S I=1,NAME=""<br> F  S NAME=$O(^DIC(45.7,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN)) I $$ACTIVE^DGACT(45.7,IEN) S Y(I)=IEN_"^"_NAME,I=I+1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}