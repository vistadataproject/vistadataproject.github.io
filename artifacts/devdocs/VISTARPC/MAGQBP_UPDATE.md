---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQBP UPDATE
# MAGQBP UPDATE

Nulls the appropriate magnetic network location reference.

Property | Value
--- | ---
Label | PGEUD
Routine | [MAGQBPG2](http://code.osehra.org/dox/Routine_MAGQBPG2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILENAME | LITERAL |  | true | The Image file name to be updated.
EXT | LITERAL |  | true | The image file extension to be updated.
IEN | LITERAL |  | true | Image file internal entry number to be updated.
Device | LITERAL |  | true | &#x27;NET&#x27; or &#x27;JB&#x27; to specify which Image system reference to update.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}