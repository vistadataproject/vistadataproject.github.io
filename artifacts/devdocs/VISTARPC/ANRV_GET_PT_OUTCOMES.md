---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ANRV GET PT OUTCOMES
# ANRV GET PT OUTCOMES

Returns top level IEN and sub record IEN plus statuses.

Property | Value
--- | ---
Label | GETREC
Routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULTS | LITERAL |  | true | Results of inquiry, includes top record and sub record status and IEN.
PTDFN | LITERAL | 50 | true | Patients internal entry number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}