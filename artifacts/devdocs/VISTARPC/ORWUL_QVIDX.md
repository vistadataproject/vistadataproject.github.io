---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWUL QVIDX<br/>
# ORWUL QVIDX



## Properties

Property | Value
--- | ---
Label | QVIDX
MUMPS Implementation | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [QVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Method Comment | return index of item beginning with FROM
Input Parameters | IEN, FROM
Code | {::nomarkdown}<pre><code> N I,X<br/> S VAL=0<br/> S X=$O(^ORD(101.44,IEN,10,"C",FROM))<br/> I '$L(X) Q<br/> S I=$O(^ORD(101.44,IEN,10,"C",X,0))<br/> Q:'I<br/> S:'$$QODIS(IEN,I) VAL=+I_U_X</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}