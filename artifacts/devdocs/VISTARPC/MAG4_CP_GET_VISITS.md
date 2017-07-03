---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 CP GET VISITS
# MAG4 CP GET VISITS

 This RPC call simply call a CP Routine that lists visits for a patient. Imaging prompts the user with this list when a Visit String is needed by CP to create a Note.

Property | Value
--- | ---
Label | VISITS
Routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | DFN of Patient
MAGCONS | LITERAL | 30 | true |  Consult Number, returned in the Query to get patient CP Requests.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}