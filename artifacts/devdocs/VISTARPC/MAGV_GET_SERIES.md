---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GET SERIES<br/>
# MAGV GET SERIES

Returns patient attributes given the IEN on the IMAGE SERIESFile (#2005.63).

## Properties

Property | Value
--- | ---
Label | GETSER
MUMPS Implementation | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE SERIESFile (#2005.63).
STUDYIEN |  |  |  | The internal entry number of the related STUDY in the IMAGE STUDYfile (#2005.62).
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}