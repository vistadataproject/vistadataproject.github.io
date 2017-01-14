---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORIMO IMOLOC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO IMOLOC{:/}
 tag | {::nomarkdown}IMOLOC{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | IMOLOC^[ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 Method comment | ORY>=0: LOC is an IMO authorized location
 Input parameters | {::nomarkdown}ORLOC<br/>ORDFN{:/}
 Code | ```  S ORY=-1
 N PACH,A
 K ^TMP($J,"ORIMO")
 S PACH=$$PATCH^XPDUTL("PSJ*5.0*111")
 Q:'PACH
 I $L($TEXT(SDIMO^SDAMA203)) D
 . ;#DBIA 4133
 . S ORY=$$SDIMO^SDAMA203(ORLOC,ORDFN)
 . ;if RSA returns an error then check against Clinic Loc.
 . I ORY=-3 D
 . .I $P($G(^SC(ORLOC,0)),U,3)'="C" Q
 . .I $D(^SC("AE",1,ORLOC))=1 S ORY=1
 . K SDIMO(1)
 I $D(^TMP($J,"OR MOB APP1")) K ^("OR MOB APP1") D ALL^PSJ53P46(+ORLOC,"ORIMO") S A=$G(^TMP($J,"ORIMO",0)) I A'>0!(+$G(^TMP($J,"ORIMO",A,3))=0) S ORY=-1```




 Generated on January 14th 2017, 7:26:36 am