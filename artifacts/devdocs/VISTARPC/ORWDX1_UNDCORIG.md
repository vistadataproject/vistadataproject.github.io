---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX1 UNDCORIG
# ORWDX1 UNDCORIG



Property | Value
--- | ---
Label | UNDCORIG
Routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORYARR | LIST |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [UNDCORIG^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Input Parameters | ORYARR
Code | {::nomarkdown}<pre><code> N CNT<br/> S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0  S $P(^OR(100,+ORYARR(CNT),6),U,9)=0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersDC.pas">Orders/fOrdersDC.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}