---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB3 DIAGORD<br/>
# ORWDXVB3 DIAGORD

Get sequence order of Diagnostic Tests for selection.

## Properties

Property | Value
--- | ---
Label | DIAGORD
Routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DIAGORD^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
Method Comment | Get sequence order of Diagnostic tests
Code | {::nomarkdown}<pre><code> N ORLIST,I,X<br/> D GETLST^XPAR(.ORLIST,"ALL","OR VBECS DIAGNOSTIC TEST ORDER")<br/> S I=0 F  S I=$O(ORLIST(I)) Q:'I  S X=ORLIST(I) I $D(^ORD(101.43,$P(X,"^",2),0)) S OROOT(I)=$P(X,"^",2)_"^"_$P(^(0),"^",1)_"^"_$P(^(0),"^",1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}