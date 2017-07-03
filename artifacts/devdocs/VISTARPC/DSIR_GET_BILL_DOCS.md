---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR GET BILL DOCS
# DSIR GET BILL DOCS

This RPC is used to get a list of document types and internal number of documents that were previously release under the type of patient/veteran.

Property | Value
--- | ---
Label | GETDOCS
Routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 999 | true | Patient Internal Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}