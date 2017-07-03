---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV WARD LOCATION
# GMV WARD LOCATION

This procedure extracts MAS ward locations from the Ward Location file(#42). Note: No other Input Parameters besides RESULT needed.

Property | Value
--- | ---
Label | WARDLOC
Routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUMMY | LITERAL | 1 | true | When this input parameter is set to the letter &quot;P&quot;, only wards that have patients will be returned. Otherwise, all active wards will be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}