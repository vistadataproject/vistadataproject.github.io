---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET SOP DATA
# MAGV GET SOP DATA

Returns SOP attributes given the IEN on the IMAGE SOP DATAFile (#2005.64).

Property | Value
--- | ---
Label | GETSOP
Routine | [MAGVRS24](http://code.osehra.org/dox/Routine_MAGVRS24_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SOPIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE SOP INSTANCE File (#2005.64).
SERIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE SERIES File (#2005.63).
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}