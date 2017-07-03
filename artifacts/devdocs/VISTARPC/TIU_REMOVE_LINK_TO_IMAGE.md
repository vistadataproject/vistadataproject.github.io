---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU REMOVE LINK TO IMAGE
# TIU REMOVE LINK TO IMAGE

This RPC will remove a link between a document and an image. Only valid links may be removed.

Property | Value
--- | ---
Label | DELIMAGE
Routine | [TIUSRVPL](http://code.osehra.org/dox/Routine_TIUSRVPL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in the TIU DOCUMENT FILE(#8925).
IMGDA | LITERAL |  | true | This is the record number (IEN) of the document in the IMAGE FILE (#2005).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}