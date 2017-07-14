---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GET PAT REF ATTS<br/>
# MAGV GET PAT REF ATTS

Returns patient attributes given the IEN on the IMAGING PATIENT REFERENCE File (#2005.6).

## Properties

Property | Value
--- | ---
Label | GETPATA
Routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIEN | LITERAL | 128 | true | The internal entry number of the patient on the IMAGING PATIENT REFERENCE File (#2005.6).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}