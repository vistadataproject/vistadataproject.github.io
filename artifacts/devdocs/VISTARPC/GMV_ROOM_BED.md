---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV ROOM BED
# GMV ROOM BED

This procedure extracts room/bed information from Room-Bed file (#405.4)for a given MAS ward.

Property | Value
--- | ---
Label | ROOMBED
Routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMRWARD | LITERAL | 30 | true | GMRWARD is a MAS ward name from the Ward Location file (#42).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}