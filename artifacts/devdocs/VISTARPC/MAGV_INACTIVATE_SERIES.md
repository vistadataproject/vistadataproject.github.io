---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV INACTIVATE SERIES<br/>
# MAGV INACTIVATE SERIES

This RPC inactivates a series entry in the IMAGE SERIES file (#2005.63).

## Properties

Property | Value
--- | ---
Label | INSERIES
MUMPS Implementation | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERIEN | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.
STUDYIEN | LITERAL |  |  | The IEN of the related study entry.
OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}