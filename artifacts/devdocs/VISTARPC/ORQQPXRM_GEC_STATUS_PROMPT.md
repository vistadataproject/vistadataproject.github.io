---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPXRM GEC STATUS PROMPT
# ORQQPXRM GEC STATUS PROMPT

This remote procedure will return the text value to display in CPRS of the status of the current GEC Referral.

Property | Value
--- | ---
Label | GECP
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [GECP^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S RESULT=$$STATUS^PXRMGECU(DFN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fFrame.pas">fFrame.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}