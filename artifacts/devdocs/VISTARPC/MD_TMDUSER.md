---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MD TMDUSER<br/>
# MD TMDUSER

Manages the VistA interface to the TMDUser object. Available options:  SIGNON     Connects session to the server and attempts signon.  ESIG       Verifies passed e-sig.  CHKVER     Verifies client version is compatible with server.

## Properties

Property | Value
--- | ---
Label | RPC
MUMPS Implementation | [MDRPCOU](http://code.osehra.org/dox/Routine_MDRPCOU_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 30 | true | See RPC description.
DATA | LITERAL | 250 | true | Required data for selected option.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}