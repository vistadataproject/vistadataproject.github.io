---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SC BLD NOPC TM LIST
# SC BLD NOPC TM LIST

Builds a list of patients that have a primary care assignment, but nocurrent primary care team assignment.  Uses $$PTPCNTM^SCAPMC20

Property | Value
--- | ---
Label | NOPCTM
Routine | [SCMCBK1](http://code.osehra.org/dox/Routine_SCMCBK1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETER LIST | LIST | 512 | true | Pass in Team to be assigned to and effective date for search.Position to be assigned to is required for assign to position



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}