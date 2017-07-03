---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; TIU TEMPLATE GETLINK
# TIU TEMPLATE GETLINK

Returns template linked to a specific title or reason for request.

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [TIU TEMPLATE GETLINK](../VISTARPC/TIU_TEMPLATE_GETLINK)
MUMPS Implementation | [GETLINK^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [801.41](../VDM/Reminder_Dialog-801_41), [8925.1](../VDM/Tiu_Document_Definition-8925_1), [8927](../VDM/TIU_Template-8927)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
LINK | LITERAL | true | formatted IEN of TIU Template | 258;TIU(8925.1,

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}