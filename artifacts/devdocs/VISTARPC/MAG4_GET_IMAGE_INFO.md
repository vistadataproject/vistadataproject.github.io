---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 GET IMAGE INFO<br/>
# MAG4 GET IMAGE INFO

Returns specific fields of an image entry, to be displayedin the image information window.

## Properties

Property | Value
--- | ---
Label | GETINFO
Routine | [MAGGTU31](http://code.osehra.org/dox/Routine_MAGGTU31_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | Image File internal entry number.
FLAGS | LITERAL |  | true | Flags that control the execution (can be combined):&quot;D&quot;  Deleted Image Information is relevant



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}