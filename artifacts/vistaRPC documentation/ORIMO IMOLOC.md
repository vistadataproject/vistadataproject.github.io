---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORIMO IMOLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO IMOLOC{:/}
 tag | {::nomarkdown}IMOLOC{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IMOLOC^[ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 Method comment | ORY>=0: LOC is an IMO authorized location
 Input parameters | {::nomarkdown}ORLOC, ORDFN{:/}
 Code | {::nomarkdown}  S ORY=-1<br> N PACH,A<br> K ^TMP($J,"ORIMO")<br> S PACH=$$PATCH^XPDUTL("PSJ*5.0*111")<br> Q:'PACH<br> I $L($TEXT(SDIMO^SDAMA203)) D<br> . ;#DBIA 4133<br> . S ORY=$$SDIMO^SDAMA203(ORLOC,ORDFN)<br> . ;if RSA returns an error then check against Clinic Loc.<br> . I ORY=-3 D<br> . .I $P($G(^SC(ORLOC,0)),U,3)'="C" Q<br> . .I $D(^SC("AE",1,ORLOC))=1 S ORY=1<br> . K SDIMO(1)<br> I $D(^TMP($J,"OR MOB APP1")) K ^("OR MOB APP1") D ALL^PSJ53P46(+ORLOC,"ORIMO") S A=$G(^TMP($J,"ORIMO",0)) I A'>0!(+$G(^TMP($J,"ORIMO",A,3))=0) S ORY=-1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}