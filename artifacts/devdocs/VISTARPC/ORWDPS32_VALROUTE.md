---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS32 VALROUTE
# ORWDPS32 VALROUTE

Returns the IEN for a route if the name is valid.

Property | Value
--- | ---
Label | VALROUTE
Routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [VALROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Method Comment | validates route name &amp; returns IEN + abbreviation
Input Parameters | X
Code | {::nomarkdown}<pre><code> N ABBR,NAME,IEN<br/> K ^TMP($J,"ORWDPS32 VALROUTE")<br/> S X=$$UPPER(X)<br/> D ALL^PSS51P2(,X,,1,"ORWDPS32 VALROUTE")<br/> I $P(^TMP($J,"ORWDPS32 VALROUTE",0),U)=-1 K ^TMP($J,"ORWDPS32 VALROUTE") S REC=0 Q<br/> S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","B",X,""))<br/> I IEN'>0 S IEN=$O(^TMP($J,"ORWDPS32 VALROUTE","C",X,""))<br/> I IEN'>0 S REC=0 Q<br/> S NAME=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,.01))<br/> S ABBR=$G(^TMP($J,"ORWDPS32 VALROUTE",IEN,1))<br/> I '$L(ABBR) S ABBR=NAME<br/> I ($$UPPER(NAME)'=X),($$UPPER(ABBR)'=X) S REC=0 K ^TMP($J,"ORWDPS32 VALROUTE") Q<br/> S REC=IEN_U_ABBR<br/> K ^TMP($J,"ORWDPS32 VALROUTE")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}