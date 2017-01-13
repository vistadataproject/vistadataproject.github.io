---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROVIDER LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROVIDER LIST{:/}
 tag | {::nomarkdown}PROVSRCH{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS ARRAY OF PROVIDERS MATCHING INPUT{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get candidate Rroviders from person file
 Input Parameters | {::nomarkdown}FLAG<br/>N<br/>FROM<br/>PART{:/}
 Lines | ```
 N LV,NS,RV,IEN
 S RV=$NAME(LV("DILIST","ID"))
 IF +$G(N)=0 S N=50
 S FLAG=$G(FLAG),N=$G(N),FROM=$G(FROM),PART=$G(PART)
 D LIST^DIC(200,"",".01;1",FLAG,N,FROM,PART,"","","","LV")
 S NS=""
 F  S NS=$O(LV("DILIST",1,NS)) Q:NS=""  D
 . S IEN=""
 . S IEN=$O(^VA(200,"B",@RV@(NS,.01),IEN)) ; compliments of PROV^ORQPTQ
 . S LST(NS)=IEN_U_@RV@(NS,.01)  ; initials_U_@RV@(NS,1)```




 Generated on January 13th 2017, 6:55:28 am