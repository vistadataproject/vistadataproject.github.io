---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE TRT
# ORWPCE TRT

Returns a list of treatments for a clinic.

Property | Value
--- | ---
Label | TRT
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [TRT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | get list of treatments for clinic
Input Parameters | CLINIC
Code | {::nomarkdown}<pre><code> D GETLST^IBDF18A(CLINIC,"PX SELECT TREATMENTS","LST")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}