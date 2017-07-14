---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ANRV FULLSSN<br/>
# ANRV FULLSSN

Given an SSN in the format 999999999(P), return a list of matching patients.patients.

## Properties

Property | Value
--- | ---
Label | FULLSSN
Routine | [ANRVOA](http://code.osehra.org/dox/Routine_ANRVOA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 15 | true | SSN in the format 999999999(P)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}