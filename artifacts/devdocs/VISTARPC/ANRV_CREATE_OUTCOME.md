---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ANRV CREATE OUTCOME
# ANRV CREATE OUTCOME

Creates new Outcome Record.

Property | Value
--- | ---
Label | MKREC
Routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULTS | LITERAL |  | true | Results passed back to calling application
PTDFN | LITERAL | 50 | true | Patients internal entry number.
STATUS | LITERAL | 50 | true | Whether Inpatient or Outpatient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}