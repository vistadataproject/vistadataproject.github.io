---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWDAL32 SYMPTOMS
# ORWDAL32 SYMPTOMS

return a subset of symptoms

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWDAL32 SYMPTOMS](../VISTARPC/ORWDAL32_SYMPTOMS)
MUMPS Implementation | [SYMPTOMS^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [120.83](../VDM/Sign_symptoms-120_83)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
startingText | LITERAL | true | The text string to start the search from, empty string to start from the beginning | TET
direction | NUMERIC | true | Direction to search, 1 for forward, -1 for backward | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}