---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETVERSION
# EC GETVERSION

Returns the server version of a particular option.  This is used by ECS GUI to determine the current server version of the software.

Property | Value
--- | ---
Label | VERSRV
Routine | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | ECARY contains the option name and client version of the software.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}