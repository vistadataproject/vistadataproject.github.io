---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ANRV GET OUTCOME TEXT
# ANRV GET OUTCOME TEXT

Returns subrecord text.

Property | Value
--- | ---
Label | GETTXT
Routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULTS | LITERAL |  | true | Subrecord text.
SUBREC | LITERAL | 50 | true | Subrecord IEN that is going to be returned.
TOPREC | LITERAL | 50 | true | Top record of the sub record to return.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}