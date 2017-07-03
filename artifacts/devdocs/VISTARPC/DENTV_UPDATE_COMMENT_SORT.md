---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV UPDATE COMMENT SORT
# DENTV UPDATE COMMENT SORT

This will re-sort a providers canned comments within a category. It will return a 1^Successful or -1^Unsuccessful.

Property | Value
--- | ---
Label | UPDATE
Routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DENTV | LIST |  | true | This should be a list of &quot;CATEGORY^SORT ORDER^IEN&quot; for all of the canned comments for the provider.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}