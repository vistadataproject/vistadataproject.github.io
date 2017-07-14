---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR32 MAXDAYS<br/>
# ORWDLR32 MAXDAYS

Returns the maximum number of days for a continuous lab order.

## Properties

Property | Value
--- | ---
Label | MAXDAYS
Routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [MAXDAYS^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | Return max number of days for a continuing order
Input Parameters | LOC, SCHED
Code | {::nomarkdown}<pre><code> N TMP1,TMP2<br/> K ^TMP($J,"ORWDLR33 MAXDAYS")<br/> S TMP1=$$GET^XPAR("ALL^LOC.`"_+LOC,"LR MAX DAYS CONTINUOUS",1,"Q")<br/> I +TMP1=0 S Y="-1" Q<br/> I +$G(SCHED)>0 D ZERO^PSS51P1(SCHED,,,,"ORWDLR33 MAXDAYS") S TMP2=$G(^TMP($J,"ORWDLR33 MAXDAYS",SCHED,2.5)) K ^TMP($J,"ORWDLR33 MAXDAYS")<br/> E  S TMP2=0<br/> I +TMP1=0,+TMP2>0 S Y=TMP2 Q<br/> I +TMP2=0,+TMP1>0 S Y=TMP1 Q<br/> S Y=$S(+TMP1>+TMP2:+TMP2,+TMP2>+TMP1:+TMP1,+TMP1=+TMP2:+TMP1,1:0)<br/> K ^TMP($J,"ORWDLR33 MAXDAYS")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}