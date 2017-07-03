---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XWB DEFERRED RPC
# XWB DEFERRED RPC

This is the RPC that is called to request that a RPC be run throughtaskman in the background. The first parameter is the name of the RPC to be run. The next 1-10 parameters are the ones for the RPC.

Property | Value
--- | ---
Label | EN1
Routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RPC | LITERAL | 30 | true | This parameter is the name of the RPC to be run in the background.  Thisfirst input parameter may include an optional version information aboutthe RPC, making the syntax like this: RPCname^RPCversion.  The optionalversion number will be placed in XWBAPVER when the RPC runs in thebackground.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}