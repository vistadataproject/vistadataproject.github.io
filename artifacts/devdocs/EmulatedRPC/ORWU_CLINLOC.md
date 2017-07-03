---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWU CLINLOC
# ORWU CLINLOC

Returns a list of clinics from the HOSPITAL LOCATION file (#44).

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWU CLINLOC](../VISTARPC/ORWU_CLINLOC)
MUMPS Implementation | [CLINLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
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
DIR | LITERAL | true | traversal direction | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}