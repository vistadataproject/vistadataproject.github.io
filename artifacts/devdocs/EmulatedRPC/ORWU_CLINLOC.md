---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWU CLINLOC<br/>
# ORWU CLINLOC

Returns a list of clinics from the HOSPITAL LOCATION file (#44).

**Native RPC Documentation:** [ORWU CLINLOC](../VISTARPC/ORWU_CLINLOC)

**MUMPS Implementation:** [CLINLOC^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)

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
DIR | LITERAL | true | traversal direction | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}