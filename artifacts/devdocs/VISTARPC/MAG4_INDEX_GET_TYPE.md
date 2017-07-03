---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 INDEX GET TYPE
# MAG4 INDEX GET TYPE

This Remote Procedure Call is used to filter out thoseimage types that belong to a given image category (Class). When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an "image class" (either an IENor the name of a class) and returns all "image types"that belong to that class..

Property | Value
--- | ---
Label | IGT
Routine | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLS | LITERAL | 160 | true | This parameter is a &#x27;,&#x27; (comma) delimited string of classes.only those index types, that match a &#x27;class&#x27; in the string willbe returned in the result array.
FLGS | LITERAL | 40 | true | ;  FLGS : An &#x27;^&#x27; delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}