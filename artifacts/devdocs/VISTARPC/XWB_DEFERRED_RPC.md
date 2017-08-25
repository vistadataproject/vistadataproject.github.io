---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB DEFERRED RPC<br/>
# XWB DEFERRED RPC

This is the RPC that is called to request that a RPC be run throughtaskman in the background. The first parameter is the name of the RPC to be run. The next 1-10 parameters are the ones for the RPC.

## Properties

Property | Value
--- | ---
Label | EN1
MUMPS Implementation | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RPC | LITERAL | 30 | true | This parameter is the name of the RPC to be run in the background.  Thisfirst input parameter may include an optional version information aboutthe RPC, making the syntax like this: RPCname^RPCversion.  The optionalversion number will be placed in XWBAPVER when the RPC runs in thebackground.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}