---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; TIU TEMPLATE ACCESS LEVEL
# TIU TEMPLATE ACCESS LEVEL

Returns Template Access level of User (0 = FULL ACCESS, 1 = READ ONLY, 2 = NO ACCESS,3 = SHARED TEMPLATES EDITOR - ACCESS PARAMETERS DO NOT APPLY

Property | Value
--- | ---
Domain | Non-Clinical: Parameters
VISTA RPC Documentation | [TIU TEMPLATE ACCESS LEVEL](../VISTARPC/TIU_TEMPLATE_ACCESS_LEVEL)
MUMPS Implementation | [TACCESS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Type | READ
Complexity | DIFFICULT
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | None
Parameters Used | [TIU PERSONAL TEMPLATE ACCESS](../Parameters/TIU_PERSONAL_TEMPLATE_ACCESS), [TIU TEMPLATE ACCESS BY CLASS](../Parameters/TIU_TEMPLATE_ACCESS_BY_CLASS)


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ROOT | NUMBER | true | the template ID number | 1
USER | NUMBER | true | a user ID | 61
LOC | NUMBER | false | the user's location | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}