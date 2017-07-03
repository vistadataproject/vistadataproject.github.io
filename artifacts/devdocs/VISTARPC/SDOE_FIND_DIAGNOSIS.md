---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SDOE FIND DIAGNOSIS
# SDOE FIND DIAGNOSIS

This Remote Procedure Call (RPC) returns a boolean indicator onwhether a specific diagnosis is associated with an encounter.

Property | Value
--- | ---
Label | FINDDX
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.
DIAGNOSIS IEN | LITERAL |  | true | This is the internal entry number of an entry in the ICDDIAGNOSIS (#80) file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}