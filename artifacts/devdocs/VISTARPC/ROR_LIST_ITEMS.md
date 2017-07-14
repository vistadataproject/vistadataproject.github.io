---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST ITEMS<br/>
# ROR LIST ITEMS

The ROR LIST ITEMS remote procedure returns a list of registry-specific items from the ROR LIST ITEM file.

## Properties

Property | Value
--- | ---
Label | LSTITEMS
Routine | [RORRP012](http://code.osehra.org/dox/Routine_RORRP012_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
TYPE | LITERAL |  | true | The TYPE parameter defines type of the items that should be extracted:   3  Lab Groups  4  Drug Groups See description of the TYPE field (.02) of the ROR LIST ITEM file (#799.1)for more details.for more details.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}