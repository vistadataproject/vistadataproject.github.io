---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETPXMODIFIER<br/>
# EC GETPXMODIFIER

Returns CPT modifier entries for a CPT Procedure based on procedure date.

## Properties

Property | Value
--- | ---
Label | ECPXMOD
MUMPS Implementation | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrows.  1. ECCPT - CPT code ien (file #81)  2. ECDT  - Procedure date and time (fileman format)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}