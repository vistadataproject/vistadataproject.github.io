---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROVIDER LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROVIDER LIST{:/}
 tag | {::nomarkdown}PROVSRCH{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS ARRAY OF PROVIDERS MATCHING INPUT{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PROVSRCH^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | Get candidate Rroviders from person file
 Input parameters | {::nomarkdown}FLAG, N, FROM, PART{:/}
 Code | {::nomarkdown}  N LV,NS,RV,IEN<br> S RV=$NAME(LV("DILIST","ID"))<br> IF +$G(N)=0 S N=50<br> S FLAG=$G(FLAG),N=$G(N),FROM=$G(FROM),PART=$G(PART)<br> D LIST^DIC(200,"",".01;1",FLAG,N,FROM,PART,"","","","LV")<br> S NS=""<br> F  S NS=$O(LV("DILIST",1,NS)) Q:NS=""  D<br> . S IEN=""<br> . S IEN=$O(^VA(200,"B",@RV@(NS,.01),IEN)) ; compliments of PROV^ORQPTQ<br> . S LST(NS)=IEN_U_@RV@(NS,.01)  ; initials_U_@RV@(NS,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}