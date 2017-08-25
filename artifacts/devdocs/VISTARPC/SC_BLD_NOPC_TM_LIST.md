---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC BLD NOPC TM LIST<br/>
# SC BLD NOPC TM LIST

Builds a list of patients that have a primary care assignment, but nocurrent primary care team assignment.  Uses $$PTPCNTM^SCAPMC20

## Properties

Property | Value
--- | ---
Label | NOPCTM
MUMPS Implementation | [SCMCBK1](http://code.osehra.org/dox/Routine_SCMCBK1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETER LIST | LIST | 512 | true | Pass in Team to be assigned to and effective date for search.Position to be assigned to is required for assign to position



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}