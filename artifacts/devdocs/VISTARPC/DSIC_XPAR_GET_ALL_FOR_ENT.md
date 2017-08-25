---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPAR GET ALL FOR ENT<br/>
# DSIC XPAR GET ALL FOR ENT

This will get all instances of a parameter for an entity

## Properties

Property | Value
--- | ---
Label | GET
MUMPS Implementation | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~~~~p6 p1 :&#x3D; optional - entity(s) - if not passed, set to &quot;USR&quot; for                  current user p2 :&#x3D; required - parameter name p6 :&#x3D; optional - format code determines return values       Q - internal instance, internal value       E - external instance, external value       N - external instance, internal value       B - internal &amp; external instances and values           [default value] Actually, p6 is ignored and is always set to B



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}