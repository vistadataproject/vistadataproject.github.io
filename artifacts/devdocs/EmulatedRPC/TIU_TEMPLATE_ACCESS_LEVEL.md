---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU TEMPLATE ACCESS LEVEL<br/>
# TIU TEMPLATE ACCESS LEVEL

Returns Template Access level of User (0 = FULL ACCESS, 1 = READ ONLY, 2 = NO ACCESS,3 = SHARED TEMPLATES EDITOR - ACCESS PARAMETERS DO NOT APPLY

**Native RPC Documentation:** [TIU TEMPLATE ACCESS LEVEL](../VISTARPC/TIU_TEMPLATE_ACCESS_LEVEL)

**MUMPS Implementation:** [TACCESS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Parameters
Class | READ
Complexity | DIFFICULT
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | None
Parameters Used | [TIU PERSONAL TEMPLATE ACCESS](../Parameters/TIU_PERSONAL_TEMPLATE_ACCESS), [TIU TEMPLATE ACCESS BY CLASS](../Parameters/TIU_TEMPLATE_ACCESS_BY_CLASS)


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ROOT | NUMBER | true | the template ID number | 1
USER | NUMBER | true | a user ID | 61
LOC | NUMBER | false | the user's location | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}