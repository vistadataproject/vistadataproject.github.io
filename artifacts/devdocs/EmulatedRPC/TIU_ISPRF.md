---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; TIU ISPRF
# TIU ISPRF

Checks if the passed in TIU document title IEN is a Patient Record Flag TITLE.

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [TIU ISPRF](../VISTARPC/TIU_ISPRF)
MUMPS Implementation | [ISPRFTTL^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
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
TIUDA | LITERAL | true | TIU document title IEN | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}