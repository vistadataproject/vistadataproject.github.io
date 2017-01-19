---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 IMTYPSEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 IMTYPSEL{:/}
 tag | {::nomarkdown}IMTYPSEL{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IMTYPSEL^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | return list of active imaging types
 Input parameters | {::nomarkdown}DUMMY{:/}
 Code | {::nomarkdown}  N ORX,I,IEN,DGRP,MNEM,NAME<br> S ORX=""<br> F I=1:1  S ORX=$O(^RA(79.2,"C",ORX)) Q:ORX=""  D<br> . I '$D(^ORD(101.43,"S."_ORX)) Q<br> . S IEN=$O(^RA(79.2,"C",ORX,0))<br> . S NAME=$P(^RA(79.2,IEN,0),U,1)<br> . S MNEM=$P(^RA(79.2,IEN,0),U,3)<br> . S DGRP=$O(^ORD(100.98,"B",MNEM,0))<br> . S Y(I)=IEN_U_NAME_U_MNEM_U_DGRP{:/}


### CPRS

[Orders/rODRad.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}