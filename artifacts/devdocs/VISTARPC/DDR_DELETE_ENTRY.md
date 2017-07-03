---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DDR DELETE ENTRY
# DDR DELETE ENTRY

This function deletes an entry in a FileMan file using ^DIK.

Property | Value
--- | ---
Label | DIKC
Routine | [DDR1](http://code.osehra.org/dox/Routine_DDR1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call ^DIK.   &quot;ROOT&quot; global root of file or subfile   &quot;IEN&quot;  internal entry number of record to be deleted in IENS format



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}