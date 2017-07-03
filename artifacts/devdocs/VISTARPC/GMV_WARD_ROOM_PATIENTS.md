---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV WARD ROOM PATIENTS
# GMV WARD ROOM PATIENTS

Returns a list of patients in the ward and rooms specified.

Property | Value
--- | ---
Label | ROOMPT
Routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVWRD | LITERAL | 60 | true | Name of the ward (e.g., 2EAST).
GMVRLST | LITERAL | 150 | true | The room numbers of the ward separated by comma (e.g., 200,210,220).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}