---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU TEMPLATE GETLINK<br/>
# TIU TEMPLATE GETLINK

Returns template linked to a specific title or reason for request.

**Native RPC Documentation:** [TIU TEMPLATE GETLINK](../VISTARPC/TIU_TEMPLATE_GETLINK)

**MUMPS Implementation:** [GETLINK^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [801.41](../VDM/Reminder_Dialog-801_41), [8925.1](../VDM/Tiu_Document_Definition-8925_1), [8927](../VDM/TIU_Template-8927)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
LINK | LITERAL | true | formatted IEN of TIU Template | 258;TIU(8925.1,

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}