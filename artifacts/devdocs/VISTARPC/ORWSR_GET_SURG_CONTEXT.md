---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWSR GET SURG CONTEXT
# ORWSR GET SURG CONTEXT



Property | Value
--- | ---
Label | GTSURCTX
Routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GTSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | Returns current Notes view context for user
Input Parameters | ORUSER
Code | {::nomarkdown}<pre><code> N OCCLIM,SHOWSUB<br/> S Y=$$GET^XPAR("ALL","ORCH CONTEXT SURGERY",1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}