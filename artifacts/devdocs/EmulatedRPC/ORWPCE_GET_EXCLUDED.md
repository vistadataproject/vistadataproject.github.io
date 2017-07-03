---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWPCE GET EXCLUDED
# ORWPCE GET EXCLUDED

Returns a list of excluded PCE entries

Property | Value
--- | ---
Domain | Non-Clinical: Parameters
VISTA RPC Documentation | [ORWPCE GET EXCLUDED](../VISTARPC/ORWPCE_GET_EXCLUDED)
MUMPS Implementation | [EXCLUDED^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Type | READ
Complexity | EASY
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | None
Parameters Used | VARIABLE


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
LOC | LITERAL | true | Location ID | 1
TYPE | LITERAL | true | Excluded PCE data items are stored in one of five parameters.<br/>Type dictates the parameter this call will retrieve:<br/>1 ORWPCE EXCLUDE IMMUNIZATIONS<br/>2 ORWPCE EXCLUDE SKIN TESTS<br/>3 ORWPCE EXCLUDE PATIENT ED<br/>4 ORWPCE EXCLUDE HEALTH FACTORS<br/>5 ORWPCE EXCLUDE EXAMS | 3

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}