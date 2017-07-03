---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG ABSJB
# MAG ABSJB

Sets queue entry to create abstract and/or copy to jukebox.

Property | Value
--- | ---
Label | ABSJB
Routine | [MAGGTU71](http://code.osehra.org/dox/Routine_MAGGTU71_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 255 | true | Pointer to image file
DATA | LITERAL | 200 | true | $P(1) IEN.  Set an Abstract Queue for the IEN.           - Abstract will be created.$p(2) IEN. Set a JukeBox Queue for the IEN.           - Image will be copied from Jukebox.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}