---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET IMAGE FILE
# MAGV GET IMAGE FILE

Returns image attributes given the IEN of the IMAGE INSTANCE FILE (#2005.65).

Property | Value
--- | ---
Label | GETFILE
Routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILEIEN | LITERAL |  |  | The IEN of the IMAGE INSTANCE FILE (#2005.65) entry to be retrieved.
SOPIEN | LITERAL |  |  | The IEN of the parent IMAGE SOP INSTANCE file (#2005.64) entry.
OVERRIDE | LITERAL |  |  | If the OVERRIDE flag is set to 1 the RPC will not check the validity of thePARENT IEN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}