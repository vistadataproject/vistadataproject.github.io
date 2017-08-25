---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE FIND PROCEDURE<br/>
# SDOE FIND PROCEDURE

This Remote Procedure Call (RPC) returns a boolean indicator onwhether a specific procedure is associated with an encounter.

## Properties

Property | Value
--- | ---
Label | FINDCPT
MUMPS Implementation | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.
CPT IEN | LITERAL |  | true | This is the internal entry number of an entry in the CPT [#81 - ^ICPT] file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}