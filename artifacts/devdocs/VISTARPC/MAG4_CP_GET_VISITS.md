---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 CP GET VISITS<br/>
# MAG4 CP GET VISITS

 This RPC call simply call a CP Routine that lists visits for a patient. Imaging prompts the user with this list when a Visit String is needed by CP to create a Note.

## Properties

Property | Value
--- | ---
Label | VISITS
MUMPS Implementation | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | DFN of Patient
MAGCONS | LITERAL | 30 | true |  Consult Number, returned in the Query to get patient CP Requests.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}