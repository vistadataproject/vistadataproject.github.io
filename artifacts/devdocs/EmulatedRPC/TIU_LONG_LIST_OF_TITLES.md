---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU LONG LIST OF TITLES<br/>
# TIU LONG LIST OF TITLES

This RPC serves data to longlist of selectable TITLES by CLASS(e.g:Pass PROGRESS NOTES class will return active Progress Notes titleswhich the current user is authorized to enter notes under.

**Native RPC Documentation:** [TIU LONG LIST OF TITLES](../VISTARPC/TIU_LONG_LIST_OF_TITLES)

**MUMPS Implementation:** [LONGLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)

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
File Types Used | [8925.1](../VDM/Tiu_Document_Definition-8925_1), [8930.1](../VDM/Usr_Authorization_subscription-8930_1)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
CLASS | LITERAL | false | PTR to class in 8925.1 | 3
FROM | LITERAL | false | Start order function ($O) from this position (does not seem to work | 2
DIR | LITERAL | false | Order direction | 1
IDNOTE | LITERAL | false | flag to indicate selection for ID Entry | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}