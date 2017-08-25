---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWU1 NEWLOC<br/>
# ORWU1 NEWLOC

Returns a list of clinics from the HOSPITAL LOCATION file (#44).

**Native RPC Documentation:** [ORWU1 NEWLOC](../VISTARPC/ORWU1_NEWLOC)

**MUMPS Implementation:** [IEN^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | DIFFICULT
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [44](../VDM/Hospital_Location-44)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
FROM | LITERAL | true | text to traverse from | CLInicB
DIR | NUMERIC | true | traversal direction | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}