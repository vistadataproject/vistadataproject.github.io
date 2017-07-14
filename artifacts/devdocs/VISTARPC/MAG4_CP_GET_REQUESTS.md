---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 CP GET REQUESTS<br/>
# MAG4 CP GET REQUESTS

Return a list of Clinical Procedure Requests for a Patient.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | DFN of Patient
PROC | LITERAL | 10 | true |  IEN from file 702.01 if just ome procedure desired, but it defaults to all.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}