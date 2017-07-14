---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD GLOBAL LIST<br/>
# KMPD GLOBAL LIST

Global list.

## Properties

Property | Value
--- | ---
Label | GBLLIST
Routine | [KMPDU1](http://code.osehra.org/dox/Routine_KMPDU1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 245 | true | Global to list.  This can be an entire global (^DPT) or subscript(^DPT(25,).
PARAM2 | LITERAL | 245 | true | Starting global node.  If this is a continuation of a global list, thenthis will be the starting point.  If the call is for the first time, thenthis should be set to null (&quot;&quot;).
PARAM3 | LITERAL | 245 | true | Number of lines to fill before quiting.
LINE LENGTH | LITERAL | 10 | true | Lenght of line before line-break.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}