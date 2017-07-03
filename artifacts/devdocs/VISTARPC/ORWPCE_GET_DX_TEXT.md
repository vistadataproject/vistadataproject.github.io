---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE GET DX TEXT
# ORWPCE GET DX TEXT

Resolves the preferred expanded form of the Diagnosis text for the encounter pane on the notes tab.

Property | Value
--- | ---
Label | GETDXTXT
Routine | [ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NARR | LITERAL |  | true | This is the narrative entered for the Dx.
CODE | LITERAL |  | true | This is the ICD code.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDXTXT^ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html)
Method Comment | RPC to resolve Dx Text for PCE view
Input Parameters | NARR, CODE
Code | {::nomarkdown}<pre><code> S ORY=$$SETNARR(NARR,CODE)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}