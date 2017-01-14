---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALROUTE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALROUTE{:/}
 tag | {::nomarkdown}VALROUTE{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the IEN for a route if the name is valid.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VALROUTE^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | validates route name & returns IEN + abbreviation
 Input parameters | {::nomarkdown}X{:/}
 Code | ```  N ABBR,NAME,IEN
 K ^TMP($J,"ORWDPS32 VALROUTE")
 S X=$$UPPER(X)
 D ALL^PSS51P2(,X,,1,"ORWDPS32 VALROUTE")
 I $P(^TMP($J,"ORWDPS32 VALROUTE",0),U)=-1 K ^TMP($J,"ORWDPS32 VALROUTE") S REC=0 Q
 S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","B",X,""))
 I IEN'>0 S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","C",X,""))
 I IEN'>0 S REC=0 Q
 S NAME=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,.01))
 S ABBR=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,1))
 I '$L(ABBR) S ABBR=NAME
 I ($$UPPER(NAME)'=X),($$UPPER(ABBR)'=X) S REC=0 K ^TMP($J,"ORWDPS32 VALROUTE") Q
 S REC=IEN_U_ABBR
 K ^TMP($J,"ORWDPS32 VALROUTE")```




 Generated on January 14th 2017, 7:26:35 am