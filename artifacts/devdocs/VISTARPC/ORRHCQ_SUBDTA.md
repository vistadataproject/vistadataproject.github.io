---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRHCQ SUBDTA
# ORRHCQ SUBDTA

Returns name-value pairs that represent columns for a subset of records.The list view in the GUI posts an event for which records it needs todisplay.  This call obtains the data for those records.

Property | Value
--- | ---
Label | SUBDTA
Routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FIRST | LITERAL |  | true | The first record that has been requested by the listview control.
LAST | LITERAL |  | true | The last record number that has been requested by the listview control.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}