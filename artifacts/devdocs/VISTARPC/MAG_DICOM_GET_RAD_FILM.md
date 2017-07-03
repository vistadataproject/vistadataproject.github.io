---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM GET RAD FILM
# MAG DICOM GET RAD FILM

This RPC is used to find an entry in the FILM SIZE file (#78.4).

Property | Value
--- | ---
Label | FILM
Routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILM | LITERAL | 30 | true | This is the name of the film size to be used in the lookup process.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}