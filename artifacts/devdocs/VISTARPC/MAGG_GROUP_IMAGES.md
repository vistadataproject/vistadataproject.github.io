---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG GROUP IMAGES<br/>
# MAGG GROUP IMAGES

Returns array of images for an Image entry.

## Properties

Property | Value
--- | ---
Label | GROUP
Routine | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Internal entry of Image entry in Image File ^MAG(2005,
NOCHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image Group Abs will be returned even if it is anImage Group of Questionable Integrity.This is used when deleting an Image, but the user needs to seethe abstracts that may have been blocked otherwise.Defaults to 0 (false)
FLAGS | LITERAL |  | true | Supported FLAGS&quot;D&quot; - Include deleted images



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}