---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWUL FVIDX
# ORWUL FVIDX



Property | Value
--- | ---
Label | FVIDX
Routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [FVIDX^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Method Comment | return index of item beginning with FROM
Input Parameters | IEN, FROM
Code | {::nomarkdown}<pre><code> N I,X<br/> S VAL=0<br/> S X=$O(^ORD(101.44,IEN,20,"C",FROM))<br/> I '$L(X) Q<br/> S I=$O(^ORD(101.44,IEN,20,"C",X,0))<br/> Q:'I<br/> S VAL=+I_U_X</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}