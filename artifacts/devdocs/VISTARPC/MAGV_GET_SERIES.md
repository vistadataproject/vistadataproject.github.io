---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET SERIES
# MAGV GET SERIES

Returns patient attributes given the IEN on the IMAGE SERIESFile (#2005.63).

Property | Value
--- | ---
Label | GETSER
Routine | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE SERIESFile (#2005.63).
STUDYIEN |  |  |  | The internal entry number of the related STUDY in the IMAGE STUDYfile (#2005.62).
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}