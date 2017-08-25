---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS DELETE WITNESS<br/>
# OOPS DELETE WITNESS

This broker call will delete witness information from the "CA1W" node in file 2260 based on the IEN and sub file id passed in.

## Properties

Property | Value
--- | ---
Label | DELWITN
MUMPS Implementation | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL |  | true | This required input parameter must contain the IEN and record number of thesubfile for witness information to be deleted. The input format is IEN^SUB.
OOPS CHANGE CAS |  |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}