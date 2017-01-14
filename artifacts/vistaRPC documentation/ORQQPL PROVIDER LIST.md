---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL PROVIDER LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROVIDER LIST{:/}
 tag | {::nomarkdown}PROVSRCH{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS ARRAY OF PROVIDERS MATCHING INPUT{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PROVSRCH^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | Get candidate Rroviders from person file
 Input parameters | {::nomarkdown}FLAG<br/>N<br/>FROM<br/>PART{:/}
 Code | ```  N LV,NS,RV,IEN
 S RV=$NAME(LV("DILIST","ID"))
 IF +$G(N)=0 S N=50
 S FLAG=$G(FLAG),N=$G(N),FROM=$G(FROM),PART=$G(PART)
 D LIST^DIC(200,"",".01;1",FLAG,N,FROM,PART,"","","","LV")
 S NS=""
 F  S NS=$O(LV("DILIST",1,NS)) Q:NS=""  D
 . S IEN=""
 . S IEN=$O(^VA(200,"B",@RV@(NS,.01),IEN)) ; compliments of PROV^ORQPTQ
 . S LST(NS)=IEN_U_@RV@(NS,.01)  ; initials_U_@RV@(NS,1)```




 Generated on January 14th 2017, 7:26:35 am