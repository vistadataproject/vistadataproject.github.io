---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWU1 NEWLOC
# ORWU1 NEWLOC

Returns a list of clinics from the HOSPITAL LOCATION file (#44).

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWU1 NEWLOC](../VISTARPC/ORWU1_NEWLOC)
MUMPS Implementation | [IEN^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Type | READ
Complexity | DIFFICULT
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [44](../VDM/Hospital_Location-44)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
FROM | LITERAL | true | text to traverse from | CLInicB
DIR | NUMERIC | true | traversal direction | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}