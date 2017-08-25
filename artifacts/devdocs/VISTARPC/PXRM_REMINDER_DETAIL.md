---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PXRM REMINDER DETAIL<br/>
# PXRM REMINDER DETAIL

Returns the details of a clinical reminder

## Properties

Property | Value
--- | ---
Label | REMDET
MUMPS Implementation | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2]
CLINICAL REMINDER ID | LITERAL | 16 | true | Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9]



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}