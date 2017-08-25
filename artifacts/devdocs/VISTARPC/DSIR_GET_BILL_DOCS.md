---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET BILL DOCS<br/>
# DSIR GET BILL DOCS

This RPC is used to get a list of document types and internal number of documents that were previously release under the type of patient/veteran.

## Properties

Property | Value
--- | ---
Label | GETDOCS
MUMPS Implementation | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 999 | true | Patient Internal Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}