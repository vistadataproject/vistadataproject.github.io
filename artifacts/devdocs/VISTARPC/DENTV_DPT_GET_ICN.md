---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV DPT GET ICN
# DENTV DPT GET ICN

This RPC takes in a patient identifier and returns the patient's ICN.

Property | Value
--- | ---
Label | ICN
Routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PAT | LITERAL | 30 | true | A patient identifier which can be their DFN, Name, or SSN.
ISSSN | LITERAL | 1 | true | A boolean flag (0,1) which indicates whether or not the PAT value is a SSN value.  If a value is not passed, the flag defaults to 0.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}