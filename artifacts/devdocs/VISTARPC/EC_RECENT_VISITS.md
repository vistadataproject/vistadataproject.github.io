---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC RECENT VISITS<br/>
# EC RECENT VISITS

Returns the 20 most recent visits/appointments for a selected patientfor the selected location.

## Properties

Property | Value
--- | ---
Label | RCNTVST
MUMPS Implementation | [ECUTL1](http://code.osehra.org/dox/Routine_ECUTL1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  |  | ECARY will be sent with two delimited pieces of information.     DFN    - patient&#x27;s IEN    LOC    - (optional) IEN of the location to filter visits/appts



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}