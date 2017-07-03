---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWORB SETSORT
# ORWORB SETSORT

Sets the GUI alert sort method for the user. This is set when a user clicks on the GUI alert columns to change the display sorting.

Property | Value
--- | ---
Domain | Non-Clinical: Parameters
VISTA RPC Documentation | [ORWORB SETSORT](../VISTARPC/ORWORB_SETSORT)
MUMPS Implementation | [SETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Type | CHANGE
Complexity | LOW
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | None
Parameters Used | [ORB SORT METHOD](../Parameters/ORB_SORT_METHOD), [ORB SORT DIRECTION](../Parameters/ORB_SORT_DIRECTION)


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
SORT | LITERAL | true | Single character representing sort method. P:Patient, M:Message, U:Urgency, I:Info, L:Location, D:Date, F:Fwd By. | D
DIR | LITERAL | false | Optional single character represeting sort direction. F:Forward, R:Reverse | R

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}