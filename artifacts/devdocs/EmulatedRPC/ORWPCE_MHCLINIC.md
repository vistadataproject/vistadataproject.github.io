---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWPCE MHCLINIC
# ORWPCE MHCLINIC

Returns 1 if clinic is a mental health clinic requiring GAF, 0 if not.

Property | Value
--- | ---
Domain | Non-Clinical: Others
VISTA RPC Documentation | [ORWPCE MHCLINIC](../VISTARPC/ORWPCE_MHCLINIC)
MUMPS Implementation | [MHCLINIC^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Type | READ
Complexity | EASY
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [40.7](../VDM/Clinic_Stop-40_7)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORIEN | LITERAL | true | Clinic IEN | 3

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}