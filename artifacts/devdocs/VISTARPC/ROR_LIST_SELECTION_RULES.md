---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST SELECTION RULES<br/>
# ROR LIST SELECTION RULES

The ROR LIST SELECTION RULES remote procedure returns a list of registry selection rules from the ROR SELECTION RULE file(#798.2) that are referenced by the SELCTION RULE multiple (3)of the ROR REGISTRY PARAMETERS file (#798.1).

## Properties

Property | Value
--- | ---
Label | SELRULES
Routine | [RORRP014](http://code.osehra.org/dox/Routine_RORRP014_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}