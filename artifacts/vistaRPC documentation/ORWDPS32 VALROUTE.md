---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALROUTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALROUTE{:/}
 tag | {::nomarkdown}VALROUTE{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the IEN for a route if the name is valid.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALROUTE^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | validates route name & returns IEN + abbreviation
 Input parameters | {::nomarkdown}X{:/}
 Code | {::nomarkdown}  N ABBR,NAME,IEN<br> K ^TMP($J,"ORWDPS32 VALROUTE")<br> S X=$$UPPER(X)<br> D ALL^PSS51P2(,X,,1,"ORWDPS32 VALROUTE")<br> I $P(^TMP($J,"ORWDPS32 VALROUTE",0),U)=-1 K ^TMP($J,"ORWDPS32 VALROUTE") S REC=0 Q<br> S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","B",X,""))<br> I IEN'>0 S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","C",X,""))<br> I IEN'>0 S REC=0 Q<br> S NAME=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,.01))<br> S ABBR=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,1))<br> I '$L(ABBR) S ABBR=NAME<br> I ($$UPPER(NAME)'=X),($$UPPER(ABBR)'=X) S REC=0 K ^TMP($J,"ORWDPS32 VALROUTE") Q<br> S REC=IEN_U_ABBR<br> K ^TMP($J,"ORWDPS32 VALROUTE"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}