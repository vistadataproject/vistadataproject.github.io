---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALROUTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALROUTE{:/}
 tag | {::nomarkdown}VALROUTE{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the IEN for a route if the name is valid.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | validates route name & returns IEN + abbreviation
 Input Parameters | {::nomarkdown}X{:/}
 Lines | {::nomarkdown} N ABBR,NAME,IEN<br/> K ^TMP($J,"ORWDPS32 VALROUTE")<br/> S X=$$UPPER(X)<br/> D ALL^PSS51P2(,X,,1,"ORWDPS32 VALROUTE")<br/> I $P(^TMP($J,"ORWDPS32 VALROUTE",0),U)=-1 K ^TMP($J,"ORWDPS32 VALROUTE") S REC=0 Q<br/> S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","B",X,""))<br/> I IEN'>0 S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","C",X,""))<br/> I IEN'>0 S REC=0 Q<br/> S NAME=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,.01))<br/> S ABBR=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,1))<br/> I '$L(ABBR) S ABBR=NAME<br/> I ($$UPPER(NAME)'=X),($$UPPER(ABBR)'=X) S REC=0 K ^TMP($J,"ORWDPS32 VALROUTE") Q<br/> S REC=IEN_U_ABBR<br/> K ^TMP($J,"ORWDPS32 VALROUTE"){:/}




 Generated on January 13th 2017, 7:15:27 am