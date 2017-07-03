---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXR ISNOW
# ORWDXR ISNOW



Property | Value
--- | ---
Label | ISNOW
Routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ISNOW^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Method Comment | Is first time now order?
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> N SCH<br/> Q:'$D(^OR(100,+ORID,0))<br/> S SCH=""<br/> S SCH=$O(^OR(100,+ORID,4.5,"ID","SCHEDULE",0))<br/> S:SCH SCH=$G(^OR(100,+ORID,4.5,SCH,1))<br/> S:SCH="NOW" ORY=1<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}