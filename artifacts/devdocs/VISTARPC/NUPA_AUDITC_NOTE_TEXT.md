---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NUPA AUDITC NOTE TEXT
# NUPA AUDITC NOTE TEXT

Saves an Audit-C note for the patient.  Uses the last administration from file 601.84.

Property | Value
--- | ---
Label | ACNOTE
Routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | DFN of the patient.
STRING | LITERAL |  | true | Score, questions, and answers from the Audit-C.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}