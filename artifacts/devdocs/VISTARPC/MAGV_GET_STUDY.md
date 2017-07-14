---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GET STUDY<br/>
# MAGV GET STUDY

Returns study attributes given the IEN on the IMAGE STUDYFile (#2005.62).

## Properties

Property | Value
--- | ---
Label | GETSTUDY
Routine | [MAGVRS04](http://code.osehra.org/dox/Routine_MAGVRS04_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STUDYIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE STUDYFile (#2005.62).
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.
PROCIEN | LITERAL |  |  | The internal entry number of the related procedure in the IMAGE PROCEDUREREFERENCE file (#2005.61).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}