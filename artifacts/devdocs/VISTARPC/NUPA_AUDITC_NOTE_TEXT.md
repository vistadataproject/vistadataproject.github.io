---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA AUDITC NOTE TEXT<br/>
# NUPA AUDITC NOTE TEXT

Saves an Audit-C note for the patient.  Uses the last administration from file 601.84.

## Properties

Property | Value
--- | ---
Label | ACNOTE
Routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | DFN of the patient.
STRING | LITERAL |  | true | Score, questions, and answers from the Audit-C.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}