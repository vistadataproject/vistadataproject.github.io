---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB CLINICLIST<br/>
# PSB CLINICLIST

Returns Active Clinic names based on Search criteria.

## Properties

Property | Value
--- | ---
Label | GETLIST
MUMPS Implementation | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PREFIX | LITERAL | 30 | true | First search criteria, which is used to find clinic names that begin with these characters to create a subset list.
CONTAINS | LITERAL | 30 | true | Second search criteria, if populated, then this search text is used to search the previously created Subset list, for if Contains this text. Then this final list is sent back to the BCMA GUI Client.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}