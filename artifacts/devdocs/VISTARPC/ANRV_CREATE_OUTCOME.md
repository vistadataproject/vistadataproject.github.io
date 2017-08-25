---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ANRV CREATE OUTCOME<br/>
# ANRV CREATE OUTCOME

Creates new Outcome Record.

## Properties

Property | Value
--- | ---
Label | MKREC
MUMPS Implementation | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULTS | LITERAL |  | true | Results passed back to calling application
PTDFN | LITERAL | 50 | true | Patients internal entry number.
STATUS | LITERAL | 50 | true | Whether Inpatient or Outpatient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}