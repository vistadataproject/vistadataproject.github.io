---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG GROUP IMAGES
# MAGG GROUP IMAGES

Returns array of images for an Image entry.

Property | Value
--- | ---
Label | GROUP
Routine | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Internal entry of Image entry in Image File ^MAG(2005,
NOCHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image Group Abs will be returned even if it is anImage Group of Questionable Integrity.This is used when deleting an Image, but the user needs to seethe abstracts that may have been blocked otherwise.Defaults to 0 (false)
FLAGS | LITERAL |  | true | Supported FLAGS&quot;D&quot; - Include deleted images



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}