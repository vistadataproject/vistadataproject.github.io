---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ANRV GET PT OUTCOMES<br/>
# ANRV GET PT OUTCOMES

Returns top level IEN and sub record IEN plus statuses.

## Properties

Property | Value
--- | ---
Label | GETREC
MUMPS Implementation | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULTS | LITERAL |  | true | Results of inquiry, includes top record and sub record status and IEN.
PTDFN | LITERAL | 50 | true | Patients internal entry number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}