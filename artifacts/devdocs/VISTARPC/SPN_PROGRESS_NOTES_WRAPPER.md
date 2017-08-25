---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN PROGRESS NOTES WRAPPER<br/>
# SPN PROGRESS NOTES WRAPPER

Submits progress note to VistA and returns a confirmation or error message, if problem occurred.

## Properties

Property | Value
--- | ---
Label | COL
MUMPS Implementation | [SPNJRPPN](http://code.osehra.org/dox/Routine_SPNJRPPN_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | DFN/Internal Number of Patient
TITLE | LITERAL |  |  | TIU Document Definition
VDT | LITERAL |  |  | Time/Date of Visit (Not used, leave blank)
VLOC | LITERAL |  |  | Visit Location (Not used, leave blank)
VSIT | LITERAL |  |  | Visit file number (Not used, leave blank)
TIUX | LIST |  |  | Array containing field data and body document
VSTR | LITERAL |  |  | Visit string (VLOC;VDT;VTYPE)
SUPPRESS | LITERAL |  |  | Suppress execution of Commit Action? (Not used, leave blank)
NOASF | LITERAL |  |  | Set Asave Cross-reference? (Not used, leave blank)
DUZ | LITERAL |  |  | Internal ID of employee entering Progress Note
SPNSIG | LITERAL |  |  | Electronic Signature Code of employee



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}