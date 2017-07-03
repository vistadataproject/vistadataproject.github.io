---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN CANEDIT
# ORQQCN CANEDIT

Returns indication of whether a consult/procedure request can beresubmitted.

Property | Value
--- | ---
Label | CANEDIT
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult IEN | LITERAL | 16 | true | Pointer to record  in file 123.



### MUMPS Method Description

Property | Value
--- | ---
Method | [CANEDIT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Return whether consult can be edited and resubmitted
Input Parameters | GMRCO
Code | {::nomarkdown}<pre><code> S Y=$$EDRESOK^GMRCEDT2(GMRCO)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}