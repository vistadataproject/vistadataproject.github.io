---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DDR DELETE ENTRY<br/>
# DDR DELETE ENTRY

This function deletes an entry in a FileMan file using ^DIK.

## Properties

Property | Value
--- | ---
Label | DIKC
MUMPS Implementation | [DDR1](http://code.osehra.org/dox/Routine_DDR1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call ^DIK.   &quot;ROOT&quot; global root of file or subfile   &quot;IEN&quot;  internal entry number of record to be deleted in IENS format



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}