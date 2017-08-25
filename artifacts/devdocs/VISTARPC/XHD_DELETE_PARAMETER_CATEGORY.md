---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XHD DELETE PARAMETER CATEGORY<br/>
# XHD DELETE PARAMETER CATEGORY

This call deletes parameter categories from the M backing store. If the second parameter, DELKIDS is passed as "1" (boolean true by M programming convention), all descendents of the category in question will also be deleted.

## Properties

Property | Value
--- | ---
Label | DELETE
MUMPS Implementation | [XHDPCAT](http://code.osehra.org/dox/Routine_XHDPCAT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PCAT | LITERAL |  | true | This is the record number (i.e., IEN) of the parameter category to be deleted.
DELKIDS | LITERAL |  | true | This boolean flag indicates whether to delete all descendents of the parameter category in question.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}