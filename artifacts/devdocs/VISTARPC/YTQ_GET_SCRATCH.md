---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ GET SCRATCH<br/>
# YTQ GET SCRATCH

Returns data from the scratch file for thr MHA3 Clinical reminders DLL.

## Properties

Property | Value
--- | ---
Label | GETSCR
MUMPS Implementation | [YTQPXRM8](http://code.osehra.org/dox/Routine_YTQPXRM8_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient DFN
CODE | LITERAL |  | true | Instrument Name from file 601.71
HANDLE | LITERAL |  | true | Unigue identifier of the GUI session.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}