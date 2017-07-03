---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MD TMDUSER
# MD TMDUSER

Manages the VistA interface to the TMDUser object. Available options:  SIGNON     Connects session to the server and attempts signon.  ESIG       Verifies passed e-sig.  CHKVER     Verifies client version is compatible with server.

Property | Value
--- | ---
Label | RPC
Routine | [MDRPCOU](http://code.osehra.org/dox/Routine_MDRPCOU_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 30 | true | See RPC description.
DATA | LITERAL | 250 | true | Required data for selected option.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}