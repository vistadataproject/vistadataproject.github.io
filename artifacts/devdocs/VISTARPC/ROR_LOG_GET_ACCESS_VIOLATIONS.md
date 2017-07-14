---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LOG GET ACCESS VIOLATIONS<br/>
# ROR LOG GET ACCESS VIOLATIONS

The ROR LOG GET ACCESS VIOLATIONS remote procedure returns the list ofaccess violation events recorded in the provided time frame.

## Properties

Property | Value
--- | ---
Label | AVLIST
Routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STDT | LITERAL |  |  | The STDT parameter defines the start date for the search of the events. Bydefault (if $G(STDT)&#x27;&gt;0), the search starts from the earliest record ofthe ROR LOG file.
ENDT | LITERAL |  |  | The ENDT parameter defines the end date for the search of the events. Bydefault (if $G(ENDT)&#x27;&gt;0), the search continues to the last record of theROR LOG file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}