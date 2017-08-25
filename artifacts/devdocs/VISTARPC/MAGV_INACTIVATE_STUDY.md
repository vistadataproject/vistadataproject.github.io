---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV INACTIVATE STUDY<br/>
# MAGV INACTIVATE STUDY

This RPC inactivates a study entry in the IMAGE STUDY file (#2005.62).

## Properties

Property | Value
--- | ---
Label | INSTUDY
MUMPS Implementation | [MAGVRS04](http://code.osehra.org/dox/Routine_MAGVRS04_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STUDYIEN | LITERAL |  |  | The IEN of the study entry to be inactivated.
PROCIEN | LITERAL |  |  | The IEN of the related procedure reference.
OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}