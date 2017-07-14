---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB BAG DETAIL<br/>
# PSB BAG DETAIL

Returns a chronological detailed history on each specific IV bag that isselected.  [0] = -1^No History On File              [0] = Number of Nodes[1] = Action Date/Time^User ID^Action Status^Comments

## Properties

Property | Value
--- | ---
Label | BAGDTL
Routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBUID | LITERAL |  | true | IV unique ID number.
PSBORD | LITERAL |  | true | IPM order number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}