---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV UPDATE COMMENT SORT<br/>
# DENTV UPDATE COMMENT SORT

This will re-sort a providers canned comments within a category. It will return a 1^Successful or -1^Unsuccessful.

## Properties

Property | Value
--- | ---
Label | UPDATE
MUMPS Implementation | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DENTV | LIST |  | true | This should be a list of &quot;CATEGORY^SORT ORDER^IEN&quot; for all of the canned comments for the provider.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}