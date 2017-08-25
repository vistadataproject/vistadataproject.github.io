---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR REPORTS AVAILABLE<br/>
# ROR REPORTS AVAILABLE

The ROR REPORTS AVAILABLE remote procedure returns a list of reports (and their parameters) available for the registry.

## Properties

Property | Value
--- | ---
Label | RPAVAIL
MUMPS Implementation | [RORRP011](http://code.osehra.org/dox/Routine_RORRP011_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).The output list will contain reports available for the registry defined bythis parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}