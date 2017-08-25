---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 ALLROUTE<br/>
# ORWDPS32 ALLROUTE

Returns a list of all available medication routes.

## Properties

Property | Value
--- | ---
Label | ALLROUTE
MUMPS Implementation | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLROUTE^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Method Comment | returns a list of all available med routes
Code | {::nomarkdown}<pre><code> N I,X,ILST<br/> S ILST=0<br/> K ^TMP($J,"ORWDPS32 ALLROUTE")<br/> D ALL^PSS51P2(,"??",,,"ORWDPS32 ALLROUTE")<br/> S I=0 F  S I=$O(^TMP($J,"ORWDPS32 ALLROUTE",I)) Q:'I  D<br/> . I +$P(^TMP($J,"ORWDPS32 ALLROUTE",I,3),U)>0 S LST($$NXT)=I_U_^TMP($J,"ORWDPS32 ALLROUTE",I,.01)_U_^TMP($J,"ORWDPS32 ALLROUTE",I,1)<br/> K ^TMP($J,"ORWDPS32 ALLROUTE")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}