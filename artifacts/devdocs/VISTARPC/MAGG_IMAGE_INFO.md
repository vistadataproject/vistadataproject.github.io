---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG IMAGE INFO
# MAGG IMAGE INFO

Returns information on 1 Image

Property | Value
--- | ---
Label | IMAGEINF
Routine | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | internal entry number in IMAGE file  ^MAG(2005,IEN
NOQACHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image information will be returned even if it is animage of Questionable Integrity.This is used when deleting an Image, but the user needs to seeinformation that may have been blocked otherwise.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}