---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 POST PROCESSING
# MAG4 POST PROCESSING

This is call to perform any post processing action required on a newly saved image of this type.  post processing (for now) isdetermined by the MAG DESCRIPTIVE CAGETORIES file.  If this imagepoints to an entry in that file that has Action turned ON, thenthe TAG^ROUTINE will be called with the Image IEN.

Property | Value
--- | ---
Label | ACTION
Routine | [MAGGSPP](http://code.osehra.org/dox/Routine_MAGGSPP_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Internal entry number in the Image File (^MAG(2005))



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}