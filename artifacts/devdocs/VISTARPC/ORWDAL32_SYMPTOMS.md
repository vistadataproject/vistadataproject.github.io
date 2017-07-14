---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDAL32 SYMPTOMS<br/>
# ORWDAL32 SYMPTOMS



## Properties

Property | Value
--- | ---
Label | SYMPTOMS
Routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SYMPTOMS^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Method Comment | Return a subset of symptoms
Input Parameters | FROM, DIR
First Comment | {::nomarkdown}<pre><code> .Return Array, Starting Text, Direction</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,X,NAME,SUB S I=0,CNT=44 ;233<br/> K ^TMP($J,"SIGNS") ;233<br/> M ^TMP($J,"SIGNS","B")=^GMRD(120.83,"B") ;233<br/> S SYN="" F  S SYN=$O(^GMRD(120.83,"D",SYN)) Q:SYN=""  S SUB=0 F  S SUB=$O(^GMRD(120.83,"D",SYN,SUB)) Q:'+SUB  D  ;233<br/> .S NAME=$P(^GMRD(120.83,SUB,0),U) S ^TMP($J,"SIGNS","B",(SYN_$C(9)_"<"_NAME_">"_U_NAME),SUB)="" ;233<br/> F  Q:I'<CNT  S FROM=$O(^TMP($J,"SIGNS","B",FROM),DIR) Q:FROM=""  D  ;233<br/> . I FROM="OTHER REACTION" Q  ;Don't send this entry<br/> . S IEN=0 F  S IEN=$O(^TMP($J,"SIGNS","B",FROM,IEN)) Q:'IEN  D  ;233<br/> . . I $L($T(SCREEN^XTID)) I $$SCREEN^XTID(120.83,.01,IEN_",") Q  ;233 Is term active<br/> . . S I=I+1<br/> . . S Y(I)=IEN_U_FROM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}