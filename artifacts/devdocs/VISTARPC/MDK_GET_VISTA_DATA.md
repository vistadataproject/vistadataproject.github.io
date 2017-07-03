---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MDK GET VISTA DATA
# MDK GET VISTA DATA



Property | Value
--- | ---
Label | RPC
Routine | [MDKRPC1](http://code.osehra.org/dox/Routine_MDKRPC1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 8 | true | This is the routine tag that will be called to retrieve the data.
DATA | LITERAL | 50 | true | This is whatever data is needed by the subroutine to process the request for data. In many cases it will be a single value (e.g., patient id - DFN).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}