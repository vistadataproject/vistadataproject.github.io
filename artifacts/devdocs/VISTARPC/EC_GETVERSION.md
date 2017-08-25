---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETVERSION<br/>
# EC GETVERSION

Returns the server version of a particular option.  This is used by ECS GUI to determine the current server version of the software.

## Properties

Property | Value
--- | ---
Label | VERSRV
MUMPS Implementation | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | ECARY contains the option name and client version of the software.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}