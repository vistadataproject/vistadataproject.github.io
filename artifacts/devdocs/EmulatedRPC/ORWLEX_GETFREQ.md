---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWLEX GETFREQ
# ORWLEX GETFREQ

This call wraps the Lexicon API $$FREQ^LEXU to satisfy the requirements of the ICD-10-CM diagnosis search.

Property | Value
--- | ---
Domain | Non-Clinical: Others
VISTA RPC Documentation | [ORWLEX GETFREQ](../VISTARPC/ORWLEX_GETFREQ)
MUMPS Implementation | [GETFREQ^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
Type | UTILITY
Complexity | LOW
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | None
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORSRCHTX | LITERAL | true | the search text/term | HYPERTENSION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}