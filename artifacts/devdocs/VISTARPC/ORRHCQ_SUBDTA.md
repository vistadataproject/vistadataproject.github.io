---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRHCQ SUBDTA<br/>
# ORRHCQ SUBDTA

Returns name-value pairs that represent columns for a subset of records.The list view in the GUI posts an event for which records it needs todisplay.  This call obtains the data for those records.

## Properties

Property | Value
--- | ---
Label | SUBDTA
MUMPS Implementation | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FIRST | LITERAL |  | true | The first record that has been requested by the listview control.
LAST | LITERAL |  | true | The last record number that has been requested by the listview control.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}