---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV CHECK DEVICE
# GMV CHECK DEVICE

This RPC calls a KERNEL utility to return a list of printers the user may select to print output. Returns a maximum of twenty entries.

Property | Value
--- | ---
Label | CHKDEV
Routine | [GMVUTL2](http://code.osehra.org/dox/Routine_GMVUTL2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVIEN | LITERAL |  | true | The value to begin the search in the Device file (#3.5). Can be null.
GMVDIR | LITERAL | 1 | true | Direction of the search (1 &#x3D; forward, -1 &#x3D; backwards).If DIR is null, then set to 1.
GMVRMAR | LITERAL |  | true | Right margin as a single number or range (e.g, 80, 132 or &quot;80-132&quot;).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}