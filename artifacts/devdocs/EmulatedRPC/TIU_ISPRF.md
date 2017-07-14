---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU ISPRF<br/>
# TIU ISPRF

Checks if the passed in TIU document title IEN is a Patient Record Flag TITLE.

**Native RPC Documentation:** [TIU ISPRF](../VISTARPC/TIU_ISPRF)

**MUMPS Implementation:** [ISPRFTTL^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)

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
File Types Used | [8925.1](../VDM/Tiu_Document_Definition-8925_1)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
TIUDA | LITERAL | true | TIU document title IEN | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}