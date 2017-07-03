---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; TIU GET PRINT NAME
# TIU GET PRINT NAME

Returns a string containing the Print Name of the corresponding Document Definition.

Property | Value
--- | ---
Domain | Non-Clinical: Others
VISTA RPC Documentation | [TIU GET PRINT NAME](../VISTARPC/TIU_GET_PRINT_NAME)
MUMPS Implementation | [GETPNAME^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [8925.1](../VDM/Tiu_Document_Definition-8925_1)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
TIUTYPE | LITERAL | true | Pointer to TIU DOCUMENT DEFINITION FILE (#8925.1) | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}