---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGGRPT
# MAGGRPT

Returns associated report for Image IEN.

Property | Value
--- | ---
Label | BRK
Routine | [MAGGTRPT](http://code.osehra.org/dox/Routine_MAGGTRPT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGGIEN | LITERAL | 30 | true | Internal entry number in file ^MAG(2005.
NOCHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image report will be returned even if it is animage of Questionable Integrity.This is used when deleting an Image, but the user needs to seethe report that may have been blocked otherwise.Defaults to 0 (false) 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}