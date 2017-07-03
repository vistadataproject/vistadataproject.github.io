---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGTP PUT PREFERENCES
# MAGTP PUT PREFERENCES

Set the user's setting/configuration preferences in XML format in the configuration file (#2006.13)

Property | Value
--- | ---
Label | PUTUPREF
Routine | [MAGTP011](http://code.osehra.org/dox/Routine_MAGTP011_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENT | LIST |  | true | Input array:First Line:      DUZ^LABELFollowing Lines: One XML line of textIf DUZ is null, default to current DUZ



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}