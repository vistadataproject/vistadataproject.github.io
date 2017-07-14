---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 VALRATE<br/>
# ORWDPS32 VALRATE

Return a 1 if IV rate text is valid, otherwise return 0.

## Properties

Property | Value
--- | ---
Label | VALRATE
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALRATE^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | return &quot;1&quot; (true) if IV rate text is valid
Input Parameters | X
Code | {::nomarkdown}<pre><code> I $E($RE($$UPPER^ORWDPS32(X)),1,5)="RH/LM"  S X=$E(X,1,$L(X)-5)<br/> S X=$$TRIM^ORWDPS32(X)<br/> D ORINF^PSIVSP S VAL=$G(X) ;S OK=$S($D(X):1,1:0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}