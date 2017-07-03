---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS32 VALSCH
# ORWDPS32 VALSCH

Validate a schedule and return a 1 if it is valid, otherwise return 0.

Property | Value
--- | ---
Label | VALSCH
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [VALSCH^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | validate a schedule, return 1 if valid, 0 if not
Input Parameters | X, PSTYPE
Code | {::nomarkdown}<pre><code> I '$L($T(EN^PSSGSGUI)) S OK=-1 Q<br/> I $E($T(EN^PSSGSGUI),1,4)="EN(X" D<br/> . N ORX S ORX=$G(X) D EN^PSSGSGUI(.ORX,$G(PSTYPE,"I"))<br/> . K X S:$D(ORX) X=ORX<br/> E  D<br/> . D EN^PSSGSGUI<br/> S OK=$S($D(X):1,1:0)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}