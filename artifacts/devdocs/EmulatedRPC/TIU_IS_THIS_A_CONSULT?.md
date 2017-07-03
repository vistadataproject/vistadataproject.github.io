---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; TIU IS THIS A CONSULT?
# TIU IS THIS A CONSULT?

BOOLEAN RPC which evaluates whether the title indicated is that of a consult.

Property | Value
--- | ---
Domain | Non-Clinical: Others
VISTA RPC Documentation | [TIU IS THIS A CONSULT?](../VISTARPC/TIU_IS_THIS_A_CONSULT?)
MUMPS Implementation | [ISCNSLT^TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html)
Type | READ
Complexity | MEDIUM
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [8925.1](../VDM/Tiu_Document_Definition-8925_1)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
TITLE | LITERAL | true | the record number in file 8925.1 for the title selected | 74

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}