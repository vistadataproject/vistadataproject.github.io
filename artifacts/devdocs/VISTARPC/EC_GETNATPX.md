---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETNATPX
# EC GETNATPX

Returns an array of active, inactive or both of Event Capture national and local Procedures from file #725.

Property | Value
--- | ---
Label | ECNATPX
Routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  |  | Input variable ECARY contains the following subscripted elements   ECPX - Procedures to output, L- local, N- National, B- Both   STAT - Active or inactive EC Nat Codes          A-ctive (default), I-nactive, B-othIf not valued is passed in defaults to Local and Active.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}