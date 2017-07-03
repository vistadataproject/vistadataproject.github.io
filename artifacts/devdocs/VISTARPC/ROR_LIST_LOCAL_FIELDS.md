---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST LOCAL FIELDS
# ROR LIST LOCAL FIELDS

The ROR LIST LOCAL FIELDS remote procedure returns a list ofregistry-specific field definitions from the ROR LOCAL FIELD file(#799.53).

Property | Value
--- | ---
Label | LFLIST
Routine | [RORRP040](http://code.osehra.org/dox/Routine_RORRP040_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   I  Include inactive field definitions
LOCK | LITERAL |  |  | Lock the local fields before loading the data and leave them locked.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}