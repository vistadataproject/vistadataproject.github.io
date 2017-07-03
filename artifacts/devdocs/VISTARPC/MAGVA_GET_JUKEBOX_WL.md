---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVA GET JUKEBOX WL
# MAGVA GET JUKEBOX WL

Returns Jukebox Write Location by Station number or Institution IEN

Property | Value
--- | ---
Label | GETJBXWL
Routine | [MAGVAG03](http://code.osehra.org/dox/Routine_MAGVAG03_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;STATION NUMBER&quot;) &#x3D; STATION NUMBER field (#4,99) in INSTITUTION file (#4) or MAGPARAM(&quot;INSTITUTION IEN&quot;) &#x3D; IEN in INSTITUTION file (#4)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}