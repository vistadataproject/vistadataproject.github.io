---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET SURVEY DATA
# VPS GET SURVEY DATA

Retrieves an array containing the patient's Clinical Survey information.

Property | Value
--- | ---
Label | GETRPC
Routine | [VPSSRVY2](http://code.osehra.org/dox/Routine_VPSSRVY2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSPID | LITERAL | 25 | true | Patient ID such as the patient SSN OR DFN OR ICN OR VIC/CACfor whom the Clinical Questionnaire information is beingrequested.
VPSQIEN | LITERAL | 9 |  | Questionnaire IEN for filtering the results.
VPSQNM | LITERAL | 60 |  | Questionnaire Name for filtering the results.
VPSFDT | LITERAL | 14 |  | Date From for filtering the results
VPSTDT | LITERAL | 14 |  | Date To for filtering the results
VPSNUM | LITERAL | 4 |  | Maxumum number of occurrences to return.
VPSTYP | LITERAL | 7 | true | Patient ID TYPE such as SSN or DFN OR ICN OR VIC/CAC.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}