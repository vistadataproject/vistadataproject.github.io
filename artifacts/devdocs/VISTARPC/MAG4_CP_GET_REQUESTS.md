---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 CP GET REQUESTS
# MAG4 CP GET REQUESTS

Return a list of Clinical Procedure Requests for a Patient.

Property | Value
--- | ---
Label | LIST
Routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | DFN of Patient
PROC | LITERAL | 10 | true |  IEN from file 702.01 if just ome procedure desired, but it defaults to all.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}