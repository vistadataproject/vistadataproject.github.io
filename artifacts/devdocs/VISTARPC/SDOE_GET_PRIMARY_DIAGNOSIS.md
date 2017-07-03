---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SDOE GET PRIMARY DIAGNOSIS
# SDOE GET PRIMARY DIAGNOSIS

This Remote Procedure Call (RPC) returns the internal entry numberof the primary diagnosis code (ICD) for an encounter. Note: For encounters before 10/1/96, this RPC will always return 0.This primary diagnosis was not retrieved nor stored by the systemfor these 'old' encounters.

Property | Value
--- | ---
Label | GETPDX
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}