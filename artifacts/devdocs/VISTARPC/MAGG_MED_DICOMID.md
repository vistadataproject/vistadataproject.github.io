---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG MED DICOMID
# MAGG MED DICOMID

Returns an ID, generated as a temporary way to link, flouroscopicimages captured by other system to images captured on thisworkstation.They will be linked by both being saved under the same Medicine procedure.

Property | Value
--- | ---
Label | DICOMID
Routine | [MAGGTMC1](http://code.osehra.org/dox/Routine_MAGGTMC1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | DATA &#x3D; psien ^ dfn ^ mcien



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}