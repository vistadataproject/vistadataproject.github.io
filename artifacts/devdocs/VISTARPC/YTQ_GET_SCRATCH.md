---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTQ GET SCRATCH
# YTQ GET SCRATCH

Returns data from the scratch file for thr MHA3 Clinical reminders DLL.

Property | Value
--- | ---
Label | GETSCR
Routine | [YTQPXRM8](http://code.osehra.org/dox/Routine_YTQPXRM8_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient DFN
CODE | LITERAL |  | true | Instrument Name from file 601.71
HANDLE | LITERAL |  | true | Unigue identifier of the GUI session.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}